export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-12 text-foreground">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg text-foreground/70 leading-relaxed">
              I'm Indra Priyadharshini, a Full Stack Web Developer and Data Analytics enthusiast from Chennai. Currently
              pursuing my B.E. in Computer Science, I love exploring how AI drives innovation in web technologies and
              enjoy working on creative, data-driven projects.
            </p>

            <div className="premium-card p-6">
              <h3 className="font-bold text-foreground mb-2">🎓 Education</h3>
              <p className="text-foreground/60 text-sm">
                B.E. in Computer Science Engineering, 2nd Year
                <br />
                New Prince Shri Bhavani College of Engineering and Technology
              </p>
            </div>

            <div className="premium-card p-6">
              <h3 className="font-bold text-foreground mb-2">🎯 Career Goal</h3>
              <p className="text-foreground/60 text-sm">
                To grow as a developer and contribute to intelligent, user-focused digital solutions.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="premium-card p-6 text-center">
              <div className="text-4xl mb-3">🧠</div>
              <p className="font-semibold text-foreground">Learning</p>
            </div>
            <div className="premium-card p-6 text-center">
              <div className="text-4xl mb-3">⚡</div>
              <p className="font-semibold text-foreground">Innovation</p>
            </div>
            <div className="premium-card p-6 text-center">
              <div className="text-4xl mb-3">💻</div>
              <p className="font-semibold text-foreground">Full Stack</p>
            </div>
            <div className="premium-card p-6 text-center">
              <div className="text-4xl mb-3">📊</div>
              <p className="font-semibold text-foreground">Analytics</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
