"use client"

import Image from "next/image"
import projects from "../../../../public/project"
import { useRouter } from 'next/navigation';
import Link from "next/link";

export default function Projects(){
   const router = useRouter();
   const handleRedirect=(id)=>{
        router.push(`/pages/ProjectDetails?id=${id}`)
   }
    return(

        <div className="h-screen w-full bg-surface-background  font-heebo">
            <Image src="/Graphic2.svg" width={80} height={80} className="mt-10 ml-20 absolute z-10"/>
            <div className="flex flex-col  items-center gap-8 ">
                <Image src="/Projects.svg" width={100} height={100} className="mt-4"/>
            <h1 className="text-[20px] text-white font-medium">Take a look at my highlighted projects</h1>

            <div className="flex flex-row gap-8 ">
            {projects.map((project) => (

                <div key={project.id} className="relative bg-surface-secondary w-80 h-72 rounded-[10px] flex flex-col items-center hover:shadow-shadow-card hover:border-[#7BFFAF] hover:border-2 group">
                    <div className="w-72 h-36 rounded-tr-lg rounded-tl-lg mt-4" style={{ backgroundImage: 'linear-gradient(to right, #9955E8, #7BFFAF)' }}>
                        <Image src={project.cover_photo} width={230} height={400} className="mt-4 ml-7 rounded-lg" />
                    </div>
                    <div className="flex flex-row mt-4 ml-4 w-72">
                    <p className="text-text-secondary text-[12px] mr-40">{project.date}</p>
                    {project.frameworks.slice(0, 2).map((framework)=>(
                    <div  key={framework.id} className="ml-[2px]" >
                      
                        <Image src={framework.nom} width={20} height={20} />
                      
                    </div>
                    ))}
                    </div>   
                    <div className="flex flex-col justify-start gap-2 mt-4 w-72 ">
                        <div className="ml-2">
                        <h1 className="text-[20px] text-white font-medium ">{project.name}</h1>
                        </div>
                        <div className="ml-2">
                        <p className="text-text-secondary text-[12px] ">{project.type}</p>
                        </div>
                    </div>
                    <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className="w-10 h-10 cursor-pointer bg-surface-primary rounded-lg flex justify-center items-center ">
                           <Link href={project.github_link}>
                            <Image src="/logo-github 1.svg" width={30} height={30} />
                            </Link>
                        </div>
                        <div onClick={() => handleRedirect(project.id)} className="w-10 h-10 cursor-pointer bg-surface-primary rounded-lg flex justify-center items-center">
                            <Image src="/ArrowUpRight.svg" width={30} height={30} />
                        </div>
                    </div>
                </div>
            ))}  
            </div>

           
        </div>
        <Image src="/Graphic3.svg" width={50} height={50} className="ml-[1150px]  absolute z-10"/>
        </div>
    )
}