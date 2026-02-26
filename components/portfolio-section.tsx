"use client"

import Image from "next/image"
import { ExternalLink, Building2, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { track } from "@vercel/analytics"

const projects = [
    {
        title: "Clínica de Estética Aura",
        description: "Site moderno com agendamento via WhatsApp e catálogo de serviços.",
        image: "/portfolio/clinica.png",
        segment: "Saúde & Beleza",
        url: "#",
        features: ["WhatsApp Nativo", "Design Minimalista", "Mobile First"],
    },
    {
        title: "Advocacia Rocha & Associados",
        description: "Presença digital séria e profissional com foco em captação de leads.",
        image: "/portfolio/advocacia.png",
        segment: "Jurídico",
        url: "#",
        features: ["Certificado SSL", "Blog Estratégico", "Formulário de Contato"],
    },
    {
        title: "Varejo Tendência Store",
        description: "Landing page de alta conversão para lançamento de coleções.",
        image: "/portfolio/varejo.png",
        segment: "Varejo",
        url: "#",
        features: ["Chatbot de Vendas", "Galeria de Produtos", "Alta Performance"],
    },
]

export function PortfolioSection() {
    return (
        <section id="portfolio" className="relative py-24 px-6 bg-secondary/30">
            <div className="mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                        Portfólio
                    </span>
                    <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
                        Projetos que entregamos
                    </h2>
                    <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
                        Conheça alguns dos negócios que transformaram sua presença digital com a SDZ.
                    </p>
                </div>

                <div className="grid gap-12">
                    {projects.map((project, index) => (
                        <div
                            key={project.title}
                            className={`flex flex-col gap-8 items-center lg:flex-row ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Image Mockup */}
                            <div className="flex-1 w-full group">
                                <div className="relative aspect-video rounded-2xl overflow-hidden border border-border bg-card shadow-xl transition-transform duration-500 group-hover:scale-[1.02]">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                                        <Button
                                            variant="secondary"
                                            className="rounded-full gap-2"
                                            onClick={() => track("portfolio_view_site", { project: project.title })}
                                        >
                                            <ExternalLink className="size-4" />
                                            Ver site ao vivo
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 space-y-6">
                                <div className="flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 w-fit">
                                    <Building2 className="size-3.5 text-primary" />
                                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                        {project.segment}
                                    </span>
                                </div>

                                <h3 className="font-serif text-3xl font-bold text-foreground">
                                    {project.title}
                                </h3>

                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    {project.description}
                                </p>

                                <ul className="grid grid-cols-2 gap-3">
                                    {project.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-2 text-sm text-foreground/80">
                                            <CheckCircle2 className="size-4 text-primary" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <div className="pt-4">
                                    <Button
                                        variant="outline"
                                        className="rounded-full border-primary/20 hover:bg-primary/5 hover:border-primary/40 text-primary"
                                        onClick={() => track("portfolio_details_click", { project: project.title })}
                                    >
                                        Detalhes do projeto
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
