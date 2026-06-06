import type { Brand } from "@/lib/types";
import { StatusBadge } from "@/components/ui/StatusBadge";

export function LogTable({ brands }: { brands: Brand[] }) {
  const logs = brands.flatMap((brand) => brand.content.map((content) => ({ brand, content }))).sort((a, b) => b.content.date.localeCompare(a.content.date));
  return (
    <div className="card overflow-hidden">
      <div className="hidden grid-cols-[1.4fr_120px_120px_160px] gap-3 border-b border-white/10 px-5 py-3 text-xs font-black uppercase tracking-[.12em] text-white/35 lg:grid"><span>Брэнд / Контент</span><span>Платформ</span><span>Төлөв</span><span>Огноо</span></div>
      <div className="divide-y divide-white/10">
        {logs.map(({ brand, content }) => (
          <div key={content.id} className="grid gap-3 px-5 py-4 hover:bg-white/[0.03] lg:grid-cols-[1.4fr_120px_120px_160px]">
            <div className="flex gap-3"><div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-violet-500/20 font-black text-violet-100">{brand.logo}</div><div><p className="font-black">{brand.name}</p><p className="line-clamp-1 text-sm text-white/50">{content.title}</p></div></div>
            <div className="flex items-center text-sm text-white/65">{content.platform}</div>
            <div className="flex items-center"><StatusBadge status={content.status} /></div>
            <div className="flex items-center text-sm text-white/45">{content.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
