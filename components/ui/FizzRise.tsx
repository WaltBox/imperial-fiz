/**
 * FizzRise — a contained column of champagne-style bubbles rising inside its
 * parent (intended for the hero red card, behind Jon). Deterministic config so
 * there's no hydration mismatch; CSS-only animation, disabled under
 * prefers-reduced-motion. Purely decorative.
 */

// left%, size(px), duration(s), delay(s), rise(px, negative = up), drift(px)
const BUBBLES: [number, number, number, number, number, number][] = [
  [8, 17, 9.5, 0.0, -540, 16],
  [15, 9, 7.0, 2.4, -460, -12],
  [22, 20, 10.5, 1.2, -580, 12],
  [29, 8, 6.4, 3.6, -400, 9],
  [36, 13, 8.6, 0.8, -520, -16],
  [43, 10, 7.6, 4.4, -480, 13],
  [50, 18, 10.0, 1.5, -560, -9],
  [57, 8, 6.8, 5.2, -380, 11],
  [64, 14, 9.0, 1.0, -520, 15],
  [71, 10, 7.8, 3.2, -460, -13],
  [78, 17, 10.2, 0.4, -580, 9],
  [85, 8, 6.6, 4.0, -400, -11],
  [92, 12, 9.4, 2.0, -540, 8],
  [11, 7, 8.2, 5.6, -440, -8],
  [33, 7, 6.2, 6.4, -360, 7],
  [47, 6, 5.8, 7.0, -340, -6],
  [60, 11, 8.8, 6.0, -500, 10],
  [74, 9, 7.2, 4.8, -420, -10],
];

export default function FizzRise() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {BUBBLES.map(([left, size, dur, delay, rise, drift], i) => (
        <span
          key={i}
          className="fizz-bubble"
          style={
            {
              left: `${left}%`,
              width: `${size}px`,
              height: `${size}px`,
              "--dur": `${dur}s`,
              "--delay": `${delay}s`,
              "--rise": `${rise}px`,
              "--drift": `${drift}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
