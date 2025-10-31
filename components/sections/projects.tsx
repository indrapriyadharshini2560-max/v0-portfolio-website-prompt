export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-background to-card/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-balance">
          Featured{" "}
          <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Flight Booking System",
              description: "Full-stack flight booking platform with modern UI and backend management",
              tech: ["React", "Django", "MySQL"],
              image: "/flight-booking-interface.jpg",
            },
            {
              title: "Library Management",
              description: "Complete library management system with inventory and user tracking",
              tech: ["Python", "Django", "MySQL"],
              image: "/library-management-dashboard.jpg",
            },
            {
              title: "Weather App",
              description: "Real-time weather application with location-based forecasting",
              tech: ["React", "Java", "API"],
              image: "/weather-application.jpg",
            },
            {
              title: "Camera App",
              description: "Mobile camera app with image capture and processing capabilities",
              tech: ["Android", "Java"],
              image: "/mobile-camera-app.jpg",
            },
          ].map((project) => (
            <div
              key={project.title}
              className="group rounded-2xl overflow-hidden border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative h-64 overflow-hidden bg-card">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6 bg-card">
                <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-foreground/60 mb-4 text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-accent/20 text-accent text-xs font-medium rounded-full border border-accent/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-foreground/60 mb-4">More projects coming soon!</p>
          <div className="inline-block px-8 py-3 bg-accent/10 border border-accent/30 rounded-full">
            <span className="text-accent font-medium">Stay tuned for updates</span>
          </div>
        </div>
      </div>
    </section>
  )
}
