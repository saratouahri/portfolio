import { experience } from "../../data/profile";
import Reveal from "../ui/Reveal";
import TiltCard from "../ui/TiltCard";
import SectionLabel from "../ui/SectionLabel";
import AmbientShapes from "../ui/AmbientShapes";

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden bg-surface-background px-6 py-20 lg:px-16 lg:py-28">
      <AmbientShapes variant="experience" />
      <div className="relative z-[1] mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <SectionLabel>Professional experience</SectionLabel>
          <h2 className="mt-4 text-3xl font-semibold text-white lg:text-4xl">From research questions to operational systems.</h2>
          <p className="mt-4 text-sm leading-7 text-text-secondary">
            Experience across applied research, machine learning, semantic infrastructure, and enterprise IT.
          </p>
        </Reveal>

        <div className="relative mt-12 space-y-7 before:absolute before:bottom-8 before:left-[15px] before:top-8 before:w-px before:bg-[#4E4563] sm:before:left-[21px]">
          {experience.map((item, index) => (
            <Reveal key={item.company} delay={index * 100} className="relative pl-12 sm:pl-16">
              <div className="absolute left-0 top-7 flex h-8 w-8 items-center justify-center rounded-full border border-[#7BFFAF] bg-surface-background text-xs font-semibold text-[#7BFFAF] sm:h-11 sm:w-11">
                {String(index + 1).padStart(2, "0")}
              </div>
              <TiltCard intensity={3} className="rounded-2xl border border-[#403650] bg-surface-secondary p-6 transition hover:border-[#7BFFAF] hover:shadow-[0_24px_70px_rgba(0,0,0,.28)] sm:p-8">
                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                  <div>
                    <span className="rounded-full bg-surface-background px-3 py-1 text-[10px] uppercase tracking-wider text-[#BFA7E6]">{item.type}</span>
                    <h3 className="mt-4 text-xl font-semibold text-white">{item.role}</h3>
                    <p className="mt-1 text-sm font-medium text-[#7BFFAF]">{item.company}</p>
                  </div>
                  <div className="text-left text-xs leading-5 text-text-secondary md:text-right">
                    <p>{item.period}</p>
                    <p>{item.location}</p>
                  </div>
                </div>

                <p className="mt-6 max-w-3xl text-sm leading-7 text-text-secondary">{item.description}</p>
                <ul className="mt-5 space-y-2 text-xs leading-6 text-[#B8B2C4]">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#9955E8]" />
                      {highlight}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.technologies.map((technology) => (
                    <span key={technology} className="rounded-md border border-[#4E4563] bg-surface-background px-2.5 py-1 text-[10px] text-text-secondary">
                      {technology}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
