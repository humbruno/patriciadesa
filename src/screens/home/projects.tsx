import { PROJECTS } from '@/lib/constants'
import type { Project } from '@/lib/types'
import Image from 'next/image'

export function Projects() {
  return (
    <section className="container grid gap-4 p-6 lg:grid-cols-2">
      {PROJECTS.map((v) => (
        <ProjectCard project={v} key={v.title} />
      ))}
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      target="_blank"
      href={project.href}
      className="group/card relative flex cursor-pointer flex-col justify-center space-y-4 overflow-hidden transition-all lg:block xl:items-center xl:rounded-2xl"
    >
      <Image
        src={project.image}
        alt={project.title}
        className="rounded-2xl transition-all lg:group-hover/card:scale-105"
        width={800}
        height={600}
      />
      <div className="block self-start transition-all lg:right-4 lg:top-4 lg:group-hover/card:scale-[103%] xl:absolute">
        <h3 className="text-xl font-bold text-gray-800 lg:text-3xl ">
          {project.title}
        </h3>
        <h4 className="text-base font-bold text-gray-800 lg:text-xl xl:max-w-[25ch] ">
          {project.subtitle}
        </h4>
        <p className="text-sm text-gray-800 lg:text-base xl:max-w-[30ch]">
          {project.description}
        </p>
      </div>
    </a>
  )
}
