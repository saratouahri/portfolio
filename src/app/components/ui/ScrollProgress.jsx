"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(100, (window.scrollY / scrollable) * 100) : 0);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[70] h-[2px] w-full bg-transparent" aria-hidden="true">
      <div
        className="h-full bg-gradient-to-r from-[#9955E8] via-[#C59BFF] to-[#7BFFAF] shadow-[0_0_12px_rgba(123,255,175,.7)] transition-[width] duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
