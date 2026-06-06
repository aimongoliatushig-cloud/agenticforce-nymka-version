import { AdminShell } from "@/components/layout/AdminShell";
import { brands } from "@/lib/mock-data";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { StatusBadge } from "@/components/ui/StatusBadge";

export default function PlansPage() {
  return (
    <AdminShell>
      <main className="mx-auto max-w-[1500px] px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black">Monthly content plans</h1>
        <p className="mt-2 text-sm text-white/55">Cronjob ямар brand дээр хэдэн content хийх ёстойг эндээс хянана.</p>
        <div className="mt-6 grid gap-4 xl:grid-cols-2">
          {brands.map((brand) => {
            const progress = Math.round((brand.plan.generated / brand.plan.total) * 100);
            return (
              <article key={brand.id} className="card p-5">
                <div className="flex items-start justify-between gap-3"><div><h2 className="text-2xl font-black">{brand.name}</h2><p className="mt-1 text-white/45">{brand.plan.month} · {brand.package.name}</p></div><StatusBadge status={brand.health} /></div>
                <div className="mt-5"><ProgressBar value={progress} label={`Generated ${brand.plan.generated}/${brand.plan.total}`} /></div>
                <div className="mt-5 grid grid-cols-5 gap-2 text-center text-xs"><Mini label="Total" value={brand.plan.total} /><Mini label="Generated" value={brand.plan.generated} /><Mini label="Published" value={brand.plan.published} /><Mini label="Scheduled" value={brand.plan.scheduled} /><Mini label="Failed" value={brand.plan.failed} /></div>
                <div className="mt-5 rounded-2xl border border-white/10 bg-black/25 p-4"><p className="text-sm text-white/40">Next</p><p className="mt-1 font-black">{brand.plan.nextDate} · {brand.plan.nextTopic}</p></div>
              </article>
            );
          })}
        </div>
      </main>
    </AdminShell>
  );
}

function Mini({ label, value }: { label: string; value: number }) {
  return <div className="rounded-xl bg-white/[0.04] p-3"><p className="text-white/35">{label}</p><p className="mt-1 text-lg font-black">{value}</p></div>;
}
