import { pressSorted } from "@/lib/press";
import { SectionMark } from "./ui/Plate";
import ArticleCard from "./ui/ArticleCard";
import Reveal from "./ui/Reveal";

function ExtArrow() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-ink-faint transition-all duration-300 group-hover:text-red group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M7 17 17 7M9 7h8v8" strokeLinecap="square" />
    </svg>
  );
}

export default function InTheNews() {
  const featured = pressSorted.filter((p) => p.featured).slice(0, 2);
  const rest = pressSorted.filter((p) => !featured.includes(p));

  return (
    <section id="news" className="border-b rule-strong py-20 sm:py-28">
      <div className="mx-auto max-w-ledger px-5 sm:px-8">
        <Reveal>
          <SectionMark n={3} label="In the News" />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-6 md:grid-cols-12">
          <Reveal as="div" className="md:col-span-7">
            <h2 className="font-display text-[2.8rem] font-semibold leading-[0.98] tracking-[-0.02em] text-ink sm:text-[3.6rem]">
              Your neighborhood keeps making the news.
            </h2>
          </Reveal>
          <Reveal delay={120} as="div" className="md:col-span-4 md:col-start-9 md:self-end">
            <p className="font-sans text-[1.02rem] leading-relaxed text-ink-soft">
              A running file of what&rsquo;s been written about the group and its
              rooms. Press inquiries:{" "}
              <a href="mailto:example@imperialfizz.com" className="link-rule text-ink">
                example@imperialfizz.com
              </a>
              .
            </p>
          </Reveal>
        </div>

        {/* Two lead stories */}
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {featured.map((p, i) => (
            <Reveal key={p.url} delay={i * 80}>
              <ArticleCard item={p} />
            </Reveal>
          ))}
        </div>

        {/* Press index — the rest, as a tidy list */}
        {rest.length > 0 && (
          <div className="mt-16">
            <Reveal>
              <p className="ledger-label mb-1">More coverage</p>
            </Reveal>
            <ul>
              {rest.map((p, i) => (
                <Reveal key={p.url} delay={i * 50} as="li">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-5 border-t rule py-5 transition-colors hover:bg-paper-warm"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.image}
                      alt=""
                      aria-hidden
                      loading="lazy"
                      className="hidden h-[3.6rem] w-24 shrink-0 rounded-[3px] object-cover sm:block"
                    />
                    <div className="flex-1">
                      <p className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.14em]">
                        <span className="text-red">{p.outlet}</span>
                        <span className="text-ink-faint"> &middot; {p.date}</span>
                      </p>
                      <h3 className="mt-1 font-display text-lg font-semibold leading-snug text-ink transition-colors group-hover:text-red sm:text-xl">
                        {p.title}
                      </h3>
                    </div>
                    <ExtArrow />
                  </a>
                </Reveal>
              ))}
            </ul>
            <div aria-hidden className="border-t rule" />
          </div>
        )}

      </div>
    </section>
  );
}
