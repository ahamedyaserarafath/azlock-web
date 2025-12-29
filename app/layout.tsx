import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AzLock - Educational Q&A App Lock | Learn While You Lock',
  description: 'The only app lock that makes you smarter! Answer grade-based questions (Pre-KG to 10+) to unlock apps. 100+ questions across Math, Science, English & GK. 100% offline.',
  keywords: 'educational app lock, Q&A app security, learning app lock, math app lock, educational security, grade-based app lock, app lock for kids, parental control with learning',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
