import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/ui/Reveal";
import CareersBoard from "@/components/CareersBoard";

export const metadata: Metadata = {
  title: "Join Our Team",
  description:
    "Work the good rooms. Pick a restaurant in the Imperial Fizz group and apply directly — TJ's Seafood, Malibu Poke, Escondido, Ramble Room, or Birdie's Eastside.",
};

export default function CareersPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="pb-24 pt-16 sm:pb-28 sm:pt-24">
          <div className="mx-auto max-w-ledger px-5 sm:px-8">
            <Reveal>
              <div className="flex items-baseline gap-4">
                <span className="figure font-display font-semibold text-red">&mdash;</span>
                <span aria-hidden className="h-px flex-1 translate-y-[-0.2em] bg-[var(--rule-strong)]" />
                <span className="ledger-label">Careers</span>
              </div>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-6 md:grid-cols-12">
              <Reveal as="div" className="md:col-span-7">
                <h1 className="font-display text-[2.9rem] font-semibold leading-[0.98] tracking-[-0.02em] text-ink sm:text-[4.2rem]">
                  Come work the <span className="text-red">good rooms.</span>
                </h1>
              </Reveal>
              <Reveal delay={120} as="div" className="md:col-span-4 md:col-start-9 md:self-end">
                <p className="font-sans text-[1.02rem] leading-relaxed text-ink-soft">
                  We treat hospitality as a career, not a stopgap. Pick the room you
                  want to work in and apply — each application goes straight to the
                  restaurant.
                </p>
              </Reveal>
            </div>

            <CareersBoard />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
