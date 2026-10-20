import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <span className="flex size-9 items-center justify-center rounded-[10px] bg-foreground font-mono text-[13px] font-bold tracking-tight text-background">
        SDZ
      </span>
      <span className="font-serif text-xl font-bold tracking-tight text-foreground">
        SDZLab
      </span>
    </span>
  )
}
