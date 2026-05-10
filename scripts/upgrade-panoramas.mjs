import { PrismaClient } from "../generated/prisma/index.js";
import AdmZip from "adm-zip";
import { writeFile, mkdir } from "node:fs/promises";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

const ZIP_PATH = path.join(process.cwd(), "799 Aristobulo Del Valle.zip");
if (!existsSync(ZIP_PATH)) {
  console.error("Cannot find zip:", ZIP_PATH);
  process.exit(1);
}

const SOI = [0xff, 0xd8, 0xff];
const EOI = [0xff, 0xd9];

function findSoi(buf) {
  const out = [];
  for (let i = 0; i < buf.length - 2; i++) {
    if (buf[i] === SOI[0] && buf[i + 1] === SOI[1] && buf[i + 2] === SOI[2])
      out.push(i);
  }
  return out;
}
function findEoi(buf, from, to) {
  for (let i = from; i < to - 1; i++) {
    if (buf[i] === EOI[0] && buf[i + 1] === EOI[1]) return i + 2;
  }
  return to;
}
function readJpegSize(j) {
  let i = 2;
  while (i < j.length - 8) {
    if (j[i] !== 0xff) return null;
    let m = j[i + 1];
    while (m === 0xff && i + 2 < j.length) {
      i += 1;
      m = j[i + 1];
    }
    i += 2;
    if (m >= 0xc0 && m <= 0xcf && m !== 0xc4 && m !== 0xc8 && m !== 0xcc) {
      const h = (j[i + 3] << 8) | j[i + 4];
      const w = (j[i + 5] << 8) | j[i + 6];
      return { width: w, height: h };
    }
    if (m === 0xd8 || m === 0xd9) return null;
    const seg = (j[i] << 8) | j[i + 1];
    if (seg < 2) return null;
    i += seg;
  }
  return null;
}
function extractPanoFromSwl(swl) {
  const offsets = findSoi(swl);
  let last = null;
  for (let i = 0; i < offsets.length; i++) {
    const start = offsets[i];
    const next = i + 1 < offsets.length ? offsets[i + 1] : swl.length;
    const end = findEoi(swl, start, next);
    const jpeg = swl.subarray(start, end);
    const sz = readJpegSize(jpeg);
    if (!sz) continue;
    const r = sz.width / sz.height;
    if (r > 1.95 && r < 2.05 && sz.width >= 480) {
      last = { jpeg, width: sz.width, height: sz.height };
    }
  }
  return last;
}

const zipBuf = readFileSync(ZIP_PATH);
const zip = new AdmZip(zipBuf);

// sweepId (lower) -> swl Buffer
const swls = new Map();
for (const entry of zip.getEntries()) {
  if (entry.isDirectory) continue;
  const m = /([0-9A-F-]{36})\.swl$/i.exec(path.basename(entry.entryName));
  if (m) swls.set(m[1].toLowerCase(), entry.getData());
}
console.log(`Found ${swls.size} SWL sweeps in zip`);

const db = new PrismaClient();
const rooms = await db.room.findMany();
console.log(`Found ${rooms.length} rooms in DB`);

const outDir = path.join(process.cwd(), "public", "uploads", "panoramas");
if (!existsSync(outDir)) await mkdir(outDir, { recursive: true });

let upgraded = 0;
for (const room of rooms) {
  if (!room.panoramaPath) {
    console.log(`  skip ${room.name}: no panoramaPath`);
    continue;
  }
  const slug = path.basename(room.panoramaPath, ".jpg").toLowerCase();
  const swl = swls.get(slug);
  if (!swl) {
    console.log(`  skip ${room.name}: no SWL match for "${slug}"`);
    continue;
  }
  const ext = extractPanoFromSwl(swl);
  if (!ext) {
    console.log(`  skip ${room.name}: no panorama JPEG inside SWL`);
    continue;
  }
  const outPath = path.join(outDir, `${slug}.jpg`);
  await writeFile(outPath, ext.jpeg);
  console.log(
    `  ✓ ${room.name}: ${ext.width}×${ext.height}, ${ext.jpeg.length.toLocaleString()} bytes → ${outPath}`,
  );
  upgraded += 1;
}
console.log(`\nDone. Upgraded ${upgraded} rooms.`);
await db.$disconnect();
