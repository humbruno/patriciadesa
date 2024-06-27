'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function NavLink({
  href,
  isExternal = false,
  children
}: {
  href: string
  isExternal?: boolean
  children: React.ReactNode
}) {
  const pathname = usePathname()

  if (isExternal) {
    return (
      <li className="flex">
        <a
          target="_blank"
          className={cn(
            'cursor-pointer rounded-lg bg-transparent px-3 py-2 text-sm font-semibold capitalize text-gray-500 transition-all hover:scale-[105%]',
            pathname === href ? 'font-extrabold' : ''
          )}
          href={href}
        >
          {children}
        </a>
      </li>
    )
  }

  return (
    <li className="flex">
      <Link
        className={cn(
          'cursor-pointer rounded-lg bg-transparent px-3 py-2 text-sm font-semibold capitalize text-gray-500 transition-all hover:scale-[105%]',
          pathname === href ? 'font-extrabold' : ''
        )}
        href={href}
      >
        {children}
      </Link>
    </li>
  )
}
