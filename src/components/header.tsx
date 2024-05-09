import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import Link from 'next/link'

const NAVIGATION = ['about', 'contact', 'resumé'] as const

export function Header() {
  return (
    <header className="container flex items-center justify-between py-8 lg:py-20">
      <Link href="/">
        <h1 className="text-sm font-bold text-gray-700">Patricia de Sá</h1>
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
          <li
            key={item}
            className="cursor-pointer rounded-lg bg-transparent px-3 py-2 text-sm font-semibold capitalize text-gray-500 transition-all hover:scale-[105%] hover:bg-black/10"
          >
            <Link href={`/${item}`}>{item}</Link>
          </li>
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
            {NAVIGATION.map((item) => (
              <li
                key={item}
                className="cursor-pointer rounded-lg bg-transparent px-3 py-2 text-base font-semibold capitalize text-gray-500 transition-all hover:scale-[105%] hover:bg-black/10"
              >
                <Link href={`/${item}`}>{item}</Link>
              </li>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </nav>
  )
}
