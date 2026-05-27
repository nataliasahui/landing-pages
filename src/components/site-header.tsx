"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "motion/react";
import { useRef, useState, type ReactNode } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { DsIcon } from "@/components/ui/ds-icon";
import { Logo } from "./logo";
import { ButtonLink } from "@/components/ui/button";

type NavItem = { href: string; label: string; hasMenu?: boolean };

const NAV: NavItem[] = [
  { href: "#platform", label: "Platform", hasMenu: true },
  { href: "#benefits", label: "Solutions", hasMenu: true },
  { href: "#why-incode", label: "Why Incode" },
  { href: "#what-changes", label: "Technology" },
  { href: "#", label: "Resources", hasMenu: true },
  { href: "#", label: "Company", hasMenu: true },
];

type MenuLink = { icon: ReactNode; title: string; sub?: string; href: string };
type MenuColumn = { heading: string; links: MenuLink[]; columns?: 1 | 2 };

const MENU_ICON_CLASS = "h-4 w-4 bg-current";

const PLATFORM_MENU: MenuColumn[] = [
  {
    heading: "Platform",
    columns: 2,
    links: [
      { icon: <DsIcon src="/icons/Map.svg" className={MENU_ICON_CLASS} />, title: "Explore Platform", href: "#" },
      { icon: <DsIcon src="/icons/orchestration-dashboard.svg" className={MENU_ICON_CLASS} />, title: "Orchestration Dashboard", sub: "Everything in one place", href: "#" },
      { icon: <DsIcon src="/icons/workflow-builder.svg" className={MENU_ICON_CLASS} />, title: "Workflow Builder", sub: "No-code flow builder", href: "#" },
      { icon: <DsIcon src="/icons/customization.svg" className={MENU_ICON_CLASS} />, title: "UI Customization", sub: "Brand-aligned journeys", href: "#" },
      { icon: <DsIcon src="/icons/decisioning.svg" className={MENU_ICON_CLASS} />, title: "Decisioning & Results", sub: "Transparency on every session", href: "#" },
      { icon: <DsIcon src="/icons/trend-up.svg" className={MENU_ICON_CLASS} />, title: "Fraud Analytics", sub: "Monitor performance and trends", href: "#" },
      { icon: <DsIcon src="/icons/document.svg" className={MENU_ICON_CLASS} />, title: "Case Management", sub: "Smarter case reviews", href: "#" },
      { icon: <DsIcon src="/icons/integrations.svg" className={MENU_ICON_CLASS} />, title: "Platform Integrations", sub: "APIs and SDKs", href: "#" },
    ],
  },
  {
    heading: "Featured Products",
    links: [
      { icon: <DsIcon src="/icons/shield.svg" className={MENU_ICON_CLASS} />, title: "Deepsight", href: "#" },
      { icon: <DsIcon src="/icons/check.svg" className={MENU_ICON_CLASS} />, title: "Workforce (KYE)", href: "#" },
      { icon: <DsIcon src="/icons/ai.svg" className={MENU_ICON_CLASS} />, title: "Risk AI Agent", href: "#" },
      { icon: <DsIcon src="/icons/star.svg" className={MENU_ICON_CLASS} />, title: "Agentic Identity", href: "#" },
    ],
  },
  {
    heading: "Featured Modules",
    links: [
      { icon: <DsIcon src="/icons/face-capture.svg" className={MENU_ICON_CLASS} />, title: "Facial Recognition", href: "#" },
      { icon: <DsIcon src="/icons/id.svg" className={MENU_ICON_CLASS} />, title: "Document Verification", href: "#" },
      { icon: <DsIcon src="/icons/scan.svg" className={MENU_ICON_CLASS} />, title: "OCR", href: "#" },
      { icon: <DsIcon src="/icons/deepfake-detection.svg" className={MENU_ICON_CLASS} />, title: "Deepfake Detection", href: "#" },
      { icon: <DsIcon src="/icons/network.svg" className={MENU_ICON_CLASS} />, title: "Network", href: "#" },
      { icon: <DsIcon src="/icons/uxv2.svg" className={MENU_ICON_CLASS} />, title: "Face Age Estimation", href: "#" },
    ],
  },
];

