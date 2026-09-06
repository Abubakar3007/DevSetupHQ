import { Link } from "@tanstack/react-router";
import type { Category } from "@/data/catalog";

export function CategoryCard({
  category,
  className = "",
}: {
  category: Category;
  className?: string;
}) {
  return (
    <Link
      to="/categories/$slug"
      params={{ slug: category.slug }}
      className={`group block bg-paper rounded-[10px] ring-1 ring-black/5 overflow-hidden transition-transform duration-300 hover:-translate-y-1 ${className}`}
    >
      <article>
        <div className="relative">
          <img
            src={category.image}
            alt={`${category.name} workspace`}
            loading="lazy"
            width={1024}
            height={768}
            className="w-full aspect-[4/3] object-cover"
          />
          <span
            aria-hidden="true"
            className="absolute top-3 left-3 grid h-9 w-9 place-items-center bg-white/90 rounded-[8px] text-base"
          >
            {category.glyph}
          </span>
          <span className="absolute top-3 right-3 font-mono text-[10px] uppercase tracking-[0.15em] text-brand/70 bg-white/85 px-2 py-1 rounded">
            {String(category.itemCount).padStart(3, "0")} items
          </span>
        </div>
        <div className="p-5">
          <h3 className="font-display text-xl text-brand">{category.name}</h3>
          <p className="mt-2 font-sans text-sm text-brand/60 leading-relaxed">{category.short}</p>
          <span className="mt-4 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-accent">
            Browse →
          </span>
        </div>
      </article>
    </Link>
  );
}
