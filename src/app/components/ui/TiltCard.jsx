"use client";

import { useRef } from "react";

export default function TiltCard({ children, className = "", intensity = 7 }) {
  const cardRef = useRef(null);
  const glowRef = useRef(null);

  const handlePointerMove = (event) => {
    const card = cardRef.current;
    if (!card || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * intensity * 2;
    const rotateX = (0.5 - (y / rect.height)) * intensity * 2;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    if (glowRef.current) {
      glowRef.current.style.background = `radial-gradient(280px circle at ${x}px ${y}px, rgba(123,255,175,.16), transparent 62%)`;
      glowRef.current.style.opacity = "1";
    }
  };

  const resetCard = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
    }
    if (glowRef.current) glowRef.current.style.opacity = "0";
  };

  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetCard}
      className={`tilt-card relative ${className}`}
    >
      <div ref={glowRef} className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] opacity-0 transition-opacity duration-300" />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
