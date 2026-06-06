import { AdminShell } from "@/components/layout/AdminShell";
import { brands } from "@/lib/mock-data";

export default function ContentHistoryPage() {
  const rows = brands.flatMap((brand) => brand.content.map((item) => ({ brand, item })));
  return (
    <AdminShell>
      <main className="mx-auto max-w-[1500px] px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black">Content history</h1>
        <p className="mt-2 text-sm text-white/55">A visual list of brand content and publishing status.</p>
        <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04]">
          {rows.map(({ brand, item }) => (
            <div key={item.id} className="grid gap-3 border-b border-white/10 px-5 py-4 last:border-b-0 lg:grid-cols-[1.3fr_120px_120px_170px]">
              <div className="flex gap-3"><div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-violet-500/20 font-black text-violet-100">{brand.logo}</div><div><p className="font-black">{brand.name}</p><p className="text-sm text-white/55">{item.title}</p></div></div>
              <p className="flex items-center text-sm text-white/60">{item.platform}</p>
              <p className="flex items-center text-sm text-violet-100">{item.status}</p>
              <p className="flex items-center text-sm text-white/45">{item.date}</p>
            </div>
          ))}
        </div>
      </main>
    </AdminShell>
  );
}
