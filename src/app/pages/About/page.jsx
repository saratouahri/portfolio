"use client"

import Image from "next/image"
export default function About(){
    return(
        <div className="h-fit lg:h-screen w-full lg:bg-surface-background bg-surface-secondary flex justify-center items-center">

            <div className="w-11/12 h-fit bg-surface-secondary rounded-[9px] flex flex-col lg:flex-row  gap-20 mt-16 lg:mt-0">
                <div className="flex  items-center lg:ml-8">
                    <Image src="/bro.svg" width={400} height={400} />
                </div>

                <div className="lg:mt-16  flex flex-col gap-6 lg:gap-8 space-x-4 lg:space-x-10 lg:w-6/12">
                    <div className="flex flex-row  space-x-9 ml-6 lg:space-x-10 lg:ml-9" >
                    <Image src="/React.svg" width={20} height={20} />
                    <Image src="/JavaScript.svg" width={20} height={20} />
                    <Image src="/Next.svg" width={20} height={20} />
                    <Image src="/Node.js.svg" width={20} height={20} />
                    <Image src="/Tailwind.svg" width={20} height={20} />
                    <Image src="/Vector.svg" width={20} height={20} />
                    </div>

                    <div className="flex flex-col gap-4 ">
                        <Image src="/Aboutme.svg" width={80} height={80}/>
                        <h1 className="text-[20px] text-white font-medium">
                         I am a passionate software developer eagerly seeking new challenges
                        </h1>
                        <p className="text-[14px] text-white font-normal" >
                        Besides coding, I am a coffee enthusiast and a self-taught artist who enjoys watching anime in my free time. I am actively looking for opportunities to apply my skills and enthusiasm to contribute to a tech company. I am excited about the prospect of relocating to explore fresh opportunities and further grow in my career.</p>
                        
                    </div>

                    <div className=" mb-14 w-40 block bg-button-primary-default  text-white p-3 rounded-[9px] flex flex-row space-x-2 transition-all duration-300 border-[1px] border-button-primary-default hover:bg-button-primary-hover hover:border-white hover:border-[1px]">
                            <Image src="/ReadCvLogo.svg" width={20} height={20}/>
<<<<<<< HEAD
                            <input type="submit" onClick={() => window.open('/CV_Sara_Touahri.pdf')} value="My resume"  className="cursor-pointer outline-none border-none bg-transparent text-white"/>
=======
                            <input type="submit" onClick={() => window.open('/cv_touahri_sara_anglais.pdf')} value="My resume"  className="cursor-pointer outline-none border-none bg-transparent text-white"/>
>>>>>>> 4cf52a2ffa2d3f35e0388709a10b48dc5c14b140
                        </div>
                </div>
            </div>
            
        </div>
    )
}