import Fizz from "./Fizz";

/**
 * Imperial Fizz wordmark — typographic. "Imperial" regular, "Fizz" italic, with
 * a small cluster of blue bubbles rising off the end. Pass `animated` for the
 * hero lockup; leave static in the nav/footer.
 */
export default function Wordmark({
  className = "",
  animated = false,
  onDark = false,
}: {
  className?: string;
  animated?: boolean;
  onDark?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-start font-display leading-none tracking-[-0.01em] ${className}`}
      style={{ fontSize: "1.18rem" }}
    >
      <span className="font-semibold">Imperial</span>
      <span>&nbsp;</span>
      <span className="relative font-extrabold">
        Fizz
        <Fizz
          animated={animated}
          colorClass={onDark ? "text-fizz-light" : "text-fizz"}
          className="absolute -right-[0.55em] -top-[0.62em] h-[1.05em] w-auto"
        />
      </span>
    </span>
  );
}
