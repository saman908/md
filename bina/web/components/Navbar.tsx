export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 flex items-center gap-4 border-b border-bina-border bg-bina-bg/95 px-4 py-3 backdrop-blur">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-bina-accent font-bold text-white">
          ب
        </div>
        <span className="text-xl font-extrabold tracking-tight">بینا</span>
      </div>

      {/* Search */}
      <div className="mx-auto hidden w-full max-w-xl items-center md:flex">
        <input
          type="text"
          placeholder="گەڕان لە بینا..."
          className="w-full rounded-r-full border border-bina-border bg-bina-surface px-4 py-2 text-sm outline-none focus:border-bina-accent"
        />
        <button className="rounded-l-full border border-r-0 border-bina-border bg-bina-card px-5 py-2 text-sm hover:bg-bina-border">
          🔍
        </button>
      </div>

      {/* Actions */}
      <div className="ms-auto flex items-center gap-3 md:ms-0">
        <button className="hidden rounded-full border border-bina-border px-4 py-2 text-sm hover:bg-bina-surface sm:block">
          ⬆️ بارکردن
        </button>
        <button className="rounded-full bg-bina-accent px-4 py-2 text-sm font-medium text-white hover:opacity-90">
          چوونەژوورەوە
        </button>
      </div>
    </header>
  );
}
