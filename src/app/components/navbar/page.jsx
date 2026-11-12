"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Education", href: "/#education" },
  { label: "Technologies", href: "/#technologies" },
  { label: "Projects", href: "/pages/Projects" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 12);
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    const sections = ["about", "experience", "education", "technologies", "projects"]
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-30% 0px -55%", threshold: [0.05, 0.25, 0.5] },
    );
    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", updateScrollState);
      observer.disconnect();
    };
  }, [pathname]);

  return (
    <header className={`sticky top-0 z-50 border-b bg-surface-background/90 backdrop-blur-xl transition-all duration-300 ${isScrolled ? "border-[#4A3B5B] shadow-[0_12px_40px_rgba(0,0,0,.24)]" : "border-[#332A40]"}`}>
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-16" aria-label="Primary navigation">
        <Link href="/#top" aria-label="Sara Touahri - Home" className="shrink-0">
          <Image src="/SaraTouahri.png" width={122} height={36} alt="Sara Touahri" priority />
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`relative py-2 text-xs transition after:absolute after:bottom-0 after:left-0 after:h-px after:bg-[#7BFFAF] after:transition-all ${
                (item.label === "Projects" && pathname === "/pages/Projects") || activeSection === item.href.split("#")[1]
                  ? "text-white after:w-full"
                  : "text-text-secondary after:w-0 hover:text-white hover:after:w-full"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/pages/Contact" className="rounded-lg bg-[#8A42DB] px-4 py-2.5 text-xs font-medium text-white transition hover:bg-[#9955E8]">
            Contact me
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#4E4563] bg-surface-secondary lg:hidden"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
        >
          <Image src={isOpen ? "/X.svg" : "/Liste.svg"} width={24} height={24} alt="" />
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-[#332A40] bg-surface-secondary px-6 py-5 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-3 text-sm text-text-secondary transition hover:bg-surface-primary hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/pages/Contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-lg bg-[#8A42DB] px-4 py-3 text-center text-sm font-medium text-white"
            >
              Contact me
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
