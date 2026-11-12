"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ProjectCover from "../../components/ProjectCover";
import projects from "../../../../public/project";

function ProjectDetailsContent() {
  const searchParams = useSearchParams();
  const id = Number(searchParams.get("id"));
  const project = projects.find((item) => item.id === id);

  if (!project) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-surface-background px-6 text-center">
        <div>
          <h1 className="text-2xl font-semibold text-white">Project not found</h1>
          <Link href="/pages/Projects" className="mt-4 inline-block text-sm text-[#7BFFAF]">
            Return to all projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-surface-background px-4 py-8 sm:px-6 lg:px-16">
      <div className="mx-auto grid max-w-6xl gap-7 lg:grid-cols-[minmax(0,1fr)_300px]">
        <article className="overflow-hidden rounded-2xl border border-[#403650] bg-surface-secondary">
          <div className="group relative h-[260px] overflow-hidden sm:h-[340px]">
            <ProjectCover project={project} sizes="(max-width: 1024px) 100vw, 760px" />
            <Link
              href="/pages/Projects"
              className="absolute left-4 top-4 z-30 flex h-11 items-center gap-2 rounded-lg border border-white/10 bg-surface-background/90 px-3 text-xs text-white shadow-shadow2 transition hover:bg-surface-primary"
            >
              <Image src="/ArrowLeft.svg" width={22} height={22} alt="" />
              All projects
            </Link>
          </div>

          <div className="p-6 sm:p-9 lg:p-12">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-surface-background px-3 py-1.5 text-[11px] font-medium text-[#BFA7E6]">
                {project.category}
              </span>
              <span className="text-xs text-text-secondary">{project.date}</span>
            </div>

            <h1 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {project.name}
            </h1>
            <p className="mt-3 text-sm leading-6 text-[#B8B2C4]">{project.type}</p>

            <div className="mt-7 flex flex-wrap gap-2">
              {project.stack.map((technology) => (
                <span
                  key={technology}
                  className="rounded-md border border-[#5A4B70] bg-surface-background px-3 py-1.5 text-[11px] text-text-secondary"
                >
                  {technology}
                </span>
              ))}
            </div>

            <div className="my-9 h-px bg-[#403650]" />

            <h2 className="text-lg font-medium text-white">About the project</h2>
            <p className="mt-4 whitespace-pre-line text-sm leading-8 text-text-secondary">
              {project.content}
            </p>

            <dl className="mt-9 grid gap-5 rounded-xl bg-surface-background p-5 text-sm sm:grid-cols-2">
              <div>
                <dt className="text-xs uppercase tracking-wider text-[#817590]">My role</dt>
                <dd className="mt-2 text-text-secondary">{project.role}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-[#817590]">Team</dt>
                <dd className="mt-2 text-text-secondary">{project.team}</dd>
              </div>
            </dl>
          </div>
        </article>

        <aside className="h-fit rounded-2xl border border-[#403650] bg-surface-secondary p-6 lg:sticky lg:top-8">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#7BFFAF]">Explore</p>
          <h2 className="mt-3 text-lg font-medium text-white">Take a closer look</h2>
          <p className="mt-2 text-xs leading-5 text-text-secondary">
            Review the implementation and supporting material in the public repository.
          </p>

          <Link
            href={project.github_link}
            target="_blank"
            rel="noreferrer"
            className="mt-6 flex w-full items-center justify-between rounded-lg border border-surface-primary bg-surface-primary p-3 text-sm text-white transition hover:border-white"
          >
            <span className="flex items-center gap-3">
              <Image src="/logo-github 1.svg" width={22} height={22} alt="" />
              View code
            </span>
            <Image src="/ArrowUpRight.svg" width={20} height={20} alt="" />
          </Link>

          {project.demo && (
            <Link
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="mt-3 flex w-full items-center justify-between rounded-lg border border-[#7BFFAF] bg-surface-background p-3 text-sm text-white transition hover:bg-surface-primary"
            >
              <span>Open live demo</span>
              <Image src="/ArrowUpRight.svg" width={20} height={20} alt="" />
            </Link>
          )}

          <Link
            href="/pages/Projects"
            className="mt-5 block text-center text-xs text-text-secondary transition hover:text-white"
          >
            Browse all {projects.length} projects
          </Link>
        </aside>
      </div>
    </main>
  );
}

export default function ProjectDetails() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-surface-background" />}>
      <ProjectDetailsContent />
    </Suspense>
  );
}
