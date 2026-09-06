import { Link } from "@tanstack/react-router";
import type { Setup } from "@/data/catalog";

export function SetupCard({ setup }: { setup: Setup }) {
  return (
    <article className="group bg-paper rounded-[10px] ring-1 ring-black/5 overflow-hidden transition-transform duration-300 hover:-translate-y-1">
      <div className="relative">
        <img
          src={setup.image}
          alt={`${setup.name} workspace`}
          loading="lazy"
          width={1024}
          height={768}
          className="w-full aspect-[4/3] object-cover"
        />
        <span className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-[0.15em] text-brand/70 bg-white/85 px-2 py-1 rounded">
          {setup.gearCount} featured pieces
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-display text-xl text-brand text-balance">{setup.name}</h3>
        <p className="mt-2 font-sans text-sm text-brand/60 leading-relaxed">{setup.tagline}</p>
        <Link
          to="/setups/$slug"
          params={{ slug: setup.slug }}
          className="mt-4 inline-flex font-mono text-[11px] uppercase tracking-[0.15em] text-brand border border-brand/20 rounded px-3 py-2 transition-colors hover:border-accent hover:text-accent"
        >
          View Setup →
        </Link>
      </div>
    </article>
  );
}
