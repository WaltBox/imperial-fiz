"use client";

import { useEffect, useState } from "react";
import Wordmark from "./ui/Wordmark";

// Standalone pages — grouped + divided from the on-page section anchors.
const PAGE_LINKS = [
  { href: "/about", label: "The Group" },
  { href: "/careers", label: "Careers" },
];
// On-page sections of the homepage.
const SECTION_LINKS = [
  { href: "/#restaurants", label: "Restaurants" },
  { href: "/#news", label: "News" },
  { href: "/#events", label: "Private Events" },
  { href: "/#contact", label: "Contact" },
];
const ALL_LINKS = [...PAGE_LINKS, ...SECTION_LINKS];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock scroll when the mobile sheet is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-paper/92 backdrop-blur-sm border-b rule"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav
        className="mx-auto flex max-w-ledger items-center justify-between px-5 py-4 sm:px-8"
        aria-label="Primary"
      >
        <a href="/" className="group inline-flex items-center" aria-label="Imperial Fizz, home">
          <Wordmark className="h-[1.45rem] w-auto text-ink" />
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {PAGE_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="link-rule font-sans text-[0.82rem] font-medium tracking-wide text-ink/80 hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li aria-hidden className="h-4 w-px bg-ink/20" />
          {SECTION_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="link-rule font-sans text-[0.82rem] font-medium tracking-wide text-ink/80 hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="/#events" className="btn-solid !px-5 !py-2.5 !text-[0.7rem]">
              Inquire
            </a>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-9 w-9 items-center justify-center md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span className="flex flex-col gap-[5px]">
            <span
              className={`block h-px w-6 bg-ink transition-transform duration-300 ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-ink transition-opacity duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-ink transition-transform duration-300 ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile sheet */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 origin-top bg-paper transition-opacity duration-300 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <ul className="flex h-full flex-col justify-center gap-2 px-8">
          {ALL_LINKS.map((l, i) => (
            <li
              key={l.href}
              className={`py-4 ${
                i === PAGE_LINKS.length - 1
                  ? "border-b-2 border-ink/25"
                  : "border-b rule"
              }`}
            >
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-4 font-display text-3xl text-ink"
              >
                <span className="figure text-sm text-red/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-8">
            <a href="/#events" onClick={() => setOpen(false)} className="btn-solid w-full">
              Inquire — Private Events
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
