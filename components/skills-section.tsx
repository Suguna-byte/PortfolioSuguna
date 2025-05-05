"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import {
  Code,
  Database,
  Server,
  Layout,
  Cloud,
  Figma,
  GitBranch,
  Globe,
  Smartphone,
  Cpu,
  LineChart,
  Shield,
} from "lucide-react"

const skills = [
  {
    id: "frontend",
    name: "Frontend",
    icon: <Layout />,
    description: "Creating responsive, accessible, and performant user interfaces with modern frameworks and tools.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: "backend",
    name: "Backend",
    icon: <Server />,
    description: "Building robust server-side applications with scalable architectures and efficient APIs.",
    technologies: ["Node.js", "Express", "Python", "Django", "GraphQL", "FastAPI"],
  },
  {
    id: "database",
    name: "Database",
    icon: <Database />,
    description: "Designing and optimizing database schemas for performance, security, and scalability.",
    technologies: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  // {
  //   id: "devops",
  //   name: "DevOps",
  //   icon: <Cloud />,
  //   description: "Implementing CI/CD pipelines and managing cloud infrastructure for seamless deployment.",
  //   technologies: ["Docker", "AWS", "GitHub Actions", "Kubernetes", "Terraform"],
  // },
  {
    id: "design",
    name: "Design",
    icon: <Figma />,
    description: "Creating user-centered designs with a focus on usability, accessibility, and visual appeal.",
    technologies: ["UI/UX", "Figma"],
  },
  {
    id: "mobile",
    name: "Mobile",
    icon: <Smartphone />,
    description: "Developing cross-platform mobile applications with native-like performance and feel.",
    technologies: ["React Native", "Flutter"],
  },
  // {
  //   id: "web3",
  //   name: "Web3",
  //   icon: <Globe />,
  //   description: "Building decentralized applications and integrating blockchain technologies.",
  //   technologies: ["Ethereum", "Solidity", "Smart Contracts", "Web3.js", "NFTs"],
  // },
  {
    id: "ai",
    name: "AI & ML",
    icon: <Cpu />,
    description: "Implementing machine learning models and AI-powered features in applications.",
    technologies: ["TensorFlow", "PyTorch", "Natural Language Processing", "Scikit-learn","Pandas","NumPy","Keras","Matplotlib", "Seaborn", "BioPython"],
  },
  // {
  //   id: "analytics",
  //   name: "Analytics",
  //   icon: <LineChart />,
  //   description: "Implementing data tracking and visualization to derive insights and improve user experience.",
  //   technologies: ["Google Analytics", "Mixpanel", "Hotjar", "A/B Testing", "Data Visualization"],
  // },
  // {
  //   id: "security",
  //   name: "Security",
  //   icon: <Shield />,
  //   description: "Implementing best practices for application security and data protection.",
  //   technologies: ["Authentication", "Authorization", "OWASP", "Penetration Testing", "Encryption"],
  // },
  // {
  //   id: "version-control",
  //   name: "Version Control",
  //   icon: <GitBranch />,
  //   description: "Managing code repositories and collaborating with teams using version control systems.",
  //   technologies: ["Git", "GitHub", "GitLab", "Branching Strategies", "Code Reviews"],
  // },
  {
    id: "coding",
    name: "Languages",
    icon: <Code />,
    description: "Proficient in multiple programming languages for various application domains.",
    technologies: ["JavaScript", "TypeScript", "Python", "C++"],
  },
]

export default function SkillsSection() {
  const [activeSkill, setActiveSkill] = useState("frontend")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="skills" ref={ref} className="bg-muted/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle mx-auto">
            My toolkit for creating digital experiences across the full development stack.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 mb-12">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex flex-col items-center"
            >
              <button
                onClick={() => setActiveSkill(skill.id)}
                className={`skill-icon group ${activeSkill === skill.id ? "skill-icon-active" : ""}`}
                aria-label={`View ${skill.name} skills`}
              >
                {skill.icon}
              </button>
              <span className="mt-2 text-xs font-medium text-center">{skill.name}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {skills.map((skill) => (
            <div key={skill.id} className={`${activeSkill === skill.id ? "block" : "hidden"}`}>
              <Card className="border border-border overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg mr-3 text-primary">{skill.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold">{skill.name}</h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6">{skill.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-accent/10 text-accent-foreground text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
