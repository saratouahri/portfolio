import Image from "next/image";

function Motif({ type, accent }) {
  if (type === "orbit") {
    return (
      <svg viewBox="0 0 260 150" className="absolute inset-y-0 right-0 h-full w-2/3 opacity-80" aria-hidden="true">
        <ellipse cx="145" cy="75" rx="92" ry="35" fill="none" stroke={accent} strokeWidth="2" />
        <ellipse cx="145" cy="75" rx="92" ry="35" fill="none" stroke={accent} strokeWidth="2" transform="rotate(60 145 75)" />
        <ellipse cx="145" cy="75" rx="92" ry="35" fill="none" stroke={accent} strokeWidth="2" transform="rotate(-60 145 75)" />
        <circle cx="145" cy="75" r="13" fill={accent} />
        <circle cx="222" cy="57" r="7" fill="#fff" />
        <circle cx="86" cy="113" r="5" fill="#fff" />
      </svg>
    );
  }

  if (type === "document") {
    return (
      <div className="absolute bottom-4 right-5 h-[108px] w-[132px] rotate-3 rounded-xl border border-white/20 bg-white/10 p-4 shadow-2xl" aria-hidden="true">
        <div className="h-2 w-16 rounded bg-white/70" />
        <div className="mt-4 h-1.5 w-full rounded bg-white/25" />
        <div className="mt-2 h-1.5 w-4/5 rounded bg-white/25" />
        <div className="mt-4 grid grid-cols-3 gap-2">
          <div className="h-8 rounded" style={{ backgroundColor: accent }} />
          <div className="h-8 rounded bg-white/15" />
          <div className="h-8 rounded bg-white/15" />
        </div>
      </div>
    );
  }

  if (type === "network") {
    return (
      <svg viewBox="0 0 230 150" className="absolute inset-y-0 right-0 h-full w-3/5 opacity-90" aria-hidden="true">
        <g stroke="rgba(255,255,255,.28)" strokeWidth="2">
          <line x1="35" y1="30" x2="112" y2="58" />
          <line x1="112" y1="58" x2="190" y2="27" />
          <line x1="112" y1="58" x2="164" y2="120" />
          <line x1="35" y1="30" x2="55" y2="112" />
          <line x1="55" y1="112" x2="164" y2="120" />
          <line x1="190" y1="27" x2="164" y2="120" />
        </g>
        <g fill={accent} stroke="#fff" strokeWidth="2">
          <circle cx="35" cy="30" r="10" />
          <circle cx="112" cy="58" r="17" />
          <circle cx="190" cy="27" r="8" />
          <circle cx="55" cy="112" r="13" />
          <circle cx="164" cy="120" r="11" />
        </g>
      </svg>
    );
  }

  if (type === "chart") {
    return (
      <div className="absolute bottom-5 right-6 flex h-28 w-36 items-end gap-3 rounded-xl border border-white/15 bg-black/15 p-4" aria-hidden="true">
        {[42, 76, 55, 94, 68].map((height, index) => (
          <div
            key={height}
            className="flex-1 rounded-t"
            style={{ height: `${height}%`, backgroundColor: index === 3 ? accent : "rgba(255,255,255,.24)" }}
          />
        ))}
      </div>
    );
  }

  if (type === "conversation") {
    return (
      <div className="absolute bottom-5 right-5 w-40 space-y-3" aria-hidden="true">
        <div className="mr-8 rounded-2xl rounded-bl-sm border border-white/15 bg-white/15 px-4 py-3">
          <div className="h-1.5 w-20 rounded bg-white/60" />
          <div className="mt-2 h-1.5 w-12 rounded bg-white/25" />
        </div>
        <div className="ml-8 rounded-2xl rounded-br-sm px-4 py-3" style={{ backgroundColor: accent }}>
          <div className="h-1.5 w-16 rounded bg-black/40" />
          <div className="mt-2 h-1.5 w-20 rounded bg-black/20" />
        </div>
      </div>
    );
  }

  if (type === "blocks") {
    return (
      <div className="absolute bottom-5 right-6 grid h-28 w-36 grid-cols-3 gap-2" aria-hidden="true">
        {[0, 1, 2, 3, 4, 5].map((item) => (
          <div
            key={item}
            className="rounded-lg border border-white/15 shadow-lg"
            style={{ backgroundColor: item === 1 || item === 4 ? accent : "rgba(255,255,255,.12)" }}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="absolute bottom-5 right-5 w-40 rounded-xl border border-white/15 bg-black/20 p-4" aria-hidden="true">
      <div className="flex gap-2">
        <span className="h-2 w-2 rounded-full bg-[#ff6b81]" />
        <span className="h-2 w-2 rounded-full bg-[#ffd166]" />
        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: accent }} />
      </div>
      <div className="mt-4 h-1.5 w-20 rounded" style={{ backgroundColor: accent }} />
      <div className="mt-3 h-1.5 w-full rounded bg-white/20" />
      <div className="mt-2 h-1.5 w-3/4 rounded bg-white/20" />
      <div className="mt-2 h-1.5 w-5/6 rounded bg-white/20" />
    </div>
  );
}

export default function ProjectCover({ project, sizes = "100vw" }) {
  if (project.cover_photo) {
    return (
      <Image
        src={project.cover_photo}
        fill
        sizes={sizes}
        className="object-cover transition duration-500 group-hover:scale-[1.03]"
        alt={`${project.name} project preview`}
      />
    );
  }

  const visual = project.visual || {};
  const accent = visual.accent || "#7BFFAF";

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${visual.background || "#25163a"}, #171023)`,
      }}
      role="img"
      aria-label={`${project.name} project artwork`}
    >
      <div
        className="absolute -left-12 -top-20 h-52 w-52 rounded-full opacity-20 blur-2xl"
        style={{ backgroundColor: accent }}
      />
      <div className="absolute left-5 top-5 z-10 max-w-[52%]">
        <span className="rounded-full border border-white/20 bg-black/15 px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.16em] text-white/75">
          {project.category}
        </span>
        <p className="mt-5 text-3xl font-semibold tracking-tight text-white">
          {visual.short || project.name.slice(0, 3).toUpperCase()}
        </p>
        <p className="mt-1 text-[11px] leading-4 text-white/60">{visual.caption || project.type}</p>
      </div>
      <Motif type={visual.motif} accent={accent} />
    </div>
  );
}
