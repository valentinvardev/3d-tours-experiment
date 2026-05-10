"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { api } from "~/trpc/react";
import {
  PanoramaViewer,
  buildSource,
  type PanoramaHotspot,
} from "~/app/_components/panorama-viewer";

export default function HomePage() {
  const floors = api.floor.list.useQuery();
  const [currentRoomId, setCurrentRoomId] = useState<string | null>(null);

  const allRooms = useMemo(
    () =>
      floors.data?.flatMap((f) =>
        f.rooms.map((r) => ({ ...r, floor: f })),
      ) ?? [],
    [floors.data],
  );

  const playable = useMemo(
    () => allRooms.filter((r) => r.panoramaPath || r.cubemapPaths),
    [allRooms],
  );

  useEffect(() => {
    if (currentRoomId || playable.length === 0) return;
    const start = playable.find((r) => r.isStart) ?? playable[0]!;
    setCurrentRoomId(start.id);
  }, [playable, currentRoomId]);

  const currentRoom = api.room.byId.useQuery(
    { id: currentRoomId ?? "" },
    { enabled: !!currentRoomId },
  );

  const hotspots: PanoramaHotspot[] = useMemo(
    () =>
      currentRoom.data?.hotspotsFrom.map((h) => ({
        id: h.id,
        yaw: h.yaw,
        pitch: h.pitch,
        label: h.label ?? h.toRoom.name,
        toRoomId: h.toRoomId,
      })) ?? [],
    [currentRoom.data],
  );

  if (floors.isLoading)
    return <main className="p-6">Loading tour…</main>;

  if (playable.length === 0) {
    return (
      <main className="mx-auto max-w-xl space-y-3 p-6">
        <h1 className="text-2xl font-bold">No tour yet</h1>
        <p className="text-neutral-400">
          Head to the{" "}
          <Link href="/admin" className="text-blue-400 hover:underline">
            admin panel
          </Link>{" "}
          to add rooms or import a Matterport zip.
        </p>
      </main>
    );
  }

  if (!currentRoom.data) {
    return <main className="p-6">Loading room…</main>;
  }

  const r = currentRoom.data;
  const source = buildSource(r);
  if (!source) {
    return <main className="p-6">This room has no panorama yet.</main>;
  }
  const floor = floors.data?.find((f) => f.id === r.floorId);
  const floorRooms = floor?.rooms ?? [];

  return (
    <main className="relative h-[calc(100vh-3.25rem)] w-full">
      <PanoramaViewer
        source={source}
        hotspots={hotspots}
        initialYaw={r.defaultYaw ?? 0}
        initialPitch={r.defaultPitch ?? 0}
        onHotspotClick={(hid) => {
          const hot = r.hotspotsFrom.find((h) => h.id === hid);
          if (hot) setCurrentRoomId(hot.toRoomId);
        }}
      />

      <div className="pointer-events-none absolute left-4 top-4 rounded bg-black/60 px-3 py-2 text-sm">
        <div className="text-xs text-neutral-400">{r.floor.name}</div>
        <div className="font-semibold">{r.name}</div>
      </div>

      <div className="absolute right-4 top-4 max-w-xs rounded bg-black/60 p-3 text-sm">
        <div className="mb-1 text-xs uppercase text-neutral-400">
          Rooms on this floor
        </div>
        <ul className="space-y-1">
          {floorRooms.map((room) => {
            const playableHere = !!(room.panoramaPath || room.cubemapPaths);
            return (
              <li key={room.id}>
                <button
                  onClick={() => setCurrentRoomId(room.id)}
                  disabled={!playableHere}
                  className={`text-left ${
                    room.id === r.id
                      ? "font-bold text-blue-300"
                      : playableHere
                        ? "hover:underline"
                        : "text-neutral-600"
                  }`}
                >
                  {room.name}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <FloorBoxesMini
        rooms={floorRooms}
        currentRoomId={r.id}
        onPick={(id) => setCurrentRoomId(id)}
      />
    </main>
  );
}

function FloorBoxesMini({
  rooms,
  currentRoomId,
  onPick,
}: {
  rooms: {
    id: string;
    name: string;
    boxX: number | null;
    boxY: number | null;
    boxWidth: number | null;
    boxHeight: number | null;
    panoramaPath: string | null;
    cubemapPaths: string | null;
  }[];
  currentRoomId: string;
  onPick: (id: string) => void;
}) {
  const placed = rooms.filter((r) => r.boxX != null);
  if (placed.length === 0) return null;

  return (
    <div className="absolute bottom-4 left-4 w-72 rounded border border-neutral-700 bg-black/70 p-2">
      <div className="mb-1 px-1 text-xs uppercase text-neutral-400">Floor</div>
      <div className="relative w-full" style={{ aspectRatio: "4 / 3" }}>
        {placed.map((r) => {
          const playable = !!(r.panoramaPath || r.cubemapPaths);
          const active = r.id === currentRoomId;
          return (
            <button
              key={r.id}
              onClick={() => playable && onPick(r.id)}
              disabled={!playable}
              title={r.name}
              className={`absolute flex items-center justify-center overflow-hidden rounded border-2 text-[10px] ${
                active
                  ? "border-yellow-300 bg-yellow-500/40 text-white"
                  : playable
                    ? "border-blue-400 bg-blue-600/40 text-white hover:bg-blue-500/60"
                    : "border-neutral-600 bg-neutral-800/50 text-neutral-400"
              }`}
              style={{
                left: `${(r.boxX ?? 0) * 100}%`,
                top: `${(r.boxY ?? 0) * 100}%`,
                width: `${(r.boxWidth ?? 0.18) * 100}%`,
                height: `${(r.boxHeight ?? 0.18) * 100}%`,
              }}
            >
              {r.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
