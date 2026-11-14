

import Hero from "@/app/components/sections/Hero";
import About from "@/app/components/sections/About";
import Experience from "@/app/components/sections/Experience";
import Education from "@/app/components/sections/Education";
import Technologies from "@/app/components/sections/Technologies";
import ContactCTA from "@/app/components/sections/ContactCTA";
import More from "@/app/components/sections/More";
import Projects from "@/app/pages/Projects/page";

export default function APP() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Education />
      <Technologies />
      <Projects featured />
      <More />
      <ContactCTA />
    </main>
  );
}
