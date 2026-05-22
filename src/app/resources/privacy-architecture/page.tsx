import type { Metadata } from "next";
import {
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";
import { Section, Eyebrow } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { HeroVideo } from "@/components/hero-video";
import { PrivacyTabs } from "@/components/privacy-tabs";

export const metadata: Metadata = {
  title: "Privacy Architecture",
  description:
    "The protection layer that surfaces fraud patterns without ever surfacing personal data. Built on an architecture that holds no data.",
};

const BENTO_CARDS: Array<{ tag: string; title: string; icon: string }> = [
  {
    title: "Privacy is not a feature. It's our architecture.",
    tag: "Privacy by design Manifesto",
    icon: "/icons/document.svg",
  },
  {
    title: "Incode commits $100 million to privacy",
    tag: "Announcement",
    icon: "/icons/money-up.svg",
  },
  {
    title: "How we are eliminating the privacy-fraud paradox",
    tag: "Foundations of our architecture",
    icon: "/icons/idea.svg",
  },
  {
    title: "Incode acquires Identiq",
    tag: "Announcement",
    icon: "/icons/network.svg",
  },
  {
    title: "Regulation and compliance",
    tag: "Learn more",
    icon: "/icons/compliance.svg",
  },
];

const STATS: Array<{ value: string; label: string }> = [
  { value: "$100M+", label: "investment in privacy in 2026" },
  { value: "$50M+", label: "invested in patented cryptographic technology" },
  { value: "10+", label: "years of expertise" },
];

const ARCHITECTURE_RESOURCES = [
  { title: "The Privacy Manifesto by Incode", type: "Guide" },
  { title: "How our technology is built", type: "White paper" },
  { title: "Privacy Architecture", type: "Blog" },
];

const PRESS_RESOURCES = [
  { title: "PRESS MENTION placeholder" },
  { title: "PRESS MENTION placeholder" },
  { title: "PRESS MENTION placeholder" },
];

export default function PrivacyArchitecturePage() {
  return (
    <>
      <Hero />
      <FeaturedBento />
      <QuoteAndStats />
      <CategoryTabs />
      <ResourcesGrid />
      <ClosingCta />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-rich-black text-white">
      <div className="absolute inset-0 bg-hero-glow pointer-events-none opacity-60" />
      <div className="relative mx-auto max-w-[1280px] px-5 pt-32 pb-16 sm:pt-36 sm:pb-20 md:pt-40 md:pb-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:items-center">
          <div>
            <Reveal>
              <Eyebrow>Privacy Architecture</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-5 font-display text-4xl leading-[1.05] text-balance sm:text-5xl md:text-6xl">
                Privacy Architecture
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 font-display-regular text-xl text-balance text-white/85 sm:text-2xl">
                The protection layer that surfaces fraud patterns without ever surfacing personal data
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-grey-on-black sm:text-base">
                Better fraud intelligence for institutions and less friction for users. Our Privacy
                layer is built on an architecture that holds no data.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/contact">
                  Talk to an expert
                  <ArrowUpRight size={16} strokeWidth={2.25} />
                </ButtonLink>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.25}>
            <HeroVideo />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FeaturedBento() {
  return (
    <Section tone="light">
      <Reveal>
        <div className="grid gap-6 md:grid-cols-[1fr_1fr] md:items-end md:gap-12">
          <div>
            <Eyebrow tone="light">Featured</Eyebrow>
            <h2 className="mt-5 font-display text-3xl text-balance text-black sm:text-4xl">
              A new chapter in identity privacy
            </h2>
          </div>
          <p className="text-[15px] leading-relaxed text-grey-on-white sm:text-base md:max-w-md md:justify-self-end">
            From foundational manifestos to landmark commitments, explore the moments shaping
            Incode&rsquo;s privacy-first architecture.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 pt-2 sm:mt-12">
          {BENTO_CARDS.map((card) => (
            <BentoCard key={card.title} card={card} />
          ))}
        </div>
      </Reveal>
    </Section>
  );
}

function BentoCard({
  card,
}: {
  card: { tag: string; title: string; icon: string };
}) {
  return (
    <a
      href="#"
      className="group relative flex w-[78%] shrink-0 snap-start flex-col rounded-2xl border border-border-light bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue/30 hover:shadow-[0_24px_48px_-32px_rgba(38,40,49,0.35)] sm:w-[calc((100%-1rem)/2)] md:w-[calc((100%-2rem)/3)] lg:w-[calc((100%-4rem)/5)] lg:p-7"
    >
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-blue-100">
        <span
          aria-hidden
          className="block h-5 w-5 bg-[#006AFF]"
          style={{
            WebkitMaskImage: `url(${card.icon})`,
            maskImage: `url(${card.icon})`,
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskPosition: "center",
            WebkitMaskSize: "contain",
            maskSize: "contain",
          }}
        />
      </span>
      <span className="mt-8 text-[13px] leading-relaxed text-grey-on-white">
        {card.tag}
      </span>
      <h3 className="mt-3 font-display text-lg leading-tight text-balance text-black md:text-xl">
        {card.title}
      </h3>
      <div className="mt-auto pt-8 inline-flex items-center gap-1.5 text-[13px] font-medium text-blue">
        Read more
        <ArrowUpRight
          size={14}
          strokeWidth={2.25}
          className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </div>
    </a>
  );
}

function QuoteAndStats() {
  return (
    <Section tone="rich">
      <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16 lg:items-center">
        <div>
          <Reveal>
            <Eyebrow>From our founder</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <blockquote className="mt-6 font-display-regular text-2xl leading-snug text-balance text-white sm:text-3xl md:text-4xl">
              &ldquo;We built Incode on a belief the industry rejected for years: that protecting
              people and protecting data are the same fight. Today we are proving it.&rdquo;
            </blockquote>
          </Reveal>
          <Reveal delay={0.2}>
            <figcaption className="mt-8 flex items-center gap-4">
              <img
                src="/ricardo-amper.png"
                alt="Ricardo Amper"
                className="h-14 w-14 shrink-0 rounded-full border border-white/15 object-cover"
              />
              <div>
                <div className="text-sm font-medium text-white">Ricardo Amper</div>
                <div className="mt-0.5 text-xs text-grey-on-black">
                  Founder &amp; CEO at Incode
                </div>
              </div>
            </figcaption>
          </Reveal>
        </div>

        <div className="flex flex-col gap-6 sm:gap-8">
          {STATS.map((s, i) => (
            <Reveal key={s.value} delay={0.15 + i * 0.08}>
              <div className="border-t border-white/15 pt-5">
                <div className="bg-gradient-to-r from-white to-[#006AFF] bg-clip-text font-display text-4xl leading-[1.1] text-transparent sm:text-5xl md:text-6xl">
                  {s.value}
                </div>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-grey-on-black">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

function CategoryTabs() {
  return (
    <Section tone="light">
      <Reveal>
        <div className="max-w-3xl">
          <Eyebrow tone="light">Privacy layer</Eyebrow>
          <h2 className="mt-5 font-display text-3xl text-balance text-black sm:text-4xl">
            Privacy built into every layer
          </h2>
        </div>
      </Reveal>
      <Reveal delay={0.15}>
        <div className="mt-10 sm:mt-12">
          <PrivacyTabs />
        </div>
      </Reveal>
    </Section>
  );
}

function ResourcesGrid() {
  return (
    <Section tone="light" className="border-t border-border-light">
      <Reveal>
        <div className="max-w-3xl">
          <Eyebrow tone="light">Resources</Eyebrow>
          <h2 className="mt-5 font-display text-3xl text-balance text-black sm:text-4xl">
            Privacy resources
          </h2>
          <p className="mt-4 text-[15px] text-grey-on-white sm:text-base">
            Explore selected resources to learn how Incode Privacy layer can protect your business.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 space-y-12 sm:mt-14 sm:space-y-16">
        <div>
          <Reveal>
            <h3 className="font-display text-xl text-black sm:text-2xl">Privacy Architecture</h3>
          </Reveal>
          <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3">
            {ARCHITECTURE_RESOURCES.map((r, i) => (
              <Reveal key={r.title} delay={0.05 * i}>
                <ResourceCard title={r.title} type={r.type} />
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <Reveal>
            <h3 className="font-display text-xl text-black sm:text-2xl">In the press</h3>
          </Reveal>
          <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3">
            {PRESS_RESOURCES.map((r, i) => (
              <Reveal key={`press-${i}`} delay={0.05 * i}>
                <PressCard title={r.title} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function ResourceCard({ title, type }: { title: string; type: string }) {
  return (
    <a
      href="#"
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-border-light bg-background transition-all duration-300 hover:-translate-y-1 hover:border-blue/30 hover:shadow-[0_24px_48px_-32px_rgba(38,40,49,0.35)]"
    >
      <div
        aria-hidden
        className="relative aspect-[16/10] w-full overflow-hidden bg-[linear-gradient(135deg,#E5F0FF_0%,#CCE1FF_100%)]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,84,255,0.25),transparent_60%)]" />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <span className="inline-flex w-fit items-center rounded-full border border-blue/20 bg-blue-100 px-2.5 py-0.5 text-[11px] font-medium text-blue">
          {type}
        </span>
        <h4 className="mt-4 font-display text-lg leading-tight text-black">{title}</h4>
        <div className="mt-auto pt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-blue">
          Read more
          <ArrowUpRight
            size={14}
            strokeWidth={2.25}
            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>
      </div>
    </a>
  );
}

function PressCard({ title }: { title: string }) {
  return (
    <a
      href="#"
      className="group flex h-full flex-col rounded-xl border border-border-light bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue/30 hover:shadow-[0_24px_48px_-32px_rgba(38,40,49,0.35)] sm:p-7"
    >
      <div
        aria-hidden
        className="flex h-12 w-28 items-center justify-center rounded-md border border-dashed border-border-light bg-off-white/70 text-[10px] uppercase tracking-wider text-grey-on-white"
      >
        Logo
      </div>
      <p className="mt-6 font-display-regular text-lg leading-snug text-balance text-black sm:text-xl">
        {title}
      </p>
      <div className="mt-auto pt-6 inline-flex items-center gap-1.5 text-[13px] font-medium text-blue">
        Read more
        <ArrowRight
          size={14}
          strokeWidth={2.25}
          className="transition-transform duration-200 group-hover:translate-x-0.5"
        />
      </div>
    </a>
  );
}

function ClosingCta() {
  return (
    <section className="relative bg-rich-black text-white overflow-hidden">
      <div className="absolute inset-x-0 -top-32 h-80 glow-blue blur-2xl opacity-70 pointer-events-none" />
      <div className="relative mx-auto max-w-[1280px] px-5 py-20 text-center sm:py-24 md:py-28 lg:px-8">
        <Reveal>
          <h2 className="mx-auto max-w-3xl font-display text-3xl text-balance sm:text-4xl md:text-5xl">
            Privacy-first architecture is the protection layer your customers demand
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-[15px] text-grey-on-black sm:text-base">
            Talk to an Incode Expert today and discover how we secure your data
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/contact">
              Let&rsquo;s connect
              <ArrowUpRight size={16} strokeWidth={2.25} />
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
