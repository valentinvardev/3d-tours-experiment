"use client";

import Link from "next/link";
import { useState } from "react";
import { api } from "~/trpc/react";

export default function AdminPage() {
  const utils = api.useUtils();
  const [importing, setImporting] = useState(false);
  const [importError, setImportError] = useState<string | null>(null);
  const [importInfo, setImportInfo] = useState<string | null>(null);
  const floors = api.floor.list.useQuery();
  const createFloor = api.floor.create.useMutation({
    onSuccess: () => utils.floor.list.invalidate(),
  });
  const deleteFloor = api.floor.delete.useMutation({
    onSuccess: () => utils.floor.list.invalidate(),
  });
  const createRoom = api.room.create.useMutation({
    onSuccess: () => utils.floor.list.invalidate(),
  });
  const setStart = api.room.setStart.useMutation({
    onSuccess: () => utils.floor.list.invalidate(),
  });

  const [newFloor, setNewFloor] = useState("");

  return (
    <main className="mx-auto max-w-4xl space-y-8 p-6">
      <section>
        <h1 className="mb-4 text-2xl font-bold">Manage tour</h1>

        <div className="mb-4 rounded border border-neutral-800 bg-neutral-900/50 p-3">
          <h2 className="mb-2 text-sm font-semibold">Try the demo</h2>
          <button
            onClick={async () => {
              setImporting(true);
              setImportError(null);
              setImportInfo(null);
              try {
                const r = await fetch("/api/seed-demo", { method: "POST" });
                if (!r.ok)
                  throw new Error(
                    ((await r.json()) as { error?: string }).error ??
                      "Seed failed",
                  );
                const data = (await r.json()) as {
                  floorName: string;
                  rooms: Array<{ name: string }>;
                };
                setImportInfo(
                  `Created "${data.floorName}" with ${data.rooms.length} rooms and hotspots wired up. Visit /.`,
                );
                await utils.floor.list.invalidate();
              } catch (err) {
                setImportError(
                  err instanceof Error ? err.message : "Seed failed",
                );
              } finally {
                setImporting(false);
              }
            }}
            disabled={importing}
            className="rounded bg-emerald-600 px-3 py-2 text-sm text-white hover:bg-emerald-500 disabled:opacity-50"
          >
            Create demo floor
          </button>
          <p className="mt-2 text-xs text-neutral-500">
            Spawns a 6-room floor using placeholder panoramas with hotspots
            already linking the rooms — useful while you decide on a real 360°
            camera.
          </p>
        </div>

        <div className="mb-4 rounded border border-neutral-800 bg-neutral-900/50 p-3">
          <h2 className="mb-2 text-sm font-semibold">
            Import Matterport Capture zip
          </h2>
          <label className="inline-flex cursor-pointer items-center gap-2 rounded bg-purple-700 px-3 py-2 text-sm text-white hover:bg-purple-600 disabled:opacity-50">
            {importing ? "Importing…" : "Choose .zip"}
            <input
              type="file"
              accept=".zip,application/zip"
              className="hidden"
              disabled={importing}
              onChange={async (e) => {
                const f = e.target.files?.[0];
                if (!f) return;
                setImporting(true);
                setImportError(null);
                setImportInfo(null);
                try {
                  const fd = new FormData();
                  fd.append("file", f);
                  fd.append("floorName", "Floor 1");
                  const r = await fetch("/api/import-matterport", {
                    method: "POST",
                    body: fd,
                  });
                  if (!r.ok)
                    throw new Error(((await r.json()) as { error?: string }).error ?? "Import failed");
                  const data = (await r.json()) as {
                    floorName: string;
                    rooms: Array<{ name: string }>;
                  };
                  setImportInfo(
                    `Imported ${data.rooms.length} sweeps into "${data.floorName}". Rename them and place their boxes below.`,
                  );
                  await utils.floor.list.invalidate();
                } catch (err) {
                  setImportError(
                    err instanceof Error ? err.message : "Import failed",
                  );
                } finally {
                  setImporting(false);
                  e.target.value = "";
                }
              }}
            />
          </label>
          {importInfo && (
            <p className="mt-2 text-xs text-green-400">{importInfo}</p>
          )}
          {importError && (
            <p className="mt-2 text-xs text-red-400">{importError}</p>
          )}
          <p className="mt-2 text-xs text-neutral-500">
            Creates a new floor with one room per sweep (low-resolution cube
            faces from the local capture). Rename rooms after import.
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!newFloor.trim()) return;
            createFloor.mutate(
              { name: newFloor.trim(), order: floors.data?.length ?? 0 },
              { onSuccess: () => setNewFloor("") },
            );
          }}
          className="flex gap-2"
        >
          <input
            value={newFloor}
            onChange={(e) => setNewFloor(e.target.value)}
            placeholder="Or add an empty floor (e.g. Ground floor)"
            className="flex-1 rounded border border-neutral-700 bg-neutral-900 px-3 py-2"
          />
          <button
            type="submit"
            disabled={createFloor.isPending}
            className="rounded bg-blue-600 px-4 py-2 hover:bg-blue-500 disabled:opacity-50"
          >
            Add floor
          </button>
        </form>
      </section>

      <section className="space-y-6">
        {floors.isLoading && <p>Loading…</p>}
        {floors.data?.length === 0 && (
          <p className="text-neutral-400">No floors yet — create one above.</p>
        )}
        {floors.data?.map((floor) => (
          <FloorBlock
            key={floor.id}
            floor={floor}
            onCreateRoom={(name) =>
              createRoom.mutate({ name, floorId: floor.id })
            }
            onDelete={() => {
              if (confirm(`Delete floor "${floor.name}" and all its rooms?`))
                deleteFloor.mutate({ id: floor.id });
            }}
            onSetStart={(roomId) => setStart.mutate({ id: roomId })}
          />
        ))}
      </section>
    </main>
  );
}

