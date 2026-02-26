"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { track } from "@vercel/analytics"
import { Sparkles, Send, ArrowRight } from "lucide-react"

type Message = {
  id: string
  from: "bot" | "user"
  text: string
}

const botResponses: Record<string, string> = {
  "O site já vem com WhatsApp?":
    "Sim! Todo site criado pela SDZ já inclui integração nativa com o WhatsApp e formulário de e-mail. Seus clientes clicam e falam com você na hora — sem complicação.",
  "Como funciona o chatbot?":
    "O chatbot é treinado com as informações do seu negócio e responde automaticamente às dúvidas dos seus clientes — no site e no WhatsApp — 24h por dia, 7 dias por semana. É um serviço adicional ao site.",
  "Como faço um orçamento?":
    "É simples! Deixa seu e-mail na seção de contato abaixo. Nossa equipe entra em contato em até 24h para entender o seu negócio e montar o projeto ideal para você — sem compromisso.",
  "Quero contratar":
    "Ótimo! Preencha seu e-mail na seção abaixo e entraremos em contato para apresentar a proposta personalizada para o seu negócio.",
}

const quickReplies = [
  "O site já vem com WhatsApp?",
  "Como funciona o chatbot?",
  "Como faço um orçamento?",
]

const initialMessages: Message[] = [
  {
    id: "1",
    from: "bot",
    text: "Olá! 👋 Sou um exemplo do chatbot que a SDZ pode criar para o seu negócio. Faça uma pergunta e veja como funciona!",
  },
]

function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 px-4 py-3">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="size-2 rounded-full bg-primary/60 animate-bounce-dot"
          style={{ animationDelay: `${i * 0.16}s` }}
        />
      ))}
    </div>
  )
}

export function ChatbotDemo() {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [visibleQuickReplies, setVisibleQuickReplies] = useState(quickReplies)
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = useCallback(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping, scrollToBottom])

  const sendMessage = useCallback(
    (text: string, isQuickReply = false) => {
      if (isTyping) return

      const userMsg: Message = {
        id: Date.now().toString(),
        from: "user",
        text,
      }
      setMessages((prev) => [...prev, userMsg])
      setInput("")
      setIsTyping(true)
      track("chatbot_message_sent", { trigger: isQuickReply ? "quick_reply" : "manual" })

      // Remove used quick reply
      setVisibleQuickReplies((prev) => prev.filter((q) => q !== text))

      // If user typed "Quero contratar" or similar, add it to the quick replies area
      const responseText =
        botResponses[text] ||
        "Obrigado pela sua mensagem! Um consultor da SDZ entrará em contato em breve para te ajudar. Enquanto isso, confira nossos planos abaixo!"

      setTimeout(() => {
        const botMsg: Message = {
          id: (Date.now() + 1).toString(),
          from: "bot",
          text: responseText,
        }
        setMessages((prev) => [...prev, botMsg])
        setIsTyping(false)

        // Add "Quero contratar" as suggestion after 2 messages
        if (
          !visibleQuickReplies.includes("Quero contratar") &&
          messages.length >= 2
        ) {
          setVisibleQuickReplies((prev) => {
            if (prev.includes("Quero contratar")) return prev
            return [...prev, "Quero contratar"]
          })
        }
      }, 1200)
    },
    [isTyping, messages.length, visibleQuickReplies]
  )

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return
    sendMessage(input.trim())
  }

  return (
    <section className="relative py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Demonstração
          </span>
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
            Veja como um chatbot atende seus clientes
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Este é um exemplo de chatbot que a SDZ pode adicionar ao seu site ou
            WhatsApp. Interaja e veja como seus clientes seriam atendidos!
          </p>
        </div>

        <div className="mx-auto max-w-lg">
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-2xl shadow-primary/10">
            {/* Chat Header */}
            <div className="flex items-center gap-3 border-b border-border bg-card px-5 py-4">
              <div className="flex size-10 items-center justify-center rounded-full bg-primary/20">
                <Sparkles className="size-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-card-foreground">
                  SDZ Bot
                </p>
                <div className="flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/50" />
                  <span className="text-xs text-muted-foreground">Online agora</span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <span className="size-2 rounded-full bg-primary/40" />
                <span className="size-2 rounded-full bg-primary/60" />
                <span className="size-2 rounded-full bg-primary" />
              </div>
            </div>

            {/* Messages Area */}
            <div
              ref={scrollRef}
              className="flex flex-col gap-4 overflow-y-auto p-5 h-[400px]"
            >
              {messages.map((msg, i) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"} animate-fade-in-up`}
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  {msg.from === "bot" && (
                    <div className="mr-2 mt-1 flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/20">
                      <Sparkles className="size-3.5 text-primary" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      msg.from === "user"
                        ? "rounded-tr-sm bg-primary text-primary-foreground"
                        : "rounded-tl-sm bg-secondary text-secondary-foreground"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{msg.text}</p>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start animate-fade-in-up">
                  <div className="mr-2 mt-1 flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/20">
                    <Sparkles className="size-3.5 text-primary" />
                  </div>
                  <div className="rounded-2xl rounded-tl-sm bg-secondary">
                    <TypingIndicator />
                  </div>
                </div>
              )}
            </div>

            {/* Quick Replies */}
            {visibleQuickReplies.length > 0 && !isTyping && (
              <div className="flex flex-wrap gap-2 px-5 pb-3">
                {visibleQuickReplies.map((reply) => (
                  <button
                    key={reply}
                    onClick={() => sendMessage(reply, true)}
                    className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary transition-all hover:bg-primary/20 hover:border-primary/50"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            )}

            {/* Input Area */}
            <div className="border-t border-border p-4">
              <form onSubmit={handleSubmit} className="flex items-center gap-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Digite sua mensagem..."
                  className="flex-1 rounded-xl border border-border bg-background/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed"
                  aria-label="Enviar mensagem"
                >
                  <Send className="size-4" />
                </button>
              </form>
            </div>
          </div>

          <p className="mt-6 text-center text-muted-foreground text-sm">
            Chatbot disponível como serviço adicional ao site — seu negócio atendendo 24h.
          </p>
        </div>
      </div>
    </section>
  )
}
