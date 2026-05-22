"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type TabCard = {
  tag: string;
  title: string;
  body: string;
};

type Tab = {
  label: string;
  cards: TabCard[];
};

const TABS: Tab[] = [
  {
    label: "Privacy Architecture",
    cards: [
      {
        tag: "Foundations",
        title: "Zero data retention by design",
        body: "Identity verification that never stores personal data — protection built into the architecture, not bolted on.",
      },
      {
        tag: "Cryptography",
        title: "Patented cryptographic matching",
        body: "Match without exposing. Verify without revealing. The math that makes privacy and accuracy compatible.",
      },
      {
        tag: "Network effect",
        title: "Collective fraud intelligence",
        body: "Detect coordinated fraud across institutions without sharing a single user record.",
      },
      {
        tag: "Compliance",
        title: "Built for global regulation",
        body: "GDPR, CCPA, BIPA, and more — privacy posture verified across jurisdictions.",
      },
    ],
  },
  {
    label: "Age assurance",
    cards: [
      {
        tag: "Age estimation",
        title: "Face age estimation",
        body: "Estimate age without storing biometrics. Built for platforms that need certainty without compromise.",
      },
      {
        tag: "Verification",
        title: "Document-based age verification",
        body: "Confirm age from ID without retaining sensitive fields. Only the assurance signal is kept.",
      },
      {
        tag: "Compliance",
        title: "Regulatory readiness",
        body: "Designed for COPPA, UK Online Safety Act, and emerging age-gating laws.",
      },
      {
        tag: "User experience",
        title: "Seamless for everyone",
        body: "Frictionless flows for adults; rigorous gating for minors. Privacy preserved either way.",
      },
    ],
  },
  {
    label: "Industries",
    cards: [
      {
        tag: "Financial services",
        title: "Privacy-first KYC",
        body: "Onboard customers and meet compliance without building a honeypot of personal data.",
      },
      {
        tag: "Healthcare",
        title: "Patient identity without PHI exposure",
        body: "Verify patients across networks while honoring HIPAA and data minimization.",
      },
      {
        tag: "Public sector",
        title: "Civic-grade trust",
        body: "Government-grade verification without government-grade surveillance.",
      },
      {
        tag: "Marketplaces",
        title: "Trust at platform scale",
        body: "Protect buyers, sellers, and the platform itself — without holding user data hostage.",
      },
    ],
  },
];

export function PrivacyTabs() {
  const [active, setActive] = useState(0);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollTo({ left: 0, behavior: "smooth" });
  }, [active]);

  const scrollByOne = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]") as HTMLElement | null;
    if (!card) return;
    const step = card.getBoundingClientRect().width + 16;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div role="tablist" className="flex flex-wrap gap-2">
          {TABS.map((t, i) => {
            const isActive = i === active;
            return (
              <button
                key={t.label}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(i)}
                className={cn(
                  "inline-flex items-center rounded-full border px-4 py-2 text-[13.5px] font-medium transition-colors",
                  isActive
                    ? "border-blue bg-blue text-white shadow-[0_8px_20px_-10px_rgba(0,84,255,0.55)]"
                    : "border-border-light bg-background text-foreground/80 hover:border-blue/40 hover:text-blue",
                )}
              >
                {t.label}
              </button>
            );
          })}
        </div>
        <div className="hidden shrink-0 items-center gap-2 sm:flex">
          <button
            type="button"
            onClick={() => scrollByOne(-1)}
            aria-label="Previous cards"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-light bg-background text-foreground transition-colors hover:border-foreground/40 active:bg-foreground/[0.04]"
          >
            <ChevronLeft size={18} strokeWidth={2} />
          </button>
          <button
            type="button"
            onClick={() => scrollByOne(1)}
            aria-label="Next cards"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-light bg-background text-foreground transition-colors hover:border-foreground/40 active:bg-foreground/[0.04]"
          >
            <ChevronRight size={18} strokeWidth={2} />
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="no-scrollbar mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 pt-2"
      >
        {TABS[active].cards.map((c) => (
          <article
            data-card
            key={c.title}
            className="group relative flex w-[78%] shrink-0 snap-start flex-col rounded-2xl border border-border-light bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue/30 hover:shadow-[0_24px_48px_-32px_rgba(38,40,49,0.35)] sm:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-2rem)/3)]"
          >
            <span className="inline-flex w-fit items-center rounded-full border border-blue/20 bg-blue-100 px-2.5 py-0.5 text-[11px] font-medium text-blue">
              {c.tag}
            </span>
            <h3 className="mt-5 font-display text-lg leading-tight text-black md:text-xl">
              {c.title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-grey-on-white">{c.body}</p>
            <span className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-medium text-blue">
              Learn more
              <ArrowUpRight
                size={14}
                strokeWidth={2.25}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          </article>
        ))}
      </div>
    </div>
  );
}
