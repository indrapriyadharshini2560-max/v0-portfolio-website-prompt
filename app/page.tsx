import HeroSection from "@/components/sections/hero"
import AboutSection from "@/components/sections/about"
import SkillsSection from "@/components/sections/skills"
import ServicesSection from "@/components/sections/services"
import ExperienceSection from "@/components/sections/experience"
import ProjectsSection from "@/components/sections/projects"
import ContactSection from "@/components/sections/contact"
import Navigation from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ServicesSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}
