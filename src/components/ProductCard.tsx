import { Link } from "@tanstack/react-router";
import { categoryName, type Product } from "@/data/catalog";
import { Rating } from "./ui-bits";

export function ProductCard({
  product,
  cta = "View Product",
}: {
  product: Product;
  cta?: string;
}) {
  return (
    <article className="group bg-white rounded-[10px] ring-1 ring-black/5 overflow-hidden transition-transform duration-300 hover:-translate-y-1">
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        width={768}
        height={768}
        className="w-full aspect-square object-cover"
      />
      <div className="p-5">
        <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.12em] text-steel">
          <span>{categoryName(product.categorySlug)}</span>
          <Rating value={product.rating} />
        </div>
        <h3 className="mt-3 font-display text-lg text-brand">{product.name}</h3>
        <p className="mt-1.5 font-sans text-sm text-brand/60 leading-relaxed">{product.tagline}</p>
        <Link
          to="/products/$slug"
          params={{ slug: product.slug }}
          className="mt-4 inline-flex font-mono text-[11px] uppercase tracking-[0.15em] text-brand border border-brand/20 rounded px-3 py-2 transition-colors hover:border-accent hover:text-accent"
        >
          {cta}
        </Link>
      </div>
    </article>
  );
}
