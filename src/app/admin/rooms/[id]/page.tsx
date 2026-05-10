"use client";

import Link from "next/link";
import { use, useMemo, useState } from "react";
import { api } from "~/trpc/react";
import {
  PanoramaViewer,
  buildSource,
  type PanoramaHotspot,
} from "~/app/_components/panorama-viewer";
import { UploadInput } from "~/app/_components/upload-input";

export default function RoomEditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const utils = api.useUtils();

  const room = api.room.byId.useQuery({ id });
  const allFloors = api.floor.list.useQuery();
  const updateRoom = api.room.update.useMutation({
    onSuccess: () => utils.room.byId.invalidate({ id }),
  });
  const createHotspot = api.hotspot.create.useMutation({
    onSuccess: () => utils.room.byId.invalidate({ id }),
  });
  const deleteHotspot = api.hotspot.delete.useMutation({
    onSuccess: () => utils.room.byId.invalidate({ id }),
  });
  const [renaming, setRenaming] = useState(false);
  const [renameValue, setRenameValue] = useState("");

  const [pendingClick, setPendingClick] = useState<{
    yaw: number;
    pitch: number;
  } | null>(null);
  const [targetRoomId, setTargetRoomId] = useState("");
  const [hotspotLabel, setHotspotLabel] = useState("");

  const hotspots: PanoramaHotspot[] = useMemo(
    () =>
      room.data?.hotspotsFrom.map((h) => ({
        id: h.id,
        yaw: h.yaw,
        pitch: h.pitch,
        label: h.label ?? h.toRoom.name,
        toRoomId: h.toRoomId,
      })) ?? [],
    [room.data],
  );

  const otherRooms = useMemo(
    () =>
      allFloors.data?.flatMap((f) =>
        f.rooms
          .filter((r) => r.id !== id)
          .map((r) => ({ id: r.id, label: `${f.name} – ${r.name}` })),
      ) ?? [],
    [allFloors.data, id],
  );

  if (room.isLoading) return <p className="p-6">Loading…</p>;
  if (!room.data) return <p className="p-6">Room not found.</p>;
  const r = room.data;
  const source = buildSource(r);

  return (
    <main className="mx-auto max-w-6xl space-y-4 p-6">
      <Link
        href={`/admin/floors/${r.floorId}`}
        className="text-sm text-neutral-400 hover:underline"
      >
        ← Back to {r.floor.name}
      </Link>

      <header className="flex items-center justify-between">
        {renaming ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!renameValue.trim()) return;
              updateRoom.mutate(
                { id, name: renameValue.trim() },
                { onSuccess: () => setRenaming(false) },
              );
            }}
            className="flex gap-2"
          >
            <input
              autoFocus
              value={renameValue}
              onChange={(e) => setRenameValue(e.target.value)}
              className="rounded border border-neutral-700 bg-neutral-900 px-3 py-1.5"
            />
            <button className="rounded bg-blue-600 px-3 py-1.5 text-sm">
              Save
            </button>
            <button
              type="button"
              onClick={() => setRenaming(false)}
              className="rounded bg-neutral-800 px-3 py-1.5 text-sm"
            >
              Cancel
            </button>
          </form>
        ) : (
          <h1
            className="cursor-pointer text-2xl font-bold"
            title="click to rename"
            onClick={() => {
              setRenameValue(r.name);
              setRenaming(true);
            }}
          >
            {r.name}
          </h1>
        )}
        <UploadInput
          kind="panorama"
          label={r.panoramaPath ? "Replace 360° photo" : "Upload 360° photo"}
          onUploaded={(path) =>
            updateRoom.mutate({ id, panoramaPath: path, cubemapPaths: null })
          }
        />
      </header>

      {!source ? (
        <p className="rounded border border-yellow-700 bg-yellow-900/20 p-3 text-sm text-yellow-200">
          Upload an equirectangular 360° image, or import a Matterport capture
          from the admin home, to start placing hotspots.
        </p>
      ) : (
        <>
          <div className="h-[70vh] overflow-hidden rounded border border-neutral-700">
            <PanoramaViewer
              source={source}
              hotspots={hotspots}
              initialYaw={r.defaultYaw ?? 0}
              initialPitch={r.defaultPitch ?? 0}
              onPanoramaClick={(yaw, pitch) =>
                setPendingClick({ yaw, pitch })
              }
              onHotspotClick={(hid) => {
                if (confirm("Delete this hotspot?")) {
                  deleteHotspot.mutate({ id: hid });
                }
              }}
            />
          </div>
          <p className="text-xs text-neutral-400">
            Click anywhere in the 360° view to start adding a hotspot. Click an
            existing hotspot to delete it.
          </p>

          {pendingClick && (
            <div className="space-y-2 rounded border border-blue-700 bg-blue-950/40 p-3">
              <p className="text-sm">
                New hotspot at yaw {pendingClick.yaw.toFixed(2)}, pitch{" "}
                {pendingClick.pitch.toFixed(2)}
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <select
                  value={targetRoomId}
                  onChange={(e) => setTargetRoomId(e.target.value)}
                  className="rounded border border-neutral-700 bg-neutral-900 px-2 py-1.5 text-sm"
                >
                  <option value="">— select target room —</option>
                  {otherRooms.map((o) => (
                    <option key={o.id} value={o.id}>
                      {o.label}
                    </option>
                  ))}
                </select>
                <input
                  value={hotspotLabel}
                  onChange={(e) => setHotspotLabel(e.target.value)}
                  placeholder="Label (optional)"
                  className="rounded border border-neutral-700 bg-neutral-900 px-2 py-1.5 text-sm"
                />
                <button
                  disabled={!targetRoomId}
                  onClick={() => {
                    createHotspot.mutate(
                      {
                        fromRoomId: id,
                        toRoomId: targetRoomId,
                        yaw: pendingClick.yaw,
                        pitch: pendingClick.pitch,
                        label: hotspotLabel || undefined,
                      },
                      {
                        onSuccess: () => {
                          setPendingClick(null);
                          setTargetRoomId("");
                          setHotspotLabel("");
                        },
                      },
                    );
                  }}
                  className="rounded bg-blue-600 px-3 py-1.5 text-sm hover:bg-blue-500 disabled:opacity-50"
                >
                  Add hotspot
                </button>
                <button
                  onClick={() => setPendingClick(null)}
                  className="rounded bg-neutral-800 px-3 py-1.5 text-sm hover:bg-neutral-700"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          <section>
            <h2 className="mb-2 text-lg font-semibold">Hotspots in this room</h2>
            <ul className="space-y-1">
              {r.hotspotsFrom.length === 0 && (
                <li className="text-sm text-neutral-500">None yet.</li>
              )}
              {r.hotspotsFrom.map((h) => (
                <li
                  key={h.id}
                  className="flex items-center justify-between rounded border border-neutral-800 bg-neutral-900/60 px-3 py-2 text-sm"
                >
                  <span>
                    → {h.toRoom.name}
                    {h.label && (
                      <span className="ml-2 text-neutral-500">
                        ({h.label})
                      </span>
                    )}
                  </span>
                  <button
                    onClick={() => deleteHotspot.mutate({ id: h.id })}
                    className="text-xs text-red-400 hover:underline"
                  >
                    delete
                  </button>
                </li>
              ))}
            </ul>
          </section>
        </>
      )}
    </main>
  );
}
