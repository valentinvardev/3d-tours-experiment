import sharp from "sharp";

/**
 * Stitch 6 Matterport skybox cube faces into a single equirectangular JPEG.
 *
 * Matterport skybox face order: 0=front, 1=right, 2=back, 3=left, 4=up, 5=down.
 * Output is a standard equirectangular image: 2 * height = width.
 */
export async function cubeToEquirect(
  faceBuffers: [Buffer, Buffer, Buffer, Buffer, Buffer, Buffer],
  outputWidth = 2048,
): Promise<Buffer> {
  const outW = outputWidth;
  const outH = Math.floor(outW / 2);

  const faces = await Promise.all(
    faceBuffers.map((b) =>
      sharp(b).removeAlpha().raw().toBuffer({ resolveWithObject: true }),
    ),
  );

  const faceSize = faces[0]!.info.width;
  for (const f of faces) {
    if (f.info.width !== faceSize || f.info.height !== faceSize) {
      throw new Error(
        `Cube faces must all be square and equal size; got ${f.info.width}x${f.info.height} vs ${faceSize}`,
      );
    }
  }

  const out = Buffer.alloc(outW * outH * 3);

  for (let y = 0; y < outH; y++) {
    const lat = (y / outH) * Math.PI - Math.PI / 2;
    const sinLat = Math.sin(lat);
    const cosLat = Math.cos(lat);
    for (let x = 0; x < outW; x++) {
      const lon = (x / outW) * 2 * Math.PI - Math.PI;
      const dx = cosLat * Math.sin(lon);
      const dy = sinLat;
      const dz = cosLat * Math.cos(lon);

      // Pick face by largest absolute component.
      const ax = Math.abs(dx);
      const ay = Math.abs(dy);
      const az = Math.abs(dz);

      let faceIdx: number;
      let u: number;
      let v: number;
      if (az >= ax && az >= ay) {
        if (dz > 0) {
          faceIdx = 0; // front
          u = dx / dz;
          v = -dy / dz;
        } else {
          faceIdx = 2; // back
          u = -dx / -dz;
          v = -dy / -dz;
        }
      } else if (ax >= ay) {
        if (dx > 0) {
          faceIdx = 1; // right
          u = -dz / dx;
          v = -dy / dx;
        } else {
          faceIdx = 3; // left
          u = dz / -dx;
          v = -dy / -dx;
        }
      } else {
        if (dy > 0) {
          faceIdx = 4; // up
          u = dx / dy;
          v = dz / dy;
        } else {
          faceIdx = 5; // down
          u = dx / -dy;
          v = -dz / -dy;
        }
      }

      // Map u,v in [-1,1] to face pixel (nearest neighbor).
      const fx = Math.min(faceSize - 1, Math.max(0, Math.floor(((u + 1) / 2) * faceSize)));
      const fy = Math.min(faceSize - 1, Math.max(0, Math.floor(((v + 1) / 2) * faceSize)));

      const src = faces[faceIdx]!.data;
      const srcOffset = (fy * faceSize + fx) * 3;
      const dstOffset = (y * outW + x) * 3;
      out[dstOffset] = src[srcOffset]!;
      out[dstOffset + 1] = src[srcOffset + 1]!;
      out[dstOffset + 2] = src[srcOffset + 2]!;
    }
  }

  return await sharp(out, {
    raw: { width: outW, height: outH, channels: 3 },
  })
    .jpeg({ quality: 88 })
    .toBuffer();
}
