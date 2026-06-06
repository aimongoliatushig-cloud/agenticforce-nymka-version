import { AlertTriangle, Bot, CheckCircle2, Coins, FileText, RotateCcw, Store } from "lucide-react";
import { AdminShell } from "@/components/layout/AdminShell";
import { MetricCard } from "@/components/ui/MetricCard";
import { BrandCard } from "@/components/brand/BrandCard";
import { brands, creditRequests, cronRuns } from "@/lib/mock-data";

export default function AdminDashboardPage() {
  const totalPublished = brands.reduce((sum, brand) => sum + brand.plan.published, 0);
  const lowCredits = brands.filter((brand) => brand.health === "low-credits").length;
  const failed = brands.reduce((sum, brand) => sum + brand.plan.failed, 0);
  const runningCron = cronRuns.find((run) => run.status === "running");

  return (
    <AdminShell>
      <main className="mx-auto max-w-[1600px] px-4 py-8 sm:px-6 lg:px-8">
        <section className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 shadow-glow">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-violet-100"><Bot className="h-3.5 w-3.5" /> Admin Control Center</div>
            <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Брэндийн контент автоматжуулалтын самбар</h1>
            <p className="mt-3 text-sm leading-6 text-white/55">Бүх брэндийн сарын төлөвлөгөө, үлдсэн эрх, cronjob, нийтлэл болон credit purchase request-ийг нэг дор хяна.</p>
          </div>
        </section>

        <section className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-6">
          <MetricCard label="Брэнд" value={brands.length} detail="active workspaces" icon={<Store className="h-5 w-5" />} />
          <MetricCard label="Published" value={totalPublished} detail="this month" icon={<CheckCircle2 className="h-5 w-5" />} />
          <MetricCard label="Low credit" value={lowCredits} detail="need upsell" icon={<AlertTriangle className="h-5 w-5" />} />
          <MetricCard label="Failed" value={failed} detail="needs retry" icon={<FileText className="h-5 w-5" />} />
          <MetricCard label="Requests" value={creditRequests.length} detail="credit purchases" icon={<Coins className="h-5 w-5" />} />
          <MetricCard label="Cron" value={runningCron ? "Running" : "OK"} detail={runningCron?.name || "all clear"} icon={<RotateCcw className="h-5 w-5" />} />
        </section>

        <section className="mt-7 grid gap-6 xl:grid-cols-[1fr_380px]">
          <div>
            <div className="mb-4 flex items-center justify-between"><h2 className="text-2xl font-black">Брэндүүдийн явц</h2><a href="/admin/brands" className="text-sm font-bold text-violet-200 hover:text-white">Бүгдийг харах</a></div>
            <div className="grid gap-4 xl:grid-cols-2">{brands.map((brand) => <BrandCard key={brand.id} brand={brand} />)}</div>
          </div>
          <aside className="space-y-4">
            <div className="card p-5"><h3 className="text-xl font-black">Action required</h3><div className="mt-4 space-y-3">{brands.filter((brand) => brand.health !== "on-track").map((brand) => <div key={brand.id} className="rounded-2xl border border-white/10 bg-black/25 p-4"><b>{brand.name}</b><p className="mt-1 text-sm text-white/45">{brand.health === "low-credits" ? "Эрх дуусах дөхсөн. Upsell хийх." : "Сарын plan баталгаажуулах шаардлагатай."}</p></div>)}</div></div>
            <div className="card p-5"><h3 className="text-xl font-black">Credit requests</h3><div className="mt-4 space-y-3">{creditRequests.map((req) => <div key={req.id} className="rounded-2xl border border-white/10 bg-black/25 p-4"><div className="flex justify-between gap-3"><b>{req.brandName}</b><span className="text-sm text-violet-100">{req.status}</span></div><p className="mt-1 text-sm text-white/45">{req.amountMnt.toLocaleString()}₮ · {req.posts} post · {req.carousels} carousel · {req.reels} reel</p></div>)}</div></div>
          </aside>
        </section>
      </main>
    </AdminShell>
  );
}
