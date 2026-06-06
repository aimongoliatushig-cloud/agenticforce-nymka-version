import Link from "next/link";
import { BarChart3, Bot, CalendarDays, Coins, FileText, Layers3, RotateCcw, Store, UserRound } from "lucide-react";

const nav = [
  { label: "Хянах самбар", href: "/admin", icon: BarChart3, sub: "Ерөнхий тойм" },
  { label: "Брэндүүд", href: "/admin/brands", icon: Store, sub: "Брэнд хянах" },
  { label: "Төлөвлөгөө", href: "/admin/plans", icon: CalendarDays, sub: "Сарын plan" },
  { label: "Эрх / Багц", href: "/admin/credits", icon: Coins, sub: "Credits" },
  { label: "Автомат ажил", href: "/admin/cron", icon: RotateCcw, sub: "Cron / queue" },
  { label: "Нийтлэлүүд", href: "/admin/history", icon: FileText, sub: "Published" },
  { label: "Темплейт", href: "/admin/templates", icon: Layers3, sub: "Creative" },
];

export function AdminShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen text-white">
      <aside className="fixed inset-y-0 left-0 hidden w-72 border-r border-white/10 bg-zinc-950/90 p-4 backdrop-blur-xl lg:block">
        <Link href="/admin" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-400 font-black">AF</span>
          <span><b className="block">AgenticForce</b><span className="text-xs text-white/45">Content Control OS</span></span>
        </Link>
        <nav className="mt-6 space-y-2">
          {nav.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.href} href={item.href} className="group flex items-center gap-3 rounded-2xl border border-transparent px-3 py-3 text-white/65 transition hover:border-violet-300/25 hover:bg-violet-500/10 hover:text-white">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/[0.06] text-violet-100"><Icon className="h-4 w-4" /></span>
                <span><b className="block text-sm">{item.label}</b><span className="text-xs text-white/40">{item.sub}</span></span>
              </Link>
            );
          })}
        </nav>
        <div className="absolute bottom-4 left-4 right-4 space-y-3">
          <div className="rounded-2xl border border-emerald-400/15 bg-emerald-400/10 p-3 text-sm font-semibold text-emerald-200">● Automation online</div>
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3"><UserRound className="h-5 w-5 text-violet-200" /><span><b className="block text-sm">Admin Operator</b><span className="text-xs text-white/45">AI content factory</span></span></div>
        </div>
      </aside>
      <div className="lg:pl-72">
        <div className="sticky top-0 z-20 border-b border-white/10 bg-black/70 p-4 backdrop-blur lg:hidden"><b>AgenticForce</b></div>
        {children}
      </div>
    </div>
  );
}
