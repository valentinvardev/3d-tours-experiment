/**
 * Extract the full equirectangular panorama from a Matterport `.swl` (Sweep) file.
 *
 * Each .swl is a protobuf-wrapped container that includes, among other things,
 * a sequence of embedded JPEG images. The first JPEG (with a 2:1 aspect ratio,
 * typically 3600×1801) is the pre-stitched equirectangular panorama. The
 * subsequent ~12 JPEGs are the raw camera frames used to build it. The last is
 * a small thumbnail.
 *
 * We don't decode the protobuf — we just scan for JPEG `FFD8FF` start markers
 * and pick the first 2:1 image. That's robust to format changes inside the
 * protobuf wrapper.
 */

const SOI = [0xff, 0xd8, 0xff];
const EOI = [0xff, 0xd9];

function findAllSoiOffsets(buf: Buffer): number[] {
  const offsets: number[] = [];
  for (let i = 0; i < buf.length - 2; i++) {
    if (buf[i] === SOI[0] && buf[i + 1] === SOI[1] && buf[i + 2] === SOI[2]) {
      offsets.push(i);
    }
  }
  return offsets;
}

function findEoi(buf: Buffer, from: number, to: number): number {
  for (let i = from; i < to - 1; i++) {
    if (buf[i] === EOI[0] && buf[i + 1] === EOI[1]) return i + 2;
  }
  return to;
}

/**
 * Read JPEG dimensions by walking SOFn segments. Returns null if not parseable.
 */
function readJpegSize(jpeg: Buffer): { width: number; height: number } | null {
  let i = 2; // skip FF D8
  while (i < jpeg.length - 8) {
    if (jpeg[i] !== 0xff) return null;
    let marker = jpeg[i + 1]!;
    while (marker === 0xff && i + 2 < jpeg.length) {
      i += 1;
      marker = jpeg[i + 1]!;
    }
    i += 2;
    // SOFn (Start Of Frame) markers: C0..CF except C4, C8, CC
    if (
      marker >= 0xc0 &&
      marker <= 0xcf &&
      marker !== 0xc4 &&
      marker !== 0xc8 &&
      marker !== 0xcc
    ) {
      const height = (jpeg[i + 3]! << 8) | jpeg[i + 4]!;
      const width = (jpeg[i + 5]! << 8) | jpeg[i + 6]!;
      return { width, height };
    }
    if (marker === 0xd8 || marker === 0xd9) return null;
    const segLen = (jpeg[i]! << 8) | jpeg[i + 1]!;
    if (segLen < 2) return null;
    i += segLen;
  }
  return null;
}

/**
 * Extract the equirectangular panorama JPEG from a .swl buffer.
 *
 * Each .swl typically contains:
 *   - JPEG #0: a 3600×1801 PLACEHOLDER, identical across every sweep — skip.
 *   - JPEGs #1..N-1: 4032×3024 raw iPhone camera frames captured during the
 *     360° rotation, used as input to Matterport's stitcher — skip.
 *   - JPEG #N: a 960×480 (or similar) 2:1 image — the **actual stitched
 *     preview panorama** for this sweep, unique per sweep. This is what we
 *     want.
 *
 * Strategy: scan all JPEGs, keep only those with ~2:1 ratio, return the LAST
 * one. The placeholder is always at index 0; the real preview is always last.
 */
export function extractPanoramaFromSwl(
  swl: Buffer,
): { jpeg: Buffer; width: number; height: number } | null {
  const offsets = findAllSoiOffsets(swl);
  let last: { jpeg: Buffer; width: number; height: number } | null = null;
  for (let i = 0; i < offsets.length; i++) {
    const start = offsets[i]!;
    const next = i + 1 < offsets.length ? offsets[i + 1]! : swl.length;
    const end = findEoi(swl, start, next);
    const candidate = swl.subarray(start, end);
    const size = readJpegSize(candidate);
    if (!size) continue;
    const ratio = size.width / size.height;
    if (ratio > 1.95 && ratio < 2.05 && size.width >= 480) {
      last = { jpeg: candidate, width: size.width, height: size.height };
    }
  }
  return last;
}
