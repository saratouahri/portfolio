"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ProjectCover from "../../components/ProjectCover";
import TiltCard from "../../components/ui/TiltCard";
import Reveal from "../../components/ui/Reveal";
import SectionLabel from "../../components/ui/SectionLabel";
import AmbientShapes from "../../components/ui/AmbientShapes";
import projects from "../../../../public/project";

const categories = ["All", "Web", "AI & ML", "Quantum", "Knowledge Systems", "Simulation"];
const featuredProjectIds = [4, 5, 6, 12, 15, 19];

export default function Projects({ featured = false }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const projectCollection = featured
    ? projects.filter((project) => featuredProjectIds.includes(project.id))
    : projects;
  const visibleProjects = activeCategory === "All"
    ? projectCollection
    : projectCollection.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="relative w-full overflow-hidden bg-surface-background px-6 py-20 lg:px-16 lg:py-28">
      <Image
        src="/Graphic2.svg"
        width={80}
        height={80}
        className="absolute -left-5 top-4 z-0 opacity-80"
        alt=""
      />
      <AmbientShapes variant="projects" />

      <div className="relative z-[1] mx-auto flex max-w-6xl flex-col items-center">
        <SectionLabel>Projects</SectionLabel>
        <p className="mt-4 text-xs font-medium uppercase tracking-[0.28em] text-[#7BFFAF]">
          {featured ? "Featured work" : "Project archive"}
        </p>
        <h1 className="mt-3 text-center text-2xl font-semibold text-white lg:text-3xl">
          {featured
            ? "Selected projects across engineering and research"
            : "Projects built across software, AI, and research"}
        </h1>
        <p className="mt-4 max-w-2xl text-center text-sm leading-6 text-text-secondary">
          {featured
            ? "A focused selection of product, machine-learning, knowledge-system, and simulation work."
            : "From full-stack products to multimodal AI, knowledge graphs, quantum computing, and agent-based simulations."}
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-3 text-xs">
          <span className="rounded-full border border-[#4E4563] bg-surface-secondary px-4 py-2 text-white">
            <strong className="mr-1 text-[#7BFFAF]">{featured ? projectCollection.length : projects.length}</strong> {featured ? "featured projects" : "projects"}
          </span>
          <span className="rounded-full border border-[#4E4563] bg-surface-secondary px-4 py-2 text-white">
            <strong className="mr-1 text-[#C59BFF]">5</strong> disciplines
          </span>
          <a
            href="https://github.com/saratouahri"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[#4E4563] bg-surface-secondary px-4 py-2 text-white transition hover:border-[#7BFFAF]"
          >
            Explore GitHub ↗
          </a>
        </div>

        {!featured && (
        <div className="mt-10 flex w-full flex-wrap justify-center gap-2" role="group" aria-label="Filter projects by discipline">
          {categories.map((category) => {
            const count = category === "All"
              ? projects.length
              : projects.filter((project) => project.category === category).length;
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-lg border px-4 py-2 text-xs transition ${
                  isActive
                    ? "border-[#7BFFAF] bg-[#7BFFAF] font-semibold text-[#171023]"
                    : "border-[#4E4563] bg-surface-secondary text-text-secondary hover:border-[#7BFFAF] hover:text-white"
                }`}
                aria-pressed={isActive}
              >
                {category} <span className={isActive ? "text-[#171023]/60" : "text-white/40"}>{count}</span>
              </button>
            );
          })}
        </div>
        )}

        <div className="mt-8 grid w-full grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <Reveal key={project.id} delay={(index % 3) * 70} className="mx-auto h-full w-full max-w-[360px]">
            <TiltCard intensity={6} className="h-full rounded-xl">
            <article className="group relative flex h-full w-full flex-col overflow-hidden rounded-xl border border-[#403650] bg-surface-secondary transition duration-300 hover:border-[#7BFFAF] hover:shadow-[0_22px_70px_rgba(123,255,175,.13)]">
              <div className="relative h-44 w-full overflow-hidden bg-gradient-to-r from-[#9955E8] to-[#7BFFAF]">
                <ProjectCover
                  project={project}
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />

                <div className="absolute right-3 top-3 z-20 flex gap-2">
                  <Link
                    href={project.github_link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.name} source code on GitHub`}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-surface-background/90 shadow-shadow2 transition hover:bg-surface-primary"
                  >
                    <Image src="/logo-github 1.svg" width={25} height={25} alt="" />
                  </Link>
                  <Link
                    href={`/pages/ProjectDetails?id=${project.id}`}
                    aria-label={`Read more about ${project.name}`}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-surface-background/90 shadow-shadow2 transition hover:bg-surface-primary"
                  >
                    <Image src="/ArrowUpRight.svg" width={25} height={25} alt="" />
                  </Link>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-surface-background px-2.5 py-1 text-[10px] font-medium text-[#BFA7E6]">
                    {project.category}
                  </span>
                  <p className="text-[11px] text-text-secondary">{project.date}</p>
                </div>
                <h2 data-depth="1" className="mt-4 text-xl font-medium text-white">{project.name}</h2>
                <p className="mt-2 min-h-[40px] text-xs leading-5 text-text-secondary">
                  {project.type}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.slice(0, 3).map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-[#5A4B70] bg-surface-background px-2.5 py-1 text-[10px] text-text-secondary"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/pages/ProjectDetails?id=${project.id}`}
                  className="mt-6 inline-flex items-center gap-2 text-xs font-medium text-[#7BFFAF] transition group-hover:gap-3"
                >
                  View project <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
            </TiltCard>
            </Reveal>
          ))}
        </div>

        {featured ? (
          <Link
            href="/pages/Projects"
            className="mt-10 rounded-lg border border-[#4E4563] bg-surface-secondary px-5 py-3 text-sm text-white transition hover:border-[#7BFFAF]"
          >
            View all {projects.length} projects
          </Link>
        ) : (
          <p className="mt-8 text-xs text-text-secondary" aria-live="polite">
            Showing {visibleProjects.length} of {projects.length} projects
          </p>
        )}
      </div>

      <Image
        src="/Graphic3.svg"
        width={60}
        height={60}
        className="absolute -bottom-2 right-0 opacity-80"
        alt=""
      />
    </section>
  );
}
