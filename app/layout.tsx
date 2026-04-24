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
  title: "ST Farma — Consultoria em Tecnologia Farmacêutica | Samir Tannuri",
  description:
    "Consultoria em tecnologia farmacêutica para indústrias, magistrais e marcas que não podem errar a formulação. Seis anos coordenando P&D no maior grupo magistral do Brasil. Missões internacionais em Paris, Amsterdam e Japão.",
  keywords:
    "consultoria em tecnologia farmacêutica, P&D cosmético, transferência de tecnologia, reformulação de portfólio, estudo de estabilidade, sourcing internacional de ativos, indústria cosmética, farmácia magistral",
  openGraph: {
    title: "ST Farma — Consultoria em Tecnologia Farmacêutica",
    description:
      "Boutique de consultoria em tecnologia farmacêutica. Prática industrial real, rede internacional e produção técnica verificável.",
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
