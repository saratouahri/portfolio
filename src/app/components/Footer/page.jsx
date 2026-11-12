import Link from "next/link";
import { profile } from "../../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-[#332A40] bg-surface-background px-6 py-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-8 md:flex-row md:items-end">
        <div>
          <Link href="/#top" className="text-lg font-semibold text-white">Sara Touahri</Link>
          <p className="mt-2 max-w-md text-xs leading-5 text-text-secondary">
            Software Engineer working across full-stack development, machine learning, and semantic systems.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs text-text-secondary">
          <Link href="/#experience" className="transition hover:text-white">Experience</Link>
          <Link href="/#education" className="transition hover:text-white">Education</Link>
          <Link href="/#technologies" className="transition hover:text-white">Technologies</Link>
          <Link href="/pages/Projects" className="transition hover:text-white">Projects</Link>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-white">LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="transition hover:text-white">GitHub</a>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-6xl border-t border-[#332A40] pt-5 text-[10px] uppercase tracking-[0.14em] text-[#817590]">
        Sara Touahri - Personal website
      </div>
    </footer>
  );
}
