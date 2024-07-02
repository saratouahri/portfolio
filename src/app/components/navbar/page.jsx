"use client"
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="w-full h-16  bg-surface-background relative z-10 shadow-custom-bottom ">
      <div className="mx-16  flex justify-between items-center ">
        <div className="flex items-center mt-5">
          <Image src="/SaraTouahri.png" width={100} height={50} alt="Logo" />
        </div>
        <div className="flex gap-2 text-white font-heebo text-sm mt-5">
          <div className="w-20">
            <Link href="/" className="block hover:font-semibold">
              Home
            </Link>
          </div>
          <div className="w-20">
            <Link href="/pages/About" className="block hover:font-semibold">
              About
            </Link>
          </div>
          <div className="w-20">
            <Link href="/pages/Projects" className="block hover:font-semibold">
              Projects
            </Link>
          </div>
          <div className="w-20">
            <Link href="/pages/Contact" className="block hover:font-semibold">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
