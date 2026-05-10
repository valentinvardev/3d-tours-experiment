/**
 * Generate 6 placeholder equirectangular (2:1) panoramas with distinct colors
 * and big readable labels so we can test navigation without real photos.
 *
 * Output: public/demo/*.jpg
 */
import sharp from "sharp";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const W = 4096;
const H = 2048;

const ROOMS = [
  { slug: "living",   name: "Living Room",  bg: [25, 60, 110],  fg: [220, 230, 255] },
  { slug: "kitchen",  name: "Kitchen",      bg: [180, 80, 35],  fg: [255, 245, 220] },
  { slug: "bedroom",  name: "Bedroom",      bg: [70, 40, 100],  fg: [240, 220, 255] },
  { slug: "bathroom", name: "Bathroom",     bg: [40, 130, 130], fg: [220, 255, 250] },
  { slug: "office",   name: "Home Office",  bg: [120, 110, 30], fg: [250, 245, 200] },
  { slug: "hallway",  name: "Hallway",      bg: [60, 60, 60],   fg: [240, 240, 240] },
];

async function generateOne({ slug, name, bg, fg }) {
  // Build a vertical gradient (sky-ish at top, floor-ish at bottom) with a
  // grid + 4 cardinal compass labels so you can tell where you're looking.
  const top = bg.map((c) => Math.min(255, c + 60));
  const bot = bg.map((c) => Math.max(0, c - 30));

  const buf = Buffer.alloc(W * H * 3);
  for (let y = 0; y < H; y++) {
    const t = y / (H - 1);
    const r = Math.round(top[0] * (1 - t) + bot[0] * t);
    const g = Math.round(top[1] * (1 - t) + bot[1] * t);
    const b = Math.round(top[2] * (1 - t) + bot[2] * t);
    for (let x = 0; x < W; x++) {
      const o = (y * W + x) * 3;
      // Grid every 256px horizontal, every 128px vertical -> faint lines.
      const isGrid =
        x % 256 === 0 || x % 256 === 255 || y % 128 === 0 || y % 128 === 127;
      if (isGrid) {
        buf[o] = Math.min(255, r + 30);
        buf[o + 1] = Math.min(255, g + 30);
        buf[o + 2] = Math.min(255, b + 30);
      } else {
        buf[o] = r;
        buf[o + 1] = g;
        buf[o + 2] = b;
      }
    }
  }

  // SVG overlay: room name centered + N/E/S/W markers around the equator.
  const fgRgb = `rgb(${fg[0]},${fg[1]},${fg[2]})`;
  const svg = `
    <svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
      <text x="${W / 2}" y="${H / 2 - 60}" text-anchor="middle"
            font-family="sans-serif" font-size="220" font-weight="700"
            fill="${fgRgb}">${name}</text>
      <text x="${W / 2}" y="${H / 2 + 120}" text-anchor="middle"
            font-family="sans-serif" font-size="80"
            fill="${fgRgb}" opacity="0.7">placeholder panorama · ${slug}</text>
      <text x="${W / 2}" y="${H / 2 + 380}" text-anchor="middle"
            font-family="sans-serif" font-size="150" font-weight="700"
            fill="${fgRgb}" opacity="0.85">N</text>
      <text x="${W * 0.25}" y="${H / 2 + 380}" text-anchor="middle"
            font-family="sans-serif" font-size="150" font-weight="700"
            fill="${fgRgb}" opacity="0.85">W</text>
      <text x="${W * 0.75}" y="${H / 2 + 380}" text-anchor="middle"
            font-family="sans-serif" font-size="150" font-weight="700"
            fill="${fgRgb}" opacity="0.85">E</text>
      <text x="${W * 0.0 + 120}" y="${H / 2 + 380}" text-anchor="start"
            font-family="sans-serif" font-size="150" font-weight="700"
            fill="${fgRgb}" opacity="0.85">S</text>
      <text x="${W * 1.0 - 120}" y="${H / 2 + 380}" text-anchor="end"
            font-family="sans-serif" font-size="150" font-weight="700"
            fill="${fgRgb}" opacity="0.85">S</text>
    </svg>
  `;

  const outDir = path.join(process.cwd(), "public", "demo");
  await mkdir(outDir, { recursive: true });

  const outPath = path.join(outDir, `${slug}.jpg`);
  const out = await sharp(buf, { raw: { width: W, height: H, channels: 3 } })
    .composite([{ input: Buffer.from(svg) }])
    .jpeg({ quality: 82 })
    .toBuffer();
  await writeFile(outPath, out);
  console.log(`  ✓ ${outPath} (${out.length.toLocaleString()} bytes)`);
}

console.log("Generating placeholder panoramas…");
for (const room of ROOMS) {
  await generateOne(room);
}
console.log("Done.");
