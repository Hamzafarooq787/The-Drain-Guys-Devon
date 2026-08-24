"use client";

import { useState } from "react";
import Icon from "./Icon";
import { NAV_LINKS, PHONE_DISPLAY, PHONE_NUMBER } from "@/lib/constants";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-surface/95 backdrop-blur-sm w-full top-0 sticky z-50 shadow-sm">
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto h-16 md:h-20">
        <a
          className="text-lg md:text-headline-md font-headline-md font-extrabold text-primary hover:text-secondary-container transition-colors duration-200"
          href="#home"
        >
          The Drain Guys Devon
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              className={
                i === 0
                  ? "text-primary font-bold border-b-2 border-secondary hover:text-secondary-container transition-colors duration-200"
                  : "text-on-surface-variant hover:text-secondary-container transition-colors duration-200 font-label-bold text-label-bold"
              }
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          className="hidden md:flex bg-secondary-container text-on-secondary-container font-label-bold text-label-bold py-3 px-6 rounded-lg hover:bg-secondary/10 transition-colors duration-200 items-center gap-2 card-shadow active:scale-95"
          href={`tel:${PHONE_NUMBER}`}
        >
          <Icon name="phone" />
          Call Now
        </a>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="md:hidden flex items-center justify-center w-11 h-11 rounded-lg text-primary hover:bg-surface-container transition-colors"
        >
          <Icon name={menuOpen ? "close" : "menu"} className="w-8 h-8" />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-outline-variant bg-surface">
          <nav className="flex flex-col px-margin-mobile py-4 gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                className="py-3 px-2 rounded-lg text-on-surface font-label-bold text-label-bold hover:bg-surface-container transition-colors"
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              className="mt-2 bg-secondary-container text-on-secondary-container font-label-bold text-label-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 card-shadow active:scale-95"
              href={`tel:${PHONE_NUMBER}`}
            >
              <Icon name="phone" />
              Call {PHONE_DISPLAY}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
