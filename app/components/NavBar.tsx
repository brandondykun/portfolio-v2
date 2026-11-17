"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeSwitcher } from "./ThemeToggle";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#toolkit", label: "Toolkit" },
  { href: "#ai", label: "AI" },
  { href: "#contact", label: "Contact", accent: true },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-bg">
      <div className="container-page flex h-14 items-center justify-between">
        <a
          href="#home"
          className="focus-ring text-sm font-semibold tracking-tight"
          onClick={() => setOpen(false)}
        >
          Brandon Dykun
        </a>

        <div className="flex items-center gap-4 sm:gap-8">
          <nav aria-label="Primary" className="hidden sm:block">
            <ul className="flex items-center gap-7 font-mono text-xs">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className={`focus-ring transition-colors ${
                      l.accent
                        ? "text-accent hover:opacity-80"
                        : "text-fg hover:text-accent"
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeSwitcher />
          <button
            type="button"
            className="focus-ring -mr-1 p-1 sm:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-line sm:hidden"
        >
          <ul className="container-page flex flex-col py-2 font-mono text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`focus-ring block py-3 ${
                    l.accent ? "text-accent" : "text-fg"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default NavBar;
