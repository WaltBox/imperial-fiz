/**
 * Fizz — the blue effervescence mark. A small, CONTAINED cluster of rising
 * bubbles used as a brand device next to the wordmark and section heads. This
 * is deliberately NOT a full-screen floating-particle background; it's a finite
 * mark. `animated` adds a gentle, reduced-motion-aware rise (off by default).
 */
export default function Fizz({
  className = "",
  animated = false,
  colorClass = "text-fizz",
}: {
  className?: string;
  animated?: boolean;
  colorClass?: string;
}) {
  // x, y (baseline), radius, filled?, animation delay (s)
  const bubbles: [number, number, number, boolean, number][] = [
    [7, 40, 4.2, true, 0],
    [16, 44, 2.6, false, 0.5],
    [13, 31, 3.1, false, 0.9],
    [21, 36, 2.0, true, 1.3],
    [9, 24, 2.2, true, 1.7],
    [18, 22, 1.5, false, 2.1],
  ];

  return (
    <svg
      viewBox="0 0 28 48"
      className={`${colorClass} ${className}`}
      fill="none"
      aria-hidden
    >
      {bubbles.map(([cx, cy, r, filled, delay], i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r={r}
          className={`${filled ? "fill-current" : "stroke-current"} ${
            animated ? "animate-bubble [animation-fill-mode:both] motion-reduce:!animate-none" : ""
          }`}
          strokeWidth={filled ? 0 : 1.4}
          style={animated ? { animationDelay: `${delay}s`, transformBox: "fill-box", transformOrigin: "center" } : undefined}
          opacity={filled ? 0.92 : 0.8}
        />
      ))}
    </svg>
  );
}
