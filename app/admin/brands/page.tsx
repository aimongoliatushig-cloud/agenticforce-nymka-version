import { AdminShell } from "@/components/layout/AdminShell";
import { BrandCard } from "@/components/brand/BrandCard";
import { brands } from "@/lib/mock-data";

export default function AdminBrandsPage() {
  return (
    <AdminShell>
      <main className="mx-auto max-w-[1600px] px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-4xl font-black">Brands</h1>
            <p className="mt-2 text-sm text-white/55">Monitor every brand monthly plan, credits, content, and next action.</p>
          </div>
          <button className="rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-5 py-3 text-sm font-black text-white">+ Add brand</button>
        </div>
        <div className="mt-6 grid gap-4 xl:grid-cols-2 2xl:grid-cols-3">
          {brands.map((brand) => <BrandCard key={brand.id} brand={brand} />)}
        </div>
      </main>
    </AdminShell>
  );
}
