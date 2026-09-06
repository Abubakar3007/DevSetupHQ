import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import { ARTICLE_CATEGORIES, articles } from "@/data/catalog";
import { ArticleCard } from "@/components/ArticleCard";
import { SearchBar } from "@/components/SearchBar";
import { PageHeader } from "@/components/ui-bits";

export const Route = createFileRoute("/guides/")({
  head: () => ({
    meta: [
      { title: "Developer Guides & Workspace Ideas — DevSetupHQ" },
      {
        name: "description",
        content:
          "Research-based guides, setup ideas and buying advice for developers building a better coding workspace.",
      },
      { property: "og:title", content: "Developer Guides & Workspace Ideas — DevSetupHQ" },
      {
        property: "og:description",
        content: "Setup ideas, buying guides and productivity advice for better workspaces.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://gear-discovery-pro.lovable.app/guides" },
    ],
    links: [{ rel: "canonical", href: "https://gear-discovery-pro.lovable.app/guides" }],
  }),
  component: GuidesPage,
});

function GuidesPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  const [featured, ...rest] = articles;

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return rest.filter((a) => {
      const matchesQuery =
        !q || a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q);
      const matchesCategory = category === "all" || a.category === category;
      return matchesQuery && matchesCategory;
    });
  }, [query, category, rest]);

  return (
    <>
      <PageHeader
        eyebrow="03 — Reading"
        title="Developer Guides & Workspace Ideas"
        intro="Research-based guides on coding keyboards, monitors, chairs, desks and the productivity gear that shapes a developer workspace."
      />

      {featured && (
        <section className="bg-white border-b border-brand/10">
          <div className="shell py-14 md:py-16">
            <span className="eyebrow">Featured</span>
            <article className="mt-6 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7">
                <img
                  src={featured.cover}
                  alt={featured.title}
                  width={1024}
                  height={768}
                  className="w-full aspect-[16/10] rounded-[12px] object-cover outline outline-1 -outline-offset-1 outline-black/5"
                />
              </div>
              <div className="lg:col-span-5">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                  {featured.category}
                </div>
                <h2 className="mt-3 font-display text-3xl md:text-4xl leading-[1.1] text-brand text-balance">
                  {featured.title}
                </h2>
                <p className="mt-4 font-sans text-sm sm:text-base text-brand/65 leading-relaxed">
                  {featured.excerpt}
                </p>
                <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.15em] text-steel">
                  {featured.author} · {featured.readingTime}
                </p>
                <Link
                  to="/guides/$slug"
                  params={{ slug: featured.slug }}
                  className="mt-7 inline-flex items-center gap-3 bg-accent text-white font-sans text-sm px-6 py-3.5 rounded-[8px] ring-1 ring-inset ring-accent/40 transition-colors hover:bg-brand"
                >
                  Read More <span className="font-mono text-xs">→</span>
                </Link>
              </div>
            </article>
          </div>
        </section>
      )}

      <section className="bg-paper">
        <div className="shell py-14 md:py-16">
          <div className="flex flex-col lg:flex-row gap-6 lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              {["all", ...ARTICLE_CATEGORIES].map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCategory(c)}
                  className={`font-mono text-[10px] uppercase tracking-[0.15em] px-3 py-2 rounded border transition-colors ${
                    category === c
                      ? "border-accent text-accent"
                      : "border-brand/15 text-brand/60 hover:border-brand/40"
                  }`}
                >
                  {c === "all" ? "All" : c}
                </button>
              ))}
            </div>
            <div className="lg:w-80">
              <SearchBar
                value={query}
                onChange={setQuery}
                placeholder="Search guides"
                label="Search guides"
              />
            </div>
          </div>

          {visible.length === 0 ? (
            <p className="mt-12 font-sans text-sm text-brand/60">
              No guides match that yet — try another category.
            </p>
          ) : (
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {visible.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
