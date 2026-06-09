/** Roman-numeral plate mark for section heads — the "bill of fare" device. */
const ROMAN = ["0", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

export function PlateNumber({ n }: { n: number }) {
  return (
    <span className="figure font-display text-red/80 leading-none">
      {ROMAN[n] ?? n}
    </span>
  );
}

/** A section eyebrow: plate numeral + hairline rule + letterpressed label. */
export function SectionMark({
  n,
  label,
}: {
  n: number;
  label: string;
}) {
  return (
    <div className="flex items-baseline gap-4">
      <PlateNumber n={n} />
      <span aria-hidden className="h-px flex-1 translate-y-[-0.2em] bg-[var(--rule-strong)]" />
      <span className="ledger-label">{label}</span>
    </div>
  );
}
