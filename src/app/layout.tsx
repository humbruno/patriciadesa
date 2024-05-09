import '@/app/globals.css'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Patricia de Sá',
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
          inter.className
        )}
      >
        {children}
      </body>
    </html>
  )
}
