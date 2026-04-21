"use client"

import { ShoppingBag, Instagram, MessageCircle, CheckCircle } from "lucide-react"
import Link from "next/link"

export function FormulariosCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0a1628] via-[#0d1d35] to-[#0a1628] py-20">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#B8783D]/10 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full py-2 px-4 mb-8">
          <span className="text-[#0096B4] text-xs font-bold tracking-[2px] uppercase">
            Acesso imediato
          </span>
        </div>

        {/* Headline */}
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-[1.1] mb-6">
          Pronto para elevar sua
          <br />
          <span className="text-[#B8783D] italic">prática magistral?</span>
        </h2>

        <p className="text-white/60 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          60+ artefatos técnicos validados em 24 anos de bancada. 
          Download imediato após confirmação de pagamento.
        </p>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {[
            "Acesso vitalício",
            "Atualizações incluídas",
            "Suporte via WhatsApp",
            "7 dias de garantia",
          ].map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full py-2 px-4"
            >
              <CheckCircle className="w-4 h-4 text-[#0096B4]" />
              <span className="text-white/80 text-sm">{badge}</span>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/loja"
            className="inline-flex items-center gap-2 bg-gradient-to-br from-[#B8783D] to-[#8a5729] text-white px-8 py-4 rounded-xl font-bold text-base hover:translate-y-[-2px] transition-transform shadow-[0_12px_30px_rgba(184,120,61,0.4)]"
          >
            <ShoppingBag className="w-5 h-5" />
            Acessar a Loja Completa
          </Link>

          <a
            href="https://wa.me/5562999999999?text=Olá! Tenho interesse nos materiais técnicos."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-6 py-4 rounded-xl font-semibold text-base hover:bg-white/15 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Falar no WhatsApp
          </a>
        </div>

        {/* Social */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-white/40 text-sm mb-4">Acompanhe conteúdos gratuitos</p>
          <a
            href="https://instagram.com/samir_farma"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            <Instagram className="w-5 h-5" />
            <span className="font-medium">@samir_farma</span>
          </a>
        </div>
      </div>
    </section>
  )
}
