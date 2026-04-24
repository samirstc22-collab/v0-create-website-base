import { ArrowRight, Phone, Mail, Clock } from "lucide-react"
import Link from "next/link"

export function ProtocolosCTA() {
  return (
    <section className="py-28 px-6 lg:px-10 bg-gradient-to-br from-[#1a4d6e] via-[#0d7a80] to-[#0a8f9e]">
      <div className="max-w-[1000px] mx-auto text-center">
        {/* Header */}
        <h2 className="font-serif text-[clamp(32px,4vw,48px)] text-white mb-6 leading-[1.1]">
          Pronto para elevar sua{" "}
          <span className="italic">pratica clinica</span>?
        </h2>
        <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed mb-12">
          Agende uma conversa inicial gratuita para entender suas necessidades
          e apresentar como posso ajudar sua clinica a se diferenciar.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <a
            href="https://wa.me/5511981403000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#0d7a80] px-8 py-4 rounded-xl font-bold text-sm tracking-wide shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:translate-y-[-2px] hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)] transition-all"
          >
            <Phone className="w-4 h-4" />
            Agendar Conversa
          </a>
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-sm tracking-wide hover:bg-white/15 hover:border-white/30 transition-all"
          >
            <Mail className="w-4 h-4" />
            Enviar Email
          </Link>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Phone, label: "WhatsApp", value: "+55 11 98140-3000" },
            { icon: Mail, label: "Email", value: "contato@stfarma.com.br" },
            { icon: Clock, label: "Resposta", value: "Em ate 24h" },
          ].map((item, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5">
              <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-white/10 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-white/80" />
              </div>
              <div className="text-xs text-white/50 uppercase tracking-wider mb-1">{item.label}</div>
              <div className="text-sm font-medium text-white">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
