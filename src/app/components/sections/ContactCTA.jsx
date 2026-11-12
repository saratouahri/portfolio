import Link from "next/link";
import { profile } from "../../data/profile";

export default function ContactCTA() {
  return (
    <section id="contact" className="bg-[#1D1629] px-6 py-20 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-[#4E4563] bg-surface-secondary p-8 sm:p-12 lg:p-16">
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#7BFFAF]">Let&apos;s work together</p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              Have a thoughtful software or AI problem to solve?
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-text-secondary">
              I am interested in engineering roles, research collaborations, and projects where reliable software can turn complex information into useful outcomes.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link href="/pages/Contact" className="rounded-lg bg-[#8A42DB] px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-[#9955E8]">
              Start a conversation
            </Link>
            <a href={`mailto:${profile.email}`} className="rounded-lg border border-[#4E4563] bg-surface-background px-6 py-3 text-center text-sm text-white transition hover:border-[#7BFFAF]">
              {profile.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
