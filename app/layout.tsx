import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Beauté des Mains — Nail Studio | Buenos Aires',
  description:
    'Beauté des Mains — Studio de uñas artístico en Buenos Aires. Esmaltado semipermanente, polygel, soft gel y diseños personalizados.',
  keywords: 'nail studio, uñas, esmaltado semipermanente, polygel, soft gel, Buenos Aires, nail art',
  openGraph: {
    title: 'Beauté des Mains — Nail Studio',
    description: 'Arte en cada detalle. Diseños únicos que expresan tu personalidad.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="font-jost bg-site-black text-site-white font-light overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
