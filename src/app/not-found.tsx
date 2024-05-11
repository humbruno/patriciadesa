import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="container flex flex-col items-center gap-8 py-20">
      <h2 className="text-4xl font-bold text-gray-700">404</h2>
      <p>Oops! Where have we landed here?!</p>
      <Image width={400} height={300} src="/404.gif" alt="" />
      <Link href="/">
        <Button>Back Home</Button>
      </Link>
    </main>
  )
}
