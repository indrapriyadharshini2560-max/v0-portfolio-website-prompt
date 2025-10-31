"use client"

import { useEffect, useRef } from "react"

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{ x: number; y: number; vx: number; vy: number }> = []

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      })
    }

    const animate = () => {
      ctx.fillStyle = "rgba(255, 255, 255, 0.01)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.fillStyle = "rgba(167, 139, 250, 0.3)"
        ctx.beginPath()
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background opacity-50" />

      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 text-balance text-foreground">
          Hi, I'm <span className="text-primary">Indra</span>
        </h1>

        <p className="text-2xl md:text-3xl font-semibold text-foreground/80 mb-4 text-balance">
          Full Stack Developer | Data Analytics Enthusiast
        </p>

        <p className="text-lg text-foreground/60 mb-10 max-w-2xl mx-auto text-balance leading-relaxed">
          Exploring the intersection of AI, Web Development, and Data Visualization
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-primary"
          >
            Hire Me
          </button>
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-secondary"
          >
            View My Work
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
