import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Tone = "light" | "dark";

interface PageHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  tone?: Tone;
  children: ReactNode;
}

export function PageHeading({
  tone = "light",
  className,
  children,
  ...rest
}: PageHeadingProps) {
  return (
    <h1
      className={cn(
        "font-display text-4xl leading-[1.05] text-balance sm:text-5xl md:text-[56px]",
        tone === "dark" ? "text-white" : "text-black",
        className,
      )}
      {...rest}
    >
      {children}
    </h1>
  );
}
