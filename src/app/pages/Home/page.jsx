"use client"

import Image from "next/image"
import Link from "next/link";

export default function Home(){

    return(
       
        <div className="bg-surface-background w-full h-fit">
            <div className="">
                <div className="lg:hidden flex flex-row justify-center items-center mt-10">
                    <Image src="/codetyping.svg" width={300} height={400}/>
                </div>
                <div className="sm:flex sm:flex-col lg:flex-row justify-between mx-10 lg:mx-24">
                    <div className="flex flex-col mt-10 lg:mt-32">
                        <div className="mb-8">
                            <Image src="/sara.svg" width={150} height={150}/>
                        </div>
                        <div className="mb-8">
                            <h1 className="text-[26px] text-white font-medium mb-3">
                            Full-Stack Developer with a Flair for Innovation
                            </h1>
                            <p className="text-[14px] text-white font-normal">
                            a 4th-year student at ESI Sidi Bel Abbès, specializing in building <br/> innovative websites using technologies such as React, Next.js, and Node.js
                            </p>
                        </div>

                            <div className="flex flex-row gap-10 ">
                                <div className=" relative lg:left-4 bg-surface-secondary text-center text-white p-4 rounded-[9px] flex flex-row justify-center space-x-1 items-center lg:space-x-2  duration-300 border-[1px] border-surface-secondary hover:bg-surface-primary hover:border-white hover:border-[1px]">
                                    <Image src="/ReadCvLogo.svg" width={20} height={20}/>
                                    <input type="submit" onClick={() => window.open('/CV_Touahri_sara.pdf')} value="My resume" className="cursor-pointer bg-transparent text-white"/>
                                </div>
                                <Link href="/pages/Contact">
                                    <div className="relative lg:left-4 bg-button-primary-default text-white p-4 rounded-[9px] flex flex-row justify-center items-center space-x-1 lg:space-x-2 duration-300 border-[1px] border-button-primary-default hover:bg-button-primary-hover hover:border-white hover:border-[1px]">
                                        <input type="submit" value="Get in touch" className="cursor-pointer outline-none border-none bg-transparent text-white"/>
                                        <Image src="/ArrowRight.svg" width={20} height={20}/>
                                    </div>
                                </Link>
                            </div>
                    </div>
                    
                    {/* Large screen */}
                    <div className="hidden lg:flex justify-center flex-col mt-10">
                        <div>
                            <Image src="/codetyping.svg" width={400} height={400}/>
                        </div>
                        <div>
                            <Image src="/Graphic.svg" width={100} height={100}/>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Show only the bottom half of the graphic */}
            <div className="lg:hidden flex justify-center relative">
                <div className="w-[120px] h-[60px] ">
                    <Image src="/Graphic.svg" width={120} height={120} className="object-cover object-bottom"/>
                </div>
            </div>
        
        </div>
    )
}
