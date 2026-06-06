import Link from "next/link";
import { Coins, FileText, Home, ReceiptText } from "lucide-react";

export function ClientShell({ children, brandSlug }: { children: React.ReactNode; brandSlug: string }) {
  const base = `/client/${brandSlug}`;
  return (
    <div className="min-h-screen text-white">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href={base} className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-400 font-black">AF</span><span><b className="block">AgenticForce</b><span className="text-xs text-white/45">My Brand Dashboard</span></span></Link>
          <nav className="hidden gap-2 md:flex">
            <Link className="rounded-xl px-3 py-2 text-sm text-white/60 hover:bg-white/10 hover:text-white" href={base}><Home className="mr-1 inline h-4 w-4" />Хянах</Link>
            <a className="rounded-xl px-3 py-2 text-sm text-white/60 hover:bg-white/10 hover:text-white" href="#content"><FileText className="mr-1 inline h-4 w-4" />Контент</a>
            <a className="rounded-xl px-3 py-2 text-sm text-white/60 hover:bg-white/10 hover:text-white" href="#credits"><Coins className="mr-1 inline h-4 w-4" />Эрх</a>
            <a className="rounded-xl px-3 py-2 text-sm text-white/60 hover:bg-white/10 hover:text-white" href="#billing"><ReceiptText className="mr-1 inline h-4 w-4" />Төлбөр</a>
          </nav>
        </div>
      </header>
      {children}
    </div>
  );
}
