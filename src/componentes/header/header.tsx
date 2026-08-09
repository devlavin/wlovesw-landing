"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { href: "#about", label: "Sobre" },
  { href: "#features", label: "Recursos" },
  { href: "#how-it-works", label: "Como funciona" },
  { href: "#safety", label: "Segurança" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-cream-300/10 bg-plum-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6">
        <Link href="/" onClick={() => setMenuOpen(false)}>
          <Image
            src="/wow-logo.png"
            alt="W♡W"
            width={120}
            height={40}
            priority
          />
        </Link>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-8 md:flex"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-cream-300 transition hover:text-cream-50"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#download"
            className="hidden bg-gradient-brand rounded-brand px-5 py-2.5 text-sm font-semibold text-plum-950 transition-transform hover:scale-105 sm:inline-block"
          >
            Baixar
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-brand text-cream-300 transition hover:text-cream-50 md:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition-transform ${
                  menuOpen ? "translate-y-1.75 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1.75 h-0.5 w-5 bg-current transition-opacity ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-3.5 h-0.5 w-5 bg-current transition-transform ${
                  menuOpen ? "-translate-y-1.75 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Navegação mobile"
          className="flex flex-col gap-1 border-t border-cream-300/10 bg-plum-950/95 px-6 py-4 md:hidden"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-brand px-2 py-3 text-cream-300 transition hover:bg-cream-300/5 hover:text-cream-50"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#download"
            onClick={() => setMenuOpen(false)}
            className="mt-2 bg-gradient-brand rounded-brand px-5 py-2.5 text-center text-sm font-semibold text-plum-950"
          >
            Baixar
          </a>
        </nav>
      )}
    </header>
  );
}