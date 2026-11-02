"use client"

import {
  AnimatePresence,
  MotionConfig,
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  type HTMLMotionProps,
  type Variants,
} from "motion/react"
import { useRef, type ElementType, type ReactNode } from "react"
import { cn } from "@/lib/utils"

/* ------------------------------------------------------------------ */
/* Shared tokens                                                       */
/* ------------------------------------------------------------------ */

/** Smooth "expo-out"-like curve used across the site. */
export const EASE = [0.22, 1, 0.36, 1] as const

export const DURATION = {
  fast: 0.35,
  base: 0.7,
  slow: 1.1,
} as const

const VIEWPORT = { once: true, margin: "0px 0px -12% 0px" } as const

/* ------------------------------------------------------------------ */
/* Provider                                                            */
/* ------------------------------------------------------------------ */

/** Respects the OS "reduce motion" setting for every motion component. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={{ duration: DURATION.base, ease: EASE }}>
      {children}
    </MotionConfig>
  )
}

/* ------------------------------------------------------------------ */
/* Reveal — fade + rise + unblur when scrolled into view               */
/* ------------------------------------------------------------------ */

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number
  y?: number
  as?: "div" | "section" | "li" | "article" | "p" | "span"
}

export function Reveal({ delay = 0, y = 24, as = "div", className, children, ...rest }: RevealProps) {
  const Comp = motion[as] as typeof motion.div
  return (
    <Comp
      initial={{ opacity: 0, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={VIEWPORT}
      transition={{ duration: DURATION.base, ease: EASE, delay }}
      className={className}
      {...rest}
    >
      {children}
    </Comp>
  )
}

/* ------------------------------------------------------------------ */
/* Stagger — children animate one after another                        */
/* ------------------------------------------------------------------ */

const staggerParent = (stagger: number, delayChildren: number): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren } },
})

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: DURATION.base, ease: EASE },
  },
}

type StaggerProps = HTMLMotionProps<"div"> & {
  stagger?: number
  delay?: number
  as?: "div" | "ol" | "ul"
  /** Animate on mount instead of when scrolled into view (e.g. hero). */
  immediate?: boolean
}

export function Stagger({
  stagger = 0.08,
  delay = 0,
  as = "div",
  immediate = false,
  className,
  children,
  ...rest
}: StaggerProps) {
  const Comp = motion[as] as typeof motion.div
  return (
    <Comp
      variants={staggerParent(stagger, delay)}
      initial="hidden"
      {...(immediate ? { animate: "show" } : { whileInView: "show", viewport: VIEWPORT })}
      className={className}
      {...rest}
    >
      {children}
    </Comp>
  )
}

type StaggerItemProps = HTMLMotionProps<"div"> & {
  as?: "div" | "li" | "article" | "a"
}

export function StaggerItem({ as = "div", className, children, ...rest }: StaggerItemProps) {
  const Comp = motion[as] as typeof motion.div
  return (
    <Comp variants={staggerChild} className={className} {...rest}>
      {children}
    </Comp>
  )
}

/* ------------------------------------------------------------------ */
/* TextReveal — headline animates word by word                         */
/* ------------------------------------------------------------------ */

type TextRevealProps = {
  text: string
  as?: ElementType
  className?: string
  delay?: number
  stagger?: number
  immediate?: boolean
}

export function TextReveal({
  text,
  as: Tag = "h2",
  className,
  delay = 0,
  stagger = 0.06,
  immediate = false,
}: TextRevealProps) {
  const words = text.split(" ")
  return (
    <Tag className={className} aria-label={text}>
      <motion.span
        aria-hidden
        className="inline"
        variants={staggerParent(stagger, delay)}
        initial="hidden"
        {...(immediate ? { animate: "show" } : { whileInView: "show", viewport: VIEWPORT })}
      >
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
            <motion.span
              className="inline-block will-change-transform"
              variants={{
                hidden: { y: "105%", opacity: 0 },
                show: {
                  y: "0%",
                  opacity: 1,
                  transition: { duration: DURATION.slow, ease: EASE },
                },
              }}
            >
              {word}
              {i < words.length - 1 ? " " : ""}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  )
}

/* ------------------------------------------------------------------ */
/* Magnetic — element gently follows the cursor                        */
/* ------------------------------------------------------------------ */

export function Magnetic({
  children,
  strength = 0.25,
  className,
}: {
  children: ReactNode
  strength?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const x = useSpring(0, { stiffness: 220, damping: 18, mass: 0.4 })
  const y = useSpring(0, { stiffness: 220, damping: 18, mass: 0.4 })

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      className={cn("inline-flex", className)}
      onPointerMove={(e) => {
        if (reduce || e.pointerType !== "mouse" || !ref.current) return
        const r = ref.current.getBoundingClientRect()
        x.set((e.clientX - (r.left + r.width / 2)) * strength)
        y.set((e.clientY - (r.top + r.height / 2)) * strength)
      }}
      onPointerLeave={() => {
        x.set(0)
        y.set(0)
      }}
    >
      {children}
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/* Spotlight — soft glow that follows the cursor inside a card         */
/* ------------------------------------------------------------------ */

type SpotlightProps = HTMLMotionProps<"div"> & {
  /** Any CSS color; defaults to a subtle foreground tint. */
  color?: string
  size?: number
}

export function Spotlight({
  color = "color-mix(in srgb, var(--foreground) 7%, transparent)",
  size = 360,
  className,
  children,
  ...rest
}: SpotlightProps) {
  const mx = useMotionValue(-1000)
  const my = useMotionValue(-1000)
  const background = useMotionTemplate`radial-gradient(${size}px circle at ${mx}px ${my}px, ${color}, transparent 70%)`

  return (
    <motion.div
      className={cn("group/spot relative isolate overflow-hidden", className)}
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect()
        mx.set(e.clientX - r.left)
        my.set(e.clientY - r.top)
      }}
      {...rest}
    >
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover/spot:opacity-100"
        style={{ background }}
      />
      {children as ReactNode}
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/* ScrollProgress — thin gradient bar at the top of the page           */
/* ------------------------------------------------------------------ */

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 })
  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-px origin-left bg-gradient-to-r from-tech via-ai to-brand opacity-70"
    />
  )
}

export { AnimatePresence, motion }
