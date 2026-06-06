import { AdminShell } from "@/components/layout/AdminShell";
import { brands, cronRuns } from "@/lib/mock-data";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { MetricCard } from "@/components/ui/MetricCard";
import { AlertTriangle, Bot, CheckCircle2, Clock3, RotateCcw, Zap } from "lucide-react";

const jobs = [
  { time: "08:00", name: "Credit scanner", text: "Checks remaining post, carousel, and reel credits for every brand.", status: "success", brands: 4 },
  { time: "09:00", name: "Plan checker", text: "Finds today's planned content slots from each monthly plan.", status: "success", brands: 4 },
  { time: "10:00", name: "Generate content", text: "Creates content drafts for brands that have enough credits.", status: "running", brands: 3 },
  { time: "18:00", name: "Publish scheduled posts", text: "Sends ready content to the publishing queue.", status: "upcoming", brands: 2 },
  { time: "19:00", name: "Low credit alert", text: "Highlights brands that need more credits.", status: "upcoming", brands: 1 },
];

function remainingCredits(brand: typeof brands[number]) {
  return brand.credits.posts.total + brand.credits.posts.extra - brand.credits.posts.used
    + brand.credits.carousels.total + brand.credits.carousels.extra - brand.credits.carousels.used
    + brand.credits.reels.total + brand.credits.reels.extra - brand.credits.reels.used;
}

export default function CronPage() {
  const lowCredits = brands.filter((brand) => brand.health === "low-credits");
  const needsPlan = brands.filter((brand) => brand.health === "needs-plan");
  const failedJobs = brands.reduce((sum, brand) => sum + brand.plan.failed, 0);
  const toGenerate = brands.reduce((sum, brand) => sum + Math.max(brand.plan.total - brand.plan.generated, 0), 0);
  const nextRun = cronRuns.find((run) => run.status === "running")?.nextRun || cronRuns[0]?.nextRun || "-";

  return (
    <AdminShell>
      <main className="mx-auto max-w-[1600px] px-4 py-8 sm:px-6 lg:px-8">
        <section className="card p-7 shadow-glow">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-violet-100">
            <RotateCcw className="h-3.5 w-3.5" /> Automation Center
          </div>
          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Автомат контент үйлдвэрлэл</h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-white/55">Сарын төлөвлөгөө, үлдсэн эрх, AI generation, scheduled publishing зэрэг автомат ажлын явцыг хянах хэсэг.</p>
        </section>

        <section className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          <MetricCard label="Next run" value={nextRun} detail="дараагийн автомат ажил" icon={<Clock3 className="h-5 w-5" />} />
          <MetricCard label="Brands checked" value={brands.length} detail="active brands" icon={<CheckCircle2 className="h-5 w-5" />} />
          <MetricCard label="To generate" value={toGenerate} detail="remaining content" icon={<Bot className="h-5 w-5" />} />
          <MetricCard label="Need attention" value={lowCredits.length + needsPlan.length} detail="credits or plans" icon={<AlertTriangle className="h-5 w-5" />} />
          <MetricCard label="Failed jobs" value={failedJobs} detail="needs retry" icon={<Zap className="h-5 w-5" />} />
        </section>

        <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_380px]">
          <section className="card p-5">
            <h2 className="text-2xl font-black">Өнөөдрийн автомат ажлын урсгал</h2>
            <p className="mt-1 text-sm text-white/45">Cron гэж харахаас илүү AI ажилчдын өнөөдрийн schedule гэж ойлгоно.</p>
            <div className="mt-5 space-y-4">
              {jobs.map((job) => (
                <article key={job.name} className="rounded-[1.5rem] border border-white/10 bg-black/25 p-4 transition hover:border-violet-300/35 hover:bg-white/[0.05]">
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div className="flex gap-4">
                      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-violet-500/20 text-sm font-black text-violet-100">{job.time}</div>
                      <div>
                        <h3 className="text-lg font-black">{job.name}</h3>
                        <p className="mt-1 text-sm leading-6 text-white/50">{job.text}</p>
                        <p className="mt-2 text-xs font-semibold text-white/35">Affected brands: {job.brands}</p>
                      </div>
                    </div>
                    <StatusBadge status={job.status} />
                  </div>
                </article>
              ))}
            </div>
          </section>

          <aside className="space-y-4">
            <section className="card p-5">
              <h2 className="text-2xl font-black">Анхаарах зүйлс</h2>
              <div className="mt-4 space-y-3">
                {lowCredits.map((brand) => <Attention key={brand.id} title={brand.name} text="Credit is low. Send add-credit offer." />)}
                {needsPlan.map((brand) => <Attention key={brand.id} title={brand.name} text="Monthly plan is missing or not ready." />)}
                {failedJobs > 0 ? <Attention title="Failed content" text={`${failedJobs} job needs retry.`} /> : null}
              </div>
            </section>

            <section className="card p-5">
              <h2 className="text-2xl font-black">Scheduler status</h2>
              <div className="mt-4 space-y-3">
                {cronRuns.map((run) => (
                  <div key={run.id} className="rounded-2xl border border-white/10 bg-black/25 p-4">
                    <div className="flex items-center justify-between gap-3"><b>{run.name}</b><StatusBadge status={run.status} /></div>
                    <p className="mt-2 text-sm text-white/45">Last: {run.lastRun}</p>
                    <p className="mt-1 text-sm text-white/45">Next: {run.nextRun}</p>
                  </div>
                ))}
              </div>
            </section>
          </aside>
        </div>

        <section className="mt-6 card p-5">
          <h2 className="text-2xl font-black">Брэндийн автомат ажлын queue</h2>
          <p className="mt-1 text-sm text-white/45">Аль брэнд дээр дараа нь юу ажиллах, эрх хүрэлцэж байгаа эсэхийг харна.</p>
          <div className="mt-5 grid gap-3 xl:grid-cols-2">
            {brands.map((brand) => {
              const remaining = remainingCredits(brand);
              const task = brand.health === "needs-plan" ? "Create monthly plan" : brand.health === "low-credits" ? "Low credit alert" : "Generate / publish content";
              return (
                <article key={brand.id} className="rounded-[1.5rem] border border-white/10 bg-black/25 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex gap-3"><div className="grid h-12 w-12 place-items-center rounded-2xl bg-violet-500/20 font-black text-violet-100">{brand.logo}</div><div><h3 className="font-black">{brand.name}</h3><p className="mt-1 text-sm text-white/45">{brand.package.name} · remaining credits: {remaining}</p></div></div>
                    <StatusBadge status={brand.health} />
                  </div>
                  <div className="mt-4 grid gap-3 md:grid-cols-3"><Box label="Next task" value={task} /><Box label="Next time" value={brand.plan.nextDate} /><Box label="To generate" value={String(Math.max(brand.plan.total - brand.plan.generated, 0))} /></div>
                </article>
              );
            })}
          </div>
        </section>
      </main>
    </AdminShell>
  );
}

function Attention({ title, text }: { title: string; text: string }) {
  return <div className="rounded-2xl border border-amber-300/20 bg-amber-300/10 p-4"><b>{title}</b><p className="mt-1 text-sm leading-5 text-amber-100/75">{text}</p></div>;
}

function Box({ label, value }: { label: string; value: string }) {
  return <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3"><p className="text-xs font-black uppercase tracking-[.12em] text-white/35">{label}</p><p className="mt-2 text-sm font-semibold text-white/75">{value}</p></div>;
}
