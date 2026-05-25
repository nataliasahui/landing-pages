"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { CATEGORIES, INTEGRATIONS, type Category } from "./integrations-data";

export function IntegrationsMarketplace({ initialSearch = "" }: { initialSearch?: string }) {
  const [query, setQuery] = useState(initialSearch);
  const [activeCat, setActiveCat] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return INTEGRATIONS.filter((i) => {
      const matchesCat = !activeCat || i.categories.includes(activeCat);
      const matchesQuery = !q || i.name.toLowerCase().includes(q);
      return matchesCat && matchesQuery;
    });
  }, [query, activeCat]);

  const catByKey = useMemo(() => {
    const map = new Map<string, Category>();
    for (const c of CATEGORIES) map.set(c.key, c);
    return map;
  }, []);

  return (
    <div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex items-center gap-3"
      >
        <label className="relative w-full max-w-md flex-1">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search integrations..."
            className="h-11 w-full rounded-md border border-border-light bg-background px-4 text-[14px] text-foreground placeholder:text-grey-on-white focus:border-foreground focus:outline-none"
          />
        </label>
        <button
          type="submit"
          aria-label="Search"
          className="inline-flex h-11 shrink-0 items-center gap-2 rounded-md border border-border-light bg-background px-5 text-[14px] text-foreground transition-colors hover:border-foreground"
        >
          Search
          <Search size={14} strokeWidth={2} />
        </button>
      </form>

      <div className="mt-5 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => setActiveCat(null)}
          className={cn(
            "rounded-full border px-4 py-2 text-[13px] transition-colors",
            activeCat === null
              ? "border-foreground bg-background text-foreground"
              : "border-border-light bg-background text-grey-on-white hover:border-foreground hover:text-foreground",
          )}
        >
          View all
        </button>
        {CATEGORIES.map((c) => {
          const isActive = activeCat === c.key;
          return (
            <button
              key={c.key}
              type="button"
              onClick={() => setActiveCat(isActive ? null : c.key)}
              title={c.full}
              className={cn(
                "rounded-full border px-4 py-2 text-[13px] transition-colors",
                isActive
                  ? "border-foreground bg-background text-foreground"
                  : "border-border-light bg-background text-grey-on-white hover:border-foreground hover:text-foreground",
              )}
            >
              {c.label}
            </button>
          );
        })}
      </div>

      <p className="mt-6 text-[12px] text-grey-on-white">
        This is a sample list of integrations. Reach out if you are looking for something specific
        — we may already have it.
      </p>

      <div className="mt-3 mb-5 flex items-center justify-between">
        <span className="text-[13px] text-grey-on-white">
          <strong className="text-foreground">{filtered.length}</strong> integration
          {filtered.length === 1 ? "" : "s"}
        </span>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border-light bg-off-white/40 py-16 text-center text-[14px] text-grey-on-white">
          No integrations match your search or filters.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((i) => {
            const catLabels = i.categories
              .map((k) => catByKey.get(k))
              .filter((c): c is Category => Boolean(c));
            return (
              <article
                key={i.name}
                className="flex flex-col rounded-2xl border border-border-light bg-[#FFFFFF] p-7 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue/30 hover:shadow-[0_8px_22px_-14px_rgba(0,84,255,0.35)]"
              >
                <div className="flex h-7 items-center">
                  {i.logo ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={i.logo}
                      alt={`${i.name} logo`}
                      className={cn(
                        "w-auto object-contain object-left",
                        i.smallLogo ? "max-h-[18px] max-w-[80px]" : "max-h-6 max-w-[110px]",
                      )}
                    />
                  ) : (
                    <div
                      className="flex h-7 w-7 items-center justify-center rounded-md text-[10px] font-bold"
                      style={{ background: i.bg, color: i.fg ?? "#fff" }}
                    >
                      {i.initials}
                    </div>
                  )}
                </div>

                <h3 className="mt-6 font-display text-sm leading-tight text-black md:text-base">
                  {i.name}
                </h3>
                <p className="mt-3 flex-1 text-[11px] font-normal leading-relaxed text-grey-on-white">
                  {i.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-1.5">
                  {catLabels.map((c) => (
                    <span
                      key={c.key}
                      title={c.full}
                      className="inline-flex items-center rounded-md border border-border-light bg-off-white/70 px-2.5 py-1 text-[10px] font-normal text-grey-on-white"
                    >
                      {c.label}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}
