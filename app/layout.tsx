import type { Metadata, Viewport } from "next"
import { Outfit, Instrument_Serif } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Clube de Fórmulas — Prof. Samir Tannuri | Pesquisador · Consultor Industrial · Speaker",
  description:
    "Prof. Samir Tannuri — Pesquisador CNPq, Consultor Industrial e Speaker. P&D cosmético para indústrias, marcas e farmácias magistrais. Missões Paris, Amsterdam e Japão.",
  keywords:
    "P&D cosmético, consultoria farmacotécnica, peelings químicos, peptídeos biomiméticos, dermatologia regenerativa, farmácia magistral, indústria cosmética",
  openGraph: {
    title: "Clube de Fórmulas — Prof. Samir Tannuri",
    description: "Ciência que vira fórmula. Fórmula que vira resultado.",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${outfit.variable} ${instrumentSerif.variable}`}>
      <body className="font-sans antialiased bg-white text-body overflow-x-hidden">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
