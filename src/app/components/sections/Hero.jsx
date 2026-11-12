import Image from "next/image";
import Link from "next/link";
import { profile } from "../../data/profile";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-surface-background px-6 pb-20 pt-14 lg:px-16 lg:pb-28 lg:pt-20">
      <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#9955E8]/15 blur-3xl" />
      <div className="absolute -right-24 bottom-16 h-72 w-72 rounded-full bg-[#7BFFAF]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_.85fr]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#4E4563] bg-surface-secondary px-4 py-2 text-xs text-text-secondary">
            <span className="h-2 w-2 rounded-full bg-[#7BFFAF] shadow-[0_0_12px_#7BFFAF]" />
            Open to software and AI opportunities
          </div>

          <p className="mt-8 text-sm font-medium uppercase tracking-[0.3em] text-[#BFA7E6]">
            {profile.name} - {profile.title}
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
            Building useful software with
            <span className="bg-gradient-to-r from-[#C59BFF] to-[#7BFFAF] bg-clip-text text-transparent"> intelligence and purpose.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-text-secondary lg:text-lg">
            {profile.introduction}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/pages/Projects"
              className="inline-flex items-center gap-2 rounded-lg bg-[#8A42DB] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#9955E8]"
            >
              Explore my work
              <Image src="/ArrowRight.svg" width={18} height={18} alt="" />
            </Link>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-[#4E4563] bg-surface-secondary px-5 py-3 text-sm text-white transition hover:border-[#7BFFAF]"
            >
              <Image src="/ReadCvLogo.svg" width={18} height={18} alt="" />
              View resume
            </a>
          </div>

          <div className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-[#3E344B] pt-6">
            {[
              ["19", "Public projects"],
              ["2", "Professional internships"],
              ["3", "Working languages"],
            ].map(([value, label]) => (
              <div key={label}>
                <p className="text-2xl font-semibold text-white">{value}</p>
                <p className="mt-1 text-[11px] leading-4 text-text-secondary">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[470px]">
          <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-br from-[#9955E8]/25 to-[#7BFFAF]/15 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-[#4E4563] bg-[#21192F] shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#403650] px-5 py-4">
              <div className="flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF6B81]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FFD166]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#7BFFAF]" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#817590]">profile.ts</span>
            </div>
            <div className="grid min-h-[350px] grid-cols-[1fr_170px] items-end gap-1 p-6 sm:grid-cols-[1fr_210px]">
              <div className="self-start pt-5 font-mono text-xs leading-7 sm:text-sm">
                <p><span className="text-[#C59BFF]">const</span> <span className="text-[#7BFFAF]">engineer</span> = &#123;</p>
                <p className="pl-4 text-white"><span className="text-[#FFB86C]">focus</span>: &quot;useful systems&quot;,</p>
                <p className="pl-4 text-white"><span className="text-[#FFB86C]">craft</span>: [&quot;web&quot;, &quot;AI&quot;],</p>
                <p className="pl-4 text-white"><span className="text-[#FFB86C]">method</span>: &quot;curious + rigorous&quot;,</p>
                <p className="pl-4 text-white"><span className="text-[#FFB86C]">location</span>: &quot;Algeria&quot;</p>
                <p className="text-white">&#125;;</p>
              </div>
              <Image
                src="/girl.png"
                width={220}
                height={250}
                className="relative -bottom-6 w-full object-contain"
                alt="Developer working at a laptop"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
