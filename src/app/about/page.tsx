const SKILLS = [
  {
    title: 'Content Research',
    description:
      'Continuously analyze trends and feedback to create engaging and relevant content that resonates with the target audience.'
  },
  {
    title: 'Content Strategy',
    description:
      'Plan, organize and create intuitive content that aligns with the user needs, and resonates with brand objectives.'
  },
  {
    title: 'Voice & Tone',
    description:
      'Craft unique brand voices that establish strong connections with diverse audiences, ensuring a consistent messaging.'
  },
  {
    title: 'Storytelling',
    description:
      'Create narratives that resonate with the user, using different techniques to simplify complex ideas and enhance memorability.'
  },
  {
    title: 'Copy Editing',
    description:
      'Refine and enhance content to ensure clarity, coherence, and adherence to brand standards, elevating readability.'
  },
  {
    title: 'CMS & SEO',
    description:
      'Optimize content management systems for efficient workflow and seamless content delivery.'
  }
] as const

export default function About() {
  return (
    <main className="container flex h-full flex-col">
      <h2 className="text-center text-3xl font-semibold text-gray-700">
        Hi, I&apos;m Patrícia.
      </h2>
      <div className="mt-6 space-y-6 text-gray-700 lg:text-lg">
        <p>
          I’m a content writer, copywriter and copy editor enhancing personal
          experiences through well-chosen words - the latter being both my
          paycheck and my playground.
        </p>
        <p>
          As a kid, I inhaled books and short stories like oxygen, sometimes one
          a day. I wrote them too, into storylines for my games and campaigns.
        </p>
        <p>
          Today, backed by over seven years in content writing and copy, I craft
          content that helps people get a better grasp on otherwise difficult
          notions, or enjoy taking a break from their lives and read a good
          snippet.
        </p>
      </div>
      <div className="mt-12 space-y-6">
        <h3 className="text-center text-2xl font-semibold text-gray-700">
          What motivates me
        </h3>
        <p className="text-gray-700 lg:text-lg">
          I simplify words by bringing them clarity and consistency - whether
          it’s crafting compelling narratives backed by research and insights,
          or refining language to ensure a seamless reader experience. By
          unravelling complexity, I help audiences connect with information
          effectively.
        </p>
      </div>
      <div aria-hidden="true" className="my-12 h-0.5 w-full bg-gray-700" />
      <h3 className="text-center text-2xl font-semibold text-gray-700">
        My skill stack
      </h3>
      <p className="mt-6 text-gray-700 lg:text-center lg:text-lg">
        My content creation toolkit draws on my extensive years of experience in
        communication, both in-house and freelance.
      </p>
      <ul className="grid grid-cols-1 gap-10 pb-20 pt-14 md:grid-cols-2 lg:grid-cols-3 lg:pb-36 lg:pt-20">
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
