import '@/app/globals.css'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Toaster } from '@/components/ui/sonner'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Mulish } from 'next/font/google'

const mulish = Mulish({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Patrícia de Sá',
  description: 'Specialized in content writing, editing, and copywriting',
  icons: '/favicon.png'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'flex min-h-screen flex-col antialiased',
          mulish.className
        )}
      >
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
