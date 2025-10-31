export default function ServicesSection() {
  const services = [
    {
      title: "Web Design",
      description: "Responsive, modern interfaces with intuitive UX",
      icon: "🎯",
    },
    {
      title: "App Development",
      description: "Android and web-based app development",
      icon: "📱",
    },
    {
      title: "Web Analytics",
      description: "Insights from web data for optimization",
      icon: "📈",
    },
    {
      title: "Data Visualization",
      description: "Transforming data into meaningful visuals",
      icon: "📊",
    },
  ]

  return (
    <section id="services" className="py-24 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-12 text-foreground">
          My <span className="text-primary">Services</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.title} className="premium-card p-8 hover:border-primary/30 transition-all duration-300">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
              <p className="text-foreground/60">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
