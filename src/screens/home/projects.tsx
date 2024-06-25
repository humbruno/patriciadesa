import { PROJECTS } from '@/lib/constants'
import type { Project } from '@/lib/types'
import Image from 'next/image'

export function Projects() {
  return (
    <section className="container flex flex-wrap justify-center gap-8 py-10 lg:py-20">
      {PROJECTS.map((v) => (
        <ProjectCard project={v} key={v.title} />
      ))}
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group/card relative flex flex-col items-center justify-center space-y-6 overflow-hidden rounded-2xl transition-all before:z-10 before:rounded-2xl hover:before:left-0 hover:before:top-0 hover:before:h-full hover:before:w-full hover:before:bg-black hover:before:opacity-50 lg:block lg:hover:before:absolute">
      <Image
        src={project.image}
        alt={project.title}
        className="rounded-2xl transition-all lg:group-hover/card:scale-105 lg:group-hover/card:blur-md"
        width={560}
        height={560}
      />
      <div className="inset-0 z-10 mt-auto block flex-col items-center justify-center gap-8 space-y-2 text-center lg:absolute lg:hidden lg:h-full lg:w-full lg:gap-5 lg:space-y-0 lg:px-10 lg:group-hover/card:flex">
        <h3 className="text-xl font-bold text-gray-800 lg:text-3xl lg:text-white">
          {project.title}
        </h3>
        <h4 className="text-base font-bold text-gray-800 lg:text-xl lg:text-white">
          {project.subtitle}
        </h4>
        <p className="text-center text-sm text-gray-800 lg:text-base lg:text-white">
          {project.description}
        </p>
      </div>
    </div>
  )
}
