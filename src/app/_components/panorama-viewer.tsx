"use client";

import { useEffect, useRef, useState } from "react";
import { Viewer } from "@photo-sphere-viewer/core";
import { CubemapAdapter } from "@photo-sphere-viewer/cubemap-adapter";
import {
  MarkersPlugin,
  type MarkerConfig,
} from "@photo-sphere-viewer/markers-plugin";
import "@photo-sphere-viewer/core/index.css";
import "@photo-sphere-viewer/markers-plugin/index.css";

export interface PanoramaHotspot {
  id: string;
  yaw: number;
  pitch: number;
  label?: string | null;
  toRoomId: string;
}

export type PanoramaSource =
  | { type: "equirectangular"; path: string }
  | { type: "cubemap"; paths: [string, string, string, string, string, string] };

interface Props {
  source: PanoramaSource;
  hotspots: PanoramaHotspot[];
  onHotspotClick?: (hotspotId: string) => void;
  onPanoramaClick?: (yaw: number, pitch: number) => void;
  initialYaw?: number;
  initialPitch?: number;
  className?: string;
}

function toPSVPanorama(source: PanoramaSource) {
  if (source.type === "equirectangular") return source.path;
  // Matterport face order: 0=front, 1=right, 2=back, 3=left, 4=up, 5=down.
  const [front, right, back, left, top, bottom] = source.paths;
  return { left, right, top, bottom, front, back };
}

function panoramaKey(source: PanoramaSource): string {
  return source.type === "equirectangular"
    ? `eq:${source.path}`
    : `cm:${source.paths.join("|")}`;
}

// Force a clean remount of the PSV viewer whenever the panorama source
// identity changes. This avoids a class of issues with setPanorama hanging
// when switching between cubemaps or between adapter types.
export function PanoramaViewer(props: Props) {
  return <ViewerInstance key={panoramaKey(props.source)} {...props} />;
}

function ViewerInstance({
  source,
  hotspots,
  onHotspotClick,
  onPanoramaClick,
  initialYaw,
  initialPitch,
  className,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<Viewer | null>(null);
  const onHotspotClickRef = useRef(onHotspotClick);
  const onPanoramaClickRef = useRef(onPanoramaClick);
  const [error, setError] = useState<string | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    onHotspotClickRef.current = onHotspotClick;
    onPanoramaClickRef.current = onPanoramaClick;
  }, [onHotspotClick, onPanoramaClick]);

  useEffect(() => {
    if (!containerRef.current) return;
    const psvPanorama = toPSVPanorama(source);
    console.log("[PSV] init", { type: source.type, panorama: psvPanorama });

    let viewer: Viewer;
    try {
      viewer = new Viewer({
        container: containerRef.current,
        panorama: psvPanorama,
        adapter: source.type === "cubemap" ? CubemapAdapter : undefined,
        defaultYaw: initialYaw ?? 0,
        defaultPitch: initialPitch ?? 0,
        navbar: ["zoom", "move", "fullscreen"],
        plugins: [[MarkersPlugin, {}]],
      });
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error("[PSV] init failed", err);
      setError(`Viewer init failed: ${msg}`);
      return;
    }
    viewerRef.current = viewer;

    viewer.addEventListener("ready", () => {
      console.log("[PSV] ready");
      setReady(true);
    });
    viewer.addEventListener("panorama-loaded", () => {
      console.log("[PSV] panorama-loaded");
      setReady(true);
    });
    viewer.addEventListener("click", (e) => {
      const cb = onPanoramaClickRef.current;
      if (cb) cb(e.data.yaw, e.data.pitch);
    });

    const markers = viewer.getPlugin<MarkersPlugin>(MarkersPlugin);
    markers?.addEventListener("select-marker", ({ marker }) => {
      const cb = onHotspotClickRef.current;
      if (cb) cb(marker.id);
    });

    return () => {
      viewer.destroy();
      viewerRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const v = viewerRef.current;
    if (!v) return;
    const markers = v.getPlugin<MarkersPlugin>(MarkersPlugin);
    if (!markers) return;

    const configs: MarkerConfig[] = hotspots.map((h) => ({
      id: h.id,
      position: { yaw: h.yaw, pitch: h.pitch },
      tooltip: h.label ?? "Go →",
      html: `<div style="display:flex;align-items:center;justify-content:center;width:48px;height:48px;border-radius:9999px;background:rgba(37,99,235,0.85);color:white;font-size:22px;border:2px solid white;box-shadow:0 2px 8px rgba(0,0,0,0.4);cursor:pointer;">→</div>`,
      anchor: "center center",
    }));
    markers.setMarkers(configs);
  }, [hotspots]);

  return (
    <div className={`relative ${className ?? "h-full w-full"}`}>
      <div ref={containerRef} className="h-full w-full" />
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-red-900/90 p-4 text-sm text-white">
          {error}
        </div>
      )}
      {!ready && !error && (
        <div className="pointer-events-none absolute right-2 top-2 rounded bg-black/60 px-2 py-1 text-xs text-white">
          loading panorama…
        </div>
      )}
    </div>
  );
}

export function buildSource(room: {
  panoramaPath: string | null;
  cubemapPaths: string | null;
}): PanoramaSource | null {
  if (room.cubemapPaths) {
    try {
      const arr = JSON.parse(room.cubemapPaths) as unknown;
      if (Array.isArray(arr) && arr.length === 6 && arr.every((s) => typeof s === "string")) {
        return { type: "cubemap", paths: arr as [string, string, string, string, string, string] };
      }
    } catch {
      /* fall through */
    }
  }
  if (room.panoramaPath) {
    return { type: "equirectangular", path: room.panoramaPath };
  }
  return null;
}
