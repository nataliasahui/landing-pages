import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Tone = "light" | "dark";
type Tag = "h1" | "h2";

interface PageHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  tone?: Tone;
  /**
   * Underlying heading element. Defaults to `h1` for page titles.
   * Use `as="h2"` to re-use the same visual treatment for a second
   * big heading on the page (closing CTA, sign-off, etc.) without
   * introducing a second h1.
   */
  as?: Tag;
  children: ReactNode;
}

export function PageHeading({
  tone = "light",
  as: Component = "h1",
  className,
  children,
  ...rest
}: PageHeadingProps) {
  return (
    <Component
      className={cn(
        "font-display text-4xl leading-[1.05] text-balance sm:text-5xl md:text-[56px]",
        tone === "dark" ? "text-white" : "text-black",
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  );
}
