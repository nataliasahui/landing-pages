import type { Metadata } from "next";
import { ArrowUpRight, BadgeCheck, Code2, Compass, Settings2, Star } from "lucide-react";
import { Section, Eyebrow } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { CATEGORIES } from "@/components/integrations-data";
import { IntegrationsMarketplace } from "@/components/integrations-marketplace";
import PartnerEcosystemAnimation, {
  type EcosystemPartner,
} from "@/components/partner-ecosystem-animation";

const HERO_INTEGRATIONS: EcosystemPartner[] = [
  { name: "Okta Workforce", src: "/logos/okta.svg", maxH: 32 },
  { name: "Microsoft Entra", src: "/logos/microsoft.svg", maxH: 30 },
  { name: "Auth0", src: "/logos/auth0-2.svg", maxH: 38 },
  { name: "Ping Identity", src: "/logos/ping-identity.svg", maxH: 32 },
  { name: "SailPoint", src: "/logos/sailpoint-2.svg", maxH: 32 },
  { name: "ServiceNow", src: "/logos/servicenow-2.svg", maxH: 30 },
  { name: "Slack", src: "/logos/slack.svg", maxH: 36 },
  { name: "Zoom", src: "/logos/zoom.svg", maxH: 30 },
  { name: "Workday", src: "/logos/workday-2.svg", maxH: 36 },
  { name: "Salesforce", src: "/logos/salesforce-2.svg", maxH: 40 },
];

export const metadata: Metadata = {
  title: "Integrations",
  description:
    "Verified identity, built into the tools you already use. Pre-built integrations with the platforms your enterprise already runs on.",
};

const HERO_STATS = [
  { value: "30+", label: "Integrations available" },
  { value: "10+", label: "Categories" },
  { value: "50+", label: "Partners in the ecosystem" },
];

const TECH_BENEFITS = [
  {
    icon: BadgeCheck,
    title: "Marketplace listing",
    body: "Get discovered by Incode's enterprise customer base across every industry we serve.",
  },
  {
    icon: Star,
    title: "Co-marketing & joint GTM",
    body: "Joint press releases, case studies, demand generation, and a dedicated partnerships team to help you build pipeline and close deals together.",
  },
  {
    icon: Settings2,
    title: "Technical enablement",
    body: "Sandbox access, integration documentation, and dedicated support to help you build and ship faster.",
  },
];

