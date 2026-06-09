import { restaurants } from "@/lib/restaurants";
import { SectionMark } from "./ui/Plate";
import ImageSlot from "./ui/ImageSlot";
import Reveal from "./ui/Reveal";

function Arrow() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path d="M7 17 17 7M9 7h8v8" strokeLinecap="square" />
    </svg>
  );
}

export default function Restaurants() {
  return (
    <section id="restaurants" className="border-b rule-strong bg-paper-warm py-20 sm:py-28">
      <div className="mx-auto max-w-ledger px-5 sm:px-8">
        <Reveal>
          <SectionMark n={2} label="The Restaurants" />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-6 md:grid-cols-12">
          <Reveal as="div" className="md:col-span-7">
            <h2 className="font-display text-[2.4rem] font-medium leading-[1.03] tracking-[-0.01em] text-ink sm:text-[3.1rem]">
              Every neighborhood,
              <br />
              its own honest answer.
            </h2>
          </Reveal>
        </div>
      </div>

      {/* Alternating editorial spreads */}
      <div className="mx-auto mt-16 max-w-ledger px-5 sm:px-8">
        {restaurants.map((r, i) => {
          const flip = i % 2 === 1;
          return (
            <article
              key={r.slug}
              id={r.slug}
              className="scroll-mt-24 border-t rule-strong py-14 first:border-t-0 md:py-20"
            >
              <div className="grid grid-cols-1 items-center gap-x-12 gap-y-8 md:grid-cols-12">
                {/* Image */}
                <Reveal
                  as="div"
                  className={`md:col-span-5 ${flip ? "md:order-2 md:col-start-8" : "md:order-1"}`}
                >
                  <ImageSlot
                    src={r.image}
                    alt={`${r.name} — ${r.shot}.`}
                    tint={r.accent}
                    ink={r.accentInk}
                    ratio="5 / 4"
                    caption={r.shot}
                  />
                </Reveal>

                {/* Text */}
                <div
                  className={`md:col-span-6 ${
                    flip ? "md:order-1 md:col-start-1" : "md:order-2 md:col-start-7"
                  }`}
                >
                  <Reveal delay={100}>
                    {/* plate number + accent tab */}
                    <div className="mb-5 flex items-center gap-4">
                      <span className="figure font-display text-3xl text-ink/40">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className="inline-block h-3 w-8"
                        style={{ backgroundColor: r.accent }}
                        aria-hidden
                      />
                      <span className="ledger-label">{r.type}</span>
                    </div>

                    <h3 className="font-display text-[2.1rem] font-semibold leading-[1.02] tracking-[-0.01em] text-ink sm:text-[2.6rem]">
                      {r.name}
                    </h3>

                    <p className="mt-2 font-display text-lg text-red">
                      {r.tagline}
                    </p>

                    <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 font-sans text-[0.78rem] uppercase tracking-[0.14em] text-ink-faint">
                      <span>{r.neighborhood}</span>
                      <span aria-hidden>·</span>
                      <span className="figure">Est. {r.established}</span>
                    </div>

                    <p className="mt-6 max-w-xl font-sans text-[1.02rem] leading-relaxed text-ink-soft">
                      {r.blurb}
                    </p>

                    <p className="mt-5 border-l-2 pl-4 font-display text-base text-ink-soft"
                       style={{ borderColor: r.accent }}>
                      {r.note}
                    </p>

                    <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-3">
                      <a
                        href={r.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 border-b border-ink/40 pb-1 font-sans text-[0.8rem] font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:border-red hover:text-red"
                      >
                        Visit {r.name.split(" ")[0].replace("'", "’")}
                        <Arrow />
                      </a>
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                          `${r.name} ${r.neighborhood} Dallas TX`,
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 border-b border-transparent pb-1 font-sans text-[0.8rem] font-semibold uppercase tracking-[0.16em] text-ink-faint transition-colors hover:border-red hover:text-red"
                      >
                        Directions
                        <Arrow />
                      </a>
                    </div>
                  </Reveal>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
