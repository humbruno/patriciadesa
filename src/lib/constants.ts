import betterSleep from '@/assets/BetterSleep.jpg'
import lunis from '@/assets/Lunis.jpg'
import skyhour from '@/assets/Skyhour.jpg'
import sleepHero from '@/assets/SleepHero.jpg'
import type { Navigation, Project } from '@/lib/types'

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
    label: 'Contact',
    href: '/contact'
  }
] as const
