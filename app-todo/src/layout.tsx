import '../globals.css'
import type { Metadata } from 'next'


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

