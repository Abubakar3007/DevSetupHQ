import { Link } from "@tanstack/react-router";
import { useState } from "react";

const links = [
  { to: "/categories", label: "Categories" },
  { to: "/products", label: "Products" },
  { to: "/guides", label: "Guides" },
  { to: "/about", label: "About" },
] as const;

export function Logo({ size = "text-lg" }: { size?: string }) {
  return (
    <span className="flex items-baseline gap-0.5">
      <span className={`font-mono font-bold tracking-tight text-brand ${size}`}>Setup</span>
      <span className={`font-mono font-bold tracking-tight text-accent ${size}`}>Forge</span>
    </span>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-brand/10 bg-white">
      <div className="shell">
        <div className="flex items-center justify-between py-5">
          <Link to="/" aria-label="SetupForge home">
            <Logo />
          </Link>

          <nav className="hidden md:flex items-center gap-8 font-sans text-sm text-brand/70">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="transition-colors hover:text-brand"
                activeProps={{ className: "text-brand" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            to="/products"
            className="hidden sm:inline-flex font-mono text-[11px] uppercase tracking-[0.15em] text-brand/60 border border-brand/20 px-4 py-2 transition-colors hover:border-accent hover:text-accent"
          >
            Search
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="md:hidden font-mono text-[11px] uppercase tracking-[0.15em] text-brand/70"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" className="md:hidden border-t border-brand/10 bg-paper">
          <div className="shell flex flex-col py-2">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="py-3 font-sans text-sm text-brand/80 border-b border-brand/5"
            >
              Home
            </Link>
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="py-3 font-sans text-sm text-brand/80 border-b border-brand/5"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="py-3 font-sans text-sm text-brand/80"
            >
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
