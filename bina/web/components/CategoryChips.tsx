import { categories } from "@/lib/categories";

export default function CategoryChips() {
  return (
    <div className="no-scrollbar mb-6 flex gap-2 overflow-x-auto pb-2">
      {categories.map((c, i) => (
        <a
          key={c.slug}
          href={c.slug === "home" ? "/" : `/c/${c.slug}`}
          className={`whitespace-nowrap rounded-full px-4 py-1.5 text-sm ${
            i === 0
              ? "bg-white text-black"
              : "bg-bina-surface text-bina-muted hover:bg-bina-card hover:text-white"
          }`}
        >
          {c.icon} {c.name}
        </a>
      ))}
    </div>
  );
}
