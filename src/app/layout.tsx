import type { Metadata } from 'next'
import { Baloo_2, Raleway } from 'next/font/google'

import './globals.css'

export const metadata: Metadata = {
  title: 'f.dev',
  description: 'Personal website of Fábio Caldas',
}

const Ballo2Font = Baloo_2({
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
    <html lang="pt-br">
      <body className={`${Ballo2Font.className} ${RalewayFont.className}`}>
        {children}
      </body>
    </html>
  )
}
