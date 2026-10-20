import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { TechSection, AiSection, DesignSection } from "@/components/services"
import { ChatbotDemo } from "@/components/chatbot-demo"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { FaqSection } from "@/components/faq-section"
import { CtaFinal } from "@/components/cta-final"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TechSection />
        <AiSection />
        <ChatbotDemo />
        <DesignSection />
        <HowItWorksSection />
        <FaqSection />
        <CtaFinal />
      </main>
      <Footer />
    </>
  )
}
