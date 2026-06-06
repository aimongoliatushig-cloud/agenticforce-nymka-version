import { AdminShell } from "@/components/layout/AdminShell";
import { CreditUsageCard } from "@/components/credits/CreditUsageCard";
import { brands, creditRequests, packages } from "@/lib/mock-data";

export default function CreditsPage() {
  return (
    <AdminShell>
      <main className="mx-auto max-w-[1500px] px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black">Credits / Packages</h1>
        <p className="mt-2 text-sm text-white/55">Хэрэглэгчийн багц, үлдсэн эрх, эрх нэмэх хүсэлтийг хянах хэсэг.</p>
        <section className="mt-6 grid gap-4 md:grid-cols-3">
          {packages.map((plan) => <div key={plan.id} className="card p-5"><h2 className="text-2xl font-black">{plan.name}</h2><p className="mt-2 text-3xl font-black text-violet-100">{plan.priceMnt.toLocaleString()}₮</p><p className="mt-3 text-sm text-white/50">{plan.includedPosts} post · {plan.includedCarousels} carousel · {plan.includedReels} reel</p></div>)}
        </section>
        <section className="mt-6 grid gap-6 xl:grid-cols-2">{brands.map((brand) => <CreditUsageCard key={brand.id} credits={brand.credits} compact />)}</section>
        <section className="mt-6 card p-5"><h2 className="text-2xl font-black">Credit purchase requests</h2><div className="mt-4 grid gap-3">{creditRequests.map((req) => <div key={req.id} className="rounded-2xl border border-white/10 bg-black/25 p-4"><div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between"><div><b>{req.brandName}</b><p className="mt-1 text-sm text-white/45">{req.posts} post · {req.carousels} carousel · {req.reels} reel</p></div><div className="text-right"><p className="font-black">{req.amountMnt.toLocaleString()}₮</p><p className="text-sm text-violet-100">{req.status}</p></div></div></div>)}</div></section>
      </main>
    </AdminShell>
  );
}
