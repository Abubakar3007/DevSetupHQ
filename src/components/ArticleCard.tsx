import { Link } from "@tanstack/react-router";
import type { Article } from "@/data/catalog";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="group bg-paper rounded-[10px] ring-1 ring-black/5 overflow-hidden transition-transform duration-300 hover:-translate-y-1">
      <img
        src={article.cover}
        alt={article.title}
        loading="lazy"
        width={1024}
        height={768}
        className="w-full aspect-[4/3] object-cover"
      />
      <div className="p-5">
        <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-accent">
          {article.category}
        </div>
        <h3 className="mt-2 font-display text-xl text-brand text-balance">{article.title}</h3>
        <p className="mt-2 font-sans text-sm text-brand/60 leading-relaxed">{article.excerpt}</p>
        <Link
          to="/guides/$slug"
          params={{ slug: article.slug }}
          className="mt-3 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-brand/70 transition-colors group-hover:text-accent"
        >
          Read more →
        </Link>
      </div>
    </article>
  );
}

export function ArticleRow({ article }: { article: Article }) {
  return (
    <article className="group grid sm:grid-cols-[140px_1fr] gap-5 bg-paper rounded-[10px] ring-1 ring-black/5 p-4 transition-transform duration-300 hover:-translate-y-1">
      <img
        src={article.cover}
        alt={article.title}
        loading="lazy"
        width={512}
        height={512}
        className="hidden sm:block w-full aspect-square rounded-[8px] object-cover"
      />
      <div>
        <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-accent">
          {article.category}
        </div>
        <h3 className="mt-2 font-display text-xl text-brand text-balance">{article.title}</h3>
        <p className="mt-2 font-sans text-sm text-brand/60 leading-relaxed">{article.excerpt}</p>
        <Link
          to="/guides/$slug"
          params={{ slug: article.slug }}
          className="mt-3 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-brand/70 transition-colors group-hover:text-accent"
        >
          Read more →
        </Link>
      </div>
    </article>
  );
}
