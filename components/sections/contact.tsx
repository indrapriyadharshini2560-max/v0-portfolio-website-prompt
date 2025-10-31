"use client"

import type React from "react"

import { useState } from "react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = `mailto:indrapriyadharshini999@gmail.com?subject=Message from ${formData.name}&body=${formData.message}`
  }

  const contacts = [
    {
      label: "Email",
      value: "indrapriyadharshini999@gmail.com",
      icon: "📧",
      href: "mailto:indrapriyadharshini999@gmail.com",
    },
    { label: "Phone", value: "9884968345", icon: "📱", href: "tel:9884968345" },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/indra-priyadharshini-1b6b25360",
      icon: "💼",
      href: "https://linkedin.com/in/indra-priyadharshini-1b6b25360",
    },
    {
      label: "GitHub",
      value: "indrapriyadharshinni2560-max",
      icon: "🖥️",
      href: "https://github.com/indrapriyadharshinni2560-max",
    },
    { label: "Instagram", value: "@indravibes", icon: "📸", href: "https://instagram.com/indravibes" },
  ]

  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
          Let's{" "}
          <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Connect
          </span>
        </h2>

        <p className="text-lg text-foreground/60 mb-12">
          I'd love to hear from you! Reach out through any of these channels.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-accent transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Send Message
            </button>
          </form>

          <div className="space-y-4">
            {contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-6 bg-gradient-to-br from-card to-card/50 rounded-2xl border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg group"
              >
                <div className="text-3xl mt-1">{contact.icon}</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground mb-1">{contact.label}</h4>
                  <p className="text-foreground/60 text-sm group-hover:text-accent transition-colors truncate">
                    {contact.value}
                  </p>
                </div>
                <svg
                  className="w-5 h-5 text-foreground/40 group-hover:text-accent transition-colors mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-20 pt-12 border-t border-border text-center text-foreground/60">
        <p>© 2025 Indra Priyadharshini. All rights reserved.</p>
      </div>
    </section>
  )
}
