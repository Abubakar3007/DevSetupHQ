import { Link } from "@tanstack/react-router";
import { useState } from "react";

import { SearchOverlay } from "./SearchOverlay";

const links = [
  { to: "/setups", label: "Setups" },
  { to: "/products", label: "Gear" },
  { to: "/guides", label: "Guides" },
  { to: "/compare", label: "Compare" },
] as const;

export function Logo({ size = "text-lg" }: { size?: string }) {
  return (
    <span className="flex items-baseline gap-0.5">
      <span className={`font-mono font-bold tracking-tight text-brand ${size}`}>DevSetup</span>
      <span className={`font-mono font-bold tracking-tight text-accent ${size}`}>HQ</span>
    </span>
  );
}

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
      className="h-4 w-4"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m16.5 16.5 4 4" strokeLinecap="round" />
    </svg>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="border-b border-brand/10 bg-white">
      <div className="shell">
        <div className="flex items-center justify-between py-5">
          <Link to="/" aria-label="DevSetupHQ home">
            <Logo />
          </Link>

          <nav className="hidden md:flex items-center gap-8 font-sans text-sm text-brand/70">
            <Link
              to="/"
              className="transition-colors hover:text-brand"
              activeProps={{ className: "text-brand" }}
              activeOptions={{ exact: true }}
            >
              Home
            </Link>
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

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Search products, setups and guides"
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-brand/60 border border-brand/20 rounded px-3 py-2 transition-colors hover:border-accent hover:text-accent"
            >
              <SearchIcon />
              <span className="hidden lg:inline">Search</span>
            </button>

            <Link
              to="/products"
              className="hidden sm:inline-flex font-sans text-sm text-white bg-accent px-4 py-2.5 rounded-[8px] ring-1 ring-inset ring-accent/40 transition-colors hover:bg-brand"
            >
              Explore Gear
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
              to="/categories"
              onClick={() => setOpen(false)}
              className="py-3 font-sans text-sm text-brand/80 border-b border-brand/5"
            >
              Categories
            </Link>
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

      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
    </header>
  );
}