const SOLUTIONS_MENU: MenuColumn[] = [
  {
    heading: "Use cases",
    columns: 2,
    links: [
      { icon: <DsIcon src="/icons/user-verified.svg" className={MENU_ICON_CLASS} />, title: "KYC/AML compliance", href: "#" },
      { icon: <DsIcon src="/icons/id.svg" className={MENU_ICON_CLASS} />, title: "Identity Verification (IDV)", href: "#" },
      { icon: <DsIcon src="/icons/non-document.svg" className={MENU_ICON_CLASS} />, title: "Non-Document Verification", href: "#" },
      { icon: <DsIcon src="/icons/building-office.svg" className={MENU_ICON_CLASS} />, title: "Know Your Business (KYB)", href: "#" },
      { icon: <DsIcon src="/icons/calendar.svg" className={MENU_ICON_CLASS} />, title: "Age Verification", href: "#" },
      { icon: <DsIcon src="/icons/face-capture.svg" className={MENU_ICON_CLASS} />, title: "Candidate Verification", href: "#" },
      { icon: <DsIcon src="/icons/mobile.svg" className={MENU_ICON_CLASS} />, title: "Digital ID Verification", href: "#" },
    ],
  },
  {
    heading: "Industries",
    columns: 2,
    links: [
      { icon: <DsIcon src="/icons/bank.svg" className={MENU_ICON_CLASS} />, title: "Financial services", href: "#" },
      { icon: <DsIcon src="/icons/heart.svg" className={MENU_ICON_CLASS} />, title: "Healthcare", href: "#" },
      { icon: <DsIcon src="/icons/online-gaming.svg" className={MENU_ICON_CLASS} />, title: "Online gaming", href: "#" },
      { icon: <DsIcon src="/icons/online-gambling.svg" className={MENU_ICON_CLASS} />, title: "Online gambling", href: "#" },
      { icon: <DsIcon src="/icons/e-commerce.svg" className={MENU_ICON_CLASS} />, title: "E-commerce & marketplaces", href: "#" },
      { icon: <DsIcon src="/icons/public-sector.svg" className={MENU_ICON_CLASS} />, title: "Public sector", href: "#" },
      { icon: <DsIcon src="/icons/chat.svg" className={MENU_ICON_CLASS} />, title: "Social media", href: "#" },
    ],
  },
];

const RESOURCES_MENU: MenuColumn[] = [
  {
    heading: "Learning",
    columns: 2,
    links: [
      { icon: <DsIcon src="/icons/shield.svg" className={MENU_ICON_CLASS} />, title: "Trust Center", sub: "Security, privacy, and compliance posture", href: "#" },
      { icon: <DsIcon src="/icons/lock.svg" className={MENU_ICON_CLASS} />, title: "Privacy Architecture", sub: "The protection layer that holds no data", href: "/resources/privacy-architecture" },
      { icon: <DsIcon src="/icons/document.svg" className={MENU_ICON_CLASS} />, title: "Resources Library", sub: "Guides, white papers, and reports", href: "#" },
      { icon: <DsIcon src="/icons/cup.svg" className={MENU_ICON_CLASS} />, title: "Incode Academy", sub: "Training and certifications", href: "#" },
      { icon: <DsIcon src="/icons/camera.svg" className={MENU_ICON_CLASS} />, title: "Webinars", sub: "On-demand and upcoming sessions", href: "#" },
      { icon: <DsIcon src="/icons/document.svg" className={MENU_ICON_CLASS} />, title: "Case studies", sub: "How customers deploy Incode", href: "#" },
    ],
  },
  {
    heading: "Stay informed",
    links: [
      { icon: <DsIcon src="/icons/document.svg" className={MENU_ICON_CLASS} />, title: "Blog", href: "#" },
      { icon: <DsIcon src="/icons/chat.svg" className={MENU_ICON_CLASS} />, title: "Press", href: "#" },
      { icon: <DsIcon src="/icons/calendar.svg" className={MENU_ICON_CLASS} />, title: "Events", href: "#" },
    ],
  },
  {
    heading: "For partners",
    links: [
      { icon: <DsIcon src="/icons/ecosystem.svg" className={MENU_ICON_CLASS} />, title: "Partner Program", href: "/partner-program" },
      { icon: <DsIcon src="/icons/integrations.svg" className={MENU_ICON_CLASS} />, title: "Integrations", href: "/integrations" },
    ],
  },
];

