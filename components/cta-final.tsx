"use client"

import { track } from "@vercel/analytics"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { CONTACTS, OWNER, REGION, waUrl } from "@/lib/site"

export function CtaFinal() {
  return (
    <section id="contato" className="px-6 pb-24 lg:pb-32">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-border bg-card">
        <div className="h-1 bg-gradient-to-r from-tech via-ai to-brand" />
        <div className="grid gap-12 p-8 sm:p-12 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:p-16">
          <div>
            <h2 className="font-serif text-4xl font-bold leading-[1.05] tracking-tight text-balance sm:text-5xl">
              Vamos dar o próximo passo juntos?
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
              Conte o que sua empresa precisa. Respondemos rápido e o orçamento é grátis.
            </p>
            <WhatsAppButton
              message="Olá! Quero um orçamento grátis com a SDZLab."
              label="Orçamento grátis"
              trackingLabel="whatsapp_cta_final"
              className="mt-8"
            />
          </div>

          <div className="lg:text-right">
            <p className="text-muted-foreground">Fale comigo no WhatsApp</p>
            <div className="mt-3 flex flex-col gap-1">
              {CONTACTS.map((c) => (
                <a
                  key={c.wa}
                  href={waUrl("Olá! Vi o site da SDZLab e gostaria de conversar.", c.wa)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track("whatsapp_click", { label: `whatsapp_number_${c.wa}` })}
                  className="font-serif text-3xl font-bold tracking-tight transition-colors hover:text-ai sm:text-4xl"
                >
                  {c.display}
                </a>
              ))}
            </div>
            <p className="mt-3 text-muted-foreground">
              {OWNER} · {REGION}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
