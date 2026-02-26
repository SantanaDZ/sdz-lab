import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ProblemSection } from "@/components/problem-section"
import { ServicesSection } from "@/components/services-section"
import { ChatbotDemo } from "@/components/chatbot-demo"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { PricingSection } from "@/components/pricing-section"
import { FaqSection } from "@/components/faq-section"
import { CtaFinal } from "@/components/cta-final"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <ServicesSection />
        <ChatbotDemo />
        <HowItWorksSection />
        {/* <PortfolioSection /> */}
        <TestimonialsSection />
        <PricingSection />
        <FaqSection />
        <CtaFinal />
      </main>
      <Footer />
    </>
  )
}
