"use client"

import { Plane, MapPin, Calendar, Users } from "lucide-react"

export function MissoesHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-[#0C2340] via-[#1a3a5c] to-[#0a1628] overflow-hidden">
      {/* World Map Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      {/* Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,rgba(184,120,61,0.1)_0%,transparent_50%)]" />

      <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-10 py-32">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#B8783D]/15 border border-[#B8783D]/30 rounded-full px-4 py-2 mb-8">
            <Plane className="w-4 h-4 text-[#B8783D]" />
            <span className="text-xs font-bold tracking-[2px] uppercase text-[#B8783D]">
              Missoes Internacionais
            </span>
          </div>

          <h1 className="font-serif text-[clamp(40px,6vw,72px)] text-white leading-[1.05] tracking-[-1px] mb-6 max-w-4xl mx-auto">
            Pesquisa alem das{" "}
            <span className="text-[#B8783D] italic">fronteiras</span>
          </h1>

          <p className="text-xl text-white/70 leading-relaxed max-w-2xl mx-auto mb-12">
            Imersoes tecnicas lideradas por mim em tres continentes — acesso privilegiado a
            industrias de ingredientes, laboratorios de ponta e tendencias globais.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { icon: MapPin, value: "3", label: "Continentes" },
              { icon: Calendar, value: "12+", label: "Missoes realizadas" },
              { icon: Users, value: "200+", label: "Profissionais" },
              { icon: Plane, value: "2025", label: "Proxima missao" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-[#B8783D]" />
                </div>
                <div className="font-serif text-3xl text-white mb-1">{stat.value}</div>
                <div className="text-xs text-white/50 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Destination Flags */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4">
        {["FR", "NL", "JP"].map((flag, i) => (
          <div
            key={flag}
            className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center font-serif text-lg text-white/80"
          >
            {flag}
          </div>
        ))}
      </div>
    </section>
  )
}
