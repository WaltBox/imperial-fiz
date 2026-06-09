import Image from "next/image";

/**
 * A finished-looking image slot that works with photos absent.
 *
 * When `src` is provided it renders an optimized next/image. Until then it
 * renders a tinted duotone placeholder (the concept's accent over paper) with
 * the art-direction note set as a real caption — so the layout reads intentional
 * and the next person knows exactly what shot belongs here.
 *
 * Drop a real photo by passing `src` (and keep the descriptive `alt`).
 */
export default function ImageSlot({
  src,
  alt,
  tint = "#5A1A1C",
  ink = "#ECE3CF",
  ratio = "4 / 5",
  caption,
  className = "",
  priority = false,
  contain = false,
}: {
  src?: string;
  alt: string;
  tint?: string;
  ink?: string;
  ratio?: string;
  caption?: string;
  className?: string;
  priority?: boolean;
  /** for transparent cutouts: show the whole figure standing on the tint block
   * (object-contain, bottom-anchored) instead of cropping to fill */
  contain?: boolean;
}) {
  return (
    <figure
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio: ratio, backgroundColor: tint }}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          className={contain ? "object-contain object-bottom" : "object-cover"}
        />
      ) : (
        <div
          className="absolute inset-0 flex flex-col justify-between p-5"
          style={{
            // duotone wash so the empty slot still has depth + grain
            backgroundImage:
              "linear-gradient(150deg, rgba(255,255,255,0.10), rgba(0,0,0,0.28)), radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "100% 100%, 3px 3px",
            color: ink,
          }}
          aria-hidden
        >
          <span
            className="font-sans text-[0.6rem] font-semibold uppercase tracking-[0.22em] opacity-70"
            style={{ borderColor: ink }}
          >
            <span className="inline-block border px-1.5 py-0.5" style={{ borderColor: ink }}>
              Photo
            </span>
          </span>
          {caption ? (
            <figcaption className="max-w-[18rem] font-display text-[0.95rem] leading-snug opacity-90">
              {caption}
            </figcaption>
          ) : null}
        </div>
      )}
      {/* a11y: the alt text rides the figure even in placeholder state */}
      {!src ? <span className="sr-only">{alt}</span> : null}
    </figure>
  );
}
