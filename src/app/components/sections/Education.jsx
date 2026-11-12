import { education } from "../../data/profile";

export default function Education() {
  return (
    <section id="education" className="bg-[#1D1629] px-6 py-20 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#7BFFAF]">Education</p>
            <h2 className="mt-4 text-3xl font-semibold text-white lg:text-4xl">A foundation in computing, mathematics, and systems.</h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-text-secondary">
            Formal training shaped by rigorous fundamentals and a specialisation in information systems and web development.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {education.map((item, index) => (
            <article key={item.institution} className="group relative overflow-hidden rounded-2xl border border-[#403650] bg-surface-secondary p-6">
              <span className="absolute right-5 top-3 text-6xl font-semibold text-white/[0.035]">{String(index + 1).padStart(2, "0")}</span>
              <p className="text-xs text-[#BFA7E6]">{item.period}</p>
              <h3 className="mt-5 text-lg font-semibold leading-7 text-white">{item.qualification}</h3>
              <p className="mt-3 text-sm leading-6 text-[#7BFFAF]">{item.institution}</p>
              <p className="mt-5 text-xs leading-6 text-text-secondary">{item.detail}</p>
              <p className="mt-5 border-t border-[#403650] pt-4 text-[10px] uppercase tracking-wider text-[#817590]">{item.location}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
