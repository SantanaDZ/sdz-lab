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
      "Não. A SDZ cuida de tudo: criação, desenvolvimento, configurações e publicação. Você só precisa nos contar sobre o seu negócio e a gente faz o resto.",
  },
  {
    question: "Em quanto tempo meu site fica pronto?",
    answer:
      "Em média, entre 5 e 10 dias úteis após a aprovação do briefing e do layout. Projetos mais simples ficam prontos mais rápido; projetos mais completos podem levar um pouco mais, mas sempre com prazo combinado.",
  },
  {
    question: "O site já vem com WhatsApp e e-mail integrados?",
    answer:
      "Sim! Toda entrega da SDZ inclui integração nativa ao WhatsApp e formulário de contato por e-mail. Isso é padrão, não é opcional.",
  },
  {
    question: "Como funciona o orçamento? Tem preço fixo?",
    answer:
      "Não existe preço fixo porque cada projeto é montado sob medida. O valor varia conforme as funcionalidades escolhidas — site simples, páginas extras, chatbot, automações, marketing. Você solicita o orçamento, contamos o que é possível fazer e você decide.",
  },
  {
    question: "Posso adicionar chatbot ou automações depois que o site estiver pronto?",
    answer:
      "Sim, com certeza. Muitos clientes começam apenas com o site e vão adicionando serviços conforme o negócio cresce e a demanda aumenta.",
  },
  {
    question: "O site vai aparecer no Google?",
    answer:
      "Sim. Todos os sites da SDZ são entregues otimizados para SEO — estrutura de código limpa, velocidade de carregamento e boas práticas para ranquear nos mecanismos de busca.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="relative py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Dúvidas
          </span>
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
            Perguntas frequentes
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-border"
            >
              <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
