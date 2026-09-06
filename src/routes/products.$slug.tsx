import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { categoryName, getProduct, products } from "@/data/catalog";
import { ProductCard } from "@/components/ProductCard";
import { AffiliateDisclosure, Rating } from "@/components/ui-bits";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Product not found — SetupForge" }, { name: "robots", content: "noindex" }],
      };
    }
    const { product } = loaderData;
    const description = `${product.tagline} Read our review of the ${product.name}, including pros, cons and specifications.`;
    return {
      meta: [
        { title: `${product.name} Review — SetupForge` },
        { name: "description", content: description },
        { property: "og:title", content: `${product.name} Review — SetupForge` },
        { property: "og:description", content: description },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `/products/${product.slug}` },
      ],
      links: [{ rel: "canonical", href: `/products/${product.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            description: product.description,
            category: categoryName(product.categorySlug),
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: product.rating,
              bestRating: 5,
              ratingCount: 128,
            },
          }),
        },
      ],
    };
  },
  component: ProductDetail,
});

function ProductDetail() {
  const { product } = Route.useLoaderData();
  const related = products
    .filter((p) => p.slug !== product.slug && p.categorySlug === product.categorySlug)
    .slice(0, 3);

  return (
    <>
      <section className="bg-paper border-b border-brand/10">
        <div className="shell py-12 md:py-16">
          <nav className="font-mono text-[10px] uppercase tracking-[0.15em] text-brand/45">
            <Link to="/products" className="transition-colors hover:text-accent">
              Products
            </Link>
            <span className="mx-2">/</span>
            <span>{categoryName(product.categorySlug)}</span>
          </nav>

          <div className="mt-8 grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-6">
              <img
                src={product.image}
                alt={product.name}
                width={768}
                height={768}
                className="w-full aspect-square rounded-[12px] object-cover outline outline-1 -outline-offset-1 outline-black/5"
              />
            </div>

            <div className="lg:col-span-6">
              <div className="flex items-center gap-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                  {categoryName(product.categorySlug)}
                </span>
                <Rating value={product.rating} />
              </div>
              <h1 className="mt-4 font-display text-4xl sm:text-5xl leading-[1.05] text-brand text-balance">
                {product.name}
              </h1>
              <p className="mt-5 font-sans text-base sm:text-lg text-brand/65 leading-relaxed max-w-[48ch]">
                {product.tagline}
              </p>
              <p className="mt-4 font-sans text-sm text-brand/60 leading-relaxed max-w-[52ch]">
                {product.description}
              </p>

              <div className="mt-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.12em] text-brand/60">
                <span className="border border-brand/15 rounded px-3 py-1.5">
                  {product.priceLabel}
                </span>
              </div>

              <a
                href={product.affiliateUrl}
                rel="nofollow sponsored noopener"
                className="mt-8 inline-flex items-center gap-3 bg-accent text-white font-sans text-sm px-6 py-3.5 rounded-[8px] ring-1 ring-inset ring-accent/40 transition-colors hover:bg-brand"
              >
                Check Latest Price <span className="font-mono text-xs">→</span>
              </a>

              <div className="mt-6">
                <AffiliateDisclosure />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="shell py-14 md:py-20">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <span className="eyebrow">Verdict</span>
              <div className="mt-5 grid sm:grid-cols-2 gap-5">
                <div className="bg-paper rounded-[10px] ring-1 ring-black/5 p-5">
                  <h2 className="font-display text-xl text-brand">Pros</h2>
                  <ul className="mt-3 space-y-2.5">
                    {product.pros.map((p) => (
                      <li key={p} className="font-sans text-sm text-brand/65 leading-relaxed">
                        <span className="text-accent mr-2 font-mono text-xs">+</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-paper rounded-[10px] ring-1 ring-black/5 p-5">
                  <h2 className="font-display text-xl text-brand">Cons</h2>
                  <ul className="mt-3 space-y-2.5">
                    {product.cons.map((c) => (
                      <li key={c} className="font-sans text-sm text-brand/65 leading-relaxed">
                        <span className="text-steel mr-2 font-mono text-xs">−</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <h2 className="mt-12 font-display text-2xl text-brand">Key features</h2>
              <ul className="mt-4 divide-y divide-brand/10">
                {product.features.map((f) => (
                  <li key={f} className="py-3 font-sans text-sm text-brand/65 leading-relaxed">
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5">
              <span className="eyebrow">Specifications</span>
              <table className="mt-5 w-full border border-brand/10 rounded-[10px] overflow-hidden">
                <caption className="sr-only">{product.name} specifications</caption>
                <tbody>
                  {product.specs.map((spec, i) => (
                    <tr key={spec.label} className={i % 2 ? "bg-white" : "bg-paper"}>
                      <th
                        scope="row"
                        className="text-left align-top px-4 py-3 font-mono text-[10px] uppercase tracking-[0.15em] text-steel w-2/5"
                      >
                        {spec.label}
                      </th>
                      <td className="px-4 py-3 font-sans text-sm text-brand/75">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-paper border-t border-brand/10">
          <div className="shell py-16">
            <span className="eyebrow">Also in {categoryName(product.categorySlug)}</span>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} cta="View Details" />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
