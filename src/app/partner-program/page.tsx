import type { Metadata } from "next";
import {
  ArrowUpRight,
  BadgeCheck,
  Coins,
  Megaphone,
  Settings2,
  Sparkles,
  Star,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { Section, Eyebrow } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { PageHeading } from "@/components/ui/page-heading";
import PartnerEcosystemAnimation from "@/components/partner-ecosystem-animation";

export const metadata: Metadata = {
  title: "Partner Program",
  description:
    "Join the ecosystem powering verified identity at scale. Whether you refer, resell, or embed — we have a partner track designed around your business model.",
};

const STATS = [
  { value: "500M+", label: "Verifications processed through partner platforms" },
  { value: "50+", label: "Technology and channel partners worldwide" },
  { value: "30+", label: "Countries where Incode is deployed through partners" },
  { value: "8 of 10", label: "Largest U.S. banks trust Incode identity verification" },
];

const BENEFITS: Array<{ icon: LucideIcon; title: string; body: string }> = [
  {
    icon: Star,
    title: "Co-sell support",
    body: "Deal registration, joint account mapping, and dedicated partner success resources.",
  },
  {
    icon: BadgeCheck,
    title: "Deal registration & protection",
    body: "Register deals to protect your pipeline and ensure fair compensation on every opportunity you bring.",
  },
  {
    icon: Settings2,
    title: "Technical enablement",
    body: "Sandbox access, integration docs, and dedicated technical support for your team.",
  },
  {
    icon: Megaphone,
    title: "Co-marketing",
    body: "Joint press releases, case studies, events, and demand generation campaigns.",
  },
  {
    icon: Coins,
    title: "Preferred pricing",
    body: "Partner-tier pricing designed to protect your margin and win competitive deals.",
  },
  {
    icon: Sparkles,
    title: "Roadmap access",
    body: "Early product previews, beta features, and direct feedback lines to Incode engineering.",
  },
];

const TRACKS: Array<{
  icon: string;
  name: string;
  icp: string;
  body: string;
}> = [
  {
    icon: "/icons/ecosystem.svg",
    name: "OEM & Embed",
    icp: "For platforms and products that want to embed verified identity as a native feature",
    body: "Embed Incode biometric verification as a core component of your product. Your customers experience your brand — Incode powers the identity engine underneath. Preferred pricing, dedicated technical support, and co-development available for qualified OEM partners.",
  },
  {
    icon: "/icons/building-office.svg",
    name: "Reseller",
    icp: "For SIs, VARs, and channel partners who own customer relationships",
    body: "Resell Incode to your enterprise customers as a standalone solution or bundled with your implementation and managed services. Access co-sell support, deal registration, preferred pricing, and dedicated partner success resources to close faster and protect your margin.",
  },
  {
    icon: "/icons/star.svg",
    name: "Referral",
    icp: "For consultants, advisors, and firms with strong enterprise relationships",
    body: "Refer qualified opportunities to Incode and earn a fee on every deal that closes. No reselling required — we handle the sale, you get rewarded for the introduction. Ideal for compliance consultancies, fraud advisories, and specialist firms who want to add value without taking on a vendor relationship.",
  },
];

const QUOTES = [
  {
    text: "This new partnership aids our Government customers by quickly delivering identity verification solutions and ultimately facilitating public trust through ensuring the secure management of data.",
    name: "Michael Shrader",
    role: "VP Innovative & Intelligence Solutions, Carahsoft",
    logo: "/logos/carahsoft.svg",
    initials: "CA",
  },
  {
    text: "By integrating Incode's identity verification technology into the Ascend Platform, we're empowering organizations to make faster, smarter decisions while tailoring their fraud and risk strategies with unprecedented agility and precision.",
    name: "Marika Vilen",
    role: "SVP Global Partnerships & Commercialization, Experian",
    logo: "/logos/experian.svg",
    initials: "EX",
  },
];

const PARTNERS: Array<{ name: string; logo?: string; initials: string; href: string }> = [
  { name: "Experian", logo: "/logos/experian.svg", initials: "EX", href: "https://www.experian.com" },
  { name: "Equifax", logo: "/logos/equifax.svg", initials: "EQ", href: "https://www.equifax.com" },
  { name: "TransUnion", logo: "/logos/transunion.svg", initials: "TU", href: "https://www.transunion.com" },
  { name: "Interac", logo: "/logos/Interac%20Logo%201.svg", initials: "IN", href: "https://www.interac.ca" },
  { name: "Alloy", logo: "/logos/Alloy_logo%201.svg", initials: "AL", href: "https://www.alloy.com" },
  { name: "GeoComply", logo: "/logos/geocomply.svg", initials: "GC", href: "https://www.geocomply.com" },
  { name: "Sardine", logo: "/logos/sardine.svg", initials: "SA", href: "https://www.sardine.ai" },
  { name: "Footprint", logo: "/logos/footprint-2.svg", initials: "FP", href: "https://www.onefootprint.com" },
  { name: "ID DataWeb", logo: "/logos/id-dataweb.svg", initials: "ID", href: "https://www.iddataweb.com" },
  { name: "Tungsten", logo: "/logos/tungsten-automation.svg", initials: "TW", href: "https://www.tungstenautomation.com" },
  { name: "Snappt", logo: "/logos/snappt.svg", initials: "SN", href: "https://www.snappt.com" },
  { name: "Aristotle", logo: "/logos/Integrity-Aristotle%20Logo_2024%201.svg", initials: "AR", href: "https://www.aristotleinc.com" },
  { name: "Carahsoft", logo: "/logos/carahsoft.svg", initials: "CA", href: "https://www.carahsoft.com" },
  { name: "Guidepoint Security", logo: "/logos/guidepoint-security-2.svg", initials: "GS", href: "https://www.guidepointsecurity.com" },
  { name: "SHI International", logo: "/logos/shi-logo-2.svg", initials: "SH", href: "https://www.shi.com" },
  { name: "Optiv", logo: "/logos/optiv-2.svg", initials: "OP", href: "https://www.optiv.com" },
  { name: "Ahead", logo: "/logos/ahead_logo%202.svg", initials: "AH", href: "https://www.ahead.com" },
  { name: "Alchemy Technology Group", logo: "/logos/alchemy%20tech%20group%20logo%202.svg", initials: "AC", href: "https://www.alchemytechgroup.com" },
  { name: "NTT Data", logo: "/logos/ntt-data-2.svg", initials: "NT", href: "https://www.nttdata.com" },
  { name: "Tec360", logo: "/logos/tec360-2.svg", initials: "T3", href: "https://www.tec360.com" },
  { name: "Ping Identity", logo: "/logos/ping-identity.svg", initials: "PI", href: "https://www.pingidentity.com" },
  { name: "TSYS", logo: "/logos/TSYS.svg", initials: "TS", href: "https://www.tsys.com" },
  { name: "HID", logo: "/logos/HID.svg", initials: "HI", href: "https://www.hidglobal.com" },
];

const JOIN_CARDS: Array<{ icon: LucideIcon; title: string; body: string }> = [
  {
    icon: Star,
    title: "Referral & co-sell program",
    body: "Earn referral fees, register deals, and co-sell with the Incode sales team to close faster and protect your margin.",
  },
  {
    icon: Settings2,
    title: "Technical enablement",
    body: "Sandbox environments, integration documentation, and dedicated technical support so your team can deploy with confidence.",
  },
  {
    icon: TrendingUp,
    title: "Co-marketing & visibility",
    body: "Partner directory listing, joint press releases, case studies, and demand generation campaigns to your shared audience.",
  },
];

export default function PartnerProgramPage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <WhyPartner />
      <PartnerTracks />
      <Quotes />
      <PartnersGrid />
      <JoinCta />
    </>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden border-b border-border-light bg-[#FFFFFF]">
      <div className="relative mx-auto w-full max-w-[1280px] px-5 pt-32 pb-16 sm:pt-36 sm:pb-20 md:pt-40 md:pb-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:items-center">
          <div>
            <Reveal>
              <Eyebrow tone="light">Partner Program</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <PageHeading className="mt-6">
                Win more.
                <br />
                Grow faster.
                <br />
                Partner with Incode.
              </PageHeading>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-grey-on-white sm:text-lg">
                Join the ecosystem powering verified identity at scale. Whether you refer, resell,
                or embed — we have a partner track designed around your business model.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-9 flex flex-wrap gap-3">
                <ButtonLink href="#join">
                  Become a partner
                  <ArrowUpRight size={16} strokeWidth={2.25} />
                </ButtonLink>
                <ButtonLink href="#partners" variant="secondary">
                  Find a partner
                </ButtonLink>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="relative mx-auto w-full max-w-[560px]">
              <PartnerEcosystemAnimation />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function StatsStrip() {
  return (
    <section className="bg-[#FFFFFF]">
      <div className="mx-auto max-w-[1280px] px-5 py-12 sm:py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 md:gap-0">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={0.05 * i}>
              <div
                className={`md:px-8 ${
                  i > 0 ? "md:border-l md:border-border-light" : ""
                } ${i === 0 ? "md:pl-0" : ""}`}
              >
                <div className="bg-[linear-gradient(90deg,#111111_0%,#006AFF_55%,#006AFF_100%)] bg-clip-text font-display text-4xl font-bold leading-[1] tracking-tight text-transparent sm:text-5xl md:text-[56px]">
                  {s.value}
                </div>
                <p className="mt-4 text-[13px] leading-snug text-grey-on-white">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyPartner() {
  return (
    <Section tone="rich">
      <Reveal>
        <Eyebrow>Why partner with Incode</Eyebrow>
      </Reveal>
      <div className="mt-5 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
        <Reveal delay={0.1}>
          <h2 className="font-display text-2xl leading-[1.15] text-balance text-white sm:text-3xl md:text-[34px]">
            Every enterprise workflow that matters — onboarding, access, recovery, compliance — now
            has an identity verification requirement at its core. Incode gives your customers that
            layer.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-[15px] leading-relaxed text-grey-on-black sm:text-base">
            Identity is the most targeted attack surface in the enterprise. Every account takeover,
            synthetic identity, and fraudulent onboarding starts with a failure to verify the person
            on the other side. Incode partners are the companies fixing that — embedding verified,
            biometric-grade identity directly into the products their customers depend on.
          </p>
        </Reveal>
      </div>
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {BENEFITS.map((b, i) => {
          const Icon = b.icon;
          return (
            <Reveal key={b.title} delay={0.05 * i}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-colors hover:border-white/20">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue/15">
                  <Icon size={18} strokeWidth={1.75} className="text-blue" />
                </div>
                <h3 className="mt-5 font-display text-sm leading-tight text-white md:text-base">
                  {b.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-grey-on-black">{b.body}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

function PartnerTracks() {
  return (
    <Section tone="light" className="border-b border-border-light">
      <Reveal>
        <Eyebrow tone="light">How we work together</Eyebrow>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-5 font-display text-3xl leading-tight text-balance text-black sm:text-4xl">
          Find your partner track
        </h2>
      </Reveal>
      <Reveal delay={0.2}>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-grey-on-white">
          Three ways to build a business with Incode — each designed for a different model, with
          clear commercials and dedicated support.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {TRACKS.map((t, i) => (
          <Reveal key={t.name} delay={0.05 * i}>
            <div className="group flex h-full flex-col gap-4 rounded-2xl border border-border-light bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue/30 hover:shadow-[0_24px_48px_-32px_rgba(38,40,49,0.35)]">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100">
                <span
                  aria-hidden
                  className="block h-5 w-5 bg-[#006AFF]"
                  style={{
                    WebkitMaskImage: `url(${t.icon})`,
                    maskImage: `url(${t.icon})`,
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                    maskPosition: "center",
                    WebkitMaskSize: "contain",
                    maskSize: "contain",
                  }}
                />
              </span>
              <h3 className="font-display text-xl leading-tight text-black md:text-2xl">
                {t.name}
              </h3>
              <p className="text-[13px] font-medium text-blue">{t.icp}</p>
              <p className="flex-1 text-[14px] leading-relaxed text-grey-on-white">{t.body}</p>
              <ButtonLink href="#join" size="sm" className="self-start">
                Apply now
                <ArrowUpRight size={14} strokeWidth={2.25} />
              </ButtonLink>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Quotes() {
  return (
    <section className="border-y border-border-light bg-off-white/40">
      <div className="mx-auto max-w-[1280px] px-5 py-14 sm:py-16 md:py-20 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {QUOTES.map((q, i) => (
            <Reveal key={q.name} delay={0.05 * i}>
              <figure className="flex h-full flex-col rounded-2xl border border-border-light bg-background p-7 sm:p-8">
                <div className="flex h-8 items-center">
                  {q.logo ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={q.logo}
                      alt={`${q.name} logo`}
                      className="max-h-7 w-auto max-w-[130px] object-contain object-left"
                    />
                  ) : (
                    <span className="text-[14px] font-bold text-grey-on-white">{q.initials}</span>
                  )}
                </div>

                <blockquote className="mt-8 flex-1 font-display-regular text-[15px] leading-relaxed text-grey-on-white sm:text-base">
                  &ldquo;{q.text}&rdquo;
                </blockquote>

                <figcaption className="mt-10">
                  <div className="font-display text-[15px] leading-tight text-black">{q.name}</div>
                  <div className="mt-1 text-[12px] text-grey-on-white">{q.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnersGrid() {
  return (
    <section id="partners" className="bg-background">
      <div className="mx-auto max-w-[1280px] px-5 py-16 sm:py-20 md:py-24 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl leading-tight text-balance text-black sm:text-4xl">
              Our partners
            </h2>
            <p className="mt-4 text-[15px] text-grey-on-white">
              Companies that build, sell, and deliver with Incode around the world.
            </p>
          </div>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {PARTNERS.map((p, i) => (
            <Reveal key={p.name} delay={0.02 * i}>
              <div className="flex h-full flex-col items-center justify-center gap-3 rounded-xl border border-border-light bg-background px-4 py-5 text-center">
                <PartnerLogoTile name={p.name} logo={p.logo} initials={p.initials} size={56} />
                <span className="text-[11.5px] font-medium leading-snug text-grey-on-white">
                  {p.name}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnerLogoTile({
  name,
  logo,
  initials,
  size = 40,
  grayscale = false,
}: {
  name: string;
  logo?: string;
  initials: string;
  size?: number;
  grayscale?: boolean;
}) {
  if (logo) {
    return (
      <div
        className="flex shrink-0 items-center justify-center px-1"
        style={{ width: size * 1.6, height: size }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logo}
          alt={`${name} logo`}
          className={`max-h-full max-w-full object-contain transition-all duration-200 ${
            grayscale ? "grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100" : ""
          }`}
        />
      </div>
    );
  }
  return (
    <div
      className="flex shrink-0 items-center justify-center rounded-lg border border-border-light bg-off-white/70 text-[11px] font-bold text-grey-on-white"
      style={{ width: size, height: size }}
    >
      {initials}
    </div>
  );
}

function JoinCta() {
  return (
    <Section tone="rich" id="join">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <h2 className="font-display text-3xl leading-tight text-balance text-white sm:text-4xl md:text-5xl">
            Ready to partner with Incode?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 text-[15px] leading-relaxed text-grey-on-black sm:text-base">
            Join the ecosystem powering verified identity at scale. We have a track built for your
            business model.
          </p>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {JOIN_CARDS.map((c, i) => {
          const Icon = c.icon;
          return (
            <Reveal key={c.title} delay={0.05 * i}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-colors hover:border-white/20">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue/15">
                  <Icon size={18} strokeWidth={1.75} className="text-blue" />
                </div>
                <h3 className="mt-5 font-display text-sm leading-tight text-white md:text-base">
                  {c.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-grey-on-black">{c.body}</p>
              </div>
            </Reveal>
          );
        })}
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-3">
        <ButtonLink href="/contact">
          Become a partner
          <ArrowUpRight size={16} strokeWidth={2.25} />
        </ButtonLink>
        <ButtonLink href="/contact" variant="outline-white">
          Contact the partnerships team
        </ButtonLink>
      </div>
    </Section>
  );
}
