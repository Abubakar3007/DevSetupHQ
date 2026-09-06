import { Link } from "@tanstack/react-router";
import { Logo } from "./Navbar";

const explore = [
  { to: "/", label: "Home" },
  { to: "/setups", label: "Setups" },
  { to: "/products", label: "Gear" },
  { to: "/categories", label: "Categories" },
  { to: "/guides", label: "Guides" },
  { to: "/compare", label: "Compare" },
] as const;

const company = [
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

const legal = [
  { to: "/privacy-policy", label: "Privacy Policy" },
  { to: "/terms-of-service", label: "Terms of Service" },
  { to: "/affiliate-disclosure", label: "Affiliate Disclosure" },
] as const;

export function Footer() {
  return (
    <footer className="bg-paper border-t border-brand/10">
      <div className="shell py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo size="text-base" />
            <p className="mt-3 font-sans text-sm text-brand/60 leading-relaxed max-w-[30ch]">
              Build Your Ultimate Developer Setup. Carefully researched products for the way you work.
            </p>
            <div className="mt-5 flex gap-4 font-mono text-[11px] uppercase tracking-[0.12em] text-brand/50">
              <a href="#" className="transition-colors hover:text-accent">
                Pinterest
              </a>
              <a href="#" className="transition-colors hover:text-accent">
                Instagram
              </a>
              <a href="#" className="transition-colors hover:text-accent">
                Facebook
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-steel">Explore</div>
            <ul className="mt-4 space-y-2.5 font-sans text-sm text-brand/70">
              {explore.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="transition-colors hover:text-accent">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-steel">Company</div>
            <ul className="mt-4 space-y-2.5 font-sans text-sm text-brand/70">
              {company.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="transition-colors hover:text-accent">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="mailto:support@devsetuphq.com"
                  className="transition-colors hover:text-accent"
                >
                  support@devsetuphq.com
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-steel">Legal</div>
            <ul className="mt-4 space-y-2.5 font-sans text-sm text-brand/70">
              {legal.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="transition-colors hover:text-accent">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-brand/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="font-mono text-[11px] text-brand/40">
            © 2026 DevSetupHQ. All rights reserved.
          </p>
          <p className="font-mono text-[10px] text-brand/35 max-w-[46ch] leading-relaxed">
            We may earn a commission on purchases made through links on this site, at no extra cost
            to you.
          </p>
        </div>
      </div>
    </footer>
  );
}
