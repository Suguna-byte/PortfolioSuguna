"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    id: 1,
    role: "Database Intern",
    company: "Tellme DigiInfotech",
    period: "Dec 2025 - Present",
    location: "Pune, Ind",
    description: [
      "Creating Full stack Web Application, developing frontend, backend and database management"
    ],
    technologies: ["React", "Node.js", "FastAPI", "PostgresSQL", "Next.js", "NLP", "Python", "express", "TypeScript"],
  },
  // {
  //   id: 2,
  //   role: "Full Stack Developer",
  //   company: "Digital Horizon",
  //   period: "2018 - 2021",
  //   location: "Seattle, WA",
  //   description: [
  //     "Developed and maintained multiple web applications using React and Node.js",
  //     "Collaborated with UX designers to implement responsive, accessible interfaces",
  //     "Optimized database queries resulting in 30% faster page load times",
  //     "Integrated third-party APIs and services to enhance application functionality",
  //   ],
  //   technologies: ["React", "TypeScript", "Express", "PostgreSQL", "Redis"],
  // },
  // {
  //   id: 3,
  //   role: "Frontend Developer",
  //   company: "CreativeWeb Studios",
  //   period: "2016 - 2018",
  //   location: "Portland, OR",
  //   description: [
  //     "Built responsive websites and web applications for clients across various industries",
  //     "Specialized in creating interactive UI components and animations",
  //     "Implemented A/B testing that increased conversion rates by 15%",
  //     "Collaborated with marketing teams to optimize SEO and performance",
  //   ],
  //   technologies: ["JavaScript", "HTML/CSS", "Vue.js", "Webpack", "SASS"],
  // },
]

export default function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="experience" ref={ref} className="bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            My journey through the tech industry, where I've honed my skills and made meaningful contributions.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border border-border overflow-hidden card-hover">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] h-full">
                    <div className="bg-muted p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center mb-4">
                          <div className="p-2 bg-primary/10 rounded-full mr-3 text-primary">
                            <Briefcase className="h-5 w-5" />
                          </div>
                          <h3 className="font-bold text-lg">{experience.role}</h3>
                        </div>
                        <p className="font-medium mb-1">{experience.company}</p>
                        <p className="text-muted-foreground mb-4">{experience.location}</p>
                        <div className="flex items-center text-sm text-muted-foreground mb-4">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{experience.period}</span>
                        </div>
                      </div>
                      <div className="hidden md:block">
                        <h4 className="text-sm font-medium mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="font-medium mb-4">Description</h4>
                      <ul className="space-y-2">
                        {experience.description.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="md:hidden mt-6">
                        <h4 className="text-sm font-medium mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
