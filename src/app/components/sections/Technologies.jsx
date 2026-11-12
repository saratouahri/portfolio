import { technologyGroups } from "../../data/profile";
import Reveal from "../ui/Reveal";
import TiltCard from "../ui/TiltCard";

export default function Technologies() {
  return (
    <section id="technologies" className="bg-surface-background px-6 py-20 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#7BFFAF]">Technologies</p>
          <h2 className="mt-4 text-3xl font-semibold text-white lg:text-4xl">A versatile toolkit for research and product delivery.</h2>
          <p className="mt-4 text-sm leading-7 text-text-secondary">
            Technologies used across professional experience, academic work, and personal projects - grouped by how they contribute to a system.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {technologyGroups.map((group, index) => (
            <Reveal key={group.title} delay={(index % 3) * 80}>
            <TiltCard intensity={5} className="h-full rounded-2xl">
            <article className="group relative h-full overflow-hidden rounded-2xl border border-[#403650] bg-surface-secondary p-6 transition hover:border-[#7BFFAF] hover:shadow-[0_24px_70px_rgba(0,0,0,.28)]">
              <div className="absolute -right-16 -top-20 h-40 w-40 rounded-full bg-[#7BFFAF]/0 blur-2xl transition duration-500 group-hover:bg-[#7BFFAF]/10" />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 data-depth="1" className="text-lg font-semibold text-white">{group.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-text-secondary">{group.description}</p>
                </div>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-surface-background text-xs font-semibold text-[#7BFFAF]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {group.items.map((technology) => (
                  <span key={technology} className="rounded-md border border-[#4E4563] bg-surface-background px-3 py-1.5 text-[11px] text-[#D6D1DC] transition hover:-translate-y-0.5 hover:border-[#7BFFAF] hover:text-white">
                    {technology}
                  </span>
                ))}
              </div>
            </article>
            </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
