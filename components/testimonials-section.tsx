"use client"

import { Star, Quote, ExternalLink, Building2 } from "lucide-react"

const testimonials = [
  {
    name: "Mariana S.",
    business: "Clínica de Estética",
    segment: "Saúde & Beleza",
    quote:
      "Antes eu dependia só do Instagram. Agora tenho um site profissional com WhatsApp integrado e os agendamentos chegam sozinhos. Valeu cada centavo.",
    rating: 5,
    initials: "MS",
    siteUrl: "#",
  },
  {
    name: "Ricardo T.",
    business: "Escritório de Advocacia",
    segment: "Jurídico",
    quote:
      "A SDZ entregou exatamente o que eu precisava: um site sério, rápido e que passa credibilidade. Em menos de uma semana já estava no ar.",
    rating: 5,
    initials: "RT",
    siteUrl: "#",
  },
  {
    name: "Fernanda L.",
    business: "Loja de Roupas",
    segment: "Varejo",
    quote:
      "Comecei só com o site e depois adicionei o chatbot. Hoje atendo clientes no WhatsApp de forma automática. Minha equipe foca no que realmente importa.",
    rating: 5,
    initials: "FL",
    siteUrl: "#",
  },
]

export function TestimonialsSection() {
  return (
    <section className="relative py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Depoimentos
          </span>
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
            Empresários que transformaram sua presença digital
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="group relative rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 flex flex-col"
            >
              <Quote className="mb-4 size-8 text-primary/20" />
              <p className="mb-6 text-card-foreground leading-relaxed text-lg italic flex-1">
                {`"${t.quote}"`}
              </p>

              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 fill-primary text-primary"
                  />
                ))}
              </div>

              <div className="flex items-center gap-3">
                {/* Avatar with initials */}
                <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary font-bold text-sm">
                  {t.initials}
                </div>

                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-card-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground truncate">{t.business}</p>
                </div>

                {/* Segment badge */}
                <div className="flex items-center gap-1 rounded-full border border-border bg-secondary/50 px-2.5 py-1 shrink-0">
                  <Building2 className="size-3 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">{t.segment}</span>
                </div>
              </div>

              {/* Site link */}
              {t.siteUrl && t.siteUrl !== "#" && (
                <a
                  href={t.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center gap-1.5 text-xs text-primary/70 hover:text-primary transition-colors"
                >
                  <ExternalLink className="size-3" />
                  Ver site criado
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
