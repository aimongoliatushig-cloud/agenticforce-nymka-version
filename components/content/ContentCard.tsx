import type { ContentItem } from "@/lib/types";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { ExternalLink } from "lucide-react";

export function ContentCard({ item }: { item: ContentItem }) {
  return (
    <article className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04] shadow-xl shadow-black/20 transition hover:-translate-y-0.5 hover:border-violet-300/35 hover:bg-white/[0.06]">
      <div className="relative aspect-[1.35] overflow-hidden bg-white/[0.04]">
        <img src={item.image} alt="" className="h-full w-full object-cover" />
        <div className="absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs font-black uppercase tracking-[0.08em]">{item.kind}</div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3"><h3 className="line-clamp-1 font-black">{item.title}</h3><StatusBadge status={item.status} /></div>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-white/50">{item.caption}</p>
        <div className="mt-4 flex items-center justify-between text-xs text-white/42"><span>{item.platform}</span><span>{item.date}</span></div>
        {item.url ? <a href={item.url} className="mt-4 inline-flex h-10 w-full items-center justify-center gap-2 rounded-xl bg-white text-sm font-black text-black hover:bg-violet-100">Пост харах <ExternalLink className="h-4 w-4" /></a> : null}
      </div>
    </article>
  );
}
