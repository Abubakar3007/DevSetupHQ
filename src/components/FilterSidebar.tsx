import { categories, PRICE_BANDS } from "@/data/catalog";

export function FilterSidebar({
  activeCategory,
  onCategoryChange,
  activePrice,
  onPriceChange,
  onReset,
}: {
  activeCategory: string;
  onCategoryChange: (value: string) => void;
  activePrice: string;
  onPriceChange: (value: string) => void;
  onReset: () => void;
}) {
  const rowClass = (active: boolean) =>
    `w-full text-left font-sans text-sm py-2 transition-colors ${
      active ? "text-accent" : "text-brand/65 hover:text-brand"
    }`;

  return (
    <aside className="bg-paper rounded-[10px] ring-1 ring-black/5 p-5">
      <div className="flex items-center justify-between">
        <span className="eyebrow">Filters</span>
        <button
          type="button"
          onClick={onReset}
          className="font-mono text-[10px] uppercase tracking-[0.15em] text-brand/50 transition-colors hover:text-accent"
        >
          Reset
        </button>
      </div>

      <div className="mt-6">
        <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-steel">Category</div>
        <div className="mt-2 divide-y divide-brand/5">
          <button type="button" onClick={() => onCategoryChange("all")} className={rowClass(activeCategory === "all")}>
            All categories
          </button>
          {categories.map((c) => (
            <button
              key={c.slug}
              type="button"
              onClick={() => onCategoryChange(c.slug)}
              className={rowClass(activeCategory === c.slug)}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-steel">
          Price range
        </div>
        <div className="mt-2 divide-y divide-brand/5">
          <button type="button" onClick={() => onPriceChange("all")} className={rowClass(activePrice === "all")}>
            Any price
          </button>
          {PRICE_BANDS.map((band) => (
            <button
              key={band.value}
              type="button"
              onClick={() => onPriceChange(band.value)}
              className={rowClass(activePrice === band.value)}
            >
              {band.label}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
