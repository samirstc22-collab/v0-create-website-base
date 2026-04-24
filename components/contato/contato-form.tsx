"use client"

import { useState } from "react"
import { Send, MessageCircle, Mail, MapPin, Clock } from "lucide-react"
import { FlaskIllustration, HexagonPattern } from "../illustrations"

export function ContatoForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "E-mail",
      value: "contato@stfarma.com.br",
    },
    {
      icon: MapPin,
      label: "Localizacao",
      value: "Goiania - GO, Brasil",
    },
    {
      icon: Clock,
      label: "Resposta",
      value: "Ate 24 horas uteis",
    },
  ]

  return (
    <section className="py-28 px-6 lg:px-10 bg-off-white relative overflow-hidden">
      {/* Decorative Elements */}
      <FlaskIllustration className="absolute top-20 right-[3%] w-28 h-36 text-copper opacity-8" />
      <HexagonPattern className="absolute bottom-20 left-[3%] w-32 h-32 text-teal opacity-8" />

      <div className="max-w-[1000px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Info Side */}
          <div className="lg:col-span-2">
            <h2 className="font-serif text-3xl text-navy mb-6 leading-tight">
              Informacoes de Contato
            </h2>
            <p className="text-base text-muted leading-relaxed mb-10">
              Escolha o canal mais conveniente para voce. Estou disponivel para 
              discutir projetos, consultorias e parcerias.
            </p>

            <div className="flex flex-col gap-6 mb-10">
              {contactInfo.map((info, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-copper/10 flex items-center justify-center shrink-0">
                    <info.icon className="w-5 h-5 text-copper" />
                  </div>
                  <div>
                    <div className="text-sm text-muted font-medium mb-1">{info.label}</div>
                    <div className="text-base text-navy font-semibold">{info.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/5511981403000"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] border-none rounded-xl py-4 px-8 text-white font-bold text-base flex items-center justify-center gap-3 hover:translate-y-[-2px] transition-all shadow-[0_6px_24px_rgba(37,211,102,0.3)]"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Direto
            </a>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-10 border border-border shadow-[0_8px_40px_rgba(0,0,0,0.04)]">
              <h3 className="font-serif text-2xl text-navy mb-8">Envie sua mensagem</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="text-sm font-medium text-navy mb-2 block">Nome</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full py-4 px-5 rounded-xl border border-border bg-off-white text-dark text-base font-sans outline-none transition-all focus:border-copper focus:shadow-[0_0_0_4px_rgba(192,133,74,0.1)] focus:bg-white"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-navy mb-2 block">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full py-4 px-5 rounded-xl border border-border bg-off-white text-dark text-base font-sans outline-none transition-all focus:border-copper focus:shadow-[0_0_0_4px_rgba(192,133,74,0.1)] focus:bg-white"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label className="text-sm font-medium text-navy mb-2 block">Interesse principal</label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full py-4 px-5 rounded-xl border border-border bg-off-white text-dark text-base font-sans outline-none transition-all focus:border-copper focus:shadow-[0_0_0_4px_rgba(192,133,74,0.1)] focus:bg-white appearance-none"
                >
                  <option value="">Selecione uma opcao</option>
                  <option value="consult-magistral">Consultoria Magistral Completa</option>
                  <option value="pd-industrial">P&D Industrial — Industrias e Marcas</option>
                  <option value="diagnostico">Diagnostico Tecnico</option>
                  <option value="missao">Missoes Internacionais</option>
                  <option value="ebook">eBooks, Formularios e Cursos</option>
                  <option value="palestra">Convite para Palestra</option>
                </select>
              </div>

              <div className="mb-8">
                <label className="text-sm font-medium text-navy mb-2 block">Mensagem</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full py-4 px-5 rounded-xl border border-border bg-off-white text-dark text-base font-sans outline-none transition-all resize-y focus:border-copper focus:shadow-[0_0_0_4px_rgba(192,133,74,0.1)] focus:bg-white min-h-[140px]"
                  placeholder="Descreva seu projeto ou duvida"
                  rows={5}
                />
              </div>

              <button className="w-full bg-gradient-to-br from-copper to-copper-deep border-none rounded-xl py-4 px-8 text-white font-bold text-base shadow-[0_6px_24px_rgba(192,133,74,0.3)] hover:translate-y-[-2px] hover:shadow-[0_10px_32px_rgba(192,133,74,0.4)] transition-all flex items-center justify-center gap-3">
                <Send className="w-5 h-5" />
                Enviar Mensagem
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
