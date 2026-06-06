import type { CreditBalance } from "@/lib/types";
import { ProgressBar } from "@/components/ui/ProgressBar";

function percent(used: number, total: number) {
  return total === 0 ? 0 : Math.round((used / total) * 100);
}

function remaining(used: number, total: number, extra: number) {
  return Math.max(total + extra - used, 0);
}

export function CreditUsageCard({ credits, compact = false }: { credits: CreditBalance; compact?: boolean }) {
  const rows = [
    { label: "Post", data: credits.posts },
    { label: "Carousel", data: credits.carousels },
    { label: "Reel", data: credits.reels },
  ];

  return (
    <section id="credits" className="card p-5">
      <div className="flex items-start justify-between gap-3">
        <div><h2 className="text-xl font-black">Эрхийн үлдэгдэл</h2><p className="mt-1 text-sm text-white/45">{credits.month}</p></div>
        <button className="rounded-2xl bg-white px-4 py-2 text-sm font-black text-black hover:bg-violet-100">Эрх нэмэх</button>
      </div>
      <div className="mt-5 space-y-4">
        {rows.map((row) => {
          const total = row.data.total + row.data.extra;
          return (
            <div key={row.label} className="rounded-2xl border border-white/10 bg-black/25 p-4">
              <div className="mb-3 flex items-center justify-between"><b>{row.label}</b><span className="text-sm text-white/55">Үлдсэн {remaining(row.data.used, row.data.total, row.data.extra)}</span></div>
              <ProgressBar value={percent(row.data.used, total)} label={`${row.data.used} / ${total} ашигласан`} />
            </div>
          );
        })}
      </div>
      {!compact ? <p className="mt-4 text-sm leading-6 text-white/45">Failed generation дээр эрх хасагдахгүй. Admin approve/publish үед ашигласан гэж тооцно.</p> : null}
    </section>
  );
}
