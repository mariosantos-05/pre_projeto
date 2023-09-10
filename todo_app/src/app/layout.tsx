import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

const inter = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TODO app',
  description: 'Created by Mario Santos',
}

export default function RootLayout({ children }: {children: React.ReactNode}) {
  return (
    <html lang="Pt-br">
      <body className={`${inter.className} bg-slate-100`}>{children}</body>
    </html>
  )
}
