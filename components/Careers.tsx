import Reveal from "./ui/Reveal";

const TENETS = [
  {
    title: "Hospitality is a craft, not a shift.",
    body: "We hire people who take the work seriously and themselves lightly — and we promote from inside the room.",
  },
  {
    title: "You'll be known here too.",
    body: "Small enough that your name is on the schedule and the wins, across five concepts and growing.",
  },
  {
    title: "Learn the whole house.",
    body: "Line to floor to events to the fish market — the people who run our rooms learned them from the ground.",
  },
];

export default function Careers() {
  return (
    <section
      id="careers"
      className="border-b rule-strong bg-red-wash py-20 sm:py-28"
    >
      <div className="mx-auto max-w-ledger px-5 sm:px-8">
        <Reveal>
          <div className="flex items-baseline gap-4">
            <span className="figure font-display font-semibold text-red">VI</span>
            <span aria-hidden className="h-px flex-1 translate-y-[-0.2em] bg-ink/20" />
            <span className="ledger-label">Careers</span>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <Reveal>
              <h2 className="font-display text-[2.8rem] font-semibold leading-[0.98] tracking-[-0.02em] text-ink sm:text-[3.6rem]">
                Come work the
                <br />
                <span className="text-red">good rooms.</span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-7 max-w-lg font-sans text-[1.05rem] leading-relaxed text-ink-soft">
                We&rsquo;re a growing Dallas group that treats hospitality as a
                career, not a stopgap. If you&rsquo;re a curious, generous person who
                likes a full room and gets a kick out of remembering a regular&rsquo;s
                order — we&rsquo;d like to meet you.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-9 flex flex-wrap gap-4">
                <a href="mailto:careers@imperialfizz.com" className="btn-solid">
                  Introduce Yourself
                </a>
                <a href="#contact" className="btn-outline">
                  Open Positions
                </a>
              </div>
              <p className="mt-4 font-sans text-[0.72rem] text-ink-faint">
                Demo links — wire careers@ inbox / ATS before launch.
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-5 md:col-start-8">
            <ol className="space-y-px">
              {TENETS.map((t, i) => (
                <Reveal key={t.title} delay={i * 80} as="li">
                  <div className="border-t border-ink/15 py-6">
                    <div className="flex items-baseline gap-4">
                      <span className="figure font-display text-xl font-semibold text-red">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="font-display text-xl font-semibold leading-snug text-ink">
                          {t.title}
                        </h3>
                        <p className="mt-2 font-sans text-[0.95rem] leading-relaxed text-ink-soft">
                          {t.body}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
