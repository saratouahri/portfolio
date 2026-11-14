import Link from "next/link";
import { profile } from "../../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-[#332A40] bg-[#120D1B] px-6 pb-7 pt-14 lg:px-16 lg:pt-18">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_.75fr] lg:gap-20">
          <div>
            <Link href="/#top" className="inline-block font-section text-4xl font-bold leading-none text-white transition hover:text-[#7BFFAF]">
              Sara Touahri<span className="text-[#7BFFAF]">.</span>
            </Link>
            <p className="mt-5 max-w-xl text-sm leading-7 text-text-secondary">
              Software engineer building useful systems where thoughtful web engineering, AI, and research meet.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-7 inline-flex items-center gap-3 border-b border-[#4E4563] pb-2 text-sm text-white transition hover:border-[#7BFFAF] hover:text-[#7BFFAF]"
            >
              {profile.email}
              <span aria-hidden="true">&#8599;</span>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#817590]">Explore</p>
              <nav className="mt-5 flex flex-col items-start gap-3 text-sm text-text-secondary" aria-label="Footer navigation">
                <Link href="/#about" className="transition hover:text-white">About</Link>
                <Link href="/#experience" className="transition hover:text-white">Experience</Link>
                <Link href="/pages/Projects" className="transition hover:text-white">Projects</Link>
                <Link href="/#more" className="transition hover:text-white">More</Link>
              </nav>
            </div>
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#817590]">Elsewhere</p>
              <div className="mt-5 flex flex-col items-start gap-3 text-sm text-text-secondary">
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-white">LinkedIn <span aria-hidden="true">&#8599;</span></a>
                <a href={profile.github} target="_blank" rel="noreferrer" className="transition hover:text-white">GitHub <span aria-hidden="true">&#8599;</span></a>
                <Link href="/pages/Contact" className="transition hover:text-white">Contact</Link>
                <a href={profile.resume} target="_blank" rel="noreferrer" className="transition hover:text-white">Resume <span aria-hidden="true">&#8599;</span></a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-[#332A40] pt-6 text-[11px] text-[#817590] sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2 text-text-secondary">
            <span className="h-2 w-2 rounded-full bg-[#7BFFAF] shadow-[0_0_10px_#7BFFAF]" />
            Open to software and AI opportunities
          </p>
          <p>&copy; {new Date().getFullYear()} Sara Touahri</p>
          <Link href="/#top" className="transition hover:text-white">Back to top <span aria-hidden="true">&uarr;</span></Link>
        </div>
      </div>
    </footer>
  );
}
