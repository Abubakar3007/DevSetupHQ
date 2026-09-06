import { createFileRoute, Link } from "@tanstack/react-router";

import heroDesk from "@/assets/hero-desk.jpg";
import { articles, categories, products } from "@/data/catalog";
import { CategoryCard } from "@/components/CategoryCard";
import { ProductCard } from "@/components/ProductCard";
import { ArticleRow } from "@/components/ArticleCard";
import { NewsletterForm } from "@/components/NewsletterForm";
import { SectionHeader } from "@/components/ui-bits";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SetupForge — Build a Better Setup" },
      {
        name: "description",
        content:
          "Discover the best tech, desk and workspace products to upgrade your productivity and build a setup you love.",
      },
      { property: "og:title", content: "SetupForge — Build a Better Setup" },
      {
        property: "og:description",
        content:
          "Discover the best tech, desk and workspace products to upgrade your productivity and build a setup you love.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const benefits = [
  {
    n: "01",
    title: "Expert Recommendations",
    body: "Carefully researched product recommendations, tested rather than auto-generated.",
  },
  {
    n: "02",
    title: "Better Productivity",
    body: "Products chosen to make your workspace genuinely work harder for you.",
  },
  {
    n: "03",
    title: "Save Time",
    body: "Compare products without spending hours researching — we've already done it.",
  },
  {
    n: "04",
    title: "Curated Guides",
    body: "Simple and useful buying guides that lead to better decisions.",
  },
];

function Home() {
  const trending = products.slice(0, 4);
  const guides = articles.slice(1, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative bg-paper overflow-hidden">
        <div className="shell pt-16 pb-20 md:pt-24 md:pb-28">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <div className="mb-8 flex items-center gap-3 eyebrow">
                <span className="h-px w-8 bg-accent" />
                <span>Workspace index — Vol. 04</span>
              </div>
              <h1 className="font-display text-[3.25rem] leading-[1.02] sm:text-7xl text-brand text-balance max-w-[48ch]">
                Build Your <em className="italic text-accent font-medium">Perfect</em> Setup
              </h1>
              <p className="mt-8 font-sans text-base sm:text-lg text-brand/65 leading-relaxed max-w-[46ch] text-pretty">
                Discover the best tech, desk, and workspace products to upgrade your productivity
                and craft a setup you love.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  to="/categories"
                  className="group inline-flex items-center gap-3 bg-accent text-white font-sans text-sm px-6 py-3.5 rounded-[8px] ring-1 ring-inset ring-accent/40 transition-colors hover:bg-brand"
                >
                  Explore Setups
                  <span className="font-mono text-xs">→</span>
                </Link>
                <Link
                  to="/products"
                  className="inline-flex items-center font-sans text-sm px-6 py-3.5 rounded-[8px] border border-brand/20 text-brand transition-colors hover:border-brand"
                >
                  Browse Products
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative">
                <img
                  src={heroDesk}
                  alt="Machined aluminium desk setup with a mechanical keyboard, monitor and warm accent light"
                  width={1024}
                  height={1280}
                  className="w-full aspect-[4/5] rounded-[12px] object-cover outline outline-1 -outline-offset-1 outline-black/5"
                />
                <div className="absolute -bottom-3 -left-3 bg-brand text-paper font-mono text-[10px] uppercase tracking-[0.18em] px-3 py-2 rounded-[6px]">
                  4.9 avg rating
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-white border-t border-brand/10">
        <div className="shell py-16 md:py-20">
          <SectionHeader
            index="01"
            eyebrow="Explore"
            title="Browse by category"
            action={
              <Link
                to="/categories"
                className="hidden sm:inline font-mono text-[11px] uppercase tracking-[0.15em] text-brand/60 transition-colors hover:text-accent"
              >
                View all
              </Link>
            }
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <CategoryCard category={categories[0]!} />
            <CategoryCard category={categories[1]!} />
            <CategoryCard category={categories[2]!} className="sm:col-span-2 lg:col-span-1" />
          </div>
        </div>
      </section>

      {/* TRENDING */}
      <section className="bg-paper border-t border-brand/10">
        <div className="shell py-16 md:py-20">
          <SectionHeader index="02" eyebrow="Trending" title="This week's products" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {trending.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* GUIDES + TRUST */}
      <section className="bg-white border-t border-brand/10">
        <div className="shell py-16 md:py-20">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <span className="eyebrow">03 — Reading</span>
              <h2 className="mt-3 mb-8 font-display text-3xl md:text-4xl text-brand text-balance max-w-[30ch]">
                Popular guides
              </h2>
              <div className="space-y-5">
                {guides.map((article) => (
                  <ArticleRow key={article.slug} article={article} />
                ))}
              </div>
              <Link
                to="/guides"
                className="mt-6 inline-flex font-mono text-[11px] uppercase tracking-[0.15em] text-brand/60 transition-colors hover:text-accent"
              >
                All guides →
              </Link>
            </div>
            <div className="lg:col-span-5">
              <span className="eyebrow">04 — Why SetupForge</span>
              <div className="mt-5 divide-y divide-brand/10">
                {benefits.map((b) => (
                  <div key={b.n} className="py-5">
                    <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-accent">
                      {b.n}
                    </div>
                    <h3 className="mt-1 font-display text-xl text-brand">{b.title}</h3>
                    <p className="mt-1.5 font-sans text-sm text-brand/60 leading-relaxed">
                      {b.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-brand text-paper">
        <div className="shell py-16 md:py-20">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                Newsletter
              </span>
              <h2 className="mt-3 font-display text-3xl md:text-5xl leading-tight text-balance max-w-[30ch]">
                Upgrade Your Setup
              </h2>
              <p className="mt-4 font-sans text-base text-paper/70 leading-relaxed max-w-[44ch]">
                Get the latest setup ideas, product recommendations, and productivity tips — a few
                times a month, no noise.
              </p>
            </div>
            <div className="lg:col-span-5">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