function FloorBlock({
  floor,
  onCreateRoom,
  onDelete,
  onSetStart,
}: {
  floor: {
    id: string;
    name: string;
    mapImagePath: string | null;
    rooms: {
      id: string;
      name: string;
      isStart: boolean;
      panoramaPath: string | null;
      cubemapPaths: string | null;
      boxX: number | null;
    }[];
  };
  onCreateRoom: (name: string) => void;
  onDelete: () => void;
  onSetStart: (roomId: string) => void;
}) {
  const [newRoom, setNewRoom] = useState("");

  return (
    <div className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-4">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <Link
            href={`/admin/floors/${floor.id}`}
            className="text-lg font-semibold hover:underline"
          >
            {floor.name}
          </Link>
          <span className="ml-2 text-xs text-neutral-500">
            {floor.rooms.filter((r) => r.boxX != null).length}/
            {floor.rooms.length} placed
          </span>
        </div>
        <button
          onClick={onDelete}
          className="text-xs text-red-400 hover:underline"
        >
          Delete floor
        </button>
      </div>

      <ul className="mb-3 space-y-1">
        {floor.rooms.map((room) => (
          <li
            key={room.id}
            className="flex items-center justify-between rounded bg-neutral-900 px-3 py-2"
          >
            <Link
              href={`/admin/rooms/${room.id}`}
              className="hover:underline"
            >
              {room.name}
              {!room.panoramaPath && !room.cubemapPaths && (
                <span className="ml-2 text-xs text-yellow-400">
                  needs photo
                </span>
              )}
            </Link>
            <button
              onClick={() => onSetStart(room.id)}
              className={`text-xs ${
                room.isStart ? "text-green-400" : "text-neutral-400 hover:text-neutral-200"
              }`}
            >
              {room.isStart ? "★ start room" : "set as start"}
            </button>
          </li>
        ))}
        {floor.rooms.length === 0 && (
          <li className="text-sm text-neutral-500">No rooms yet</li>
        )}
      </ul>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!newRoom.trim()) return;
          onCreateRoom(newRoom.trim());
          setNewRoom("");
        }}
        className="flex gap-2"
      >
        <input
          value={newRoom}
          onChange={(e) => setNewRoom(e.target.value)}
          placeholder="New room (e.g. Living room)"
          className="flex-1 rounded border border-neutral-700 bg-neutral-900 px-3 py-1.5 text-sm"
        />
        <button
          type="submit"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm hover:bg-blue-500"
        >
          Add room
        </button>
      </form>
    </div>
  );
}
