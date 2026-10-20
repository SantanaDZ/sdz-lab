import {
  AppWindow,
  Blocks,
  ChartColumn,
  Image,
  MessageCircleMore,
  RefreshCw,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Waypoints,
} from "lucide-react"
import { PillarSection } from "@/components/pillar-section"

export function TechSection() {
  return (
    <PillarSection
      id="tecnologia"
      accent="tech"
      eyebrow="Tecnologia para empresas"
      title="Venda mais. Trabalhe menos."
      description="Tecnologia que funciona para o seu negócio — da vitrine online às tarefas que rodam sozinhas."
      cta="Quero evoluir"
      message="Olá! Quero saber mais sobre sites, e-commerce e automações para a minha empresa."
      services={[
        {
          icon: Sparkles,
          title: "Marketing com IA",
          description: "Conteúdo e campanhas criados mais rápido, com inteligência artificial.",
        },
        {
          icon: RefreshCw,
          title: "Automações",
          description: "Atendimento no WhatsApp, agendamentos e tarefas rodando sozinhos.",
        },
        {
          icon: AppWindow,
          title: "Sites",
          description: "Sites rápidos e profissionais para sua empresa ser encontrada no Google.",
        },
        {
          icon: ShoppingCart,
          title: "E-commerce",
          description: "Sua loja virtual pronta para vender 24 horas por dia.",
        },
      ]}
    />
  )
}

export function AiSection() {
  return (
    <PillarSection
      id="ia"
      accent="ai"
      layout="list"
      eyebrow="Infraestrutura de IA"
      title="Para empresas que querem escalar."
      description="A estrutura por trás de uma operação que cresce sem precisar contratar na mesma proporção."
      cta="Quero escalar"
      message="Olá! Quero escalar minha empresa com IA — chatbot, sistemas e integrações."
      services={[
        {
          icon: MessageCircleMore,
          title: "Chatbot inteligente no WhatsApp",
          description: "Atendimento 24h com IA, menus e transferência para um humano.",
        },
        {
          icon: Blocks,
          title: "Sistemas sob medida",
          description: "Clientes, agenda e estoque do jeito que sua empresa trabalha.",
        },
        {
          icon: Waypoints,
          title: "Integrações",
          description: "Planilhas, WhatsApp, CRM, loja e financeiro conversando sozinhos.",
        },
        {
          icon: Target,
          title: "Captação de clientes automatizada",
          description: "Encontre e aborde novos clientes da sua região de forma automática.",
        },
        {
          icon: ChartColumn,
          title: "Dashboards de resultados",
          description: "Vendas, atendimentos e campanhas em um só painel.",
        },
      ]}
    />
  )
}

export function DesignSection() {
  return (
    <PillarSection
      id="design"
      accent="brand"
      eyebrow="Design & Marketing para o seu negócio"
      title="Sua marca merece ser vista. E lembrada."
      description="Uma presença visual consistente que transmite confiança e faz o cliente voltar."
      cta="Orçamento grátis"
      message="Olá! Quero um orçamento de design e marketing para o meu negócio."
      services={[
        {
          icon: Star,
          title: "Identidade visual e logo",
          description: "Logo, cores e fontes com a cara da sua marca.",
        },
        {
          icon: Image,
          title: "Criativos",
          description: "Posts, stories, cartões de visita, banners e cardápios.",
        },
        {
          icon: Smartphone,
          title: "Gestão de redes sociais",
          description: "Planejamento, criação e postagem com constância.",
        },
        {
          icon: TrendingUp,
          title: "Marketing digital",
          description: "Estratégia e anúncios para atrair clientes da sua região.",
        },
      ]}
    />
  )
}
