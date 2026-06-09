import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "The Team",
  description:
    "The team behind Imperial Fizz — Jon Alexis, Founder & CEO, and Matt Alexis, Chief Financial Officer.",
};

function Leader({
  name,
  role,
  bio,
  img,
}: {
  name: string;
  role: string;
  bio: string;
  img: string;
}) {
  return (
    <div>
      <div
        className="relative overflow-hidden rounded-2xl bg-paper-deep"
        style={{ aspectRatio: "4 / 5" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img}
          alt={`${name}, ${role} of Imperial Fizz`}
          className="absolute inset-0 h-full w-full object-cover object-[center_22%]"
        />
      </div>
      <p className="mt-5 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-red">
        {role}
      </p>
      <h2 className="mt-1 font-display text-2xl font-semibold text-ink sm:text-[1.8rem]">
        {name}
      </h2>
      <p className="mt-3 max-w-md font-sans text-[1rem] leading-relaxed text-ink-soft">
        {bio}
      </p>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="pb-24 pt-16 sm:pb-32 sm:pt-24">
          <div className="mx-auto max-w-ledger px-5 sm:px-8">
            <Reveal>
              <div className="flex items-baseline gap-4">
                <span className="figure font-display font-semibold text-red">&mdash;</span>
                <span aria-hidden className="h-px flex-1 translate-y-[-0.2em] bg-[var(--rule-strong)]" />
                <span className="ledger-label">The Team</span>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-10 font-display text-[2.9rem] font-semibold leading-[0.98] tracking-[-0.02em] text-ink sm:text-[4.2rem]">
                The team behind the rooms.
              </h1>
            </Reveal>

            <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-14 sm:grid-cols-2 lg:max-w-3xl">
              <Reveal>
                <Leader
                  name="Jon Alexis"
                  role="Founder & CEO"
                  img="/jonalexis.jpg"
                  bio="Took over the family fish market, TJ's Seafood, in 2009 and grew it into a five-concept group. A self-described apostle of seafood who chases neighbors, not trends."
                />
              </Reveal>
              <Reveal delay={100}>
                <Leader
                  name="Matt Alexis"
                  role="Chief Financial Officer"
                  img="/matt-alexis.jpeg"
                  bio="Runs the numbers and the business across all five concepts — turning neighborhood hunches into rooms that last. (Bio to confirm with client.)"
                />
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
