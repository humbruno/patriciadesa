const SKILLS = [
  {
    title: 'Software Design',
    description:
      "I'm passionate about building and designing software products across financial tech, productivity, CRM, and community. I specialize in designing SaaS products from ideation to launch."
  },
  {
    title: 'UI & Visual Design',
    description:
      "I'm a skilled visual designer with an eye for graphics, typography, layout, and color. I love building functional software & mobile products and infusing modern aesthetics."
  },
  {
    title: 'User Research',
    description:
      'I believe that user research is the most important step of the design process. I love speaking to users and understanding their process & problems first, before even considering design.'
  },
  {
    title: 'Project Management',
    description:
      "I'm a certified Professional Scrum Master (PSM 1) from Scrum.org, and believe in infusing agile processes and methodologies to my design process."
  },
  {
    title: 'Prototyping',
    description:
      "I'm skilled in prototyping products with users and stakeholders across the entire design lifecycle. I love using Adobe XD, Sketch, & Invision to wireframe and prototype designs."
  },
  {
    title: 'Cognitive Science',
    description:
      "I'm a huge proponent of consumer psychology and understanding how users think, behave, and interact with products. I believe in analyzing user behavior for an interaction science-backed approach."
  }
] as const

export default function About() {
  return (
    <main className="container flex h-full flex-col">
      <ul className="grid grid-cols-1 gap-10 py-20 md:grid-cols-2 lg:grid-cols-3 lg:py-36">
        {SKILLS.map((skill) => (
          <li key={skill.title} className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold text-gray-700">{skill.title}</h3>
            <p className="text-base italic text-gray-500">
              {skill.description}
            </p>
          </li>
        ))}
      </ul>
    </main>
  )
}
