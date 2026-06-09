"use client";

import { useState } from "react";
import { SectionMark } from "./ui/Plate";
import Reveal from "./ui/Reveal";
import { restaurants } from "@/lib/restaurants";

const WAYS = [
  {
    title: "The Big Table",
    body: "Large parties and group dining across every room — the fifteen-mom dinner, the rehearsal, the team win.",
  },
  {
    title: "Buyouts",
    body: "Full and partial buyouts, from Birdie's court-sized patio to Ramble Room's horseshoe bar.",
  },
  {
    title: "Catering by TJ's",
    body: "Off-site catering run out of the original fish market — the kitchen that already feeds the city's biggest rooms.",
  },
];

export default function PrivateEvents() {
  const [sent, setSent] = useState(false);

  return (
    <section id="events" className="border-b rule-strong py-20 sm:py-28">
      <div className="mx-auto max-w-ledger px-5 sm:px-8">
        <Reveal>
          <SectionMark n={5} label="Private Events & Catering" />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-14 lg:grid-cols-12">
          {/* Left — pitch */}
          <div className="lg:col-span-6">
            <Reveal>
              <h2 className="font-display text-[2.8rem] font-semibold leading-[0.98] tracking-[-0.02em] text-ink sm:text-[3.6rem]">
                Book a <span className="text-red">space.</span>
              </h2>
            </Reveal>

            <Reveal delay={120}>
              <figure className="mt-9 border-l-2 border-fizz pl-5">
                <blockquote className="font-display text-xl leading-snug text-ink">
                  &ldquo;When my wife and fifteen other moms want to go out, it&rsquo;s
                  nearly impossible to find the space. We want to be the go-to for the
                  big bookings.&rdquo;
                </blockquote>
                <figcaption className="ledger-label mt-3">
                  Jon Alexis &mdash; Founder
                </figcaption>
              </figure>
            </Reveal>

            <dl className="mt-12 space-y-px overflow-hidden border-y rule">
              {WAYS.map((w, i) => (
                <Reveal key={w.title} delay={i * 70}>
                  <div className="grid grid-cols-12 gap-4 border-b rule py-5 last:border-b-0">
                    <dt className="col-span-12 flex items-baseline gap-3 sm:col-span-4">
                      <span className="figure font-display text-lg text-red/70">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-lg font-semibold text-ink">
                        {w.title}
                      </span>
                    </dt>
                    <dd className="col-span-12 font-sans text-[0.98rem] leading-relaxed text-ink-faint sm:col-span-8">
                      {w.body}
                    </dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>

          {/* Right — inquiry form */}
          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal delay={140}>
              <div className="deckle bg-paper p-7 sm:p-9">
                <p className="ledger-label mb-6">Send an Inquiry</p>

                {sent ? (
                  <div className="py-10 text-center" role="status" aria-live="polite">
                    <p className="font-display text-2xl text-red">
                      Thank you — consider it received.
                    </p>
                    <p className="mt-3 font-sans text-sm text-ink-faint">
                      Someone from the events team will be in touch shortly. (Demo
                      form — not yet wired to a live inbox.)
                    </p>
                  </div>
                ) : (
                  <form
                    className="space-y-5"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSent(true);
                    }}
                  >
                    <Field id="ev-name" label="Name">
                      <input id="ev-name" name="name" type="text" required className={inputCls} />
                    </Field>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <Field id="ev-email" label="Email">
                        <input id="ev-email" name="email" type="email" required className={inputCls} />
                      </Field>
                      <Field id="ev-count" label="Party size">
                        <input id="ev-count" name="count" type="number" min={1} className={inputCls} />
                      </Field>
                    </div>

                    <Field id="ev-where" label="Which concept?">
                      <select id="ev-where" name="where" className={inputCls} defaultValue="">
                        <option value="" disabled>
                          Select a room…
                        </option>
                        <option value="any">No preference / catering</option>
                        {restaurants.map((r) => (
                          <option key={r.slug} value={r.slug}>
                            {r.name}
                          </option>
                        ))}
                      </select>
                    </Field>

                    <Field id="ev-detail" label="Tell us about the occasion">
                      <textarea id="ev-detail" name="detail" rows={4} className={inputCls} />
                    </Field>

                    <button type="submit" className="btn-solid w-full">
                      Send Inquiry
                    </button>
                    <p className="font-sans text-[0.72rem] leading-relaxed text-ink-faint">
                      Prefer a person? Email{" "}
                      <a href="mailto:example@imperialfizz.com" className="link-rule text-ink">
                        example@imperialfizz.com
                      </a>
                      . <span className="italic">Confirm address before launch.</span>
                    </p>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

const inputCls =
  "w-full border border-ink/25 bg-paper-warm/60 px-3.5 py-2.5 font-sans text-[0.95rem] text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-red focus:bg-paper";

function Field({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block font-sans text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-ink-faint"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
