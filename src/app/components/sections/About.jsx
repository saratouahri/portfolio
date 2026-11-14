import { profile } from "../../data/profile";
import Reveal from "../ui/Reveal";
import SectionLabel from "../ui/SectionLabel";
import AmbientShapes from "../ui/AmbientShapes";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#1D1629] px-6 py-20 lg:px-16 lg:py-28">
      <AmbientShapes variant="about" />
      <div className="relative z-[1] mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
        <Reveal>
          <SectionLabel>About me</SectionLabel>
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
        </Reveal>
      </div>
    </section>
  );
}
