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
    <div className="h-fit w-full bg-surface-background font-heebo flex flex-row justify-center gap-12">
      <div className="relative bg-surface-secondary w-[700px] h-fit rounded-[10px] flex flex-col items-center mt-8">
        <div className="w-[700px] h-[250px] rounded-tr-lg rounded-tl-lg flex items-center justify-center" style={{ backgroundImage: 'linear-gradient(to right, #9955E8, #7BFFAF)' }}>
          <div className="w-10 h-10 absolute top-4 left-4 cursor-pointer bg-surface-background rounded-lg flex justify-center shadow-shadow2 items-center">
            <Link href="/">
              <Image src="/ArrowLeft.svg" width={30} height={30} alt="Back" />
            </Link>
          </div>
          <Image src={project.cover_photo} width={400} height={400} className="mt-4 ml-7 rounded-lg" alt="Cover photo" />
        </div>
        <div className="flex flex-row mt-4">
          <p className="text-text-secondary text-[12px] mr-96">{project.date}</p>
          {project.frameworks.map((framework) => (
            <div key={framework.id} className="ml-[8px]">
              <Image src={framework.nom} width={20} height={20} alt={framework.nom} />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 mt-4 mb-4 mr-24 ml-24">
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
      <div className="mt-8 w-[300px] h-[130px] bg-surface-secondary rounded-xl">
        <div className="flex flex-col mt-5 ml-10 gap-4">
          <h2 className="text-[16px] text-white font-medium">Take a look at this project</h2>
          <Link href={project.github_link}>
            <div className="block bg-surface-primary w-5/6 text-white p-2 rounded-[9px] flex flex-row justify-between items-center transition-all duration-300 hover:bg-surface-primary hover:border-white hover:border-[1px]">
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
