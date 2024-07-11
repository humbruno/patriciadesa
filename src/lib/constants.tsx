import betterSleep from '@/assets/BetterSleep.jpg'
import lunis from '@/assets/Lunis.jpg'
import skyhour from '@/assets/Skyhour.jpg'
import sleepHero from '@/assets/SleepHero.jpg'
import figma from '@/assets/figma.png'
import illustrator from '@/assets/illustrator.png'
import indesign from '@/assets/indesign.png'
import notion from '@/assets/notion.png'
import photoshop from '@/assets/photoshop.png'
import pinterest from '@/assets/pinterest.png'
import webflow from '@/assets/webflow.png'
import { LinkedinIcon } from '@/components/linkedin-icon'
import type { Navigation, Project, Skill, Tool } from '@/lib/types'

export const RESUME_URL =
  'https://drive.google.com/file/d/1CSMLzGdFvAOBmKj4MrTJ0aDDASZ5hAeL/view'

export const PROJECTS: Project[] = [
  {
    title: 'BetterSleep',
    subtitle: 'Copy Editing',
    description: 'compliance & guidelines | quality assurance | consistency',
    image: betterSleep,
    href: 'https://www.bettersleep.com/'
  },
  {
    title: 'Lunis',
    subtitle: 'Content Writing',
    description: 'content creation | webflow landing page | copywriting',
    image: lunis,
    href: 'https://www.lunis.ai/en'
  },
  {
    title: 'Sleep Hero',
    subtitle: 'Content Writing & Copy Editor',
    description: 'content creation | content strategy | quality review',
    image: sleepHero,
    href: 'https://www.sleep-hero.co.uk/'
  },
  {
    title: 'Skyhour',
    subtitle: 'Content writer, Copywriting & Copy Editor',
    description: 'content creation | influencer liaison | copywriting',
    image: skyhour,
    href: 'https://www.instagram.com/skyhour/?hl=en'
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
    href: RESUME_URL,
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

export const LINKEDIN_URL =
  'https://www.linkedin.com/in/patr%C3%ADciades%C3%A1/'

export const FOOTER_ITEMS = [
  {
    title: 'LinkedIn',
    icon: <LinkedinIcon />,
    url: LINKEDIN_URL
  }
] as const

export const TOOLS: Tool[] = [
  {
    title: 'Figma',
    icon: figma
  },
  {
    title: 'Illustrator',
    icon: illustrator
  },
  {
    title: 'InDesign',
    icon: indesign
  },
  {
    title: 'Photoshop',
    icon: photoshop
  },
  {
    title: 'Pinterest',
    icon: pinterest
  },
  {
    title: 'Webflow',
    icon: webflow
  },
  {
    title: 'Notion',
    icon: notion
  }
] as const
