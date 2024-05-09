import Link from 'next/link'

const NAVIGATION = ['about', 'contact', 'resumé'] as const

export function Header() {
  return (
    <header className="container flex justify-between py-20">
      <Link href="/">
        <h1 className="text-sm font-bold text-gray-700">Patricia de Sá</h1>
      </Link>
      <Navigation />
    </header>
  )
}

function Navigation() {
  return (
    <nav>
      <ul className="flex gap-10">
        {NAVIGATION.map((item) => (
          <li
            key={item}
            className="px-4 text-sm capitalize text-gray-500 transition-all hover:font-bold"
          >
            <Link href={`/${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
