import { LINKEDIN_URL, RESUME_URL } from '@/lib/constants'
import { Hero } from '@/screens/home/hero'
import { Projects } from '@/screens/home/projects'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <section className="container mb-10 mt-4 p-6 lg:mt-16">
        <h3 className="text-2xl font-semibold text-gray-700">
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
          <Link
            href="/contact"
            className="font-bold text-accent hover:underline"
          >
            email
          </Link>
          .
        </p>
      </section>
    </main>
  )
}
