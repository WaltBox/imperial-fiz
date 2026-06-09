import type { PressItem } from "@/lib/press";

/**
 * Per-outlet placeholder tint so a card looks like a real clipping before the
 * actual article image is dropped in. Add `image` (a local /public path or a
 * configured remote) to a press item to replace the placeholder with the real
 * screenshot / OG image.
 */
const OUTLET_TINT: Record<string, { bg: string; ink: string }> = {
  "Dallas Innovates": { bg: "#0E7C86", ink: "#EAFBFC" },
  PaperCity: { bg: "#C1467A", ink: "#FDEEF5" },
  "CultureMap Dallas": { bg: "#E2602A", ink: "#FFF1E8" },
  CraveDFW: { bg: "#2F7D4F", ink: "#ECFBF1" },
  "Voyage Dallas": { bg: "#2C6FE3", ink: "#EAF2FE" },
};

function Arrow() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M7 17 17 7M9 7h8v8" strokeLinecap="square" />
    </svg>
  );
}

export default function ArticleCard({ item }: { item: PressItem }) {
  const tint = OUTLET_TINT[item.outlet] ?? { bg: "#334155", ink: "#F1F5F9" };

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div
        className="relative aspect-video w-full overflow-hidden"
        style={{ backgroundColor: tint.bg }}
      >
        {item.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div
            className="absolute inset-0 flex flex-col justify-between p-5"
            style={{
              backgroundImage:
                "linear-gradient(150deg, rgba(255,255,255,0.12), rgba(0,0,0,0.30)), radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
              backgroundSize: "100% 100%, 3px 3px",
              color: tint.ink,
            }}
            aria-hidden
          >
            <span
              className="self-start border px-1.5 py-0.5 font-sans text-[0.58rem] font-semibold uppercase tracking-[0.2em]"
              style={{ borderColor: tint.ink }}
            >
              Press
            </span>
            <span className="font-display text-2xl font-extrabold leading-none">
              {item.outlet}
            </span>
          </div>
        )}

        {/* hover read-chip */}
        <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-paper text-ink opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <Arrow />
        </span>
      </div>

      <div className="mt-4">
        <p className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-red">
          {item.outlet}
          <span className="text-ink-faint"> · {item.date}</span>
        </p>
        <h3 className="mt-2 font-display text-xl font-semibold leading-snug text-ink transition-colors group-hover:text-red">
          {item.title}
        </h3>
        {item.excerpt && (
          <p className="mt-2 font-sans text-[0.9rem] leading-relaxed text-ink-faint">
            {item.excerpt}
          </p>
        )}
      </div>
    </a>
  );
}
