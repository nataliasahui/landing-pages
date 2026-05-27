import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Camera,
  CheckCircle,
  Cpu,
  Lock,
  ShieldCheck,
  Target,
  UserX,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Section, Eyebrow } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { PageHeading } from "@/components/ui/page-heading";

export const metadata: Metadata = {
  title: "On-device Face Age Estimation",
  description:
    "Your face never leaves your device. Privacy-preserving age estimation that runs entirely on your phone — never stored, never shared, never seen.",
};

const PROMISES: Array<{ icon: LucideIcon; title: string; body: string }> = [
  {
    icon: Lock,
    title: "Your data never leaves your device",
    body: "All processing happens locally on your phone. Your face is analyzed on your device and immediately discarded.",
  },
  {
    icon: Zap,
    title: "Done in seconds",
    body: "No forms. No ID uploads. No waiting. The check takes just a few seconds and uses your device's camera, similar to unlocking your phone with your face.",
  },
  {
    icon: Target,
    title: "Accurate for everyone",
    body: "Calibrated to work reliably across different ages, lighting conditions, and backgrounds. Designed to be fair regardless of who you are or where you are.",
  },
  {
    icon: UserX,
    title: "We can't identify you",
    body: "This is age estimation only. The system cannot determine your identity, name, gender, ethnicity, or any other personal attribute. It produces an estimation on your age, nothing more.",
  },
];

const STEPS: Array<{ icon: LucideIcon; title: string; body: string }> = [
  {
    icon: ShieldCheck,
    title: "Start the check",
    body: "When you access age-restricted content or services, you'll be asked to complete a quick age verification.",
  },
  {
    icon: Camera,
    title: "A quick selfie scan",
    body: "Your camera briefly activates and the age estimation runs directly on your device. The process is automatic and takes only a few seconds.",
  },
  {
    icon: Cpu,
    title: "Age is estimated on your phone",
    body: "The estimation happens entirely on your phone. Nothing is uploaded or sent anywhere — your device does all the work and the result is instant.",
  },
  {
    icon: CheckCircle,
    title: "Access is confirmed",
    body: "If you meet the required age threshold, access is granted. Importantly, your actual estimated age is never shared — the system only returns a yes or no against the age threshold. No one learns how old you appear to be, only that you qualify.",
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
        {PROMISES.map((p, i) => {
          const Icon = p.icon;
          return (
            <Reveal key={p.title} delay={0.05 * i}>
              <div className="flex h-full flex-col gap-4 rounded-2xl border border-border-light bg-background p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100">
                  <Icon size={20} strokeWidth={1.75} className="text-blue" />
                </span>
                <h3 className="font-display text-xl leading-tight text-black md:text-2xl">
                  {p.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-grey-on-white">
                  {p.body}
                </p>
              </div>
            </Reveal>
          );
        })}
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
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <Eyebrow>How it works</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-5 font-display text-3xl leading-tight text-balance text-white sm:text-4xl md:text-[44px]">
            Four steps. Seconds long. Nothing leaves your phone.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 text-[15px] leading-relaxed text-balance text-white/70 sm:text-base">
            From the moment you start the check to the moment access is
            granted, your face is processed entirely on your device. No
            uploads, no servers, no exceptions.
          </p>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1fr] lg:gap-10 lg:items-stretch md:mt-16">
        <Reveal delay={0.3}>
          <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] lg:aspect-auto lg:h-full lg:min-h-[560px]">
            <div className="flex h-full w-full items-center justify-center">
              <span className="font-display text-xl font-medium tracking-tight text-white/30 sm:text-2xl">
                Visual coming soon
              </span>
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col gap-4">
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={0.05 * i}>
                <div className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <div className="flex items-center justify-between">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.06]">
                      <Icon size={14} strokeWidth={1.75} className="text-white" />
                    </span>
                    <span className="font-display text-[11px] font-medium tracking-wider text-white/40 uppercase">
                      Step {i + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-[16px] leading-tight text-white">
                    {s.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-white/70">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
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
      <div className="mt-12 max-w-3xl space-y-3">
        {FAQ.map((item, i) => (
          <Reveal key={item.q} delay={0.04 * i}>
            <details className="group rounded-2xl border border-border-light bg-background open:bg-white open:shadow-[0_12px_28px_-22px_rgba(10,15,30,0.18)] transition-all">
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
          <p className="font-display text-2xl leading-tight text-balance text-white md:text-3xl">
            Age estimation powered by Incode. Privacy-preserving by
            architecture — not by policy.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
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
