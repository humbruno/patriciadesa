import { PROJECTS } from '@/lib/constants'
import type { Project } from '@/lib/types'
import Image from 'next/image'

export function Projects() {
  return (
    <section className="flex flex-wrap justify-center gap-4 p-6">
      {PROJECTS.map((v) => (
        <ProjectCard project={v} key={v.title} />
      ))}
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group/card relative flex flex-col items-center justify-center space-y-4 overflow-hidden transition-all lg:block lg:rounded-2xl">
      <Image
        src={project.image}
        alt={project.title}
        className="rounded-2xl transition-all lg:group-hover/card:scale-105"
        width={800}
        height={600}
      />
      <div className="block self-start transition-all lg:absolute lg:right-4 lg:top-4 lg:group-hover/card:scale-[103%]">
        <h3 className="text-xl font-bold text-gray-800 lg:text-3xl ">
          {project.title}
        </h3>
        <h4 className="text-base font-bold text-gray-800 lg:text-xl ">
          {project.subtitle}
        </h4>
        <p className="text-sm text-gray-800 lg:max-w-[35ch] lg:text-base">
          {project.description}
        </p>
      </div>
    </div>
  )
}
