import './globals.css'
import type { Metadata } from 'next'
import { Noto_Serif_Display } from 'next/font/google'

const inter = Noto_Serif_Display({ subsets: ['latin'], })

export const metadata: Metadata = {
  title: 'TODO app',
  description: 'Created by Mario Santos',
}

export default function RootLayout({ children }: {children: React.ReactNode}) {
  return (
    <html lang="Pt-br">
      <body className={`${inter.className} bg-[#FFFBDB]`}>{children}</body>
    </html>
  )
}
