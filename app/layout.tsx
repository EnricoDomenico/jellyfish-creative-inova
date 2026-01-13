import type { Metadata } from 'next'
import { Inter, Lexend } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const lexend = Lexend({ 
  subsets: ['latin'],
  variable: '--font-lexend',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Jellyfish Creative - Marketing Estratégico',
  description: 'Marketing estratégico para gerar leads e vendas todos os meses',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} ${lexend.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
