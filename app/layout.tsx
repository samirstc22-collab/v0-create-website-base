import type { Metadata, Viewport } from "next"
import { Inter, Instrument_Serif, Playfair_Display, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { NewsletterPopup } from "@/components/newsletter-popup"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
})

// Tannuri Brand System — Display & Editorial
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
})

// Tannuri Brand System — Mono / Eyebrow / Technical
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains",
  display: "swap",
})

export const metadata: Metadata = {
  title: "ST Farma — Consultoria em Formulação Magistral | Samir Tannuri",
  description:
    "ST Farma · Consultoria em Formulação para indústrias, magistrais e marcas que não podem errar a formulação. Seis anos coordenando P&D no maior grupo magistral do Brasil. Missões internacionais em Paris, Amsterdam e Japão.",
  keywords:
    "consultoria em tecnologia magistral, P&D cosmético, transferência de tecnologia, reformulação de portfólio, estudo de estabilidade, sourcing internacional de ativos, indústria cosmética, farmácia magistral",
  openGraph: {
    title: "ST Farma — Consultoria em Formulação Magistral",
    description:
      "Boutique de consultoria em tecnologia magistral. Prática industrial real, rede internacional e produção técnica verificável.",
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
    <html lang="pt-BR" className={`${inter.variable} ${instrumentSerif.variable} ${playfair.variable} ${jetbrains.variable} bg-background`}>
      <body className="font-sans antialiased bg-white text-body overflow-x-hidden">
        {children}
        <NewsletterPopup />
        {process.env.NODE_ENV === "production" && <Analytics />}
        <SpeedInsights />
      </body>
    </html>
  )
}
