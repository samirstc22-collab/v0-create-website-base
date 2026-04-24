"use client"

import { motion } from "framer-motion"
import { FlaskConical, TrendingUp, Award } from "lucide-react"

export function BlogHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-[#0C2340] via-[#0a1c33] to-[#061220] overflow-hidden">
      {/* Abstract geometric background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#0096B4]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#d4af37]/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/5 rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#d4af37]/20 border border-[#d4af37]/30 rounded-full px-4 py-2 mb-8">
            <FlaskConical className="w-4 h-4 text-[#d4af37]" />
            <span className="text-[#d4af37] text-sm font-medium tracking-wide">
              Portfolio de Inovacoes Cientificas
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance">
            Resultados Clinicos{" "}
            <span className="text-[#0096B4]">Comprovados</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed mb-12 max-w-3xl text-pretty">
            Duas inovacoes que redefinem o tratamento dermatologico: Peeling Azelaico em Pasta
            e Serum NiacinaMax 25% + B12 — com evidencias clinicas documentadas por analise Visia.
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#E07350]/20 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-[#E07350]" />
                </div>
                <span className="text-3xl font-bold text-white">30.5%</span>
              </div>
              <p className="text-white/60 text-sm">
                Melhora em pigmentacao marrom — maior resultado do estudo
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#3DAA8D]/20 rounded-xl flex items-center justify-center">
                  <FlaskConical className="w-5 h-5 text-[#3DAA8D]" />
                </div>
                <span className="text-3xl font-bold text-white">25%</span>
              </div>
              <p className="text-white/60 text-sm">
                Niacinamida estabilizada — 5x acima da concentracao padrao
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#d4af37]/20 rounded-xl flex items-center justify-center">
                  <Award className="w-5 h-5 text-[#d4af37]" />
                </div>
                <span className="text-3xl font-bold text-white">8</span>
              </div>
              <p className="text-white/60 text-sm">
                Parametros Visia analisados com melhora em todos
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white/50 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}
