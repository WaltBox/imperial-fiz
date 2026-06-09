/**
 * Quiet entrance — a single short rise+fade on mount, via pure CSS (no JS, no
 * IntersectionObserver). Content is present and visible at rest, so it survives
 * no-JS, crawlers, and static capture; the motion is enhancement only and is
 * disabled under prefers-reduced-motion (see the motion-reduce variant + the
 * reduced-motion guard in globals.css).
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}) {
  const Component = Tag as any;
  return (
    <Component
      className={`reveal-rise motion-reduce:animate-none ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </Component>
  );
}
