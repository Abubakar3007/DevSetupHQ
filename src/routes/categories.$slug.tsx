import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { getCategory, productsByCategory } from "@/data/catalog";
import { ProductCard } from "@/components/ProductCard";
import { AffiliateDisclosure } from "@/components/ui-bits";

export const Route = createFileRoute("/categories/$slug")({
  loader: ({ params }) => {
    const category = getCategory(params.slug);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Category not found — DevSetupHQ" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { category } = loaderData;
    return {
      meta: [
        { title: `${category.name} — DevSetupHQ` },
        { name: "description", content: category.short },
        { property: "og:title", content: `${category.name} — DevSetupHQ` },
        { property: "og:description", content: category.short },
        { property: "og:type", content: "website" },
        {
          property: "og:url",
          content: `https://gear-discovery-pro.lovable.app/categories/${category.slug}`,
        },
      ],
      links: [
        {
          rel: "canonical",
          href: `https://gear-discovery-pro.lovable.app/categories/${category.slug}`,
        },
      ],
    };
  },
  component: CategoryDetail,
});

function CategoryDetail() {
  const { category } = Route.useLoaderData();
  const items = productsByCategory(category.slug);

  return (
    <>
      <section className="bg-paper border-b border-brand/10">
        <div className="shell py-12 md:py-16">
          <nav className="font-mono text-[10px] uppercase tracking-[0.15em] text-brand/45">
            <Link to="/categories" className="transition-colors hover:text-accent">
              Categories
            </Link>
            <span className="mx-2">/</span>
            <span>{category.name}</span>
          </nav>

          <div className="mt-8 grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                {items.length} sample {items.length === 1 ? "product" : "products"}
              </span>
              <h1 className="mt-4 font-display text-4xl sm:text-5xl leading-[1.05] text-brand text-balance">
                <span aria-hidden="true" className="mr-3">
                  {category.glyph}
                </span>
                {category.name}
              </h1>
              <p className="mt-5 font-sans text-base sm:text-lg text-brand/65 leading-relaxed max-w-[52ch]">
                {category.description}
              </p>
            </div>
            <div className="lg:col-span-5">
              <img
                src={category.image}
                alt={`${category.name} workspace`}
                width={1024}
                height={768}
                className="w-full aspect-[4/3] rounded-[12px] object-cover outline outline-1 -outline-offset-1 outline-black/5"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="shell py-14 md:py-20">
          {items.length === 0 ? (
            <p className="font-sans text-sm text-brand/60">
              No gear listed in this category yet.
            </p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {items.map((p) => (
                <ProductCard key={p.slug} product={p} cta="View Details" />
              ))}
            </div>
          )}

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/products"
              search={{ category: category.slug }}
              className="inline-flex items-center gap-3 bg-accent text-white font-sans text-sm px-6 py-3.5 rounded-[8px] ring-1 ring-inset ring-accent/40 transition-colors hover:bg-brand"
            >
              Browse all gear <span className="font-mono text-xs">→</span>
            </Link>
            <Link
              to="/compare"
              className="inline-flex items-center font-sans text-sm px-6 py-3.5 rounded-[8px] border border-brand/20 text-brand transition-colors hover:border-brand"
            >
              Compare Products
            </Link>
          </div>

          <div className="mt-10 max-w-xl">
            <AffiliateDisclosure />
          </div>
        </div>
      </section>
    </>
  );
}
