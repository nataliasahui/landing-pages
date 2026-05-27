import { cn } from "@/lib/utils";

/**
 * Renders an icon from the design-system SVG library at /icons/*.svg.
 *
 * The source SVGs are hardcoded to stroke="black", so we render them via
 * CSS mask-image — the visible color comes from the element's own
 * background, which is controlled by the className (e.g. `bg-blue`,
 * `bg-white`, `bg-current`). Pair with a size class like `h-5 w-5`.
 *
 * Example:
 *   <DsIcon src="/icons/lock.svg" className="h-5 w-5 bg-blue" />
 */
export function DsIcon({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  return (
    <span
      aria-hidden
      className={cn("inline-block bg-current", className)}
      style={{
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: "contain",
        maskSize: "contain",
      }}
    />
  );
}
