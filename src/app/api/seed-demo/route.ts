import { NextResponse } from "next/server";
import { db } from "~/server/db";

const DEMO_ROOMS = [
  { name: "Living Room", slug: "living",   boxX: 0.10, boxY: 0.45, boxW: 0.30, boxH: 0.30 },
  { name: "Kitchen",     slug: "kitchen",  boxX: 0.42, boxY: 0.45, boxW: 0.20, boxH: 0.30 },
  { name: "Hallway",     slug: "hallway",  boxX: 0.42, boxY: 0.18, boxW: 0.20, boxH: 0.25 },
  { name: "Bedroom",     slug: "bedroom",  boxX: 0.64, boxY: 0.18, boxW: 0.25, boxH: 0.30 },
  { name: "Bathroom",    slug: "bathroom", boxX: 0.64, boxY: 0.50, boxW: 0.15, boxH: 0.20 },
  { name: "Home Office", slug: "office",   boxX: 0.81, boxY: 0.50, boxW: 0.15, boxH: 0.25 },
];

export async function POST() {
  const order = await db.floor.count();
  const floor = await db.floor.create({
    data: { name: "Demo apartment", order },
  });

  const created: Array<{ id: string; name: string }> = [];
  for (let i = 0; i < DEMO_ROOMS.length; i++) {
    const r = DEMO_ROOMS[i]!;
    const room = await db.room.create({
      data: {
        name: r.name,
        floorId: floor.id,
        panoramaPath: `/demo/${r.slug}.jpg`,
        boxX: r.boxX,
        boxY: r.boxY,
        boxWidth: r.boxW,
        boxHeight: r.boxH,
        isStart: i === 0,
      },
    });
    created.push({ id: room.id, name: room.name });
  }

  // Wire up a sensible default network of hotspots between adjacent rooms.
  const ids: Record<string, string> = Object.fromEntries(
    created.map((r, i) => [DEMO_ROOMS[i]!.slug, r.id]),
  );
  const links: Array<[string, string, number]> = [
    ["living",   "kitchen",  Math.PI / 2],
    ["kitchen",  "living",   -Math.PI / 2],
    ["kitchen",  "hallway",  0],
    ["hallway",  "kitchen",  Math.PI],
    ["hallway",  "bedroom",  Math.PI / 2],
    ["bedroom",  "hallway",  -Math.PI / 2],
    ["bedroom",  "bathroom", -Math.PI / 4],
    ["bathroom", "bedroom",  Math.PI - Math.PI / 4],
    ["bathroom", "office",   Math.PI / 2],
    ["office",   "bathroom", -Math.PI / 2],
  ];
  for (const [from, to, yaw] of links) {
    const fromId = ids[from];
    const toId = ids[to];
    if (!fromId || !toId) continue;
    await db.hotspot.create({
      data: { fromRoomId: fromId, toRoomId: toId, yaw, pitch: -0.1 },
    });
  }

  return NextResponse.json({
    floorId: floor.id,
    floorName: floor.name,
    rooms: created,
  });
}
