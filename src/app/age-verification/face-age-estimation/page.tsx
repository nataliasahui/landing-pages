import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Section, Eyebrow } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { PageHeading } from "@/components/ui/page-heading";
import { DsIcon } from "@/components/ui/ds-icon";
import { StepsExplainer, type ExplainerStep } from "@/components/steps-explainer";

export const metadata: Metadata = {
  title: "On-device Face Age Estimation",
  description:
    "Your face never leaves your device. Privacy-preserving age estimation that runs entirely on your phone — never stored, never shared, never seen.",
};

const PROMISES: Array<{ icon: ReactNode; title: string; body: string }> = [
  {
    icon: <DsIcon src="/icons/lock.svg" className="h-5 w-5 bg-blue" />,
    title: "Your data never leaves your device",
    body: "All processing happens locally on your phone. Your face is analyzed on your device and immediately discarded.",
  },
  {
    icon: <DsIcon src="/icons/stopwatch.svg" className="h-5 w-5 bg-blue" />,
    title: "Done in seconds",
    body: "No forms. No ID uploads. No waiting. The check takes just a few seconds and uses your device's camera, similar to unlocking your phone with your face.",
  },
  {
    icon: <DsIcon src="/icons/target.svg" className="h-5 w-5 bg-blue" />,
    title: "Accurate for everyone",
    body: "Calibrated to work reliably across different ages, lighting conditions, and backgrounds. Designed to be fair regardless of who you are or where you are.",
  },
  {
    icon: <DsIcon src="/icons/user.svg" className="h-5 w-5 bg-blue" />,
    title: "We can't identify you",
    body: "This is age estimation only. The system cannot determine your identity, name, gender, ethnicity, or any other personal attribute. It produces an estimation on your age, nothing more.",
  },
];

const STEPS: ExplainerStep[] = [
  {
    icon: <DsIcon src="/icons/shield.svg" className="h-3.5 w-3.5 bg-current" />,
    title: "Start the check",
    subtitle: "Triggered the moment you reach age-gated content or services.",
    body: "When you access age-restricted content or services, you'll be asked to complete a quick age verification.",
    image: "/Illustration/step-1-start-the-check.png",
  },
  {
    icon: <DsIcon src="/icons/camera.svg" className="h-3.5 w-3.5 bg-current" />,
    title: "A quick selfie scan",
    subtitle: "Your camera activates for just a few seconds.",
    body: "Your camera briefly activates and the age estimation runs directly on your device. The process is automatic and takes only a few seconds.",
    image: "/Illustration/step-2-selfie-scan.png",
  },
  {
    icon: <DsIcon src="/icons/mobile.svg" className="h-3.5 w-3.5 bg-current" />,
    title: "Age is estimated on your phone",
    subtitle: "Nothing is uploaded — your device does the work.",
    body: "The estimation happens entirely on your phone. Nothing is uploaded or sent anywhere — your device does all the work and the result is instant.",
    image: "/Illustration/step-3-age-estimated.png",
  },
  {
    icon: <DsIcon src="/icons/check.svg" className="h-3.5 w-3.5 bg-current" />,
    title: "Access is confirmed",
    subtitle: "A yes/no result against the age threshold — never your actual age.",
    body: "If you meet the required age threshold, access is granted. Importantly, your actual estimated age is never shared — the system only returns a yes or no against the age threshold. No one learns how old you appear to be, only that you qualify.",
    image: "/Illustration/step-4-access-confirmed.png",
  },
];

const FAQ: Array<{ q: string; a: React.ReactNode }> = [
  {
    q: "Does Incode see my face?",
    a: (
      <>
        No. Your facial image never leaves your device. It is analyzed locally
        and immediately discarded. Incode does not have access to your facial
        image — at any point, under any circumstance.
      </>
    ),
  },
  {
    q: "What happens to my face scan after the check?",
    a: (
      <>
        It&apos;s deleted from your device the moment the estimation is complete.
        There is no image file stored anywhere — not on your device, not on any
        server.
      </>
    ),
  },
  {
    q: "Is my data used to train AI?",
    a: (
      <>
        No. The data from your age check is used only to produce your result in
        that session. It is never used for model training, profiling, or any
        secondary purpose.
      </>
    ),
  },
  {
    q: "Can this identify me?",
    a: (
      <>
        No. The system estimates your approximate age from your appearance only.
        It cannot determine your identity, name, gender, ethnicity, or any other
        personal characteristic.
      </>
    ),
  },
  {
    q: "How does Incode estimate my age?",
    a: (
      <>
        Incode&apos;s age estimation is powered by proprietary machine learning
        models developed entirely in-house over more than 10 years. We don&apos;t
        rely on models from external vendors or third-party providers. Every
        component of the technology is built and trained by Incode&apos;s own
        team. The model analyzes facial features to produce an approximate age
        estimate, and runs entirely on your device.
      </>
    ),
  },
  {
    q: "Is Incode's technology compliant with privacy regulations?",
    a: (
      <>
        Yes. Incode&apos;s on-device age estimation is designed to align with
        global privacy frameworks including GDPR, COPPA, and the UK Online
        Safety Act. Because no biometric data ever leaves your device, the
        architecture satisfies the most stringent data minimization requirements
        by design — not by policy. For full details, see the{" "}
        <Link
          href="https://trust.incode.com/?product=incodetechnologies"
          className="underline underline-offset-4 hover:text-blue"
        >
          Incode Trust Center
        </Link>
        .
      </>
    ),
  },
  {
    q: "What if it thinks I'm the wrong age?",
    a: (
      <>
        The system is built for accuracy, but if the result is uncertain, you
        may be offered an alternative verification path. You won&apos;t be
        permanently locked out based on a single result.
      </>
    ),
  },
];

