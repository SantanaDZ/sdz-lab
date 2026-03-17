import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SucessoPage() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-6">
          <CheckCircle className="size-20 text-green-500" />
        </div>
        <h1 className="font-serif text-3xl font-bold text-foreground mb-4">
          Pagamento aprovado!
        </h1>
        <p className="text-muted-foreground mb-8 text-pretty">
          Obrigado pela sua compra. Em breve entraremos em contato pelo e-mail cadastrado para iniciarmos o seu projeto.
        </p>
        <Button asChild className="rounded-full px-8">
          <Link href="/">Voltar ao início</Link>
        </Button>
      </div>
    </main>
  )
}
