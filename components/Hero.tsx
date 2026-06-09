import Reveal from "./ui/Reveal";
import FizzRise from "./ui/FizzRise";

export default function Hero() {
  return (
    <section id="top" className="relative border-b rule-strong">
      <div className="mx-auto grid max-w-ledger grid-cols-1 gap-y-10 px-5 pb-16 pt-16 sm:px-8 md:grid-cols-12 md:gap-x-8 md:pb-24 md:pt-24 lg:pt-28">
        {/* Statement column — breaks the grid wide */}
        <div className="md:col-span-7 lg:col-span-7">
          <Reveal>
            <p className="ledger-label mb-7">Dallas, Texas</p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="font-display text-[3.2rem] font-medium leading-[0.95] tracking-[-0.015em] text-ink sm:text-[4.4rem] lg:text-[5.6rem]">
              We build
              <br />
              restaurants{" "}
              <span className="font-semibold text-red">backwards.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-8 max-w-xl font-sans text-lg leading-relaxed text-ink-soft">
              Most groups pick a concept and hunt for a room. We do the opposite.
              Find a great neighborhood, learn exactly what it&rsquo;s missing, then
              build the place it deserves — somewhere you&rsquo;d happily eat a few
              times a week, run by people who remember your name.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#restaurants" className="btn-solid">
                The Restaurants
              </a>
              <a href="#events" className="btn-outline">
                Private Events &amp; Catering
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <dl className="mt-14 grid max-w-md grid-cols-3 border-t rule pt-5">
              <div>
                <dt className="ledger-label">Concepts</dt>
                <dd className="figure mt-1 font-display text-2xl text-ink">x</dd>
              </div>
              <div>
                <dt className="ledger-label">Since</dt>
                <dd className="figure mt-1 font-display text-2xl text-ink">2009</dd>
              </div>
              <div>
                <dt className="ledger-label">City</dt>
                <dd className="mt-1 font-display text-2xl text-ink">Dallas</dd>
              </div>
            </dl>
          </Reveal>
        </div>

        {/* Image column — Jon standing on a rounded red card, cresting the top */}
        <div className="pt-10 md:col-span-5 md:pt-12 lg:pt-20">
          <Reveal delay={200}>
            <figure className="mx-auto max-w-[28.5rem]">
              {/* Jon's positioning context — keeps the caption below from shifting
                  his bottom anchor */}
              <div className="relative">
                {/* red card — arched (near half-circle) top, square bottom, with
                    fizz rising inside it behind Jon */}
                <div
                  className="relative overflow-hidden rounded-t-[50%] bg-red"
                  style={{ aspectRatio: "4 / 5" }}
                >
                  <FizzRise />
                </div>
                {/* Jon — bottom-anchored, rises into the arch. Less overflow on
                    phones so his head doesn't cover the copy above. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/jon-trim.png"
                  alt="Founder Jon Alexis in an apron, holding a whole fish — the apostle of seafood behind Imperial Fizz."
                  className="pointer-events-none absolute bottom-0 left-1/2 h-[107%] w-auto max-w-none -translate-x-1/2 object-contain object-bottom drop-shadow-[0_22px_34px_rgba(26,23,20,0.22)] sm:h-[116%]"
                />
              </div>
              <figcaption className="mt-5 text-center font-display text-[0.95rem] leading-snug text-ink-soft">
                <span className="font-semibold text-ink">Jon Alexis</span> &mdash;
                apostle of seafood &amp; CEO of Imperial Fizz
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
