"use client";

import { useEffect, useState } from "react";

export type EcosystemPartner = { name: string; src: string; maxH: number };

const DEFAULT_PARTNERS: EcosystemPartner[] = [
  { name: "Experian", src: "/logos/experian.svg", maxH: 50 },
  { name: "Equifax", src: "/logos/equifax.svg", maxH: 34 },
  { name: "TransUnion", src: "/logos/transunion.svg", maxH: 42 },
  { name: "Ping Identity", src: "/logos/ping-identity.svg", maxH: 32 },
  { name: "Alloy", src: "/logos/alloy.svg", maxH: 38 },
  { name: "GeoComply", src: "/logos/geocomply.svg", maxH: 32 },
  { name: "HID", src: "/logos/HID.svg", maxH: 40 },
  { name: "NTT Data", src: "/logos/ntt-data-2.svg", maxH: 34 },
  { name: "Carahsoft", src: "/logos/carahsoft.svg", maxH: 32 },
  { name: "TSYS", src: "/logos/TSYS.svg", maxH: 42 },
];

const ROTATION_MS = 2500;

export default function PartnerEcosystemAnimation({
  partners = DEFAULT_PARTNERS,
}: {
  partners?: EcosystemPartner[];
} = {}) {
  const [state, setState] = useState<{ current: number; prev: number | null }>({
    current: 0,
    prev: null,
  });

  useEffect(() => {
    const id = window.setInterval(() => {
      setState((s) => ({
        current: (s.current + 1) % partners.length,
        prev: s.current,
      }));
    }, ROTATION_MS);
    return () => window.clearInterval(id);
  }, [partners.length]);

  const current = partners[state.current];
  const prev = state.prev !== null ? partners[state.prev] : null;

  return (
    <div className="pea-fade-in mx-auto flex w-full max-w-[360px] flex-col items-stretch">
      {/* Incode card */}
      <div className="flex h-[140px] items-center justify-center rounded-2xl border border-black/[0.08] bg-white px-6 py-6 shadow-[0_24px_48px_-28px_rgba(10,15,30,0.18)]">
        <img
          src="/incode-logo-blue.svg"
          alt="Incode"
          className="h-auto max-h-11 w-auto max-w-[55%] object-contain"
        />
      </div>

      {/* Minimal vertical connector */}
      <div
        aria-hidden
        className="flex h-10 w-full items-center justify-center"
      >
        <span className="block h-full w-px bg-black/15" />
      </div>

      {/* Partner card */}
      <div className="flex h-[140px] items-center justify-center rounded-2xl border border-black/[0.08] bg-white px-6 py-6 shadow-[0_24px_48px_-28px_rgba(10,15,30,0.18)]">
        <div className="relative flex h-14 w-full items-center justify-center overflow-hidden">
          {prev && (
            <img
              key={`prev-${state.current}`}
              src={prev.src}
              alt=""
              aria-hidden
              className="pea-exit absolute inset-0 m-auto h-auto w-auto max-w-[80%] object-contain"
              style={{ maxHeight: `${prev.maxH}px` }}
            />
          )}
          <img
            key={`cur-${state.current}`}
            src={current.src}
            alt={current.name}
            className="pea-enter absolute inset-0 m-auto h-auto w-auto max-w-[80%] object-contain"
            style={{ maxHeight: `${current.maxH}px` }}
          />
        </div>
      </div>

      <style jsx>{`
        .pea-fade-in {
          opacity: 0;
          transform: translateY(8px);
          animation: pea-mount 600ms ease-out 80ms forwards;
        }

        @keyframes pea-mount {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .pea-enter,
        .pea-exit {
          animation-duration: 350ms;
          animation-timing-function: cubic-bezier(0.32, 0.72, 0, 1);
          animation-fill-mode: forwards;
        }

        .pea-enter {
          animation-name: pea-slide-in;
        }

        .pea-exit {
          animation-name: pea-slide-out;
        }

        @keyframes pea-slide-in {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pea-slide-out {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-20px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .pea-fade-in {
            animation: none;
            opacity: 1;
            transform: none;
          }
          .pea-enter,
          .pea-exit {
            animation-duration: 120ms;
          }
        }
      `}</style>
    </div>
  );
}
