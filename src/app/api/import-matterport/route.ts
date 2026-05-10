import { NextResponse } from "next/server";
import AdmZip from "adm-zip";
import { mkdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { db } from "~/server/db";
import { extractPanoramaFromSwl } from "~/server/extract-swl";

export const maxDuration = 300;

const SWL_RE = /([0-9A-F-]{36})\.swl$/i;
const PLACEMENT_RE = /([0-9A-F-]{36})-PlacementImage\.png$/i;

export async function POST(req: Request) {
  const form = await req.formData();
  const file = form.get("file");
  const floorName = (form.get("floorName") as string) || "Floor 1";

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "No file" }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  let zip: AdmZip;
  try {
    zip = new AdmZip(buffer);
  } catch {
    return NextResponse.json({ error: "Invalid zip" }, { status: 400 });
  }

  // sweepId (lowercase) -> { swl: Buffer, placement?: Buffer }
  const sweeps = new Map<string, { swl?: Buffer; placement?: Buffer }>();

  for (const entry of zip.getEntries()) {
    if (entry.isDirectory) continue;
    const base = path.basename(entry.entryName);

    const swlMatch = SWL_RE.exec(base);
    if (swlMatch) {
      const id = swlMatch[1]!.toLowerCase();
      const cur = sweeps.get(id) ?? {};
      cur.swl = entry.getData();
      sweeps.set(id, cur);
      continue;
    }
    const placeMatch = PLACEMENT_RE.exec(base);
    if (placeMatch) {
      const id = placeMatch[1]!.toLowerCase();
      const cur = sweeps.get(id) ?? {};
      cur.placement = entry.getData();
      sweeps.set(id, cur);
      continue;
    }
  }

  const validSweeps = [...sweeps.entries()].filter(([, v]) => !!v.swl);
  if (validSweeps.length === 0) {
    return NextResponse.json(
      {
        error:
          "No .swl sweep files found. Make sure this is a Matterport Capture export.",
      },
      { status: 422 },
    );
  }

  const outDir = path.join(process.cwd(), "public", "uploads", "panoramas");
  if (!existsSync(outDir)) await mkdir(outDir, { recursive: true });
  const placementDir = path.join(
    process.cwd(),
    "public",
    "uploads",
    "placements",
  );
  if (!existsSync(placementDir))
    await mkdir(placementDir, { recursive: true });

  const floor = await db.floor.create({
    data: { name: floorName, order: await db.floor.count() },
  });

  const rooms: Array<{ id: string; name: string; width: number; height: number }> = [];
  const skipped: string[] = [];

  for (let i = 0; i < validSweeps.length; i++) {
    const [sweepId, payload] = validSweeps[i]!;
    const extracted = extractPanoramaFromSwl(payload.swl!);
    if (!extracted) {
      skipped.push(sweepId);
      continue;
    }
    const panoPath = path.join(outDir, `${sweepId}.jpg`);
    await writeFile(panoPath, extracted.jpeg);

    if (payload.placement) {
      await writeFile(
        path.join(placementDir, `${sweepId}.png`),
        payload.placement,
      );
    }

    const room = await db.room.create({
      data: {
        name: `Sweep ${i + 1}`,
        floorId: floor.id,
        panoramaPath: `/uploads/panoramas/${sweepId}.jpg`,
        cubemapPaths: null,
        isStart: i === 0,
      },
    });
    rooms.push({
      id: room.id,
      name: room.name,
      width: extracted.width,
      height: extracted.height,
    });
  }

  return NextResponse.json({
    floorId: floor.id,
    floorName: floor.name,
    rooms,
    skipped,
  });
}
