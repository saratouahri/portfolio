

import Hero from "@/app/components/sections/Hero";
import About from "@/app/components/sections/About";
import Experience from "@/app/components/sections/Experience";
import Education from "@/app/components/sections/Education";
import Technologies from "@/app/components/sections/Technologies";
import ContactCTA from "@/app/components/sections/ContactCTA";
import More from "@/app/components/sections/More";
import Projects from "@/app/pages/Projects/page";

const siteUrl = "https://www.sara-touahri.com";
const siteDescription =
  "Sara Touahri is a Software Engineer building full-stack, machine-learning, and semantic-web systems.";

export const metadata = {
  title: "Sara Touahri | Software Engineer",
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Sara Touahri",
    title: "Sara Touahri | Software Engineer",
    description: siteDescription,
  },
  twitter: {
    card: "summary",
    title: "Sara Touahri | Software Engineer",
    description: siteDescription,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sara Touahri",
  url: siteUrl,
  jobTitle: "Software Engineer",
  email: "mailto:st.touahri@gmail.com",
  sameAs: [
    "https://www.linkedin.com/in/touahri",
    "https://github.com/saratouahri",
  ],
  knowsAbout: [
    "Full-stack software engineering",
    "Machine learning",
    "Semantic Web",
    "Knowledge graphs",
    "Explainable AI",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Higher School of Computer Science 08 May 1945 - Sidi Bel Abbes",
  },
};

export default function APP() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
        }}
      />
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
