"use client";

import type { ReactNode } from "react";
import { DsIcon } from "@/components/ui/ds-icon";
import { Reveal } from "@/components/ui/reveal";

type Benefit = {
  icon: ReactNode;
  title: string;
  body: string;
};

const BENEFITS: Benefit[] = [
  {
    icon: <DsIcon src="/icons/shield.svg" className="h-[22px] w-[22px] bg-blue" />,
    title: "Eliminate fraud",
    body: "Keep bad actors out with advanced AI-powered prevention. Safeguard every step of the verification journey with end-to-end fraud signal monitoring.",
  },
  {
    icon: <DsIcon src="/icons/ai.svg" className="h-[22px] w-[22px] bg-blue" />,
    title: "Stay ahead of new threats",
    body: "Anticipate and defeat deepfakes, synthetic identities, and other AI-driven fraud attacks with continuously evolving machine learning models.",
  },
  {
    icon: <DsIcon src="/icons/trend-up.svg" className="h-[22px] w-[22px] bg-blue" />,
    title: "Optimize conversion",
    body: "Provide users with effortless, seamless and secure identity verification. Customize your experience to blend seamlessly with your brand.",
  },
];

export function BenefitsShowcase() {
  return (
    <div
      role="group"
      aria-label="Platform benefits"
      className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
    >
      {BENEFITS.map((b, i) => (
        <Reveal key={b.title} delay={0.1 + i * 0.08}>
          <BenefitItem benefit={b} />
        </Reveal>
      ))}
    </div>
  );
}

function BenefitItem({ benefit }: { benefit: Benefit }) {
  return (
    <div className="h-full rounded-xl border border-border-light bg-background p-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
        {benefit.icon}
      </div>
      <h3 className="mt-6 font-display text-base text-black">{benefit.title}</h3>
      <p className="mt-3 text-sm text-grey-on-white leading-relaxed">
        {benefit.body}
      </p>
    </div>
  );
}
