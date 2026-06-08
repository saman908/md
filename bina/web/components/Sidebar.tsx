import { categories } from "@/lib/categories";

export default function Sidebar() {
  return (
    <aside className="sticky top-[61px] hidden h-[calc(100vh-61px)] w-60 shrink-0 overflow-y-auto border-l border-bina-border p-3 md:block">
      <nav className="flex flex-col gap-1">
        {categories.map((c) => (
          <a
            key={c.slug}
            href={c.slug === "home" ? "/" : `/c/${c.slug}`}
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm hover:bg-bina-surface"
          >
            <span className="text-lg">{c.icon}</span>
            <span>{c.name}</span>
          </a>
        ))}
      </nav>

      <div className="mt-4 border-t border-bina-border pt-4 text-xs text-bina-muted">
        <p className="px-3">بینا — پلاتفۆرمی نیشتیمانی</p>
        <p className="px-3 mt-1">وەشانی ٠.١ • هەنگاوی ١</p>
      </div>
    </aside>
  );
}
