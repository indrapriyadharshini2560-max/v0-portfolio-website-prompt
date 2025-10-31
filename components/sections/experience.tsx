export default function ExperienceSection() {
  const experiences = [
    {
      title: "Full Stack Development Internship",
      company: "Inspires softech Pvt Ltd",
      projects: ["Frontend: Flight Booking Ticket", "Backend: Library Management System"],
      icon: "💼",
    },
    {
      title: "Mobile App Development Internship",
      company: "Crud Academy Pvt Ltd",
      projects: ["Weather App", "Camera App"],
      icon: "📱",
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-balance">
          Internship{" "}
          <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Experience
          </span>
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={exp.title} className="relative">
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="text-3xl mb-4">{exp.icon}</div>
                  {index < experiences.length - 1 && (
                    <div className="w-1 h-24 bg-gradient-to-b from-accent to-secondary" />
                  )}
                </div>

                <div className="flex-1 p-8 bg-gradient-to-br from-card to-card/50 rounded-2xl border border-border hover:border-accent/50 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{exp.title}</h3>
                  <p className="text-accent font-semibold mb-4">{exp.company}</p>
                  <ul className="space-y-3">
                    {exp.projects.map((project) => (
                      <li key={project} className="flex items-start gap-3 text-foreground/70">
                        <span className="text-accent mt-1">✓</span>
                        <span>{project}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
