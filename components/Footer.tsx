"use client";

import { useState } from "react";
import { restaurants } from "@/lib/restaurants";
import Wordmark from "./ui/Wordmark";

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer id="contact" className="bg-red text-paper">
      {/* Landlord / broker pitch band — the business front door */}
      <div className="border-b border-paper/20">
        <div className="mx-auto flex max-w-ledger flex-col gap-6 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="ledger-label !text-paper/70">For Landlords &amp; Brokers</p>
            <p className="mt-3 max-w-2xl font-display text-[1.9rem] font-semibold leading-tight sm:text-[2.4rem]">
              Have a great location? <span className="text-paper/80">Pitch us.</span>
            </p>
            <p className="mt-3 max-w-xl font-sans text-[0.95rem] leading-relaxed text-paper/75">
              We&rsquo;re always reading the map for the next neighborhood that&rsquo;s
              missing something. If you&rsquo;ve got the corner, we&rsquo;ll bring the
              concept.
            </p>
          </div>
          <a
            href="mailto:example@imperialfizz.com"
            className="btn shrink-0 bg-paper text-red hover:bg-white"
          >
            Pitch a Location
          </a>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="mx-auto max-w-ledger px-5 py-14 sm:px-8">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-12">
          {/* Brand + newsletter */}
          <div className="col-span-2 md:col-span-5">
            <Wordmark className="text-paper" onDark />
            <p className="mt-4 max-w-sm font-display text-base text-paper/75">
              A Dallas hospitality house. Built backwards, on purpose.
            </p>

            <div className="mt-8">
              <p className="ledger-label !text-paper/65">Hungry for more?</p>
              {subscribed ? (
                <p className="mt-3 font-sans text-sm text-paper" role="status" aria-live="polite">
                  You&rsquo;re on the list. (Demo — not yet wired to a live list.)
                </p>
              ) : (
                <form
                  className="mt-3 flex max-w-sm items-stretch border-b border-paper/50 focus-within:border-paper"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubscribed(true);
                  }}
                >
                  <label htmlFor="news-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="news-email"
                    type="email"
                    required
                    placeholder="you@email.com"
                    className="w-full bg-transparent py-2 font-sans text-sm text-paper outline-none placeholder:text-paper/50"
                  />
                  <button
                    type="submit"
                    className="shrink-0 px-2 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-paper"
                  >
                    Join
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Restaurants */}
          <nav className="col-span-1 md:col-span-3" aria-label="Restaurants">
            <p className="ledger-label !text-paper/65">The Restaurants</p>
            <ul className="mt-4 space-y-2.5">
              {restaurants.map((r) => (
                <li key={r.slug}>
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-rule font-sans text-[0.92rem] text-paper/85 hover:text-paper"
                  >
                    {r.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav className="col-span-1 md:col-span-2" aria-label="Company">
            <p className="ledger-label !text-paper/65">The Group</p>
            <ul className="mt-4 space-y-2.5 font-sans text-[0.92rem] text-paper/85">
              <li><a href="/about" className="link-rule hover:text-paper">About the Group</a></li>
              <li><a href="/#news" className="link-rule hover:text-paper">In the News</a></li>
              <li><a href="/#pods" className="link-rule hover:text-paper">Pods &amp; More</a></li>
              <li><a href="/#events" className="link-rule hover:text-paper">Private Events</a></li>
              <li><a href="/careers" className="link-rule hover:text-paper">Careers</a></li>
              <li><a href="mailto:example@imperialfizz.com" className="link-rule hover:text-paper">Press</a></li>
            </ul>
          </nav>

          {/* Social / contact */}
          <nav className="col-span-2 md:col-span-2" aria-label="Elsewhere">
            <p className="ledger-label !text-paper/65">Elsewhere</p>
            <ul className="mt-4 space-y-2.5 font-sans text-[0.92rem] text-paper/85">
              <li>
                <a href="https://www.instagram.com/tjsseafood" target="_blank" rel="noopener noreferrer" className="link-rule hover:text-paper">
                  Instagram
                </a>
              </li>
              <li>
                <a href="mailto:example@imperialfizz.com" className="link-rule hover:text-paper">
                  example@imperialfizz.com
                </a>
              </li>
              <li>
                <a href="mailto:example@imperialfizz.com" className="link-rule hover:text-paper">
                  example@imperialfizz.com
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Baseline */}
        <div className="mt-14 flex flex-col gap-3 border-t border-paper/20 pt-6 font-sans text-[0.72rem] text-paper/60 sm:flex-row sm:items-center sm:justify-between">
          <p className="figure">
            &copy; {new Date().getFullYear()} Imperial Fizz Hospitality &middot; Dallas, Texas
          </p>
          <p>
            Placeholder contact details &mdash; confirm all addresses before launch.
          </p>
        </div>
      </div>
    </footer>
  );
}
