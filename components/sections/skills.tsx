export default function SkillsSection() {
  const skillCategories = [
    {
      name: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "ReactJS"],
      icon: "🎨",
    },
    {
      name: "Backend",
      skills: ["Python", "Django", "Java", "C"],
      icon: "⚙️",
    },
    {
      name: "Database",
      skills: ["MySQL"],
      icon: "🗄️",
    },
    {
      name: "Tools & Analytics",
      skills: ["Excel", "Web Analytics", "Data Visualization"],
      icon: "📊",
    },
  ]

  return (
    <section id="skills" className="py-24 px-4 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-12 text-foreground">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div key={category.name} className="premium-card p-8">
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">{category.name}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-primary/10 text-primary font-medium rounded-full border border-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
