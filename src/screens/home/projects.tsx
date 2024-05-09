import placeholder from '@/assets/placeholder.jpg'
import Image from 'next/image'

export function Projects() {
  const numberOfCards = Array.from({ length: 4 }, (_, i) => i + 1)
  return (
    <section className="container flex flex-wrap justify-center gap-8 py-10 lg:py-20">
      {numberOfCards.map((v) => (
        <ProjectCard key={v} />
      ))}
    </section>
  )
}

function ProjectCard() {
  return (
    <div className="group/card relative flex cursor-pointer flex-col items-center justify-center space-y-6 overflow-hidden rounded-2xl transition-all before:z-10 before:rounded-2xl hover:before:left-0 hover:before:top-0 hover:before:h-full hover:before:w-full hover:before:bg-black hover:before:opacity-50 lg:block lg:hover:before:absolute">
      <Image
        src={placeholder}
        alt="placeholder"
        className="rounded-2xl transition-all lg:group-hover/card:scale-105 lg:group-hover/card:blur-md"
        width={560}
        height={560}
      />
      <div className="inset-0 z-10 mt-auto block flex-col items-center justify-center gap-8 space-y-3 text-center lg:absolute lg:hidden lg:h-full lg:w-full lg:gap-5 lg:space-y-0 lg:px-10 lg:group-hover/card:flex">
        <h3 className="text-xl font-bold text-gray-800 lg:text-3xl">Title</h3>
        <p className="text-center text-sm text-gray-800 lg:text-base">
          At Vendr, I worked with PMs, SWEs, and Product Designers to ship V1
          and V2 of one of Vendr&apos;s flagship products- Dealroom.
        </p>
      </div>
    </div>
  )
}
