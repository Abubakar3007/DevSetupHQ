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
    <article
      className={`group bg-paper rounded-[10px] ring-1 ring-black/5 overflow-hidden transition-transform duration-300 hover:-translate-y-1 ${className}`}
    >
      <div className="relative">
        <img
          src={category.image}
          alt={`${category.name} workspace`}
          loading="lazy"
          width={1024}
          height={768}
          className="w-full aspect-[4/3] object-cover"
        />
        <span className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-[0.15em] text-brand/70 bg-white/80 px-2 py-1 rounded">
          {String(category.itemCount).padStart(3, "0")} items
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-display text-xl text-brand">
          <span aria-hidden="true" className="mr-2">
            {category.glyph}
          </span>
          {category.name}
        </h3>
        <p className="mt-2 font-sans text-sm text-brand/60 leading-relaxed">{category.short}</p>
        <Link
          to="/products"
          search={{ category: category.slug }}
          className="mt-4 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-accent"
        >
          Browse →
        </Link>
      </div>
    </article>
  );
}
