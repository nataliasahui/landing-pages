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
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-12">
      {/* Sidebar tabs */}
      <nav className="lg:border-l lg:border-white/10">
        <ul className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:gap-0 lg:overflow-visible lg:pb-0">
          {steps.map((s, i) => {
            const isActive = i === active;
            return (
              <li key={s.title} className="shrink-0 lg:shrink">
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={isActive}
                  className={cn(
                    "group inline-flex w-full items-start gap-3 rounded-xl border px-4 py-3 text-left transition-colors lg:rounded-none lg:border-0 lg:border-l-2 lg:px-5 lg:py-3.5",
                    "lg:-ml-px",
                    isActive
                      ? "border-white/30 bg-white/[0.04] text-white lg:border-l-white lg:bg-transparent"
                      : "border-white/10 text-white/55 hover:border-white/20 hover:text-white/85 lg:border-l-transparent lg:hover:border-l-white/30",
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
                  <span className="font-display text-[14px] leading-tight whitespace-nowrap lg:text-[15px] lg:whitespace-normal">
                    {s.title}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Content panel */}
      <div className="lg:pl-2">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/[0.06] text-white [&_svg]:h-[18px] [&_svg]:w-[18px]">
            {current.icon}
          </span>
          <h3 className="font-display text-xl leading-tight text-white sm:text-2xl">
            {current.title}
          </h3>
        </div>
        <p className="mt-4 max-w-2xl text-[14px] leading-relaxed text-white/80 sm:text-[15px]">
          {current.subtitle}
        </p>
        <div className="mt-8 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
          {current.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={current.image}
              alt=""
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <span className="font-display text-base font-medium tracking-tight text-white/30 sm:text-lg">
                Visual coming soon
              </span>
            </div>
          )}
        </div>
        <p className="mt-6 max-w-2xl text-[14px] leading-relaxed text-white/70">
          <strong className="font-medium text-white">{current.title}</strong>{" "}
          — {current.body}
        </p>
      </div>
    </div>
  );
}
