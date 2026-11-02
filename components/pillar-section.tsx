import type { LucideIcon } from "lucide-react"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Magnetic, Reveal, Spotlight, Stagger, StaggerItem, TextReveal } from "@/components/motion"

type Accent = "tech" | "ai" | "brand"

// Static class maps so Tailwind can see every class at build time
const accentStyles: Record<Accent, { text: string; button: string; glow: string; spot: string }> = {
  tech: {
    text: "text-tech",
    button: "bg-tech text-background hover:bg-tech/90",
    glow: "from-tech/10",
    spot: "color-mix(in srgb, var(--tech) 12%, transparent)",
  },
  ai: {
    text: "text-ai",
    button: "bg-ai text-background hover:bg-ai/90",
    glow: "from-ai/10",
    spot: "color-mix(in srgb, var(--ai) 12%, transparent)",
  },
  brand: {
    text: "text-brand",
    button: "bg-brand text-background hover:bg-brand/90",
    glow: "from-brand/10",
    spot: "color-mix(in srgb, var(--brand) 12%, transparent)",
  },
}

export interface Service {
  icon: LucideIcon
  title: string
  description: string
}

interface PillarSectionProps {
  id: string
  accent: Accent
  eyebrow: string
  title: string
  description: string
  services: Service[]
  cta: string
  message: string
  layout?: "grid" | "list"
}

export function PillarSection({
  id,
  accent,
  eyebrow,
  title,
  description,
  services,
  cta,
  message,
  layout = "grid",
}: PillarSectionProps) {
  const s = accentStyles[accent]

  return (
    <section id={id} className="relative px-6 py-24 lg:py-32">
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-80 bg-gradient-to-b ${s.glow} to-transparent opacity-60`}
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal y={12}>
            <p className={`eyebrow ${s.text}`}>{eyebrow}</p>
          </Reveal>
          <TextReveal
            text={title}
            className="mt-5 font-serif text-4xl font-bold leading-[1.05] tracking-tight text-balance sm:text-5xl"
          />
          <Reveal delay={0.2}>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
            {description}
          </p>
          <Magnetic className="mt-8">
            <WhatsAppButton
              message={message}
              label={cta}
              trackingLabel={`whatsapp_${id}`}
              className={s.button}
            />
          </Magnetic>
          </Reveal>
        </div>

        <Stagger className={layout === "grid" ? "grid gap-4 sm:grid-cols-2" : "flex flex-col gap-3"}>
          {services.map((service) =>
            layout === "grid" ? (
              <StaggerItem key={service.title} className="h-full">
              <Spotlight
                color={s.spot}
                className="h-full rounded-2xl border border-border bg-card p-7 transition-colors hover:border-input"
              >
              <article>
                <service.icon className={`size-7 ${s.text}`} strokeWidth={1.75} />
                <h3 className="mt-6 font-serif text-xl font-semibold">{service.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{service.description}</p>
              </article>
              </Spotlight>
              </StaggerItem>
            ) : (
              <StaggerItem key={service.title}>
              <Spotlight
                color={s.spot}
                className="rounded-2xl border border-border bg-card transition-colors hover:border-input"
              >
              <article className="flex items-start gap-5 p-5 sm:items-center sm:p-6">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-border bg-background">
                  <service.icon className={`size-5 ${s.text}`} strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="font-serif text-lg font-semibold">{service.title}</h3>
                  <p className="mt-1 leading-relaxed text-muted-foreground">{service.description}</p>
                </div>
              </article>
              </Spotlight>
              </StaggerItem>
            )
          )}
        </Stagger>
      </div>
    </section>
  )
}
