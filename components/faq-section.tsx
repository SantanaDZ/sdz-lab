"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Preciso ter conhecimento técnico para contratar?",
    answer:
      "Não. A SDZLab cuida de tudo: planejamento, criação, configuração e publicação. Você só precisa contar como o seu negócio funciona.",
  },
  {
    question: "Posso contratar só um serviço?",
    answer:
      "Sim. Você pode começar só com um site, um chatbot ou uma identidade visual e ir adicionando o resto conforme a empresa cresce.",
  },
  {
    question: "Como funciona o chatbot no WhatsApp?",
    answer:
      "Ele é treinado com as informações da sua empresa, responde 24h, oferece menus e transfere para um humano quando necessário — sem perder nenhum cliente.",
  },
  {
    question: "Quanto custa?",
    answer:
      "Cada projeto é montado sob medida. Depois de uma conversa rápida, você recebe uma proposta com prazo e valor fechados. O orçamento é grátis e sem compromisso.",
  },
  {
    question: "Em quanto tempo fica pronto?",
    answer:
      "Sites e criativos costumam ficar prontos em poucos dias. Sistemas, integrações e automações dependem do escopo — o prazo é sempre combinado antes de começar.",
  },
  {
    question: "Vocês atendem fora de BH?",
    answer:
      "Atendemos BH e região presencialmente, e empresas de qualquer lugar do Brasil de forma remota.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="px-6 py-24 lg:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <p className="eyebrow text-muted-foreground">Dúvidas</p>
          <h2 className="mt-5 font-serif text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
            Perguntas frequentes
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="py-6 text-left font-serif text-lg font-semibold text-foreground hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
