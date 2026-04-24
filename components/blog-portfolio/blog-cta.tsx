"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, MessageCircle, FileText, Microscope } from "lucide-react"

export function BlogCta() {
  const benefits = [
    {
      icon: Microscope,
      title: "Diagnostico Tecnico",
      description: "Avaliacao personalizada da sua necessidade farmacotecnica",
    },
    {
      icon: FileText,
      title: "Dossie Completo",
      description: "Documentacao tecnica com estudos de estabilidade e eficacia",
    },
    {
      icon: MessageCircle,
      title: "Suporte Direto",
      description: "Acesso ao Prof. Samir para duvidas e ajustes de protocolo",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-[#0C2340] via-[#0a1c33] to-[#061220] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0096B4]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#E07390]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            Transforme sua Pratica com <br />
            <span className="text-[#d4af37]">Inovacao Cientifica</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Acesse formulacoes exclusivas desenvolvidas com rigor cientifico e resultados clinicos comprovados.
          </p>
        </motion.div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center"
            >
              <div className="w-14 h-14 bg-[#d4af37]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-7 h-7 text-[#d4af37]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
              <p className="text-white/60 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contato?assunto=Portfolio-Inovacoes"
            className="group flex items-center gap-3 bg-[#d4af37] text-[#0C2340] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#e5c04a] transition-colors"
          >
            Solicitar Consultoria
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/portfolio-inovacoes"
            className="flex items-center gap-3 bg-white/10 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-colors border border-white/20"
          >
            Ver Portfolio Completo
          </Link>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 pt-12 border-t border-white/10"
        >
          <div className="flex flex-wrap items-center justify-center gap-8 text-white/40 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#3DAA8D] rounded-full" />
              <span>Estudos Clinicos Documentados</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#0096B4] rounded-full" />
              <span>Analise Visia Validada</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#E07390] rounded-full" />
              <span>Formulacoes Registradas</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#d4af37] rounded-full" />
              <span>Suporte Tecnico Continuo</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
