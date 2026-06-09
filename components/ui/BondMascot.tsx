"use client";

import { useEffect, useState } from "react";

/**
 * Bond mascot with a wink. Both frames are rendered (so both preload) and we
 * toggle a single `winking` state — the eyes-open base and the wink frame swap
 * atomically via opacity, so exactly one is ever visible (no gap, no overlap,
 * no drift). Honors prefers-reduced-motion (stays eyes-open).
 */
export default function BondMascot({ className = "" }: { className?: string }) {
  const [winking, setWinking] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let blink: ReturnType<typeof setTimeout>;
    const id = setInterval(() => {
      setWinking(true);
      blink = setTimeout(() => setWinking(false), 200);
    }, 4500);
    return () => {
      clearInterval(id);
      clearTimeout(blink);
    };
  }, []);

  return (
    <div className={className} aria-hidden>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/non-wink.png"
        alt=""
        className="block w-full"
        style={{ opacity: winking ? 0 : 1 }}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/bonder-on-wall.png"
        alt=""
        className="absolute inset-0 h-full w-full"
        style={{ opacity: winking ? 1 : 0 }}
      />
    </div>
  );
}
