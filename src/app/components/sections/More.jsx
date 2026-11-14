import { certifications, languages, volunteering } from "../../data/profile";
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
            What else shapes the engineer behind the work?
          </h2>
          <p className="mt-4 text-sm leading-7 text-text-secondary">
            Languages, community, and continued learning add more context to the profile beyond project work.
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

        <Reveal delay={140} className="mt-5">
          <article className="rounded-2xl border border-[#403650] bg-surface-secondary p-6 sm:p-8">
            <div className="flex flex-col gap-3 border-b border-[#403650] pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#BFA7E6]">
                  Certifications
                </p>
                <h3 className="mt-2 text-xl font-semibold text-white">
                  Learning that keeps the toolkit moving forward.
                </h3>
              </div>
              <a
                href="https://www.linkedin.com/in/touahri/details/certifications/"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-medium text-[#7BFFAF] transition hover:text-white"
              >
                View on LinkedIn <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {certifications.map((certification, index) => (
                <a
                  key={certification.credentialId}
                  href={certification.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex min-h-56 flex-col rounded-xl border border-[#4E4563] bg-surface-background p-5 transition hover:-translate-y-1 hover:border-[#7BFFAF] hover:shadow-[0_16px_45px_rgba(123,255,175,.09)]"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#7BFFAF]/10 text-xs font-semibold text-[#7BFFAF]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[11px] text-[#BFA7E6]">{certification.issued}</span>
                  </div>
                  <h4 className="mt-5 text-base font-semibold leading-6 text-white transition group-hover:text-[#7BFFAF]">
                    {certification.name}
                  </h4>
                  <p className="mt-2 text-xs leading-5 text-text-secondary">
                    {certification.issuer}
                  </p>
                  <div className="mt-auto flex items-end justify-between gap-3 pt-6">
                    <div>
                      <p className="text-[9px] uppercase tracking-[0.16em] text-[#817590]">Credential ID</p>
                      <p className="mt-1 text-[10px] text-text-secondary">{certification.credentialId}</p>
                    </div>
                    <span className="text-xs font-medium text-[#7BFFAF]">
                      Verify <span aria-hidden="true">↗</span>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