export default function FaceAgeEstimationPage() {
  return (
    <>
      <Hero />
      <Promises />
      <HowItWorks />
      <Fallback />
      <Questions />
      <Outro />
    </>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-rich-black text-white">
      <div className="absolute inset-0 bg-hero-glow pointer-events-none opacity-60" />
      <div className="relative mx-auto w-full max-w-[1280px] px-5 pt-32 pb-16 sm:pt-36 sm:pb-20 md:pt-40 md:pb-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:items-center">
          <div>
            <Reveal>
              <Eyebrow>Age Verification</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <PageHeading tone="dark" className="mt-6">
                Your face never leaves your device.
              </PageHeading>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-md text-[17px] leading-relaxed text-white/85 sm:text-lg">
                Never stored. Never shared. Never seen.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-8">
                <ButtonLink href="#how-it-works">
                  Here&apos;s how it works
                  <ArrowDown size={16} strokeWidth={2.25} />
                </ButtonLink>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <div className="relative mx-auto w-full max-w-[420px]">
              <img
                src="/Illustration/Selfie (Animated).svg"
                alt="On-device age estimation runs locally on your phone"
                className="h-auto w-full select-none"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Promises() {
  return (
    <Section tone="light" className="border-b border-border-light">
      <Reveal>
        <Eyebrow tone="light">What it means for you</Eyebrow>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-5 font-display text-3xl leading-tight text-balance text-black sm:text-4xl">
          Privacy is the architecture, not a setting.
        </h2>
      </Reveal>
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {PROMISES.map((p, i) => (
          <Reveal key={p.title} delay={0.05 * i}>
            <div className="flex h-full flex-col gap-4 rounded-2xl border border-border-light bg-background p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100">
                {p.icon}
              </span>
              <h3 className="font-display text-xl leading-tight text-black md:text-2xl">
                {p.title}
              </h3>
              <p className="text-[13px] leading-relaxed text-grey-on-white">
                {p.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function HowItWorks() {
  return (
    <Section
      id="how-it-works"
      tone="rich"
      className="border-b border-border-dark"
    >
      <div className="max-w-3xl">
        <Reveal>
          <Eyebrow>How it works</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-5 font-display text-3xl leading-tight text-balance text-white sm:text-4xl md:text-[44px]">
            Four steps. Seconds long. Nothing leaves your phone.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/70 sm:text-base">
            From the moment you start the check to the moment access is
            granted, your face is processed entirely on your device. No
            uploads, no servers, no exceptions.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.3}>
        <div className="mt-12 md:mt-16">
          <StepsExplainer steps={STEPS} />
        </div>
      </Reveal>
    </Section>
  );
}

function Fallback() {
  return (
    <Section tone="light" className="border-b border-border-light">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:items-start">
        <div>
          <Reveal>
            <Eyebrow tone="light">If the check isn&apos;t conclusive</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-display text-3xl leading-tight text-balance text-black sm:text-4xl">
              In some cases, additional verification may be needed.
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          <div className="rounded-2xl border border-border-light bg-background p-7">
            <p className="text-[14px] leading-relaxed text-grey-on-white">
              If the age estimation is not conclusive, you may be asked to
              complete an additional verification step using a government-issued
              ID. The system verifies your date of birth and compares the ID
              photo to your selfie to confirm the document belongs to you.
            </p>
            <p className="mt-4 text-[14px] leading-relaxed text-grey-on-white">
              The process is fully automated, with no human review involved, and
              is designed to minimize unnecessary exposure or retention of
              personal data. All images and information are deleted immediately.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function Questions() {
  return (
    <Section tone="light" className="border-b border-border-light">
      <Reveal>
        <Eyebrow tone="light">FAQ</Eyebrow>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-5 font-display text-3xl leading-tight text-balance text-black sm:text-4xl">
          Your questions, answered.
        </h2>
      </Reveal>
      <div className="mt-12 space-y-3">
        {FAQ.map((item, i) => (
          <Reveal key={item.q} delay={0.04 * i}>
            <details className="group rounded-2xl border border-border-light bg-[#FCFCFC] open:shadow-[0_12px_28px_-22px_rgba(10,15,30,0.18)] transition-all">
              <summary className="flex cursor-pointer items-start justify-between gap-4 p-6 list-none">
                <span className="font-display text-[17px] font-medium text-black md:text-lg">
                  {item.q}
                </span>
                <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border-light bg-white text-black/60 transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="px-6 pb-6 text-[14px] leading-relaxed text-grey-on-white">
                {item.a}
              </div>
            </details>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Outro() {
  return (
    <Section tone="rich">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <Eyebrow>Privacy by design</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <PageHeading as="h2" tone="dark" className="mt-6">
            Age estimation powered by Incode. Privacy-preserving by
            architecture — not by policy.
          </PageHeading>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <ButtonLink
              href="https://trust.incode.com/?product=incodetechnologies"
              size="sm"
            >
              Trust Center
              <ArrowUpRight size={14} strokeWidth={2.25} />
            </ButtonLink>
            <ButtonLink
              href="https://www.incode.com/use-cases/age-verification"
              variant="outline-white"
              size="sm"
            >
              Learn more about age verification
              <ArrowUpRight size={14} strokeWidth={2.25} />
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
