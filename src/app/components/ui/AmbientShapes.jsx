"use client";

import { useEffect, useRef } from "react";

export default function AmbientShapes({ variant = "default" }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const section = container?.parentElement;
    if (!container || !section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let animationFrame;

    const resetPosition = () => {
      container.style.setProperty("--ambient-x-soft", "0px");
      container.style.setProperty("--ambient-y-soft", "0px");
      container.style.setProperty("--ambient-x-deep", "0px");
      container.style.setProperty("--ambient-y-deep", "0px");
    };

    const updatePosition = (event) => {
      const bounds = section.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;

      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        container.style.setProperty("--ambient-x-soft", `${x * 16}px`);
        container.style.setProperty("--ambient-y-soft", `${y * 12}px`);
        container.style.setProperty("--ambient-x-deep", `${x * -28}px`);
        container.style.setProperty("--ambient-y-deep", `${y * -20}px`);
      });
    };

    section.addEventListener("pointermove", updatePosition, { passive: true });
    section.addEventListener("pointerleave", resetPosition);

    return () => {
      cancelAnimationFrame(animationFrame);
      section.removeEventListener("pointermove", updatePosition);
      section.removeEventListener("pointerleave", resetPosition);
    };
  }, []);

  return (
    <div ref={containerRef} className={`ambient-shapes ambient-shapes--${variant}`} aria-hidden="true">
      <span className="ambient-mesh ambient-motion-soft" />
      <span className="ambient-orbit ambient-motion-deep" />
      <span className="ambient-star ambient-star--large ambient-motion-deep" />
      <span className="ambient-star ambient-star--small ambient-motion-soft" />
      <svg className="ambient-spark ambient-spark--one ambient-motion-soft" viewBox="0 0 64 64" fill="none">
        <path d="M31.5 2C30.7 13.7 31.4 20.8 32.4 27.1M32.2 36.9C31.5 45.4 32.1 53 33 62M2 34.8C13.4 34.2 20.2 33 27.7 31.5M37.2 30.4C46.3 29.7 53.6 28.6 62 27.5M24 23L18 18.6M41.2 39L46 43" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
      <svg className="ambient-spark ambient-spark--two ambient-motion-deep" viewBox="0 0 40 40" fill="none">
        <path d="M20 2C19.6 10 20 13.8 20.8 17.4M20.4 23C20.1 29.2 20.4 34 21 38M2 21.5C9.6 21.2 14.2 20.5 17.3 19.6M23.2 19.1C29.1 18.8 33.6 18 38 17.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <span className="ambient-constellation ambient-motion-soft">
        <i />
        <i />
        <i />
      </span>
    </div>
  );
}
