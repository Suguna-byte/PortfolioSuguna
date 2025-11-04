"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Database, Server, Layout, Cloud, Cpu, Globe, Zap } from "lucide-react"
import { DoodlesPattern } from "@/components/doodles-pattern"

const skills = [
  {
    name: "Frontend",
    icon: <Layout className="h-6 w-6" />,
    items: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 95 },
    ],
  },
  {
    name: "Backend",
    icon: <Server className="h-6 w-6" />,
    items: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "Python", level: 75 },
      { name: "Django", level: 70 },
    ],
  },
  {
    name: "Database",
    icon: <Database className="h-6 w-6" />,
    items: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Redis", level: 70 },
      { name: "Firebase", level: 75 },
    ],
  },
  {
    name: "DevOps",
    icon: <Cloud className="h-6 w-6" />,
    items: [
      { name: "Docker", level: 80 },
      { name: "AWS", level: 75 },
      { name: "CI/CD", level: 70 },
      { name: "Kubernetes", level: 65 },
    ],
  },
]

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="about" ref={ref} className="relative py-24 p-10 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-background">
        <div className="absolute inset-0 text-foreground/20">
          <DoodlesPattern />
        </div>
        {/* Subtle overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/50 via-background/70 to-background/50" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="section-heading">About Me</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              I'm a passionate Full Stack Developer with over 5 years of experience building web applications. I
              specialize in creating responsive, user-friendly interfaces and robust backend systems.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              My journey in web development started with a curiosity about how websites work, which led me to dive deep
              into both frontend and backend technologies. I'm constantly learning and exploring new technologies to
              stay at the cutting edge of web development.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
              {[
                { icon: <Globe className="h-6 w-6" />, text: "Problem Solver" },
                { icon: <Zap className="h-6 w-6" />, text: "Fast Learner" },
                { icon: <Cpu className="h-6 w-6" />, text: "Tech Enthusiast" },
                { icon: <Code className="h-6 w-6" />, text: "Clean Coder" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md"
                >
                  <div className="p-3 bg-primary/10 rounded-full text-primary mb-3">{item.icon}</div>
                  <span className="text-sm font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="space-y-8"
          >
            {skills.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 + 0.3 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 card-hover"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-primary/10 rounded-full mr-3 text-primary">{category.icon}</div>
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                </div>

                <div className="space-y-4">
                  {category.items.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                        <span className="text-sm font-medium text-primary">{skill.level}%</span>
                      </div>
                      <div className="progress-bar">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{
                            duration: 1,
                            delay: categoryIndex * 0.1 + skillIndex * 0.1 + 0.5,
                          }}
                          className="progress-bar-fill bg-gradient-to-r from-primary to-emerald-500"
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
