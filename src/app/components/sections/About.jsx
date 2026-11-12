import { languages, profile, volunteering } from "../../data/profile";
import Reveal from "../ui/Reveal";
import TiltCard from "../ui/TiltCard";

export default function About() {
  return (
    <section id="about" className="bg-[#1D1629] px-6 py-20 lg:px-16 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#7BFFAF]">About me</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-white lg:text-4xl">
            Research-minded engineering, grounded in real products.
          </h2>
          <div className="mt-8 h-1 w-20 rounded-full bg-gradient-to-r from-[#9955E8] to-[#7BFFAF]" />
        </Reveal>

        <Reveal delay={120}>
          <p className="text-lg leading-9 text-text-secondary">{profile.summary}</p>
          <p className="mt-5 text-sm leading-7 text-[#AFA7B9]">
            I enjoy moving between disciplines: understanding a problem, exploring the data, designing a maintainable architecture, and shaping an interface that makes the result approachable. Outside engineering, I am a self-taught artist, coffee enthusiast, and active learner.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <TiltCard intensity={4} className="rounded-xl border border-[#403650] bg-surface-secondary p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-[#817590]">Languages</p>
              <div className="mt-4 space-y-3">
                {languages.map((language) => (
                  <div key={language.name} className="flex items-center justify-between text-sm">
                    <span className="text-white">{language.name}</span>
                    <span className="text-text-secondary">{language.level}</span>
                  </div>
                ))}
              </div>
            </TiltCard>
            <TiltCard intensity={4} className="rounded-xl border border-[#403650] bg-surface-secondary p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-[#817590]">Community</p>
              <p className="mt-4 font-medium text-white">{volunteering.organisation}</p>
              <p className="mt-1 text-xs text-[#BFA7E6]">{volunteering.role} - {volunteering.period}</p>
              <p className="mt-3 text-xs leading-5 text-text-secondary">{volunteering.description}</p>
            </TiltCard>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
