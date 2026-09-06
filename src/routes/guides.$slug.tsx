import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { getArticle, getProduct, relatedArticles } from "@/data/catalog";
import { ArticleCard } from "@/components/ArticleCard";
import { ProductCard } from "@/components/ProductCard";
import { AffiliateDisclosure } from "@/components/ui-bits";

export const Route = createFileRoute("/guides/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Guide not found — DevSetupHQ" }, { name: "robots", content: "noindex" }],
      };
    }
    const { article } = loaderData;
    return {
      meta: [
        { title: `${article.title} — DevSetupHQ` },
        { name: "description", content: article.excerpt },
        { property: "og:title", content: `${article.title} — DevSetupHQ` },
        { property: "og:description", content: article.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `https://gear-discovery-pro.lovable.app/guides/${article.slug}` },
      ],
      links: [{ rel: "canonical", href: `https://gear-discovery-pro.lovable.app/guides/${article.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.excerpt,
            author: { "@type": "Organization", name: article.author },
            datePublished: article.publishedAt,
          }),
        },
      ],
    };
  },
  component: ArticleDetail,
});

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

function ArticleDetail() {
  const { article } = Route.useLoaderData();
  const recommended = article.recommendedProducts
    .map((slug) => getProduct(slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
  const related = relatedArticles(article.slug);

  return (
    <>
      <section className="bg-paper border-b border-brand/10">
        <div className="shell py-12 md:py-16">
          <nav className="font-mono text-[10px] uppercase tracking-[0.15em] text-brand/45">
            <Link to="/guides" className="transition-colors hover:text-accent">
              Guides
            </Link>
            <span className="mx-2">/</span>
            <span>{article.category}</span>
          </nav>

          <h1 className="mt-8 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.03] text-brand text-balance max-w-[26ch]">
            {article.title}
          </h1>
          <p className="mt-6 font-sans text-base sm:text-lg text-brand/65 leading-relaxed max-w-[54ch] text-pretty">
            {article.excerpt}
          </p>
          <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.15em] text-steel">
            {article.author} · {formatDate(article.publishedAt)} · {article.readingTime}
          </p>

          <img
            src={article.cover}
            alt={article.title}
            width={1024}
            height={768}
            className="mt-10 w-full aspect-[16/9] rounded-[12px] object-cover outline outline-1 -outline-offset-1 outline-black/5"
          />
        </div>
      </section>

      <section className="bg-white">
        <div className="shell py-14 md:py-20">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            {/* Table of contents */}
            <aside className="lg:col-span-4 lg:order-2">
              <div className="lg:sticky lg:top-8 space-y-8">
                <nav aria-label="Table of contents" className="bg-paper rounded-[10px] ring-1 ring-black/5 p-5">
                  <span className="eyebrow">Contents</span>
                  <ol className="mt-4 space-y-2.5">
                    {article.sections.map((s, i) => (
                      <li key={s.id} className="font-sans text-sm">
                        <a
                          href={`#${s.id}`}
                          className="text-brand/65 transition-colors hover:text-accent"
                        >
                          <span className="font-mono text-[10px] text-accent mr-2">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          {s.heading}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
                <AffiliateDisclosure />
              </div>
            </aside>

            <div className="lg:col-span-8 lg:order-1">
              <article className="max-w-[68ch]">
                {article.sections.map((section) => (
                  <section key={section.id} id={section.id} className="scroll-mt-8 mb-10">
                    <h2 className="font-display text-2xl md:text-3xl text-brand text-balance">
                      {section.heading}
                    </h2>
                    {section.body.map((para) => (
                      <p
                        key={para.slice(0, 32)}
                        className="mt-4 font-sans text-base text-brand/70 leading-[1.75]"
                      >
                        {para}
                      </p>
                    ))}
                  </section>
                ))}

                <div className="grid sm:grid-cols-2 gap-5 mt-12">
                  <div className="bg-paper rounded-[10px] ring-1 ring-black/5 p-5">
                    <h2 className="font-display text-xl text-brand">What works</h2>
                    <ul className="mt-3 space-y-2.5">
                      {article.pros.map((p) => (
                        <li key={p} className="font-sans text-sm text-brand/65 leading-relaxed">
                          <span className="text-accent mr-2 font-mono text-xs">+</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-paper rounded-[10px] ring-1 ring-black/5 p-5">
                    <h2 className="font-display text-xl text-brand">What to watch</h2>
                    <ul className="mt-3 space-y-2.5">
                      {article.cons.map((c) => (
                        <li key={c} className="font-sans text-sm text-brand/65 leading-relaxed">
                          <span className="text-steel mr-2 font-mono text-xs">−</span>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>

              {recommended.length > 0 && (
                <div className="mt-14">
                  <span className="eyebrow">Recommended in this guide</span>
                  <div className="mt-6 grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
                    {recommended.map((p) => (
                      <ProductCard key={p.slug} product={p} cta="View Details" />
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-14 bg-brand text-paper rounded-[12px] p-8 md:p-10">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                  Next step
                </span>
                <h2 className="mt-3 font-display text-2xl md:text-3xl text-balance max-w-[28ch]">
                  Build the rest of your setup
                </h2>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-3 bg-accent text-white font-sans text-sm px-6 py-3.5 rounded-[8px] ring-1 ring-inset ring-accent/40 transition-colors hover:bg-paper hover:text-brand"
                  >
                    Browse Products <span className="font-mono text-xs">→</span>
                  </Link>
                  <Link
                    to="/categories"
                    className="inline-flex items-center font-sans text-sm px-6 py-3.5 rounded-[8px] border border-paper/25 text-paper transition-colors hover:border-paper"
                  >
                    Explore Setups
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-paper border-t border-brand/10">
          <div className="shell py-16">
            <span className="eyebrow">Related reading</span>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
