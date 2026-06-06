import Link from "next/link";
import type { Brand } from "@/lib/types";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { StatusBadge } from "@/components/ui/StatusBadge";

export function BrandCard({ brand }: { brand: Brand }) {
  const completed = brand.plan.total ? Math.round((brand.plan.published / brand.plan.total) * 100) : 0;
  const totalRemaining = (brand.credits.posts.total + brand.credits.posts.extra - brand.credits.posts.used)
    + (brand.credits.carousels.total + brand.credits.carousels.extra - brand.credits.carousels.used)
    + (brand.credits.reels.total + brand.credits.reels.extra - brand.credits.reels.used);

  return (
    <article className="card p-5 transition hover:-translate-y-0.5 hover:border-violet-300/35 hover:bg-white/[0.06]">
      <div className="flex items-start gap-4">
        <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-400 text-lg font-black">{brand.logo}</div>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3"><div><h3 className="truncate text-xl font-black">{brand.name}</h3><p className="mt-1 text-sm text-white/45">{brand.industry}</p></div><StatusBadge status={brand.health} /></div>
          <p className="mt-3 text-sm text-white/50">{brand.package.name} · Үлдсэн эрх: <b className="text-white">{totalRemaining}</b></p>
        </div>
      </div>
      <div className="mt-5"><ProgressBar value={completed} label={`Published ${brand.plan.published}/${brand.plan.total}`} /></div>
      <div className="mt-5 grid grid-cols-3 gap-2 text-center text-xs">
        <Mini label="Generated" value={brand.plan.generated} />
        <Mini label="Scheduled" value={brand.plan.scheduled} />
        <Mini label="Failed" value={brand.plan.failed} />
      </div>
      <Link href={`/admin/brands/${brand.id}`} className="mt-5 inline-flex h-11 w-full items-center justify-center rounded-2xl bg-white text-sm font-black text-black hover:bg-violet-100">Brand dashboard</Link>
    </article>
  );
}

function Mini({ label, value }: { label: string; value: number }) {
  return <div className="rounded-xl bg-white/[0.04] p-3"><p className="text-white/35">{label}</p><p className="mt-1 text-lg font-black">{value}</p></div>;
}
