"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Education", href: "/#education" },
  { label: "Technologies", href: "/#technologies" },
  { label: "Projects", href: "/pages/Projects" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#332A40] bg-surface-background/95 backdrop-blur-xl">
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-16" aria-label="Primary navigation">
        <Link href="/#top" aria-label="Sara Touahri - Home" className="shrink-0">
          <Image src="/SaraTouahri.png" width={122} height={36} alt="Sara Touahri" priority />
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <Link key={item.label} href={item.href} className="text-xs text-text-secondary transition hover:text-white">
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
