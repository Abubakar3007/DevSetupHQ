import { Link } from "@tanstack/react-router";
import { categoryName, type Product } from "@/data/catalog";
import { Rating } from "./ui-bits";

export function ProductCard({
  product,
  cta = "View Details",
}: {
  product: Product;
  cta?: string;
}) {
  return (
    <article className="group flex flex-col bg-white rounded-[10px] ring-1 ring-black/5 overflow-hidden transition-transform duration-300 hover:-translate-y-1">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={768}
          height={768}
          className="w-full aspect-square object-cover"
        />
        {product.isPlaceholder && (
          <span className="absolute top-3 left-3 font-mono text-[9px] uppercase tracking-[0.15em] text-brand/70 bg-white/85 px-2 py-1 rounded">
            Sample product
          </span>
        )}
      </div>
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.12em] text-steel">
          <span>{categoryName(product.categorySlug)}</span>
          <Rating value={product.rating} />
        </div>
        <h3 className="mt-3 font-display text-lg text-brand">{product.name}</h3>
        <p className="mt-1.5 font-sans text-sm text-brand/60 leading-relaxed">{product.tagline}</p>

        <div className="mt-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-steel">
            Best for
          </span>
          <ul className="mt-1.5 flex flex-wrap gap-1.5">
            {product.bestFor.slice(0, 3).map((b) => (
              <li
                key={b}
                className="font-mono text-[9px] uppercase tracking-[0.12em] text-brand/60 bg-paper rounded px-2 py-1"
              >
                {b}
              </li>
            ))}
          </ul>
        </div>

        <ul className="mt-4 space-y-1.5">
          {product.pros.slice(0, 2).map((pro) => (
            <li key={pro} className="font-sans text-xs text-brand/60 leading-relaxed">
              <span className="text-accent mr-1.5 font-mono">+</span>
              {pro}
            </li>
          ))}
        </ul>

        <Link
          to="/products/$slug"
          params={{ slug: product.slug }}
          className="mt-5 inline-flex self-start font-mono text-[11px] uppercase tracking-[0.15em] text-brand border border-brand/20 rounded px-3 py-2 transition-colors hover:border-accent hover:text-accent"
        >
          {cta}
        </Link>
      </div>
    </article>
  );
}
