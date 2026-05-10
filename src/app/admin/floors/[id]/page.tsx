"use client";

import Link from "next/link";
import { use, useEffect, useRef, useState } from "react";
import { api } from "~/trpc/react";

const CANVAS_ASPECT = 4 / 3;

type Room = {
  id: string;
  name: string;
  boxX: number | null;
  boxY: number | null;
  boxWidth: number | null;
  boxHeight: number | null;
  panoramaPath: string | null;
  cubemapPaths: string | null;
};

export default function FloorEditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const utils = api.useUtils();
  const floor = api.floor.byId.useQuery({ id });
  const updateRoom = api.room.update.useMutation({
    onSuccess: () => utils.floor.byId.invalidate({ id }),
  });

  if (floor.isLoading) return <p className="p-6">Loading…</p>;
  if (!floor.data) return <p className="p-6">Floor not found.</p>;
  const f = floor.data;
  const placed = f.rooms.filter((r) => r.boxX != null);
  const unplaced = f.rooms.filter((r) => r.boxX == null);

  return (
    <main className="mx-auto max-w-6xl space-y-4 p-6">
      <Link href="/admin" className="text-sm text-neutral-400 hover:underline">
        ← Back to admin
      </Link>

      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Floor: {f.name}</h1>
      </header>

      <p className="text-sm text-neutral-400">
        Drag rooms from the sidebar onto the canvas to place them. Drag a box to
        move; drag the corner handle to resize. Click a placed box to remove it
        from the layout.
      </p>

      <div className="grid grid-cols-[1fr_220px] gap-4">
        <BoxCanvas
          rooms={placed}
          onMove={(roomId, boxX, boxY) =>
            updateRoom.mutate({ id: roomId, boxX, boxY })
          }
          onResize={(roomId, boxWidth, boxHeight) =>
            updateRoom.mutate({ id: roomId, boxWidth, boxHeight })
          }
          onUnplace={(roomId) =>
            updateRoom.mutate({
              id: roomId,
              boxX: null,
              boxY: null,
              boxWidth: null,
              boxHeight: null,
            })
          }
          onPlaceFromSidebar={(roomId, x, y) =>
            updateRoom.mutate({
              id: roomId,
              boxX: x,
              boxY: y,
              boxWidth: 0.18,
              boxHeight: 0.18,
            })
          }
        />

        <aside className="rounded border border-neutral-800 bg-neutral-900/50 p-3">
          <h3 className="mb-2 text-sm font-semibold">Unplaced rooms</h3>
          {unplaced.length === 0 && (
            <p className="text-xs text-neutral-500">All rooms are placed.</p>
          )}
          <ul className="space-y-1">
            {unplaced.map((r) => (
              <li
                key={r.id}
                draggable
                onDragStart={(e) => {
                  e.dataTransfer.setData("text/plain", r.id);
                  e.dataTransfer.effectAllowed = "move";
                }}
                className="cursor-grab rounded border border-neutral-700 bg-neutral-800 px-2 py-1.5 text-sm hover:bg-neutral-700 active:cursor-grabbing"
              >
                {r.name}
              </li>
            ))}
          </ul>

          <h3 className="mb-2 mt-4 text-sm font-semibold">Placed rooms</h3>
          <ul className="space-y-1">
            {placed.map((r) => (
              <li key={r.id} className="text-xs text-neutral-400">
                <Link
                  href={`/admin/rooms/${r.id}`}
                  className="hover:underline"
                >
                  {r.name}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </main>
  );
}

function BoxCanvas({
  rooms,
  onMove,
  onResize,
  onUnplace,
  onPlaceFromSidebar,
}: {
  rooms: Room[];
  onMove: (roomId: string, x: number, y: number) => void;
  onResize: (roomId: string, w: number, h: number) => void;
  onUnplace: (roomId: string) => void;
  onPlaceFromSidebar: (roomId: string, x: number, y: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [drag, setDrag] = useState<
    | { kind: "move"; roomId: string; offsetX: number; offsetY: number }
    | { kind: "resize"; roomId: string; startX: number; startY: number; startW: number; startH: number }
    | null
  >(null);
  // Local optimistic positions while dragging — keep refs updated to commit on mouseup.
  const [localBoxes, setLocalBoxes] = useState<
    Record<string, { x: number; y: number; w: number; h: number }>
  >({});

  // Reset local boxes whenever rooms change from server.
  useEffect(() => {
    setLocalBoxes({});
  }, [rooms]);

  const getRect = () => ref.current?.getBoundingClientRect();

  const onMouseMove = (e: React.MouseEvent) => {
    if (!drag) return;
    const rect = getRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    if (drag.kind === "move") {
      const room = rooms.find((r) => r.id === drag.roomId);
      if (!room) return;
      const w = localBoxes[room.id]?.w ?? room.boxWidth ?? 0.18;
      const h = localBoxes[room.id]?.h ?? room.boxHeight ?? 0.18;
      const x = clamp(px - drag.offsetX, 0, 1 - w);
      const y = clamp(py - drag.offsetY, 0, 1 - h);
      setLocalBoxes((b) => ({ ...b, [room.id]: { x, y, w, h } }));
    } else if (drag.kind === "resize") {
      const room = rooms.find((r) => r.id === drag.roomId);
      if (!room) return;
      const x = localBoxes[room.id]?.x ?? room.boxX ?? 0;
      const y = localBoxes[room.id]?.y ?? room.boxY ?? 0;
      const w = clamp(px - x, 0.04, 1 - x);
      const h = clamp(py - y, 0.04, 1 - y);
      setLocalBoxes((b) => ({ ...b, [room.id]: { x, y, w, h } }));
    }
  };

  const onMouseUp = () => {
    if (!drag) return;
    const local = localBoxes[drag.roomId];
    if (local) {
      if (drag.kind === "move") onMove(drag.roomId, local.x, local.y);
      else onResize(drag.roomId, local.w, local.h);
    }
    setDrag(null);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onDragOver={(e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
      }}
      onDrop={(e) => {
        e.preventDefault();
        const roomId = e.dataTransfer.getData("text/plain");
        if (!roomId) return;
        const rect = getRect();
        if (!rect) return;
        const x = clamp((e.clientX - rect.left) / rect.width - 0.09, 0, 0.82);
        const y = clamp((e.clientY - rect.top) / rect.height - 0.09, 0, 0.82);
        onPlaceFromSidebar(roomId, x, y);
      }}
      className="relative w-full overflow-hidden rounded border border-neutral-700 bg-neutral-900 select-none"
      style={{ aspectRatio: `${CANVAS_ASPECT}` }}
    >
      {rooms.map((r) => {
        const local = localBoxes[r.id];
        const x = local?.x ?? r.boxX ?? 0;
        const y = local?.y ?? r.boxY ?? 0;
        const w = local?.w ?? r.boxWidth ?? 0.18;
        const h = local?.h ?? r.boxHeight ?? 0.18;
        const hasPano = !!r.panoramaPath || !!r.cubemapPaths;

        return (
          <div
            key={r.id}
            onMouseDown={(e) => {
              e.preventDefault();
              const rect = getRect();
              if (!rect) return;
              const px = (e.clientX - rect.left) / rect.width;
              const py = (e.clientY - rect.top) / rect.height;
              setDrag({
                kind: "move",
                roomId: r.id,
                offsetX: px - x,
                offsetY: py - y,
              });
            }}
            className={`absolute flex cursor-move flex-col items-center justify-center rounded border-2 ${
              hasPano
                ? "border-blue-400 bg-blue-600/50"
                : "border-yellow-500 bg-yellow-700/40"
            } text-xs text-white shadow`}
            style={{
              left: `${x * 100}%`,
              top: `${y * 100}%`,
              width: `${w * 100}%`,
              height: `${h * 100}%`,
            }}
          >
            <span className="px-1 text-center">{r.name}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (confirm(`Remove "${r.name}" from layout?`))
                  onUnplace(r.id);
              }}
              onMouseDown={(e) => e.stopPropagation()}
              className="absolute -right-1 -top-1 hidden h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[10px] hover:bg-red-500 group-hover:flex"
              title="remove from layout"
            >
              ×
            </button>
            <div
              onMouseDown={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setDrag({
                  kind: "resize",
                  roomId: r.id,
                  startX: x,
                  startY: y,
                  startW: w,
                  startH: h,
                });
              }}
              className="absolute bottom-0 right-0 h-3 w-3 cursor-se-resize bg-white/70"
              title="resize"
            />
          </div>
        );
      })}
    </div>
  );
}

function clamp(v: number, lo: number, hi: number) {
  return Math.max(lo, Math.min(hi, v));
}
