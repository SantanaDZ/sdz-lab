import { ArrowUpRight } from "lucide-react"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { OWNER, REGION } from "@/lib/site"

const pillars = [
  {
    href: "#tecnologia",
    eyebrow: "Tecnologia para empresas",
    title: "Sites, e-commerce e automações",
    color: "text-tech",
    dot: "bg-tech",
  },
  {
    href: "#ia",
    eyebrow: "Infraestrutura de IA",
    title: "Chatbots, sistemas e integrações",
    color: "text-ai",
    dot: "bg-ai",
  },
  {
    href: "#design",
    eyebrow: "Design & Marketing",
    title: "Identidade, criativos e redes sociais",
    color: "text-brand",
    dot: "bg-brand",
  },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-36 pb-24 lg:pt-44 lg:pb-32">
      <div className="bg-grid pointer-events-none absolute inset-0" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.15fr_1fr]">
        <div className="animate-fade-in-up">
          <p className="eyebrow flex flex-wrap items-center gap-x-3 gap-y-1 text-muted-foreground">
            <span className="text-tech">Tecnologia</span>
            <span aria-hidden>·</span>
            <span className="text-ai">IA</span>
            <span aria-hidden>·</span>
            <span className="text-brand">Design</span>
          </p>

          <h1 className="mt-6 font-serif text-5xl font-bold leading-[1.02] tracking-tight text-balance sm:text-6xl lg:text-7xl">
            O próximo passo da sua empresa.
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground text-pretty">
            Venda mais e trabalhe menos com tecnologia que funciona para o seu
            negócio — do site ao atendimento com IA, da marca às campanhas.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <WhatsAppButton
              message="Olá! Vi o site da SDZLab e quero levar minha empresa para o próximo passo."
              label="Quero evoluir"
              trackingLabel="whatsapp_hero_cta"
            />
            <a
              href="#tecnologia"
              className="inline-flex items-center justify-center rounded-full border border-input px-7 py-3.5 font-serif text-base font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Ver serviços
            </a>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            {OWNER} · {REGION}
          </p>
        </div>

        <div className="animate-fade-in-up flex flex-col gap-3 [animation-delay:120ms]">
          {pillars.map((p, i) => (
            <a
              key={p.href}
              href={p.href}
              className="group flex items-center gap-5 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-input hover:bg-secondary"
            >
              <span className="font-serif text-sm font-semibold text-muted-foreground tabular-nums">
                0{i + 1}
              </span>
              <span className="flex-1">
                <span className={`flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] ${p.color}`}>
                  <span className={`size-1.5 rounded-full ${p.dot}`} />
                  {p.eyebrow}
                </span>
                <span className="mt-1.5 block font-serif text-lg font-semibold text-foreground">
                  {p.title}
                </span>
              </span>
              <ArrowUpRight className="size-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
