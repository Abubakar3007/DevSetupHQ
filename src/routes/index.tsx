import { createFileRoute, Link } from "@tanstack/react-router";

import heroDesk from "@/assets/hero-desk.jpg";
import { articles, categories, featuredProducts, setups } from "@/data/catalog";
import { CategoryCard } from "@/components/CategoryCard";
import { ProductCard } from "@/components/ProductCard";
import { SetupCard } from "@/components/SetupCard";
import { ArticleRow } from "@/components/ArticleCard";
import { NewsletterForm } from "@/components/NewsletterForm";
import { SectionHeader } from "@/components/ui-bits";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DevSetupHQ — Build Your Ultimate Developer Setup" },
      {
        name: "description",
        content:
          "Discover the best gear, desk setups, and productivity tools for developers, programmers, and modern professionals.",
      },
      { property: "og:title", content: "DevSetupHQ — Build Your Ultimate Developer Setup" },
      {
        property: "og:description",
        content:
          "Discover the best gear, desk setups, and productivity tools for developers, programmers, and modern professionals.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://gear-discovery-pro.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://gear-discovery-pro.lovable.app/" }],
  }),
  component: Home,
});

const benefits = [
  {
    n: "01",
    title: "Research-Led Recommendations",
    body: "Carefully researched product recommendations designed to help you compare options and make better buying decisions.",
  },
  {
    n: "02",
    title: "Built For Developers",
    body: "Gear chosen around coding workflows — key feel, text clarity, multi-monitor space and long sessions.",
  },
  {
    n: "03",
    title: "Save Time",
    body: "Compare options without spending hours researching — the criteria are laid out for you.",
  },
  {
    n: "04",
    title: "Practical Guides",
    body: "Straightforward buying guides and setup ideas that lead to better decisions.",
  },
];

const researchCriteria = [
  "Product specifications",
  "Features",
  "User feedback",
  "Expert reviews",
  "Value for money",
  "Compatibility",
  "Developer use cases",
];

function Home() {
  const trending = featuredProducts(4);
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
                <span>Developer workspace index — Vol. 04</span>
              </div>
              <h1 className="font-display text-[3.25rem] leading-[1.02] sm:text-7xl text-brand text-balance max-w-[48ch]">
                Build Your <em className="italic text-accent font-medium">Ultimate</em> Developer
                Setup
              </h1>
              <p className="mt-8 font-sans text-base sm:text-lg text-brand/65 leading-relaxed max-w-[46ch] text-pretty">
                Discover the best gear, desk setups, and productivity tools for developers,
                programmers, and modern professionals.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  to="/setups"
                  className="group inline-flex items-center gap-3 bg-accent text-white font-sans text-sm px-6 py-3.5 rounded-[8px] ring-1 ring-inset ring-accent/40 transition-colors hover:bg-brand"
                >
                  Explore Developer Setups
                  <span className="font-mono text-xs">→</span>
                </Link>
                <Link
                  to="/products"
                  className="inline-flex items-center font-sans text-sm px-6 py-3.5 rounded-[8px] border border-brand/20 text-brand transition-colors hover:border-brand"
                >
                  Browse Gear
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative">
                <img
                  src={heroDesk}
                  alt="Machined aluminium developer desk setup with a mechanical keyboard, monitor and warm accent light"
                  width={1024}
                  height={1280}
                  className="w-full aspect-[4/5] rounded-[12px] object-cover outline outline-1 -outline-offset-1 outline-black/5"
                />
                <div className="absolute -bottom-3 -left-3 bg-brand text-paper font-mono text-[10px] uppercase tracking-[0.18em] px-3 py-2 rounded-[6px]">
                  Research-led picks
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
            {categories.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* SETUP INSPIRATION */}
      <section className="bg-paper border-t border-brand/10">
        <div className="shell py-16 md:py-20">
          <SectionHeader
            index="02"
            eyebrow="Inspiration"
            title="Developer Setup Inspiration"
            action={
              <Link
                to="/setups"
                className="hidden sm:inline font-mono text-[11px] uppercase tracking-[0.15em] text-brand/60 transition-colors hover:text-accent"
              >
                All setups
              </Link>
            }
          />
          <p className="-mt-6 mb-10 font-sans text-sm sm:text-base text-brand/60 leading-relaxed max-w-[56ch]">
            Explore carefully designed workspaces built for coding, productivity, and deep focus.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {setups.map((setup) => (
              <SetupCard key={setup.slug} setup={setup} />
            ))}
          </div>
        </div>
      </section>

      {/* TRENDING */}
      <section className="bg-white border-t border-brand/10">
        <div className="shell py-16 md:py-20">
          <SectionHeader index="03" eyebrow="Trending" title="Trending Developer Gear" />
          <p className="-mt-6 mb-10 font-sans text-sm sm:text-base text-brand/60 leading-relaxed max-w-[56ch]">
            Popular gear currently helping developers upgrade their workspace.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {trending.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/compare"
              className="inline-flex items-center gap-3 bg-accent text-white font-sans text-sm px-6 py-3.5 rounded-[8px] ring-1 ring-inset ring-accent/40 transition-colors hover:bg-brand"
            >
              Compare Products <span className="font-mono text-xs">→</span>
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center font-sans text-sm px-6 py-3.5 rounded-[8px] border border-brand/20 text-brand transition-colors hover:border-brand"
            >
              Browse all gear
            </Link>
          </div>
        </div>
      </section>

      {/* GUIDES + TRUST */}
      <section className="bg-paper border-t border-brand/10">
        <div className="shell py-16 md:py-20">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <span className="eyebrow">04 — Reading</span>
              <h2 className="mt-3 mb-8 font-display text-3xl md:text-4xl text-brand text-balance max-w-[30ch]">
                Developer guides & workspace ideas
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
              <span className="eyebrow">05 — Why DevSetupHQ</span>
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

      {/* RESEARCH / TRANSPARENCY */}
      <section className="bg-white border-t border-brand/10">
        <div className="shell py-16 md:py-20">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <span className="eyebrow">06 — Transparency</span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl text-brand text-balance max-w-[24ch]">
                How DevSetupHQ Researches Products
              </h2>
              <p className="mt-5 font-sans text-sm sm:text-base text-brand/65 leading-relaxed max-w-[46ch]">
                We do not claim that every product was personally tested. Recommendations come from
                structured research, and we say so on every page.
              </p>
            </div>
            <div className="lg:col-span-7">
              <ul className="grid sm:grid-cols-2 gap-x-8 divide-y divide-brand/10 sm:divide-y-0">
                {researchCriteria.map((c) => (
                  <li
                    key={c}
                    className="py-3 font-sans text-sm text-brand/70 sm:border-b sm:border-brand/10"
                  >
                    <span className="text-accent mr-2 font-mono text-xs">→</span>
                    {c}
                  </li>
                ))}
              </ul>
              <p className="mt-8 rounded-[10px] border border-brand/10 bg-mist/60 px-5 py-4 font-mono text-[11px] leading-relaxed text-brand/60">
                <span className="text-accent uppercase tracking-[0.15em]">Transparency note — </span>
                Some links on DevSetupHQ may be affiliate links. If you purchase through these
                links, we may earn a commission at no additional cost to you.
              </p>
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
                Build a Better Developer Setup
              </h2>
              <p className="mt-4 font-sans text-base text-paper/70 leading-relaxed max-w-[44ch]">
                Get developer setup ideas, coding gear recommendations, productivity tips, and
                useful workspace inspiration.
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
