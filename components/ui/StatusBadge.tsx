import type { BrandHealth, ContentStatus } from "@/lib/types";

export function StatusBadge({ status }: { status: BrandHealth | ContentStatus | string }) {
  const value = String(status);
  const lower = value.toLowerCase();
  const tone = lower.includes("failed") || lower.includes("low") || lower.includes("needs")
    ? "border-red-400/25 bg-red-400/10 text-red-100"
    : lower.includes("scheduled") || lower.includes("processing") || lower.includes("running")
      ? "border-blue-400/25 bg-blue-400/10 text-blue-100"
      : lower.includes("published") || lower.includes("success") || lower.includes("on-track")
        ? "border-emerald-400/25 bg-emerald-400/10 text-emerald-100"
        : "border-violet-400/25 bg-violet-400/10 text-violet-100";

  return <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-black uppercase tracking-[0.08em] ${tone}`}>{value.replace(/-/g, " ")}</span>;
}
