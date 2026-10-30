"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Experience", "/experience"],
  ["Projects", "/projects"],
  ["Contact", "/contact"],
] as const;

export default function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="site-brand" href="/" onClick={() => setIsOpen(false)}>
          Mohammed Nadhil K N
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
        </button>

        <nav id="primary-navigation" className="site-nav" data-open={isOpen} aria-label="Primary navigation">
          {links.map(([label, href]) => {
            const active = href === "/" ? pathname === "/" : pathname.startsWith(href);

            return (
              <Link
                key={href}
                className="site-nav__link"
                href={href}
                aria-current={active ? "page" : undefined}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            );
          })}
          <div className="site-nav__theme">
            <ThemeToggle />
            <span className="sr-only">Change color theme</span>
          </div>
        </nav>
      </div>
    </header>
  );
}
