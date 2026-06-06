import { ClientShell } from "@/components/layout/ClientShell";
import { CreditUsageCard } from "@/components/credits/CreditUsageCard";
import { ContentCard } from "@/components/content/ContentCard";
import { MetricCard } from "@/components/ui/MetricCard";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { getBrandBySlug } from "@/lib/api-client";
import { CalendarDays, CheckCircle2, Coins, FileText } from "lucide-react";

export default async function ClientBrandPage({ params }: { params: { brandSlug: string } }) {
  const brand = await getBrandBySlug(params.brandSlug);
  const progress = Math.round((brand.plan.published / brand.plan.total) * 100);

  return (
    <ClientShell brandSlug={brand.slug}>
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <section className="card p-7">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-5"><div className="grid h-20 w-20 place-items-center rounded-3xl bg-gradient-to-br from-violet-500 to-fuchsia-400 text-2xl font-black">{brand.logo}</div><div><p className="text-sm font-bold text-violet-100">{brand.package.name} Plan</p><h1 className="mt-2 text-4xl font-black">{brand.name}</h1><p className="mt-1 text-white/50">{brand.handle}</p></div></div>
            <button className="rounded-2xl bg-white px-5 py-3 text-sm font-black text-black">Эрх нэмэх</button>
          </div>
          <div className="mt-6"><ProgressBar value={progress} label={`Энэ сарын явц ${brand.plan.published}/${brand.plan.total}`} /></div>
        </section>
        <section className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <MetricCard label="Үүссэн" value={brand.plan.generated} detail="AI generated" icon={<FileText className="h-5 w-5" />} />
          <MetricCard label="Нийтлэгдсэн" value={brand.plan.published} detail="published content" icon={<CheckCircle2 className="h-5 w-5" />} />
          <MetricCard label="Дараагийн" value={brand.plan.nextDate} detail={brand.plan.nextTopic} icon={<CalendarDays className="h-5 w-5" />} />
          <MetricCard label="Багц" value={brand.package.name} detail={`${brand.package.priceMnt.toLocaleString()}₮`} icon={<Coins className="h-5 w-5" />} />
        </section>
        <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_420px]">
          <section id="content"><h2 className="mb-4 text-2xl font-black">Миний контент</h2><div className="grid gap-4 md:grid-cols-2">{brand.content.map((item) => <ContentCard key={item.id} item={item} />)}</div></section>
          <CreditUsageCard credits={brand.credits} />
        </div>
        <section id="billing" className="mt-6 card p-5"><h2 className="text-2xl font-black">Төлбөр / эрх нэмэх</h2><p className="mt-2 text-sm leading-6 text-white/50">Эндээс хэрэглэгч нэмэлт post, carousel, reel эрх авах хүсэлт илгээнэ. Backend pass дээр real payment/request API холбоно.</p><button className="mt-4 rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-5 py-3 text-sm font-black text-white">Эрх нэмэх хүсэлт илгээх</button></section>
      </main>
    </ClientShell>
  );
}
