import { education } from "../../data/profile";
import Reveal from "../ui/Reveal";
import TiltCard from "../ui/TiltCard";
import SectionLabel from "../ui/SectionLabel";
import AmbientShapes from "../ui/AmbientShapes";

export default function Education() {
  return (
    <section id="education" className="relative overflow-hidden bg-[#1D1629] px-6 py-20 lg:px-16 lg:py-28">
      <AmbientShapes variant="education" />
      <div className="relative z-[1] mx-auto max-w-6xl">
        <Reveal className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <SectionLabel>Education</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold text-white lg:text-4xl">A foundation in computing, mathematics, and systems.</h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-text-secondary">
            Formal training shaped by rigorous fundamentals and a specialisation in information systems and web development.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {education.map((item, index) => (
            <Reveal key={item.institution} delay={index * 90}>
            <TiltCard intensity={6} className="h-full rounded-2xl">
            <article className="group relative h-full overflow-hidden rounded-2xl border border-[#403650] bg-surface-secondary p-6 transition hover:border-[#7BFFAF] hover:shadow-[0_24px_70px_rgba(0,0,0,.3)]">
              <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#9955E8]/0 blur-2xl transition duration-500 group-hover:bg-[#9955E8]/20" />
              <span className="absolute right-5 top-3 text-6xl font-semibold text-white/[0.035]">{String(index + 1).padStart(2, "0")}</span>
              <p data-depth="1" className="text-xs text-[#BFA7E6]">{item.period}</p>
              <h3 data-depth="1" className="mt-5 text-lg font-semibold leading-7 text-white">{item.qualification}</h3>
              <p className="mt-3 text-sm leading-6 text-[#7BFFAF]">{item.institution}</p>
              <p className="mt-5 text-xs leading-6 text-text-secondary">{item.detail}</p>
            </article>
            </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
