import { SectionMark } from "./ui/Plate";
import Reveal from "./ui/Reveal";

const HOUSE_RULES = [
  {
    title: "Chase neighbors, not trends.",
    body: "We start with a great neighborhood and ask what it's actually missing — then build that, not whatever's fashionable this year.",
  },
  {
    title: "No pretense, ever.",
    body: "Old-school hospitality with the airs left out. A room can be excellent and still be easy.",
  },
  {
    title: "Remember the name.",
    body: "The whole point is to be a regular somewhere. We staff and train so you're known by the second visit.",
  },
  {
    title: "Kids and all.",
    body: "Family-first by design. Nobody should flinch when a kid spills the salsa.",
  },
  {
    title: "Be the room for the big table.",
    body: "The neighborhood needs somewhere it can actually book — the fifteen-mom dinner, the buyout, the wake and the win.",
  },
  {
    title: "Hold the seafood to TJ's.",
    body: "Every menu answers to the standard set at the fish market. That thread never gets cut.",
  },
];

export default function TheIdea() {
  return (
    <section id="the-idea" className="border-b rule-strong py-20 sm:py-28">
      <div className="mx-auto max-w-ledger px-5 sm:px-8">
        <Reveal>
          <SectionMark n={1} label="The Idea" />
        </Reveal>

        {/* Origin — asymmetric two-column */}
        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <h2 className="font-display text-[2.4rem] font-medium leading-[1.02] tracking-[-0.01em] text-ink sm:text-[3rem]">
                A fish market,
                <br />
                run forward by
                <br />
                <span className="text-red">running it backward.</span>
              </h2>
            </Reveal>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <Reveal delay={120}>
              <div className="space-y-5 font-sans text-[1.05rem] leading-relaxed text-ink-soft">
                <p>
                  In 2009, Jon Alexis left a career in political campaigns to take
                  over his family&rsquo;s neighborhood fish market — TJ&rsquo;s
                  Seafood, named for its original owners, Tom and Jim. He kept what
                  made it loved and sharpened what didn&rsquo;t, and turned a single
                  counter into a Dallas institution.
                </p>
                <p>
                  What he learned there became a method. A great restaurant
                  doesn&rsquo;t begin with a concept; it begins with a neighborhood
                  and an honest answer to one question — <em>what is this place
                  missing?</em> Imperial Fizz is what that method built: five
                  concepts, each one a specific answer to a specific corner of
                  Dallas, all held to the same standard of hospitality and the same
                  obsession with what&rsquo;s on the plate.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Pull-quote */}
        <Reveal>
          <figure className="mx-auto mt-20 max-w-4xl border-y rule py-14 text-center md:py-20">
            <blockquote className="font-display text-[2rem] font-medium leading-[1.16] tracking-[-0.01em] text-ink sm:text-[2.8rem]">
              <span className="text-red">&ldquo;</span>We do it backwards. We find a
              great spot in a great neighborhood, and figure out what those
              neighbors need.<span className="text-red">&rdquo;</span>
            </blockquote>
            <figcaption className="ledger-label mt-8 !tracking-[0.16em]">
              Jon Alexis &mdash; Founder, Imperial Fizz
            </figcaption>
          </figure>
        </Reveal>

        {/* House Rules — named behaviors in the house's own idiom */}
        <div className="mt-20">
          <Reveal>
            <p className="ledger-label mb-8">The House Rules</p>
          </Reveal>
          <ol className="grid grid-cols-1 gap-px overflow-hidden border rule bg-[var(--rule)] sm:grid-cols-2 lg:grid-cols-3">
            {HOUSE_RULES.map((rule, i) => (
              <Reveal key={rule.title} delay={i * 60} as="li">
                <div className="flex h-full flex-col bg-paper p-7">
                  <span className="figure font-display text-2xl text-red/80">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold leading-snug text-ink">
                    {rule.title}
                  </h3>
                  <p className="mt-3 font-sans text-[0.95rem] leading-relaxed text-ink-faint">
                    {rule.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
