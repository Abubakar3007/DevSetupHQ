import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { getSetup, productsBySlugs, setups } from "@/data/catalog";
import { ProductCard } from "@/components/ProductCard";
import { SetupCard } from "@/components/SetupCard";
import { AffiliateDisclosure } from "@/components/ui-bits";

export const Route = createFileRoute("/setups/$slug")({
  loader: ({ params }) => {
    const setup = getSetup(params.slug);
    if (!setup) throw notFound();
    return { setup };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Setup not found — DevSetupHQ" }, { name: "robots", content: "noindex" }],
      };
    }
    const { setup } = loaderData;
    return {
      meta: [
        { title: `${setup.name} — DevSetupHQ` },
        { name: "description", content: setup.description },
        { property: "og:title", content: `${setup.name} — DevSetupHQ` },
        { property: "og:description", content: setup.description },
        { property: "og:type", content: "article" },
        {
          property: "og:url",
          content: `https://gear-discovery-pro.lovable.app/setups/${setup.slug}`,
        },
      ],
      links: [
        {
          rel: "canonical",
          href: `https://gear-discovery-pro.lovable.app/setups/${setup.slug}`,
        },
      ],
    };
  },
  component: SetupDetail,
});

function SetupDetail() {
  const { setup } = Route.useLoaderData();
  const gear = productsBySlugs(setup.gearSlugs);
  const others = setups.filter((s) => s.slug !== setup.slug);

  return (
    <>
      <section className="bg-paper border-b border-brand/10">
        <div className="shell py-12 md:py-16">
          <nav className="font-mono text-[10px] uppercase tracking-[0.15em] text-brand/45">
            <Link to="/setups" className="transition-colors hover:text-accent">
              Setups
            </Link>
            <span className="mx-2">/</span>
            <span>{setup.name}</span>
          </nav>

          <div className="mt-8 grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <img
                src={setup.image}
                alt={`${setup.name} workspace`}
                width={1024}
                height={768}
                className="w-full aspect-[16/10] rounded-[12px] object-cover outline outline-1 -outline-offset-1 outline-black/5"
              />
            </div>
            <div className="lg:col-span-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                {setup.gearCount} featured pieces · Sample setup
              </span>
              <h1 className="mt-4 font-display text-4xl sm:text-5xl leading-[1.05] text-brand text-balance">
                {setup.name}
              </h1>
              <p className="mt-5 font-sans text-base text-brand/65 leading-relaxed max-w-[48ch]">
                {setup.description}
              </p>
              <ul className="mt-6 divide-y divide-brand/10">
                {setup.highlights.map((h) => (
                  <li key={h} className="py-3 font-sans text-sm text-brand/70">
                    <span className="text-accent mr-2 font-mono text-xs">+</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="shell py-16">
          <span className="eyebrow">Gear in this setup</span>
          <h2 className="mt-3 mb-8 font-display text-3xl text-brand">What's on the desk</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {gear.map((p) => (
              <ProductCard key={p.slug} product={p} cta="View Details" />
            ))}
          </div>
          <div className="mt-10 max-w-xl">
            <AffiliateDisclosure />
          </div>
        </div>
      </section>

      {others.length > 0 && (
        <section className="bg-paper border-t border-brand/10">
          <div className="shell py-16">
            <span className="eyebrow">More inspiration</span>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {others.map((s) => (
                <SetupCard key={s.slug} setup={s} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
