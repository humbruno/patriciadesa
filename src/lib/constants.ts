import betterSleep from '@/assets/BetterSleep.jpg'
import lunis from '@/assets/Lunis.jpg'
import skyhour from '@/assets/Skyhour.jpg'
import sleepHero from '@/assets/SleepHero.jpg'
import type { Navigation, Project, Skill } from '@/lib/types'

export const PROJECTS: Project[] = [
  {
    title: 'BetterSleep',
    subtitle: 'Copy Editing',
    description: 'compliance & guidelines | quality assurance | consistency',
    image: betterSleep
  },
  {
    title: 'Lunis',
    subtitle: 'Content Writing',
    description: 'content creation | webflow landing page | copywriting',
    image: lunis
  },
  {
    title: 'Sleep Hero',
    subtitle: 'Content Writing & Copy Editor',
    description: 'content creation | content strategy | quality review',
    image: sleepHero
  },
  {
    title: 'Skyhour',
    subtitle: 'Content writer, Copywriting & Copy Editor',
    description: 'content creation | influencer liaison | copywriting',
    image: skyhour
  }
] as const

export const NAVIGATION: Navigation[] = [
  {
    label: 'Work',
    href: '/'
  },
  {
    label: 'About',
    href: '/about'
  },
  {
    label: 'Resumé',
    href: 'https://drive.google.com/file/d/1gwY_pyRoBVq0O469sLRnb0gWGZRyupBc/view',
    external: true
  },
  {
    label: 'Contact',
    href: '/contact'
  }
] as const

export const SKILLS: Skill[] = [
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
