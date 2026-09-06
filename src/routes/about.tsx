import { createFileRoute, Link } from "@tanstack/react-router";

import aHomeOffice from "@/assets/a-home-office.jpg";
import { PageHeader } from "@/components/ui-bits";
import { NewsletterForm } from "@/components/NewsletterForm";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About SetupForge — Product Research for Better Workspaces" },
      {
        name: "description",
        content:
          "SetupForge helps people build better workspaces by researching technology, desk accessories and productivity products so buying decisions get easier.",
      },
      { property: "og:title", content: "About SetupForge" },
      {
        property: "og:description",
        content:
          "We research workspace technology and accessories so you can make better buying decisions, faster.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const principles = [
  {
    n: "01",
    title: "Research before opinion",
    body: "We start from how a product behaves over weeks of ordinary use, not a first-impression unboxing.",
  },
  {
    n: "02",
    title: "Fewer, better picks",
    body: "A short list you can act on beats fifty options ranked by nothing in particular.",
  },
  {
    n: "03",
    title: "Plain about money",
    body: "Some links earn us a commission. That never changes which products make a list, and we say so on every page.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="We make workspace research boringly simple"
        intro="SetupForge helps people build better workspaces by discovering useful technology, desk accessories and productivity products."
      />

      <section className="bg-white">
        <div className="shell py-16 md:py-20">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-7 max-w-[62ch]">
              <p className="font-sans text-lg text-brand/70 leading-[1.75]">
                Our goal is to simplify product research and help people make better buying
                decisions. Most setup advice is either a wall of affiliate links or a single glossy
                photo with no explanation of why anything was chosen.
              </p>
              <p className="mt-5 font-sans text-base text-brand/65 leading-[1.75]">
                We work the other way around: start from the problem — a sore wrist, a dim room, a
                desk buried in cables — then find the gear that solves it and explain the trade-offs
                honestly, including where a product falls short.
              </p>
              <p className="mt-5 font-sans text-base text-brand/65 leading-[1.75]">
                Every recommendation on SetupForge is written for people who work at a desk for a
                living: developers, designers, writers, analysts, and anyone whose home office also
                has to be a living room.
              </p>

              <div className="mt-12 divide-y divide-brand/10">
                {principles.map((p) => (
                  <div key={p.n} className="py-5">
                    <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-accent">
                      {p.n}
                    </div>
                    <h2 className="mt-1 font-display text-xl text-brand">{p.title}</h2>
                    <p className="mt-1.5 font-sans text-sm text-brand/60 leading-relaxed">
                      {p.body}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-3 bg-accent text-white font-sans text-sm px-6 py-3.5 rounded-[8px] ring-1 ring-inset ring-accent/40 transition-colors hover:bg-brand"
                >
                  Browse Products <span className="font-mono text-xs">→</span>
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center font-sans text-sm px-6 py-3.5 rounded-[8px] border border-brand/20 text-brand transition-colors hover:border-brand"
                >
                  Contact us
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <img
                src={aHomeOffice}
                alt="A tidy home office desk with a lamp and a plant"
                loading="lazy"
                width={1024}
                height={768}
                className="w-full aspect-[4/5] rounded-[12px] object-cover outline outline-1 -outline-offset-1 outline-black/5"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand text-paper">
        <div className="shell py-16">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                Newsletter
              </span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl text-balance max-w-[30ch]">
                Upgrade Your Setup
              </h2>
              <p className="mt-4 font-sans text-base text-paper/70 leading-relaxed max-w-[44ch]">
                Get the latest setup ideas, product recommendations, and productivity tips.
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
