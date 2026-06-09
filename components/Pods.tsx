"use client";

import { useRef } from "react";
import { media, mediaByDate } from "@/lib/media";
import Reveal from "./ui/Reveal";
import YouTubeEmbed from "./ui/YouTubeEmbed";

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d={dir === "left" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Pods() {
  const featured = media.find((m) => m.featured) ?? mediaByDate[0];
  const rail = mediaByDate.filter((m) => m !== featured); // newest → oldest
  const scroller = useRef<HTMLDivElement>(null);

  const nudge = (dir: number) => {
    const el = scroller.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const amount = card ? card.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section id="pods" className="border-b rule-strong bg-fizz-wash py-20 sm:py-28">
      <div className="mx-auto max-w-ledger px-5 sm:px-8">
        <Reveal>
          <div className="flex items-baseline gap-4">
            <span className="figure font-display font-semibold text-red">IV</span>
            <span aria-hidden className="h-px flex-1 translate-y-[-0.2em] bg-ink/20" />
            <span className="ledger-label">Pods &amp; More</span>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-6 md:grid-cols-12">
          <Reveal as="div" className="md:col-span-7">
            <h2 className="font-display text-[2.8rem] font-semibold leading-[0.98] tracking-[-0.02em] text-ink sm:text-[3.6rem]">
              Where we&rsquo;ve had{" "}
              <span className="text-red">the mic.</span>
            </h2>
          </Reveal>
          <Reveal delay={120} as="div" className="md:col-span-4 md:col-start-9 md:self-end">
            <p className="font-sans text-[1.02rem] leading-relaxed text-ink-soft">
              Podcasts, segments, and long-form interviews. Taken together,
              they&rsquo;re the whole story — a single fish counter, slowly becoming
              five Dallas rooms.
            </p>
          </Reveal>
        </div>

        {/* Hero video */}
        {featured && (
          <Reveal>
            <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-6 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <YouTubeEmbed id={featured.youtubeId} title={featured.title} />
              </div>
              <div className="lg:col-span-4">
                <p className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-red">
                  Featured &middot; {featured.show}
                </p>
                <h3 className="mt-3 font-display text-[1.9rem] font-semibold leading-tight text-ink sm:text-[2.2rem]">
                  {featured.title}
                </h3>
                <p className="mt-4 font-sans text-[0.95rem] leading-relaxed text-ink-faint">
                  Press play to watch — the embed loads on click.
                </p>
              </div>
            </div>
          </Reveal>
        )}
      </div>

      {/* Carousel */}
      <div className="mx-auto mt-16 max-w-ledger">
        <div className="flex items-end justify-between px-5 sm:px-8">
          <p className="ledger-label">More appearances &middot; newest first</p>
          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              onClick={() => nudge(-1)}
              aria-label="Previous"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/30 text-ink transition-colors hover:border-red hover:bg-red hover:text-paper"
            >
              <Chevron dir="left" />
            </button>
            <button
              type="button"
              onClick={() => nudge(1)}
              aria-label="Next"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/30 text-ink transition-colors hover:border-red hover:bg-red hover:text-paper"
            >
              <Chevron dir="right" />
            </button>
          </div>
        </div>

        <div
          ref={scroller}
          className="no-scrollbar mt-6 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-5 pb-2 sm:px-8"
          aria-label="More video appearances, newest first"
        >
          {rail.map((m) => (
            <div
              key={m.youtubeId}
              data-card
              className="w-[78vw] shrink-0 snap-start sm:w-[330px]"
            >
              <YouTubeEmbed id={m.youtubeId} title={m.title} />
              <p className="mt-3 font-sans text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-fizz-deep">
                {m.show} &middot; {m.date}
              </p>
              <h3 className="mt-1 line-clamp-2 font-display text-[1rem] font-semibold leading-snug text-ink">
                {m.title}
              </h3>
            </div>
          ))}
          {/* trailing spacer so the last card can snap clear of the edge */}
          <div aria-hidden className="w-px shrink-0" />
        </div>
      </div>
    </section>
  );
}
