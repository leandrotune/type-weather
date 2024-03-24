import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TypeWeather',
  description: 'weather forecast project',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className="antialiased bg-gray-900 text-gray-100 mx-auto h-screen w-screen"
    >
      <body className={nunito.className}>{children}</body>
    </html>
  )
}
