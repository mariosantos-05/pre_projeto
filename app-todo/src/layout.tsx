import '../globals.css'
import type { Metadata } from 'next'
import type { Metadata } from 'next'
import { Playfair_Display } from 'next/font/google'

const inter = Playfair_Display({ subsets: ['latin'], })


export const metadata: Metadata = {
  title: 'PraFazê!',
  description: 'Created by Mario Santos',
}

export default function RootLayout({ children }: {children: React.ReactNode}) {
  return (
    <html lang="Pt-br">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  )
}

