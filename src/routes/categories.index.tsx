import { createFileRoute, Link } from "@tanstack/react-router";

import { categories } from "@/data/catalog";
import { PageHeader } from "@/components/ui-bits";

export const Route = createFileRoute("/categories")({
  head: () => ({
    meta: [
      { title: "Setup Categories — SetupForge" },
      {
        name: "description",
        content:
          "Browse developer setups, desk setups, home office, tech accessories and productivity gear, category by category.",
      },
      { property: "og:title", content: "Setup Categories — SetupForge" },
      {
        property: "og:description",
        content:
          "Browse developer setups, desk setups, home office, tech accessories and productivity gear.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/categories" },
    ],
    links: [{ rel: "canonical", href: "/categories" }],
  }),
  component: CategoriesPage,
});

function CategoriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="01 — Explore"
        title="Every setup, sorted"
        intro="Five categories covering the gear that actually changes how a workspace feels. Start where your current setup annoys you most."
      />

      <section className="bg-white">
        <div className="shell py-16 md:py-20 space-y-6">
          {categories.map((category, i) => (
            <article
              key={category.slug}
              className="group grid lg:grid-cols-12 gap-6 lg:gap-10 items-center bg-paper rounded-[10px] ring-1 ring-black/5 overflow-hidden p-4 lg:p-6"
            >
              <div className="lg:col-span-5">
                <img
                  src={category.image}
                  alt={`${category.name} workspace`}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="w-full aspect-[4/3] rounded-[8px] object-cover"
                />
              </div>
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-steel">
                  <span className="text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <span>{String(category.itemCount).padStart(3, "0")} items</span>
                </div>
                <h2 className="mt-3 font-display text-2xl md:text-3xl text-brand">
                  <span aria-hidden="true" className="mr-2">
                    {category.glyph}
                  </span>
                  {category.name}
                </h2>
                <p className="mt-3 font-sans text-sm sm:text-base text-brand/65 leading-relaxed max-w-[56ch]">
                  {category.description}
                </p>
                <Link
                  to="/products"
                  search={{ category: category.slug }}
                  className="mt-6 inline-flex items-center gap-3 bg-accent text-white font-sans text-sm px-5 py-3 rounded-[8px] ring-1 ring-inset ring-accent/40 transition-colors hover:bg-brand"
                >
                  View Category <span className="font-mono text-xs">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
