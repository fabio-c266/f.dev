import type { Metadata } from 'next'
import { Baloo_Bhai_2, Raleway } from 'next/font/google'

import './globals.css'

export const metadata: Metadata = {
  title: 'f.dev',
  description: 'Personal website of Fábio Caldas',
}

const BalooBhai2 = Baloo_Bhai_2({
  subsets: ['latin'],
})

const RalewayFont = Raleway({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body
        className={`${BalooBhai2.className} ${RalewayFont.className} font-raleway bg-white-400 text-black-100`}
      >
        {children}
      </body>
    </html>
  )
}
