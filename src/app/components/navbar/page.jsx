"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {

  const [visibility, setVisibility] = useState(false);

  const toggleVisibility = () => {
    setVisibility(!visibility);
  };

  return (
    <div onClick={toggleVisibility} className={`${visibility ? '' : '' }`} >
    <div onClick={toggleVisibility} className={`${visibility ? 'shadow-custom-bottom' : '' } w-full h-16 bg-surface-background relative z-10 lg:shadow-custom-bottom` }	>
      <div className="mx-6 lg:mx-16 flex justify-between items-center " >

        {/* Large screen logo */}
        <div className="hidden lg:flex items-center mt-5">
          <Image src="/SaraTouahri.png" width={100} height={50} alt="Logo" />
        </div>

        {/* Small screen logo */}
        <div className="lg:hidden flex items-center justify-center mt-5">
          <Image src="/SaraTouahri.png" width={110} height={50} alt="Logo" />
        </div>

        {/* Large screen navigation links */}
        <div className="hidden lg:flex gap-2 text-white text-sm mt-5">
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

        {/* Small screen menu toggle */}
        <div className="lg:hidden mt-5">
          <div 
            className="sm:flex items-center justify-center cursor-pointer"
            onClick={toggleVisibility}
          >
            
            <Image src={`${visibility? '/X.svg' : '/Liste.svg'}`}width={30} height={50} alt="Menu Toggle" />
          </div>

          
        </div>

      </div>
    </div>
    {/* Small screen navigation links */}
    <div className={`lg:hidden ${visibility ? 'block' : 'hidden'}   `}>
        <div className="fixed inset-0 bg-surface-background bg-opacity-60 backdrop-blur-sm top-16 z-10 w-screen h-full"  onClick={toggleVisibility}>
        </div>
        <div className="  bg-surface-secondary absolute right-0 z-10 w-60 h-full flex flex-col items-end  gap-12">
  <div onClick={toggleVisibility}>
    <Link href="/" className={`${visibility ? 'block' : 'hidden'} hover:font-semibold text-text-secondary text-sm pr-8 pt-12`}>
      Home
    </Link>
  </div>
  <div onClick={toggleVisibility}>
    <Link href="/pages/About" className={`${visibility ? 'block' : 'hidden'} hover:font-semibold text-text-secondary text-sm pr-8 `}>
      About
    </Link>
  </div>
  <div onClick={toggleVisibility}>
    <Link href="/pages/Projects" className={`${visibility ? 'block' : 'hidden'} hover:font-semibold text-text-secondary text-sm pr-8`}>
      Projects
    </Link>
  </div>
  <div onClick={toggleVisibility}>
    <Link href="/pages/Contact" className={`${visibility ? 'block' : 'hidden'} hover:font-semibold text-text-secondary text-sm pr-8`}>
      Contact
    </Link>
  </div>
  <div  className="w-40 border-b-[1px] border-text-secondary flex justify-center mr-10">

  </div>
</div>


          </div>
    </div>
  );
}