const MEGA_MENUS: Record<string, MenuColumn[]> = {
  Platform: PLATFORM_MENU,
  Solutions: SOLUTIONS_MENU,
  Resources: RESOURCES_MENU,
};

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const prevScroll = useRef(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 8);
    const direction = y > prevScroll.current ? "down" : "up";
    if (y < 80) {
      setHidden(false);
    } else if (direction === "down" && y > 80) {
      setHidden(true);
    } else if (direction === "up") {
      setHidden(false);
    }
    prevScroll.current = y;

    if (idleTimer.current) clearTimeout(idleTimer.current);
    idleTimer.current = setTimeout(() => setHidden(false), 180);
  });

  const openMenuFor = (label: string) => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setOpenMenu(label);
  };

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 180);
  };

  // Pages with a dark hero start the header in dark-mode (white text on
  // transparent overlay). Everywhere else, the header is "bright" from page
  // load so nav text stays legible over light heroes.
  const pathname = usePathname();
  const DARK_HERO_ROUTES = new Set([
    "/",
    "/contact",
    "/products/govfacematch",
    "/resources/privacy-architecture",
    "/age-verification/face-age-estimation",
  ]);
  const hasDarkHero = pathname
    ? DARK_HERO_ROUTES.has(pathname.replace(/\/$/, "") || "/")
    : false;
  const bright = scrolled || openMenu !== null || !hasDarkHero;

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: hidden && !openMenu ? -100 : 0, opacity: 1 }}
      transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div
        className={cn(
          "border-b transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ease-out",
          bright
            ? "border-border-light/70 bg-background/85 backdrop-blur-xl shadow-[0_10px_30px_-18px_rgba(38,40,49,0.18)]"
            : "border-transparent",
        )}
      >
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-6 px-5 py-3.5 lg:px-8 lg:py-4">
          <Link
            href="/"
            aria-label="Home"
            className="shrink-0 transition-opacity duration-200 hover:opacity-80"
          >
            <Logo
              className={cn(
                "transition-[filter] duration-300 ease-out",
                bright ? "[filter:none]" : "[filter:brightness(0)_invert(1)]",
              )}
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5">
            {NAV.map((item) => {
              const hasMega = item.label in MEGA_MENUS;
              const isOpen = openMenu === item.label;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onMouseEnter={() => hasMega && openMenuFor(item.label)}
                  onMouseLeave={() => hasMega && scheduleClose()}
                  className={cn(
                    "group/nav relative inline-flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-[13.5px] font-medium transition-colors duration-200",
                    bright
                      ? "text-black hover:bg-black/[0.04]"
                      : "text-white hover:bg-white/[0.08]",
                    isOpen && (bright ? "bg-black/[0.04]" : "bg-white/[0.08]"),
                  )}
                >
                  {item.label}
                  {item.hasMenu && (
                    <ChevronDown
                      size={11}
                      strokeWidth={2.5}
                      className={cn(
                        "transition-transform duration-200 ease-out",
                        bright ? "text-black/60" : "text-white/70",
                        isOpen && "rotate-180",
                      )}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          <Link
            href="/contact"
            className="group/cta hidden lg:inline-flex items-center gap-1.5 rounded-md bg-blue px-4 py-2 text-[13.5px] font-medium text-white shadow-[0_8px_20px_-10px_rgba(0,84,255,0.55)] transition-all duration-300 ease-out hover:bg-blue-600 hover:shadow-[0_10px_24px_-10px_rgba(0,84,255,0.65)]"
          >
            Request a demo
            <ArrowUpRight
              size={14}
              strokeWidth={2.5}
              className="transition-transform duration-200 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
            />
          </Link>

          <button
            aria-label="Toggle menu"
            className={cn(
              "lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border transition-colors",
              bright
                ? "border-border-light/70 text-foreground hover:bg-foreground/[0.04]"
                : "border-white/15 text-white hover:bg-white/10",
            )}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <AnimatePresence>
          {openMenu && MEGA_MENUS[openMenu] && (
            <motion.div
              key="mega-container"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{
                opacity: { duration: 0.32, ease: [0.16, 1, 0.3, 1] },
                y: { duration: 0.32, ease: [0.16, 1, 0.3, 1] },
              }}
              onMouseEnter={() => openMenuFor(openMenu)}
              onMouseLeave={scheduleClose}
              className="hidden lg:block border-t border-border-light/70 bg-background/95 backdrop-blur-xl shadow-[0_28px_56px_-32px_rgba(38,40,49,0.22)]"
            >
              <motion.div
                key={openMenu}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
              >
                <MegaPanel menu={MEGA_MENUS[openMenu]} />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden border-t border-border-light/70 bg-background/95 backdrop-blur-xl px-4 pb-5"
          >
            <div className="flex flex-col gap-1 pt-3">
              {NAV.map((item) => {
                const mega = MEGA_MENUS[item.label];
                const expanded = mobileExpanded === item.label;
                if (mega) {
                  return (
                    <div key={item.label}>
                      <button
                        type="button"
                        onClick={() => setMobileExpanded(expanded ? null : item.label)}
                        className="flex w-full items-center justify-between px-3 py-3 rounded-lg text-[15px] font-medium text-black hover:bg-black/[0.04] transition-colors"
                      >
                        {item.label}
                        <ChevronDown
                          size={14}
                          className={cn(
                            "text-black/60 transition-transform duration-200",
                            expanded && "rotate-180",
                          )}
                        />
                      </button>
                      {expanded && (
                        <div className="ml-3 mt-1 mb-2 flex flex-col gap-3 border-l border-border-light/70 pl-4">
                          {mega.map((col) => (
                            <div key={col.heading}>
                              <div className="px-1 py-1 text-[11px] font-medium uppercase tracking-wide text-grey-on-white/80">
                                {col.heading}
                              </div>
                              <div className="flex flex-col">
                                {col.links.map((link) => {
                                  return (
                                    <Link
                                      key={link.title}
                                      href={link.href}
                                      onClick={() => {
                                        setMobileOpen(false);
                                        setMobileExpanded(null);
                                      }}
                                      className="flex items-center gap-3 rounded-lg px-2 py-2 text-[14px] text-black hover:bg-black/[0.04] transition-colors"
                                    >
                                      <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-border-light/70 bg-off-white/70 text-foreground/70">
                                        {link.icon}
                                      </span>
                                      {link.title}
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between px-3 py-3 rounded-lg text-[15px] font-medium text-black hover:bg-black/[0.04] transition-colors"
                  >
                    {item.label}
                    {item.hasMenu && <ChevronDown size={14} className="text-black/60" />}
                  </a>
                );
              })}
              <ButtonLink
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-3"
              >
                Request a demo
                <ArrowUpRight size={16} strokeWidth={2.25} />
              </ButtonLink>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.div>
  );
}

function MegaPanel({ menu }: { menu: MenuColumn[] }) {
  return (
    <div className="mx-auto grid max-w-[1280px] px-5 py-10 lg:px-8 lg:grid-cols-[1.7fr_1fr_1.05fr]">
      {menu.map((col, idx) => (
        <div
          key={col.heading}
          className={cn(
            idx > 0 && "lg:border-l lg:border-border-light/50 lg:pl-9",
            idx < menu.length - 1 && "lg:pr-9",
            menu.length === 2 && idx === 1 && "lg:col-span-2",
          )}
        >
          <div className="text-xs font-medium text-grey-on-white/80">
            {col.heading}
          </div>
          <div
            className={cn(
              "mt-5 grid gap-x-6",
              col.links.some((l) => l.sub) ? "gap-y-4" : "gap-y-2.5",
              col.columns === 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1",
            )}
          >
            {col.links.map((link) => {
              return (
                <a
                  key={link.title}
                  href={link.href}
                  className={cn(
                    "group/link flex gap-3 rounded-lg p-2 -m-2 transition-colors hover:bg-foreground/[0.025]",
                    link.sub ? "items-start" : "items-center",
                  )}
                >
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border-light/70 bg-off-white/70 text-foreground/70 transition-all duration-200 group-hover/link:border-blue/30 group-hover/link:bg-blue/[0.08] group-hover/link:text-blue group-hover/link:shadow-[0_6px_14px_-8px_rgba(0,84,255,0.4)]">
                    {link.icon}
                  </span>
                  <span className="flex min-w-0 flex-col">
                    <span className="text-[13.5px] font-medium leading-tight text-foreground transition-colors group-hover/link:text-blue">
                      {link.title}
                    </span>
                    {link.sub && (
                      <span className="mt-0.5 text-xs leading-snug text-grey-on-white">
                        {link.sub}
                      </span>
                    )}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
