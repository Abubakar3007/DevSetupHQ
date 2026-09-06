import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import { products, SORT_OPTIONS } from "@/data/catalog";
import { ProductCard } from "@/components/ProductCard";
import { SearchBar } from "@/components/SearchBar";
import { FilterSidebar } from "@/components/FilterSidebar";
import { AffiliateDisclosure, PageHeader } from "@/components/ui-bits";

type ProductSearch = { category: string | undefined; q: string | undefined };

export const Route = createFileRoute("/products/")({
  validateSearch: (search: Record<string, unknown>): ProductSearch => ({
    category: typeof search["category"] === "string" ? search["category"] : undefined,
    q: typeof search["q"] === "string" ? search["q"] : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Workspace Products — SetupForge" },
      {
        name: "description",
        content:
          "Search and filter desk, developer and home office products by category, price range and rating.",
      },
      { property: "og:title", content: "Workspace Products — SetupForge" },
      {
        property: "og:description",
        content: "Search and filter desk, developer and home office products.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const search = Route.useSearch();
  const [query, setQuery] = useState(search.q ?? "");
  const [category, setCategory] = useState(search.category ?? "all");
  const [price, setPrice] = useState("all");
  const [sort, setSort] = useState<string>("featured");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = products.filter((p) => {
      const matchesQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q);
      const matchesCategory = category === "all" || p.categorySlug === category;
      const matchesPrice = price === "all" || p.priceBand === price;
      return matchesQuery && matchesCategory && matchesPrice;
    });

    if (sort === "rating") return [...list].sort((a, b) => b.rating - a.rating);
    if (sort === "name") return [...list].sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [query, category, price, sort]);

  return (
    <>
      <PageHeader
        eyebrow="02 — Products"
        title="The product index"
        intro="Everything we currently recommend, in one place. Filter by category and price, or search for the piece you're missing."
      />

      <section className="bg-white">
        <div className="shell py-12 md:py-16">
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-3">
              <FilterSidebar
                activeCategory={category}
                onCategoryChange={setCategory}
                activePrice={price}
                onPriceChange={setPrice}
                onReset={() => {
                  setCategory("all");
                  setPrice("all");
                  setQuery("");
                }}
              />
            </div>

            <div className="lg:col-span-9">
              <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                <div className="flex-1">
                  <SearchBar value={query} onChange={setQuery} />
                </div>
                <div>
                  <label className="sr-only" htmlFor="sort">
                    Sort products
                  </label>
                  <select
                    id="sort"
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="bg-white border border-brand/15 rounded-[8px] px-4 py-3 font-mono text-[11px] uppercase tracking-[0.12em] text-brand/70 focus:outline-none focus:border-accent"
                  >
                    {SORT_OPTIONS.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <p className="mt-4 eyebrow">
                {visible.length} product{visible.length === 1 ? "" : "s"}
              </p>

              {visible.length === 0 ? (
                <p className="mt-10 font-sans text-sm text-brand/60">
                  Nothing matches those filters yet. Try a wider price range.
                </p>
              ) : (
                <div className="mt-6 grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
                  {visible.map((product) => (
                    <ProductCard key={product.slug} product={product} cta="View Details" />
                  ))}
                </div>
              )}

              <div className="mt-10">
                <AffiliateDisclosure />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
