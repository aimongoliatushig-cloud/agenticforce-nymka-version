export function ProgressBar({ value, label }: { value: number; label?: string }) {
  const safe = Math.max(0, Math.min(100, value));
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="font-semibold text-white/60">{label}</span>
        <span className="font-black text-violet-100">{safe}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <div className="h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-400" style={{ width: `${safe}%` }} />
      </div>
    </div>
  );
}
