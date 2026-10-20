const steps = [
  {
    title: "Conversa",
    description:
      "Você conta como sua empresa funciona hoje e onde quer chegar. Sem formulário complicado — só uma conversa no WhatsApp.",
  },
  {
    title: "Proposta sob medida",
    description:
      "Montamos um plano com o que faz sentido agora: tecnologia, IA, design ou tudo junto. Prazo e valor claros.",
  },
  {
    title: "Entrega e evolução",
    description:
      "Colocamos tudo no ar, acompanhamos os resultados e evoluímos junto com o seu negócio.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="border-y border-border px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow text-muted-foreground">Como funciona</p>
        <h2 className="mt-5 max-w-2xl font-serif text-4xl font-bold leading-[1.05] tracking-tight text-balance sm:text-5xl">
          Simples do primeiro contato à entrega.
        </h2>

        <ol className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
          {steps.map((step, i) => (
            <li key={step.title} className="bg-background p-8 lg:p-10">
              <span className="font-serif text-sm font-semibold tabular-nums text-muted-foreground">
                0{i + 1}
              </span>
              <h3 className="mt-8 font-serif text-2xl font-semibold">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
