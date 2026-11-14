import { languages, volunteering } from "../../data/profile";
import Reveal from "../ui/Reveal";
import SectionLabel from "../ui/SectionLabel";
import TiltCard from "../ui/TiltCard";
import AmbientShapes from "../ui/AmbientShapes";

export default function More() {
  return (
    <section id="more" className="relative overflow-hidden bg-[#1D1629] px-6 py-20 lg:px-16 lg:py-28">
      <AmbientShapes variant="more" />
      <div className="relative z-[1] mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <SectionLabel>More</SectionLabel>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-white lg:text-4xl">
            The person around the engineering.
          </h2>
          <p className="mt-4 text-sm leading-7 text-text-secondary">
            A little more context on how I communicate, contribute, and stay curious beyond project work.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <Reveal>
            <TiltCard intensity={4} className="h-full rounded-2xl">
              <article className="h-full rounded-2xl border border-[#403650] bg-surface-secondary p-6 sm:p-8">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#BFA7E6]">
                  Working languages
                </p>
                <div className="mt-7 space-y-5">
                  {languages.map((language) => (
                    <div key={language.name} className="flex items-center gap-4">
                      <span className="h-px flex-1 bg-[#4E4563]" />
                      <span className="min-w-24 text-base font-medium text-white">{language.name}</span>
                      <span className="min-w-16 text-right text-xs text-text-secondary">{language.level}</span>
                    </div>
                  ))}
                </div>
              </article>
            </TiltCard>
          </Reveal>

          <Reveal delay={100}>
            <TiltCard intensity={4} className="h-full rounded-2xl">
              <article className="h-full rounded-2xl border border-[#403650] bg-surface-secondary p-6 sm:p-8">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#BFA7E6]">
                  Community &amp; interests
                </p>
                <div className="mt-6 border-l-2 border-[#7BFFAF] pl-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-medium text-white">{volunteering.organisation}</h3>
                    <p className="text-xs text-[#BFA7E6]">{volunteering.period}</p>
                  </div>
                  <p className="mt-1 text-xs text-text-secondary">{volunteering.role}</p>
                  <p className="mt-3 text-sm leading-6 text-text-secondary">{volunteering.description}</p>
                </div>
                <div className="mt-7 border-t border-[#403650] pt-6">
                  <p className="text-sm leading-7 text-[#D6D1DC]">
                    Away from the keyboard, I am a self-taught artist, coffee enthusiast, and active learner who enjoys finding new ways to connect ideas.
                  </p>
                </div>
              </article>
            </TiltCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
