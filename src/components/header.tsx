import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger
} from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { NavLink } from './nav-link'

const NAVIGATION = ['about', 'contact', 'resume'] as const

export function Header() {
  return (
    <header className="container flex items-center justify-between py-8 lg:py-20">
      <Link href="/">
        <h1 className="text-sm font-bold text-gray-700">Patrícia de Sá</h1>
      </Link>
      <Navigation />
      <MobileNavigation />
    </header>
  )
}

function Navigation() {
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-10">
        {NAVIGATION.map((item) => (
          <NavLink key={item} href={`/${item}`}>
            {item === 'resume' ? 'Resumé' : item}
          </NavLink>
        ))}
      </ul>
    </nav>
  )
}

function MobileNavigation() {
  return (
    <nav className="block md:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent className="h-full">
          <ul className="m-auto flex h-full flex-col items-center justify-center gap-10">
            <NavLink href="/">
              <SheetClose className="capitalize">Home</SheetClose>
            </NavLink>
            {NAVIGATION.map((item) => (
              <NavLink key={item} href={`/${item}`}>
                <SheetClose className="capitalize">
                  {item === 'resume' ? 'Resumé' : item}
                </SheetClose>
              </NavLink>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </nav>
  )
}
