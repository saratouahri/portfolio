"use client";

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import projects from '../../../../public/project';
import Link from 'next/link';
import Image from 'next/image';

function ProjectDetailsContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const project = projects.find((project) => project.id === parseInt(id));

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div className="h-fit w-full bg-surface-background  flex flex-col lg:flex-row justify-center gap-12">
      <div className="relative bg-surface-secondary w-full lg:w-[700px] h-fit lg:rounded-[10px] flex flex-col items-center lg:mt-8">
        <div className=" w-11/12 lg:w-[700px] h-[250px] lg:mt-0 mt-10 rounded-tr-lg rounded-tl-lg flex items-center justify-center" style={{ backgroundImage: 'linear-gradient(to right, #9955E8, #7BFFAF)' }}>
          <div className="w-10 h-10 absolute  top-12 left-5 lg:top-4 lg:left-4 cursor-pointer bg-surface-background rounded-lg flex justify-center shadow-shadow2 items-center">
            <Link href="/">
              <Image src="/ArrowLeft.svg" width={30} height={30} alt="Back" />
            </Link>
          </div>
                <Image 
                    src={project.cover_photo} 
                    width={400} 
                    height={400} 
                    className="hidden lg:block lg:mt-4 lg:ml-7 lg:rounded-lg" 
                    alt="Cover photo" 
                  />

                  <Image 
                    src={project.cover_photo} 
                    width={320} 
                    height={320} 
                    className="block mt-2 ml-1 rounded-lg lg:hidden" 
                    alt="Cover photo" 
                    />
        </div>
        <div className="flex flex-row justify-between  mt-4 w-11/12  ">
          <p className="text-text-secondary text-[12px]  lg:mr-96">{project.date}</p>
          <div className='flex flex-row gap-2'>
          {project.frameworks.map((framework) => (
            <div key={framework.id} className="">
              <Image src={framework.nom} width={20} height={20} alt={framework.nom} />
            </div>
          ))}</div>
        </div>
        <div className="flex flex-col gap-4 mt-4 mb-4 mx-5 lg:mr-24 lg:ml-24">
          <h1 className="text-[24px] text-white font-medium">Feedback widget</h1>
          <p className="text-text-secondary text-[14x]">
            <span className="text-[16px] font-semibold">My role: </span> {project.role}
          </p>
          <p className="text-text-secondary text-[14px]">
            <span className="text-[16px] font-semibold">Team: </span> {project.team}
          </p>
          <p className="text-text-secondary text-[14px] mb-4 leading-8">{project.content}</p>
        </div>
      </div>
      <div className=" mt-1 mb-2 lg:mb-0 lg:mt-8 w-full lg:w-[300px] h-[130px] bg-surface-secondary lg:rounded-xl">
        <div className="flex flex-col mt-5 ml-10 gap-4">
          <h2 className="text-[16px] text-white font-medium">Take a look at this project</h2>
          <Link href={project.github_link}>
            <div className="block bg-surface-primary w-5/6 text-white p-2 rounded-[9px] flex flex-row justify-between items-center transition-all duration-300 border-[1px] border-surface-primary hover:bg-surface-primary hover:border-white hover:border-[1px]">
              <Image src="/logo-github 1.svg" width={20} height={20} alt="GitHub" />
              <input type="submit" value="code" className="cursor-pointer outline-none border-none bg-transparent text-white" />
              <Image src="/ArrowUpRight.svg" width={20} height={20} alt="Arrow" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ProjectDetails() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProjectDetailsContent />
    </Suspense>
  );
}
