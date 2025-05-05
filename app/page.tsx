import HeroSection from "@/components/hero-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import ExperienceSection from "@/components/experience-section"
import EducationSection from "@/components/education-section"
import HobbiesSection from "@/components/hobbies-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <HobbiesSection />
      <ContactSection />
    </div>
  )
}
