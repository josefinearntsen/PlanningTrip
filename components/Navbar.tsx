"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#fly", label: "Flights" },
  { href: "#bo", label: "Stay" },
  { href: "#kart", label: "Map" },
  { href: "#galleri", label: "Aarhus" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md shadow-[0_1px_0_rgba(42,30,30,0.08)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#top"
          className="font-display text-lg tracking-wide text-burgundy sm:text-xl"
        >
          Aarhus <span className="italic">2026</span>
        </a>
        <ul className="hidden gap-8 text-sm font-medium tracking-wide text-ink/80 sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative py-1 transition-colors hover:text-burgundy after:absolute after:-bottom-0.5 after:left-0 after:h-[1.5px] after:w-0 after:bg-burgundy after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#bo"
          className="rounded-full border border-burgundy/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-burgundy transition-colors hover:bg-burgundy hover:text-cream sm:hidden"
        >
          Stem
        </a>
      </nav>
    </header>
  );
}
