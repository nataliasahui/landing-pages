import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export type Stat = { value: string; label: string };

const GRID_BY_COUNT: Record<number, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
  4: "grid-cols-2 md:grid-cols-4",
  5: "grid-cols-2 md:grid-cols-5",
};

export function StatsStrip({ stats }: { stats: Stat[] }) {
  const gridCols = GRID_BY_COUNT[stats.length] ?? "sm:grid-cols-3";

  return (
    <section className="flex min-h-[280px] items-center bg-[#FFFFFF]">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-12 sm:py-0 lg:px-8">
        <div className={cn("grid grid-cols-1 gap-y-10 sm:gap-y-0", gridCols)}>
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={0.05 * i}
              className={cn(
                "flex flex-col items-start sm:px-10",
                i > 0 && "sm:border-l sm:border-border-light",
                i === 0 && "sm:pl-0",
              )}
            >
              <div className="bg-[linear-gradient(90deg,#111111_0%,#006AFF_55%,#006AFF_100%)] bg-clip-text font-display text-4xl font-bold leading-[1] tracking-tight text-transparent sm:text-5xl md:text-[56px]">
                {s.value}
              </div>
              <p className="mt-4 text-[13px] leading-snug text-grey-on-white sm:text-[14px]">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
