"use client";

import { useState } from "react";

interface Props {
  kind: "panorama" | "map";
  label?: string;
  onUploaded: (path: string) => void;
}

export function UploadInput({ kind, label, onUploaded }: Props) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <label className="inline-flex cursor-pointer items-center gap-2 rounded bg-blue-600 px-3 py-2 text-sm text-white hover:bg-blue-500">
      {busy ? "Uploading…" : (label ?? "Upload image")}
      <input
        type="file"
        accept="image/jpeg,image/png,image/webp,image/avif"
        className="hidden"
        disabled={busy}
        onChange={async (e) => {
          const f = e.target.files?.[0];
          if (!f) return;
          setBusy(true);
          setError(null);
          try {
            const fd = new FormData();
            fd.append("file", f);
            fd.append("kind", kind);
            const r = await fetch("/api/upload", { method: "POST", body: fd });
            if (!r.ok) throw new Error(await r.text());
            const { path } = (await r.json()) as { path: string };
            onUploaded(path);
          } catch (err) {
            setError(err instanceof Error ? err.message : "Upload failed");
          } finally {
            setBusy(false);
            e.target.value = "";
          }
        }}
      />
      {error && <span className="text-xs text-red-200">{error}</span>}
    </label>
  );
}
