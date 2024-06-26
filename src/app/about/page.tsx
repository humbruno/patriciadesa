import hobbies from '@/assets/hobbies.jpg'
import profilePhoto from '@/assets/profile-photo.png'
import { buttonVariants } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { LINKEDIN_URL, RESUME_URL, SKILLS, TOOLS } from '@/lib/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <main className="container flex h-full flex-col pb-12">
      <div className="flex flex-col xl:flex-row">
        <div className="flex-1 xl:pt-14">
          <h2 className="text-3xl font-semibold text-gray-700">
            Hi, I&apos;m Patrícia.
          </h2>
          <div className="mt-6 space-y-6 text-gray-700 lg:text-lg">
            <p>
              I’m a content writer, copywriter and copy editor enhancing
              personal experiences through well-chosen words - the latter being
              both my paycheck and my playground.
            </p>
            <p>
              As a kid, I inhaled books and short stories like oxygen, sometimes
              one a day. I wrote them too, into storylines for my games and
              campaigns.
            </p>
            <p>
              Today, backed by over seven years in content writing and copy, I
              craft content that helps people get a better grasp on otherwise
              difficult notions, or enjoy taking a break from their lives and
              read a good snippet.
            </p>
          </div>
          <div className="mt-12 space-y-6">
            <h3 className="text-2xl font-semibold text-gray-700">
              What motivates me
            </h3>
            <p className="text-gray-700 lg:text-lg">
              I simplify words by bringing them clarity and consistency -
              whether it’s crafting compelling narratives backed by research and
              insights, or refining language to ensure a seamless reader
              experience. By unravelling complexity, I help audiences connect
              with information effectively.
            </p>

            <a
              className={cn(
                buttonVariants({
                  size: 'lg',
                  variant: 'default',
                  className:
                    'rounded-2xl bg-accent font-extrabold hover:bg-accent/80'
                })
              )}
              href={LINKEDIN_URL}
              target="_blank"
            >
              Let&apos;s connect on LinkedIn
            </a>
          </div>
        </div>
        <Image
          src={profilePhoto}
          className="flex-1"
          alt="Portrait of Patrícia"
          width={600}
          height={600}
        />
      </div>
      <div aria-hidden="true" className="my-12 h-0.5 w-full bg-gray-700" />
      <h3 className="text-center text-2xl font-semibold text-gray-700">
        My skill stack
      </h3>
      <p className="mt-6 text-gray-700 lg:text-center lg:text-lg">
        My content creation toolkit draws on my extensive years of experience in
        communication, both in-house and freelance.
      </p>
      <ul className="grid grid-cols-1 gap-10 pb-20 pt-14 md:grid-cols-2 lg:grid-cols-3 lg:pb-10 lg:pt-20">
        {SKILLS.map((skill) => (
          <li key={skill.title} className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold text-gray-700">{skill.title}</h3>
            <p className="text-base text-gray-500">{skill.description}</p>
          </li>
        ))}
      </ul>
      <h3 className="text-center text-2xl font-semibold text-gray-700 lg:mt-32">
        My daily tools
      </h3>
      <ul className="flex flex-wrap items-center justify-evenly gap-8 pb-20 pt-14 lg:pb-10 lg:pt-14">
        <TooltipProvider delayDuration={0}>
          {TOOLS.map((tool) => (
            <li
              key={tool.title}
              className="flex flex-col items-center justify-center"
            >
              <Tooltip>
                <TooltipTrigger className="cursor-default">
                  <Image src={tool.icon} alt={tool.title} className="size-16" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{tool.title}</p>
                </TooltipContent>
              </Tooltip>
              <span className="mt-4 block lg:hidden">{tool.title}</span>
            </li>
          ))}
        </TooltipProvider>
      </ul>
      <h3 className="text-2xl font-semibold text-gray-700 lg:mt-36">
        Out of office, I&apos;m a...
      </h3>
      <Image src={hobbies} alt="Hobbies" className="mt-6 rounded-2xl" />
      <h3 className="mt-16 text-2xl font-semibold text-gray-700 lg:mt-36">
        Thanks for stopping by!
      </h3>
      <p className="mt-6">
        Feel free to download my{' '}
        <a
          target="_blank"
          href={RESUME_URL}
          className="font-bold text-accent hover:underline"
        >
          resume
        </a>{' '}
        or check out my{' '}
        <a
          target="_blank"
          href={LINKEDIN_URL}
          className="font-bold text-accent hover:underline"
        >
          LinkedIn
        </a>{' '}
        profile - don&apos;t hesitate to connect with me. If you have any
        questions, reach out to me via{' '}
        <Link href="/contact" className="font-bold text-accent hover:underline">
          email
        </Link>
        .
      </p>
    </main>
  )
}
