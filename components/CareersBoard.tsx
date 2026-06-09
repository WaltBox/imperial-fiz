"use client";

import { useState } from "react";
import { restaurants } from "@/lib/restaurants";

function ExtArrow() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M7 17 17 7M9 7h8v8" strokeLinecap="square" />
    </svg>
  );
}

export default function CareersBoard() {
  const [active, setActive] = useState(restaurants[0]);

  return (
    <div className="mt-14">
      <p className="ledger-label mb-5">Pick where you want to work</p>

      {/* Restaurant selector */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {restaurants.map((r) => {
          const on = active.slug === r.slug;
          return (
            <button
              key={r.slug}
              type="button"
              onClick={() => setActive(r)}
              aria-pressed={on}
              className={`group overflow-hidden rounded-xl border-2 text-left transition-all ${
                on ? "border-red" : "border-transparent hover:border-ink/15"
              }`}
            >
              <div className="relative aspect-[4/3] bg-paper-deep">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={r.image}
                  alt={r.name}
                  loading="lazy"
                  className={`absolute inset-0 h-full w-full object-cover transition-transform duration-500 ${
                    on ? "scale-105" : "group-hover:scale-105"
                  }`}
                />
                <span
                  aria-hidden
                  className="absolute left-0 top-0 h-1.5 w-full"
                  style={{ backgroundColor: r.accent }}
                />
              </div>
              <div className="p-3">
                <p className="font-display text-[0.92rem] font-semibold leading-tight text-ink">
                  {r.name}
                </p>
                <p className="mt-1 font-sans text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-ink-faint">
                  {r.neighborhood}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Application panel */}
      <div className="mt-12">
        <div className="border-b rule-strong pb-5">
          <p className="ledger-label !text-red">Now Hiring</p>
          <h2 className="mt-2 font-display text-[1.9rem] font-semibold leading-tight tracking-[-0.01em] text-ink sm:text-[2.4rem]">
            {active.name}
          </h2>
        </div>

        <div className="mt-5 overflow-hidden rounded-xl border rule">
          <div
            className="flex min-h-[48vh] flex-col items-center justify-center gap-5 px-6 py-16 text-center"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(26,23,20,0.55), rgba(26,23,20,0.78)), url(${active.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <span
              aria-hidden
              className="inline-block h-2.5 w-10 rounded-full"
              style={{ backgroundColor: active.accent }}
            />
            <p className="ledger-label !text-paper/80">Apply at</p>
            <h3 className="font-display text-3xl font-semibold text-paper sm:text-4xl">
              {active.name}
            </h3>
            <a
              href={active.careersUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-paper text-red hover:bg-white"
            >
              Open application
              <ExtArrow />
            </a>
            <p className="max-w-md font-sans text-[0.78rem] leading-relaxed text-paper/70">
              The application lives on {active.name}&rsquo;s own site and opens in a
              new tab.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
