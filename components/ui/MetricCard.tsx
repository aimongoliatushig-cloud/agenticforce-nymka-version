import type { ReactNode } from "react";

export function MetricCard({ label, value, detail, icon }: { label: string; value: string | number; detail?: string; icon?: ReactNode }) {
  return (
    <div className="card p-5 transition hover:-translate-y-0.5 hover:border-violet-300/30 hover:bg-white/[0.06]">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm text-white/50">{label}</p>
          <p className="mt-2 text-3xl font-black tracking-tight">{value}</p>
          {detail ? <p className="mt-2 text-xs text-white/35">{detail}</p> : null}
        </div>
        {icon ? <div className="grid h-11 w-11 place-items-center rounded-2xl bg-violet-400/15 text-violet-100">{icon}</div> : null}
      </div>
    </div>
  );
}
