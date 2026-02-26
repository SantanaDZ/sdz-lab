"use client"

import { Check } from "lucide-react"
import { WhatsAppButton } from "@/components/whatsapp-button"

const packages = [
  {
    name: "Site Essencial",
    description: "Para quem quer começar com o pé direito online.",
    features: [
      "Site profissional do zero",
      "Design responsivo (mobile + desktop)",
      "Integração com WhatsApp",
      "Formulário de contato por e-mail",
      "Até 5 seções/páginas",
      "Entrega em até 7 dias úteis",
    ],
    highlighted: false,
    badge: undefined,
    whatsappMessage:
      "Olá! Tenho interesse no plano *Site Essencial* da SDZ. Pode me passar mais informações?",
    trackingLabel: "whatsapp_pricing_essencial",
  },
  {
    name: "Site + Automação",
    description: "Para quem quer site profissional e atendimento automatizado.",
    features: [
      "Tudo do Site Essencial",
      "Chatbot no site ou WhatsApp",
      "Fluxo de mensagens automático",
      "Follow-up de leads",
      "Até 10 seções/páginas",
      "Suporte prioritário",
    ],
    highlighted: true,
    badge: "Mais Escolhido",
    whatsappMessage:
      "Olá! Tenho interesse no plano *Site + Automação* da SDZ. Pode me passar mais informações?",
    trackingLabel: "whatsapp_pricing_automacao",
  },
  {
    name: "Presença Digital Completa",
    description: "Para quem quer crescer com estratégia e automação total.",
    features: [
      "Tudo do Site + Automação",
      "Estratégia de marketing digital",
      "Campanhas de tráfego pago",
      "Captação e gestão de leads",
      "Relatórios mensais",
      "Consultoria contínua",
    ],
    highlighted: false,
    badge: undefined,
    whatsappMessage:
      "Olá! Tenho interesse no plano *Presença Digital Completa* da SDZ. Pode me passar mais informações?",
    trackingLabel: "whatsapp_pricing_completa",
  },
]

export function PricingSection() {
  return (
    <section id="diferenciais" className="relative py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-6">
          <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Pacotes
          </span>
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
            Soluções sob medida para o seu negócio
          </h2>
        </div>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16 text-pretty">
          Cada projeto é único. Os valores são definidos de acordo com as funcionalidades
          escolhidas — sem preço fixo, sem surpresa. Solicite um orçamento gratuito e
          montamos o pacote ideal para você.
        </p>

        <div className="grid gap-8 md:grid-cols-3 items-start">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative rounded-2xl border p-8 transition-all duration-300 ${
                pkg.highlighted
                  ? "border-primary bg-card shadow-xl shadow-primary/10 scale-[1.02]"
                  : "border-border bg-card hover:border-primary/30"
              }`}
            >
              {pkg.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground">
                    {pkg.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-serif text-xl font-bold text-card-foreground">
                  {pkg.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {pkg.description}
                </p>
              </div>

              <div className="mb-8 flex items-center gap-2 rounded-xl border border-primary/20 bg-primary/10 px-4 py-3">
                <span className="text-sm font-semibold text-primary">
                  Orçamento sob medida
                </span>
              </div>

              <ul className="mb-8 flex flex-col gap-3">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div
                      className={`flex size-5 shrink-0 items-center justify-center rounded-full ${
                        pkg.highlighted
                          ? "bg-primary/20"
                          : "bg-primary/10"
                      }`}
                    >
                      <Check className="size-3 text-primary" />
                    </div>
                    <span className="text-sm text-card-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <WhatsAppButton
                message={pkg.whatsappMessage}
                label="Solicitar orçamento"
                trackingLabel={pkg.trackingLabel}
                className={`w-full justify-center py-5 ${
                  pkg.highlighted
                    ? ""
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-none border-transparent"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
