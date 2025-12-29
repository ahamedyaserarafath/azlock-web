import type { Metadata } from 'next'
import './globals.css'

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}
