import Reveal from "./ui/Reveal";

/**
 * PARTNERS — Bond.
 *
 * ⚠️ ISOLATED + REMOVABLE BY DESIGN. This whole section is a single component
 * with no dependencies elsewhere. To pull it before the client sees it, delete
 * this file and remove the <Partners /> line in app/page.tsx. Nothing else
 * references it. Bond's brand accent (periwinkle #8B9BF7) is scoped to this file
 * only — it never touches the parent palette.
 *
 * Framing rule: speak in Imperial Fizz's own neighborhood voice, NOT Bond's
 * pitch. The story is "the people two blocks away, showing up."
 */

const BOND = "#8B9BF7";

export default function Partners() {
  return (
    <section
      id="partners"
      className="border-b rule-strong py-16 sm:py-20"
      style={{ ["--bond" as string]: BOND }}
    >
      <div className="mx-auto max-w-ledger px-5 sm:px-8">
        <Reveal>
          <div className="flex items-baseline gap-4">
            <span className="figure font-display text-ink/50">VI</span>
            <span aria-hidden className="h-px flex-1 translate-y-[-0.2em] bg-[var(--rule)]" />
            <span className="ledger-label">A Partnership</span>
          </div>
        </Reveal>

        {/* Editorial feature, styled like an article */}
        <Reveal delay={100}>
          <a
            href="https://bondliving.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 grid grid-cols-1 items-center gap-x-12 gap-y-7 md:grid-cols-12"
          >
            {/* Lead image, with the Bond mascot perched on its top edge */}
            <div className="md:col-span-5">
              <div className="relative pt-[20%]">
                {/* mascot sitting on the top edge — static wink */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/bonder-on-wall.png"
                  alt=""
                  aria-hidden
                  className="pointer-events-none absolute right-[6%] -top-[33px] z-10 w-[34%] max-w-[160px] drop-shadow-[0_14px_22px_rgba(26,23,20,0.20)] sm:-top-[38px]"
                />
                <div className="overflow-hidden rounded-xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/bond.png"
                    alt="Bond — Shared Living, Simplified"
                    className="block w-full transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              </div>
            </div>

            {/* Article copy */}
            <div className="md:col-span-7">
              <p className="ledger-label mb-4 !text-red">Introducing Bond</p>

              <h2 className="font-display text-[1.9rem] font-semibold leading-[1.08] tracking-[-0.01em] text-ink transition-colors sm:text-[2.3rem]">
                The best nights out start{" "}
                <span style={{ color: BOND }}>together.</span>
              </h2>

              <p className="mt-5 max-w-xl font-sans text-[1.02rem] leading-relaxed text-ink-soft">
                Bond is a partner we like because it incentivizes community and
                togetherness. When more of the neighborhood shows up together,
                every room we run is better for it.
              </p>

              <span
                className="mt-6 inline-flex items-center gap-2 border-b pb-1 font-sans text-[0.78rem] font-semibold uppercase tracking-[0.14em] transition-colors"
                style={{ color: BOND, borderColor: "rgba(139,155,247,0.5)" }}
              >
                Check out Bond ↗
              </span>
            </div>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
