import { NextResponse } from "next/server";
import { writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { randomUUID } from "node:crypto";

const ALLOWED = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/avif",
]);

const KIND_DIRS: Record<string, string> = {
  panorama: "panoramas",
  map: "maps",
};

export async function POST(req: Request) {
  const form = await req.formData();
  const file = form.get("file");
  const kindRaw = form.get("kind");

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "No file" }, { status: 400 });
  }
  if (!ALLOWED.has(file.type)) {
    return NextResponse.json(
      { error: `Unsupported type ${file.type}` },
      { status: 415 },
    );
  }
  const kind = typeof kindRaw === "string" ? kindRaw : "panorama";
  const subdir = KIND_DIRS[kind] ?? "misc";

  const ext = path.extname(file.name) || ".jpg";
  const filename = `${randomUUID()}${ext}`;
  const uploadDir = path.join(process.cwd(), "public", "uploads", subdir);
  if (!existsSync(uploadDir)) await mkdir(uploadDir, { recursive: true });

  const buffer = Buffer.from(await file.arrayBuffer());
  await writeFile(path.join(uploadDir, filename), buffer);

  const publicPath = `/uploads/${subdir}/${filename}`;
  return NextResponse.json({ path: publicPath });
}
