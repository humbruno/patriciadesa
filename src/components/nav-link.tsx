'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function NavLink({
  href,
  children
}: {
  href: string
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <li
      className={cn(
        'cursor-pointer rounded-lg bg-transparent px-3 py-2 text-sm font-semibold capitalize text-gray-500 transition-all hover:scale-[105%] hover:bg-black/10',
        pathname === href ? 'bg-black/10' : ''
      )}
    >
      <Link href={href}>{children}</Link>
    </li>
  )
}
