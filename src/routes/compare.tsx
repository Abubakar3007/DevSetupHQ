import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

import { categoryName, comparisons, productsBySlugs } from "@/data/catalog";
import { AffiliateDisclosure, PageHeader, Rating } from "@/components/ui-bits";

export const Route = createFileRoute("/compare")({
  head: () => ({
    meta: [
      { title: "Compare Developer Gear — DevSetupHQ" },
      {
        name: "description",
        content:
          "Compare keyboards, monitors, stands and docks side by side on features, ratings, pros and cons to find the right developer gear.",
      },
      { property: "og:title", content: "Compare Developer Gear — DevSetupHQ" },
      {
        property: "og:description",
        content: "Side-by-side comparisons of developer gear on features, ratings, pros and cons.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://gear-discovery-pro.lovable.app/compare" },
    ],
    links: [{ rel: "canonical", href: "https://gear-discovery-pro.lovable.app/compare" }],
  }),
  component: ComparePage,
});

function ComparePage() {
  const [active, setActive] = useState(comparisons[0]!.slug);
  const comparison = comparisons.find((c) => c.slug === active) ?? comparisons[0]!;
  const items = productsBySlugs(comparison.productSlugs);

  return (
    <>
      <PageHeader
        eyebrow="Compare"
        title="Compare Developer Gear"
        intro="Put similar gear side by side on features, ratings, pros and cons. Sample data for now — real product data can be connected later."
      />

      <section className="bg-white">
        <div className="shell py-14 md:py-20">
          <div className="flex flex-wrap gap-2">
            {comparisons.map((c) => (
              <button
                key={c.slug}
                type="button"
                onClick={() => setActive(c.slug)}
                className={`font-mono text-[10px] uppercase tracking-[0.15em] px-3 py-2 rounded border transition-colors ${
                  c.slug === comparison.slug
                    ? "border-accent text-accent"
                    : "border-brand/15 text-brand/60 hover:border-brand/40"
                }`}
              >
                {c.title}
              </button>
            ))}
          </div>

          <p className="mt-6 font-sans text-sm text-brand/60 leading-relaxed max-w-[56ch]">
            {comparison.description}
          </p>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {items.map((p) => (
              <article
                key={p.slug}
                className="flex flex-col bg-paper rounded-[10px] ring-1 ring-black/5 overflow-hidden"
              >
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  width={768}
                  height={768}
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="flex flex-col flex-1 p-5">
                  <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.12em] text-steel">
                    <span>{categoryName(p.categorySlug)}</span>
                    <Rating value={p.rating} />
                  </div>
                  <h2 className="mt-3 font-display text-xl text-brand">{p.name}</h2>
                  {p.isPlaceholder && (
                    <span className="mt-2 self-start font-mono text-[9px] uppercase tracking-[0.15em] text-brand/50 border border-brand/15 rounded px-2 py-1">
                      Sample product
                    </span>
                  )}

                  <div className="mt-5">
                    <div className="eyebrow">Best for</div>
                    <ul className="mt-2 flex flex-wrap gap-1.5">
                      {p.bestFor.map((b) => (
                        <li
                          key={b}
                          className="font-mono text-[9px] uppercase tracking-[0.12em] text-brand/60 bg-white rounded px-2 py-1"
                        >
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5">
                    <div className="eyebrow">Key features</div>
                    <ul className="mt-2 space-y-1.5">
                      {p.features.slice(0, 3).map((f) => (
                        <li key={f} className="font-sans text-sm text-brand/65 leading-relaxed">
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5">
                    <div className="eyebrow">Pros</div>
                    <ul className="mt-2 space-y-1.5">
                      {p.pros.slice(0, 3).map((pro) => (
                        <li key={pro} className="font-sans text-sm text-brand/65 leading-relaxed">
                          <span className="text-accent mr-2 font-mono text-xs">+</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5">
                    <div className="eyebrow">Cons</div>
                    <ul className="mt-2 space-y-1.5">
                      {p.cons.slice(0, 3).map((con) => (
                        <li key={con} className="font-sans text-sm text-brand/65 leading-relaxed">
                          <span className="text-steel mr-2 font-mono text-xs">−</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to="/products/$slug"
                    params={{ slug: p.slug }}
                    className="mt-6 mt-auto inline-flex self-start font-mono text-[11px] uppercase tracking-[0.15em] text-brand border border-brand/20 rounded px-3 py-2 transition-colors hover:border-accent hover:text-accent"
                  >
                    View Details →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 max-w-xl">
            <AffiliateDisclosure />
          </div>
        </div>
      </section>
    </>
  );
}
