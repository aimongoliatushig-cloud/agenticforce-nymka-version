import { AdminShell } from "@/components/layout/AdminShell";
import { cronRuns } from "@/lib/mock-data";
import { StatusBadge } from "@/components/ui/StatusBadge";

export default function CronPage() {
  return (
    <AdminShell>
      <main className="mx-auto max-w-[1400px] px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black">Cron Jobs</h1>
        <p className="mt-2 text-sm text-white/55">Автомат контент үүсгэх, нийтлэх, credit шалгах scheduler-үүдийн төлөв.</p>
        <div className="mt-6 grid gap-4">
          {cronRuns.map((run) => (
            <article key={run.id} className="card p-5">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div><h2 className="text-2xl font-black">{run.name}</h2><p className="mt-1 text-white/45">Affected brands: {run.affectedBrands}</p></div>
                <StatusBadge status={run.status} />
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2"><Box label="Last run" value={run.lastRun} /><Box label="Next run" value={run.nextRun} /></div>
            </article>
          ))}
        </div>
      </main>
    </AdminShell>
  );
}

function Box({ label, value }: { label: string; value: string }) {
  return <div className="rounded-2xl border border-white/10 bg-black/25 p-4"><p className="text-xs font-black uppercase tracking-[.12em] text-white/35">{label}</p><p className="mt-2 font-semibold">{value}</p></div>;
}
