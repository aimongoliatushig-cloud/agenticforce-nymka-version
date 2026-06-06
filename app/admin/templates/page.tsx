import { AdminShell } from "@/components/layout/AdminShell";
import { Layers3, Plus } from "lucide-react";

const templates = [
  { name: "AI Academy Poster", brand: "AI Global Academy", type: "POSTER", platform: "Facebook", used: 12, gradient: "from-amber-500 to-yellow-300" },
  { name: "Coffee Promo", brand: "Luna Brew", type: "POSTER", platform: "Instagram", used: 8, gradient: "from-orange-800 to-amber-400" },
  { name: "AI Service Carousel", brand: "Postly.mn", type: "CAROUSEL", platform: "LinkedIn", used: 5, gradient: "from-violet-600 to-blue-400" },
  { name: "Green Life Story", brand: "Green Life", type: "STORY", platform: "Facebook", used: 3, gradient: "from-emerald-700 to-lime-300" },
];

export default function TemplatesPage() {
  return (
    <AdminShell>
      <main className="mx-auto max-w-[1500px] px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div><h1 className="text-4xl font-black">Templates</h1><p className="mt-2 text-sm text-white/55">Admin/operator creates templates. Clients only see final outputs.</p></div>
          <button className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-5 py-3 text-sm font-black text-white"><Plus className="h-4 w-4" />New template</button>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <button className="grid min-h-[320px] place-items-center rounded-[1.5rem] border border-dashed border-violet-300/25 bg-white/[0.02] p-6 text-center hover:bg-violet-300/5"><div><span className="mx-auto grid h-16 w-16 place-items-center rounded-3xl bg-violet-500 text-white"><Plus className="h-8 w-8" /></span><p className="mt-5 font-black">Create template</p><p className="mt-2 text-sm text-white/45">Reusable layout for AI generated content.</p></div></button>
          {templates.map((item) => <article key={item.name} className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04]"><div className={`grid aspect-[1.35] place-items-center bg-gradient-to-br ${item.gradient}`}><Layers3 className="h-16 w-16 text-white/80" /></div><div className="p-4"><h2 className="font-black">{item.name}</h2><p className="mt-1 text-sm text-violet-100">{item.brand}</p><p className="mt-3 text-sm text-white/50">{item.type} · {item.platform}</p><p className="mt-1 text-sm text-white/40">Used {item.used} times</p></div></article>)}
        </div>
      </main>
    </AdminShell>
  );
}
