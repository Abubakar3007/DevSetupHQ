import { Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import { articles, products, setups } from "@/data/catalog";

/**
 * Global search. Runs against the local mock catalog for now; the same shape
 * of results can later be served by a database/full-text search query.
 */
export function SearchOverlay({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return { products: [], setups: [], guides: [] };
    return {
      products: products
        .filter((p) => `${p.name} ${p.tagline} ${p.bestFor.join(" ")}`.toLowerCase().includes(q))
        .slice(0, 4),
      setups: setups.filter((s) => `${s.name} ${s.tagline}`.toLowerCase().includes(q)).slice(0, 3),
      guides: articles
        .filter((a) => `${a.title} ${a.excerpt} ${a.category}`.toLowerCase().includes(q))
        .slice(0, 4),
    };
  }, [query]);

  const empty =
    query.trim() !== "" &&
    results.products.length === 0 &&
    results.setups.length === 0 &&
    results.guides.length === 0;

  const rowClass =
    "block py-2.5 font-sans text-sm text-brand/75 transition-colors hover:text-accent";

  return (
    <div className="fixed inset-0 z-50 bg-brand/40 backdrop-blur-sm px-4 py-16 sm:py-24">
      <div
        className="absolute inset-0"
        aria-hidden="true"
        onClick={onClose}
      />
      <div className="relative mx-auto w-full max-w-2xl bg-white rounded-[12px] ring-1 ring-black/10 overflow-hidden">
        <div className="flex items-center gap-3 border-b border-brand/10 px-5 py-4">
          <label className="sr-only" htmlFor="global-search">
            Search gear, setups and guides
          </label>
          <input
            id="global-search"
            type="search"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search gear, setups and guides"
            className="flex-1 bg-transparent font-sans text-base text-brand placeholder:text-brand/40 focus:outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            className="font-mono text-[10px] uppercase tracking-[0.15em] text-brand/50 transition-colors hover:text-accent"
          >
            Close
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto px-5 py-4">
          {query.trim() === "" && (
            <p className="font-sans text-sm text-brand/55 leading-relaxed">
              Try “keyboard”, “monitor”, “dual monitor setup” or “budget”.
            </p>
          )}

          {empty && (
            <p className="font-sans text-sm text-brand/55">
              Nothing matches that yet — try a broader word.
            </p>
          )}

          {results.products.length > 0 && (
            <section className="mb-4">
              <div className="eyebrow">Gear</div>
              <div className="mt-1 divide-y divide-brand/5">
                {results.products.map((p) => (
                  <Link
                    key={p.slug}
                    to="/products/$slug"
                    params={{ slug: p.slug }}
                    onClick={onClose}
                    className={rowClass}
                  >
                    {p.name}
                  </Link>
                ))}
              </div>
            </section>
          )}

          {results.setups.length > 0 && (
            <section className="mb-4">
              <div className="eyebrow">Setups</div>
              <div className="mt-1 divide-y divide-brand/5">
                {results.setups.map((s) => (
                  <Link
                    key={s.slug}
                    to="/setups/$slug"
                    params={{ slug: s.slug }}
                    onClick={onClose}
                    className={rowClass}
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            </section>
          )}

          {results.guides.length > 0 && (
            <section>
              <div className="eyebrow">Guides</div>
              <div className="mt-1 divide-y divide-brand/5">
                {results.guides.map((a) => (
                  <Link
                    key={a.slug}
                    to="/guides/$slug"
                    params={{ slug: a.slug }}
                    onClick={onClose}
                    className={rowClass}
                  >
                    {a.title}
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
