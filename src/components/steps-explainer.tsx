"use client";

import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ExplainerStep = {
  icon: ReactNode;
  title: string;
  subtitle: string;
  body: string;
  image?: string;
};

export function StepsExplainer({ steps }: { steps: ExplainerStep[] }) {
  const [active, setActive] = useState(0);
  const current = steps[active];

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
      {/* Accordion list */}
      <ul role="tablist" aria-orientation="vertical" className="flex flex-col">
        {steps.map((s, i) => {
          const isActive = i === active;
          return (
            <li key={s.title}>
              <button
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-expanded={isActive}
                onClick={() => setActive(i)}
                className={cn(
                  "group flex w-full items-start gap-3 border-l-2 py-4 pl-5 pr-3 text-left transition-colors",
                  isActive
                    ? "border-l-blue text-white"
                    : "border-l-white/10 text-white/55 hover:border-l-white/30 hover:text-white/85",
                )}
              >
                <span
                  className={cn(
                    "mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-colors",
                    isActive
                      ? "border-white/40 bg-white/[0.06] text-white"
                      : "border-white/15 text-white/55 group-hover:text-white/85",
                  )}
                >
                  {s.icon}
                </span>
                <span className="min-w-0 flex-1">
                  <span
                    className={cn(
                      "block font-display text-[15px] leading-tight transition-colors sm:text-base",
                      isActive ? "text-white font-medium" : "",
                    )}
                  >
                    {s.title}
                  </span>
                  {isActive && (
                    <span className="mt-2 block text-[13px] leading-relaxed text-white/65">
                      {s.body}
                    </span>
                  )}
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      {/* Visual */}
      <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] lg:aspect-[5/6]">
        {current.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={current.image}
            alt=""
            className="h-full w-full object-cover transition-opacity duration-300"
            key={current.title}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="font-display text-base font-medium tracking-tight text-white/30 sm:text-lg">
              Visual coming soon
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
