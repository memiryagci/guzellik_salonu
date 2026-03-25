import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Gül Aksu Güzellik Salonu | Profesyonel Güzellik Merkezi',
  description: 'Lazer epilasyon, medikal cilt bakımı, microblading ve daha fazlası. Profesyonel ekibimizle güzelliğinize değer katıyoruz.',
  keywords: 'güzellik merkezi, lazer epilasyon, cilt bakımı, microblading, kirpik lifting, istanbul güzellik salonu',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
