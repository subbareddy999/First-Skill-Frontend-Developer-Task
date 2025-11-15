import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Header'; // Import the Header
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'StreamFlix Dashboard',
  description: 'A Next.js 14 streaming dashboard clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        {/* Header is fixed and will appear on all pages */}
        <Header />
        {/* Page content will be rendered below the fixed header */}
        <main className="pt-16"> {/* Add padding-top to offset the fixed header */}
          {children}
        </main>
      </body>
    </html>
  )
}
