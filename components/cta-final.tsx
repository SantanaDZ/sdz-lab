"use client"

import { useState } from "react"
import { track } from "@vercel/analytics"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { WhatsAppButton } from "@/components/whatsapp-button"

export function CtaFinal() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    track("email_form_submit")
    setSubmitted(true)
  }

  return (
    <section
      id="cta-final"
      className="relative py-24 px-6"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-primary/10 pointer-events-none" />
      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
          Profissionalize sua presença online hoje mesmo.
        </h2>
        <p className="mt-6 text-lg text-muted-foreground text-pretty">
          Fale agora pelo WhatsApp ou deixe seu e-mail — respondemos em até 24h
          para entender o seu negócio e montar o projeto ideal, sem compromisso.
        </p>

        {submitted ? (
          <div className="mt-10 flex flex-col items-center gap-4 animate-fade-in-up">
            <div className="flex size-16 items-center justify-center rounded-full bg-primary/20">
              <CheckCircle2 className="size-8 text-primary" />
            </div>
            <p className="text-lg font-semibold text-foreground">
              Obrigado! Entraremos em contato em breve.
            </p>
            <p className="text-muted-foreground text-sm">
              Fique de olho no seu e-mail — resposta em até 24h.
            </p>
          </div>
        ) : (
          <>
            <div className="mt-10 flex justify-center">
              <WhatsAppButton
                message="Olá! Quero profissionalizar minha presença online. Pode me ajudar?"
                label="Falar no WhatsApp agora"
                trackingLabel="whatsapp_cta_final"
                className="px-10 py-6 text-base"
              />
            </div>

            <div className="mt-6 flex items-center gap-4 text-muted-foreground">
              <div className="h-px flex-1 bg-border" />
              <span className="text-sm">ou prefere e-mail?</span>
              <div className="h-px flex-1 bg-border" />
            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-6 mx-auto flex max-w-md flex-col gap-4 sm:flex-row"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor e-mail"
                className="flex-1 rounded-full border border-border bg-card px-6 py-3 text-sm text-card-foreground placeholder:text-muted-foreground outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
              />
              <Button
                type="submit"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-3 font-semibold shadow-lg shadow-primary/25"
              >
                <span>Enviar</span>
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </form>
          </>
        )}

        <p className="mt-4 text-xs text-muted-foreground">
          Sem compromisso. Orçamento gratuito. Resposta em até 24h.
        </p>
      </div>
    </section>
  )
}
