import type { StaticImageData } from 'next/image'

export type Project = {
  title: string
  subtitle: string
  description: string
  image: StaticImageData
}

export type Navigation = {
  label: string
  href: string
}
