import type { ReactNode } from "react";

export function SectionHeader({
  index,
  eyebrow,
  title,
  action,
}: {
  index?: string;
  eyebrow: string;
  title: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex items-end justify-between gap-6 mb-10">
      <div>
        <span className="eyebrow">
          {index ? `${index} — ` : ""}
          {eyebrow}
        </span>
        <h2 className="mt-3 font-display text-3xl md:text-4xl text-brand text-balance max-w-[30ch]">
          {title}
        </h2>
      </div>
      {action}
    </div>
  );
}

export function Rating({ value }: { value: number }) {
  return (
    <span
      className="font-mono text-[11px] uppercase tracking-[0.12em] text-steel"
      aria-label={`Rated ${value} out of 5`}
    >
      {value.toFixed(1)} ★
    </span>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="bg-paper border-b border-brand/10">
      <div className="shell py-14 md:py-20">
        <div className="flex items-center gap-3 eyebrow">
          <span className="h-px w-8 bg-accent" />
          <span>{eyebrow}</span>
        </div>
        <h1 className="mt-6 font-display text-4xl sm:text-5xl leading-[1.05] text-brand text-balance max-w-[24ch]">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 font-sans text-base sm:text-lg text-brand/65 leading-relaxed max-w-[52ch] text-pretty">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}

export function AffiliateDisclosure({ tone = "light" }: { tone?: "light" | "dark" }) {
  const base =
    tone === "dark"
      ? "bg-brand text-paper/70 border-paper/15"
      : "bg-mist/60 text-brand/60 border-brand/10";
  return (
    <aside
      className={`rounded-[10px] border px-5 py-4 font-mono text-[11px] leading-relaxed tracking-[0.02em] ${base}`}
    >
      <span className="text-accent uppercase tracking-[0.15em]">Affiliate disclosure — </span>
      We may earn a commission when you purchase through links on our site, at no extra cost to you.
    </aside>
  );
}
