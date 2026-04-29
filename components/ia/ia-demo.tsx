"use client"

import { useState, useEffect } from "react"
import { Send, Bot, User, Sparkles } from "lucide-react"

const demoConversation = [
  {
    role: "user",
    message: "Qual o melhor veiculo para vitamina C 15%?",
  },
  {
    role: "assistant",
    message: "Para vitamina C 15% (acido ascorbico), recomendo um serum aquoso com pH entre 2.5-3.5 para maxima estabilidade e penetracao. Considere usar um sistema com propilenoglicol (5-10%) para solubilizacao e acido ferulico (0.5%) para sinergismo antioxidante. Evite emulsoes cremosas que aceleram a oxidacao.",
  },
  {
    role: "user",
    message: "Posso associar com niacinamida?",
  },
  {
    role: "assistant",
    message: "A associacao vitamina C + niacinamida e controversa, mas pode funcionar bem em formulacoes magistrais. O problema classico de formacao de nicotinamida adenina e mais relevante em altas temperaturas. Para uso topico, recomendo: 1) Manter pH abaixo de 3.5 para a vitamina C, 2) Usar niacinamida a 4-5% (nao mais), 3) Adicionar antioxidantes secundarios. Ou simplesmente separar em duas formulacoes para uso em horarios diferentes.",
  },
]

export function IADemo() {
  const [visibleMessages, setVisibleMessages] = useState(0)
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleMessages((prev) => {
        if (prev < demoConversation.length) {
          if (demoConversation[prev].role === "assistant") {
            setIsTyping(true)
            setTimeout(() => setIsTyping(false), 1500)
          }
          return prev + 1
        }
        // Reset after showing all
        setTimeout(() => setVisibleMessages(0), 5000)
        return prev
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0db5c8]/10 border border-[#0db5c8]/20 text-[#0db5c8] text-xs font-bold uppercase tracking-[2px] mb-6">
            <Sparkles className="w-4 h-4" />
            Demonstracao
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#0C2340] tracking-tight mb-4">
            Veja a IA em <em className="text-[#0db5c8]">acao</em>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Respostas precisas e contextualizadas para suas duvidas de formulacao.
          </p>
        </div>

        {/* Chat demo */}
        <div className="relative max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className="bg-[#0C2340] px-6 py-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0db5c8] to-[#5eead4] flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-white font-semibold">IA Formulador</div>
                <div className="text-white/60 text-sm flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Online
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="p-6 space-y-6 min-h-[400px] bg-gray-50/50">
              {demoConversation.slice(0, visibleMessages).map((msg, i) => (
                <div
                  key={i}
                  className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"} animate-fade-in-up`}
                >
                  {msg.role === "assistant" && (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0db5c8] to-[#5eead4] flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] rounded-2xl px-5 py-3 ${
                      msg.role === "user"
                        ? "bg-[#0C2340] text-white rounded-br-sm"
                        : "bg-white text-gray-700 border border-gray-100 shadow-sm rounded-bl-sm"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{msg.message}</p>
                  </div>
                  {msg.role === "user" && (
                    <div className="w-8 h-8 rounded-full bg-[#B8783D] flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0db5c8] to-[#5eead4] flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-white rounded-2xl px-5 py-3 border border-gray-100 shadow-sm rounded-bl-sm">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" />
                      <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0.1s" }} />
                      <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0.2s" }} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input (disabled) */}
            <div className="p-4 border-t border-gray-100 bg-white">
              <div className="flex items-center gap-3 bg-gray-100 rounded-xl px-4 py-3 opacity-50">
                <input
                  type="text"
                  placeholder="Digite sua pergunta sobre formulacao..."
                  className="flex-1 bg-transparent outline-none text-gray-500 text-sm"
                  disabled
                />
                <button className="w-10 h-10 rounded-lg bg-[#0C2340] flex items-center justify-center" disabled>
                  <Send className="w-4 h-4 text-white" />
                </button>
              </div>
              <p className="text-center text-xs text-gray-400 mt-2">Disponivel em breve</p>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#0db5c8]/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#B8783D]/10 rounded-full blur-2xl" />
        </div>
      </div>
    </section>
  )
}