export default function IntegrationsPage() {
  return (
    <>
      <Hero />
      <StatsAndCategories />
      <CategoriesGlossary />
      <Marketplace />
      <TechPartnerCta />
      <BottomCta />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border-light bg-[#FFFFFF]">
      <div className="relative mx-auto max-w-[1280px] px-5 pt-32 pb-16 sm:pt-36 sm:pb-20 md:pt-40 md:pb-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:items-center">
          <div>
            <Reveal>
              <Eyebrow tone="light">Incode Marketplace</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-6 font-display text-4xl leading-[1.05] text-balance text-black sm:text-5xl md:text-[56px]">
                Verified identity, built into the tools you{" "}
                <span className="text-blue">already use.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-lg text-[16px] leading-relaxed text-grey-on-white sm:text-[17px]">
                Pre-built integrations with the platforms your enterprise already runs on.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-8">
                <ButtonLink href="#marketplace">
                  Search integrations
                  <ArrowUpRight size={16} strokeWidth={2.25} />
                </ButtonLink>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="relative mx-auto w-full max-w-[440px]">
              <PartnerEcosystemAnimation partners={HERO_INTEGRATIONS} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function StatsAndCategories() {
  return (
    <section className="bg-[#FFFFFF]">
      <div className="mx-auto max-w-[1280px] px-5 py-12 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-y-0">
          {HERO_STATS.map((s, i) => (
            <Reveal key={s.label} delay={0.05 * i}>
              <div
                className={`flex flex-col items-start sm:px-10 ${
                  i > 0 ? "sm:border-l sm:border-border-light" : ""
                } ${i === 0 ? "sm:pl-0" : ""}`}
              >
                <div className="bg-[linear-gradient(90deg,#111111_0%,#006AFF_55%,#006AFF_100%)] bg-clip-text font-display text-5xl font-bold leading-[1] tracking-tight text-transparent sm:text-6xl md:text-[72px]">
                  {s.value}
                </div>
                <p className="mt-4 text-[13px] leading-snug text-grey-on-white sm:text-[14px]">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoriesGlossary() {
  const items = [
    { key: "IAM", icon: "/icons/key.svg", desc: "Employees lose access, get locked out, or have accounts compromised. Incode adds a verification layer to the moments that matter most, including account recovery, MFA reset, and privileged access requests." },
    { key: "CIAM", icon: "/icons/user.svg", desc: "Consumer accounts are a primary target for takeover. Incode steps in at high-risk moments in the customer journey, such as onboarding, account changes, and step-up authentication, without disrupting the experience." },
    { key: "IGA", icon: "/icons/compliance.svg", desc: "Governance decisions are only as reliable as the identity behind them. Incode ensures the right person is confirmed before access is certified, provisioned, or escalated." },
    { key: "ITDR", icon: "/icons/shield.svg", desc: "When a threat is detected, identity is usually the entry point. Incode closes the gap by triggering real-time re-verification when suspicious activity is flagged." },
    { key: "ITSM", icon: "/icons/headphones.svg", desc: "Social engineering attacks target help desk agents every day. Incode handles identity verification before a request is acted on, so your team never has to make that call themselves." },
    { key: "Messaging", icon: "/icons/chat.svg", desc: "Sensitive workflows happen inside messaging tools. Incode lets teams trigger and complete identity verification without leaving the platform they are already working in." },
    { key: "Video Conferencing", icon: "/icons/camera.svg", desc: "AI-generated deepfakes make it easy to impersonate someone on a call. Incode verifies participant identity before they join, ensuring the person on screen is who they claim to be." },
    { key: "HRIS", icon: "/icons/workforce.svg", desc: "The moment someone joins the organisation is when identity risk is highest. Incode ensures the person who shows up on day one is the person you hired." },
    { key: "ATS", icon: "/icons/user-verified.svg", desc: "North Korean IT workers and other fraudulent applicants have made candidate identity a real risk. Incode confirms the candidate appearing in the hiring cycle is who they say they are." },
    { key: "CRM", icon: "/icons/users.svg", desc: "Trigger identity verification directly from within your CRM workflows, adding assurance to customer service interactions where it matters most." },
    { key: "E-Commerce", icon: "/icons/e-commerce.svg", desc: "Selling age-restricted or high-value products online requires more than a checkbox. Incode verifies buyer identity and age at the point of purchase." },
    { key: "Age Verification", icon: "/icons/age-assurance.svg", desc: "Help meet age-related compliance and regulatory requirements globally, with verification that holds up across jurisdictions and use cases." },
    { key: "Hardware", icon: "/icons/pc.svg", desc: "For organisations that need identity confirmed in person, Incode works with physical document scanning hardware at kiosks and points of service." },
  ];
  const catByKey = Object.fromEntries(CATEGORIES.map((c) => [c.key, c]));

  return (
    <Section tone="light">
      <Reveal>
        <Eyebrow tone="light">Browse by category</Eyebrow>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-5 font-display text-3xl leading-tight text-balance text-black sm:text-4xl">
          Categories
        </h2>
      </Reveal>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => {
          const c = catByKey[item.key];
          return (
            <Reveal key={item.key} delay={0.02 * i}>
              <div className="flex h-full flex-col rounded-2xl border border-border-light bg-[#FFFFFF] p-6 sm:p-7">
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                    <span
                      aria-hidden
                      className="block h-5 w-5 bg-[#006AFF]"
                      style={{
                        WebkitMaskImage: `url(${item.icon})`,
                        maskImage: `url(${item.icon})`,
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                        WebkitMaskPosition: "center",
                        maskPosition: "center",
                        WebkitMaskSize: "contain",
                        maskSize: "contain",
                      }}
                    />
                  </span>
                  <span
                    title={c.full}
                    className="inline-flex items-center rounded-md border border-border-light bg-off-white/70 px-2.5 py-1 text-[10px] font-normal text-grey-on-white"
                  >
                    {c.label}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-sm leading-tight text-black md:text-base">
                  {c.full}
                </h3>
                <p className="mt-4 text-[11px] leading-relaxed text-grey-on-white">{item.desc}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

function Marketplace() {
  return (
    <section id="marketplace" className="bg-[#FFFFFF]">
      <div className="mx-auto max-w-[1280px] px-5 py-14 sm:py-16 md:py-20 lg:px-8">
        <Reveal>
          <Eyebrow tone="light">Browse</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-5 font-display text-3xl leading-tight text-balance text-black sm:text-4xl">
            Find the right integration
          </h2>
        </Reveal>
        <div className="mt-10">
          <IntegrationsMarketplace />
        </div>
      </div>
    </section>
  );
}

function TechPartnerCta() {
  return (
    <Section tone="light" className="border-b border-border-light bg-off-white/40">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
        <div>
          <Reveal>
            <Eyebrow tone="light">Build with Incode</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-display text-3xl leading-tight text-balance text-black sm:text-4xl">
              Are you a technology partner?
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-grey-on-white">
              Build a native integration with Incode and get listed in the marketplace. Reach
              enterprise customers across financial services, healthcare, government, and beyond —
              with co-marketing, technical enablement, and joint GTM support from the Incode
              partnerships team.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-7">
              <ButtonLink href="/contact">
                Become a technology partner
                <ArrowUpRight size={16} strokeWidth={2.25} />
              </ButtonLink>
            </div>
          </Reveal>
        </div>

        <ul className="flex flex-col gap-6">
          {TECH_BENEFITS.map((b, i) => {
            const Icon = b.icon;
            return (
              <Reveal key={b.title} delay={0.1 + 0.05 * i}>
                <li className="flex items-start gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-100">
                    <Icon size={16} strokeWidth={1.75} className="text-blue" />
                  </span>
                  <div>
                    <div className="font-display text-sm leading-tight text-black md:text-base">
                      {b.title}
                    </div>
                    <p className="mt-2 text-[11px] leading-relaxed text-grey-on-white">{b.body}</p>
                  </div>
                </li>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}

function BottomCta() {
  return (
    <Section tone="rich">
      <div className="grid gap-5 md:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue/15">
              <Compass size={20} strokeWidth={1.75} className="text-blue" />
            </div>
            <h3 className="mt-5 font-display text-xl text-white sm:text-2xl">
              Missing an integration?
            </h3>
            <p className="mt-3 text-[14px] leading-relaxed text-grey-on-black">
              Don&rsquo;t see a platform you need? Let us know and we will review it for the
              roadmap.
            </p>
            <div className="mt-6">
              <ButtonLink href="/contact">
                Request an integration
                <ArrowUpRight size={16} strokeWidth={2.25} />
              </ButtonLink>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue/15">
              <Code2 size={20} strokeWidth={1.75} className="text-blue" />
            </div>
            <h3 className="mt-5 font-display text-xl text-white sm:text-2xl">
              Build with the Incode API
            </h3>
            <p className="mt-3 text-[14px] leading-relaxed text-grey-on-black">
              Access full documentation, SDKs, and sandbox environments to build your own
              integration with the Incode platform.
            </p>
            <div className="mt-6">
              <ButtonLink href="#" variant="outline-white">
                View developer docs
                <ArrowUpRight size={16} strokeWidth={2.25} />
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
