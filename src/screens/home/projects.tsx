import placeholder from '@/assets/placeholder.jpg'
import Image from 'next/image'

export function Projects() {
  const numberOfCards = Array.from({ length: 4 }, (_, i) => i + 1)
  return (
    <section className="container flex flex-wrap justify-center gap-8 py-20">
      {numberOfCards.map((v) => (
        <ProjectCard key={v} />
      ))}
    </section>
  )
}

function ProjectCard() {
  return (
    <div className="group/card relative cursor-pointer overflow-hidden rounded-2xl transition-all before:z-10 before:rounded-2xl hover:before:absolute hover:before:left-0 hover:before:top-0 hover:before:h-full hover:before:w-full hover:before:bg-black hover:before:opacity-50">
      <Image
        src={placeholder}
        alt="placeholder"
        className="rounded-2xl transition-all group-hover/card:scale-105 group-hover/card:blur-md"
        width={560}
        height={560}
      />
      <div className="absolute inset-0 z-10 mt-auto hidden h-full w-full flex-col items-center justify-center gap-5 px-10 group-hover/card:flex">
        <h3 className="text-3xl font-bold text-gray-800">Title</h3>
        <p className="text-center text-gray-800">
          At Vendr, I worked with PMs, SWEs, and Product Designers to ship V1
          and V2 of one of Vendr&apos;s flagship products- Dealroom.
        </p>
      </div>
    </div>
  )
}
