"use client"

import Image from "next/image"
import Link from "next/link";
export default function Home(){

    return(
        <div className="bg-surface-background w-full home-height font-heebo">
            <div className="flex flex-row justify-between items-center mx-24">
                <div className="flex flex-col space-y-10">
                    <div className="mb-10">
                        <Image src="/ImSara.png" width={150} height={150}/>
                    </div>
                    <div className="">
                        <h1 className="text-[26px] text-white font-medium">
                        Full-Stack Developer with a Flair for Innovation
                        </h1>
                
                        <p className="text-[14px] text-white font-normal" >
                        a 4th-year student at ESI Sidi Bel Abbès, specializing in building <br/> innovative websites  using technologies such as React, Next.js, and Node.js
                        </p>
                    </div>

                    <div className="flex flex-row space-x-4 ">
                        <div className=" block bg-surface-secondary text-white p-4 rounded-[9px] flex flex-row space-x-2 items-center transition-all duration-300 hover:bg-surface-primary hover:border-white hover:border-[1px]">
                            <Image src="/ReadCvLogo.png" width={20} height={20}/>
                            <input type="submit" onClick={() => window.open('/CV_Touahri_sara.pdf')} value="My resume"  className="cursor-pointer outline-none border-none bg-transparent text-white"  />
                        </div>
                        <Link href="/pages/Contact">
                        <div className=" block bg-button-primary-default  text-white p-4 rounded-[9px] flex flex-row space-x-2 transition-all duration-300 hover:bg-button-primary-hover hover:border-white hover:border-[1px]">
                            <input type="submit"   value="Get in touch" className="cursor-pointer outline-none border-none bg-transparent text-white"/>
                            <Image src="/ArrowRight.png" width={20} height={20}/>
                        </div>
                        </Link>
                        
                    </div>
                </div>

                <div className="flex justify-center flex-col mt-16">
                    <div>
                        <Image src="/codetyping.svg" width={400} height={400}/>
                    </div>
                    <div>
                        <Image src="/Graphic.svg" width={100} height={100}/>
                    </div>
                </div>
            </div>
        </div>
    )
}