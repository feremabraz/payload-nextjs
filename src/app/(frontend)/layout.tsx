import type React from 'react'
import type { Metadata } from 'next'
import { Titillium_Web } from 'next/font/google'
import '../global.css'

import Header from './components/header'
import Footer from './components/footer'

const titilliumWeb = Titillium_Web({
  subsets: ['latin'],
  weight: ['200', '300', '400', '600', '700', '900'],
  variable: '--font-titillium-web',
})

export const metadata: Metadata = {
  title: 'CVZ Construções',
  description:
    'Portuguese construction company specializing in residential, cultural, corporate and public projects',
  generator: 'v0.dev',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body className={`${titilliumWeb.className} font-titillium`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
