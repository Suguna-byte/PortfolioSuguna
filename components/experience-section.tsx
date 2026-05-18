"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Briefcase, Calendar, MapPin, ChevronDown } from "lucide-react"
import { DoodlesPattern } from "@/components/doodles-pattern"

const experiences = [
  {
    id: 1,
    role: "Software Engineer",
    company: "OperForce AI",
    period: "Jan 2026 – Present",
    location: "Pune, Ind",
    isCurrent: true,
    description: [
      "Developed modern and scalable frontend applications using React.js, JavaScript, and Bootstrap.",
      "Built responsive, high-performance, and user-friendly interfaces aligned with modern UI/UX standards and best practices.",
      "Created and integrated Django and Python backend services, REST APIs, authentication flows, and database-driven functionalities.",
      "Designed reusable frontend components and optimized application performance, accessibility, and maintainability.",
      "Handled end-to-end feature development including frontend architecture, backend integration, debugging, testing, and deployment.",
    ],
    technologies: ["React", "JavaScript", "Bootstrap", "Django", "Python", "PostgreSQL"],
  },
  {
    id: 2,
    role: "Junior Software Developer Engineer",
    company: "Redsage Global",
    period: "Aug 2025 – Nov 2025",
    location: "Hyderabad, Ind",
    isCurrent: false,
    description: [
      "Focused on frontend development using Next.js, React.js, TypeScript, and JavaScript.",
      "Translated business requirements into intuitive UI/UX designs and structured user flows.",
      "Collaborated with backend and design teams to ensure performance, scalability, and consistency.",
      "Delivered responsive and user-centric interfaces aligned with modern web standards.",
    ],
    technologies: ["React", "TypeScript", "Express", "PostgreSQL", "Redis", "Next.js", "Tailwind CSS"],
  },
  {
    id: 3,
    role: "Database Intern",
    company: "Tellme DigiInfotech",
    period: "Dec 2024 – Aug 2025",
    location: "Pune, Ind",
    isCurrent: false,
    description: [
      "Developed and maintained full-stack web applications using React.js, Next.js, Node.js, FastAPI, and PostgreSQL.",
      "Designed and implemented RESTful APIs for efficient data access and integration.",
      "Managed relational databases, optimized queries, and ensured data integrity using PostgreSQL.",
      "Collaborated with cross-functional teams for requirement analysis, system design, and implementation.",
      "Delivered scalable and maintainable solutions following best coding and documentation practices.",
    ],
    technologies: ["React", "Node.js", "FastAPI", "PostgreSQL", "Next.js", "NLP", "Python", "Express", "TypeScript"],
  },
]

export default function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [openId, setOpenId] = useState<number | null>(1)

  const toggle = (id: number) => setOpenId(prev => (prev === id ? null : id))

  return (
    <section id="experience" ref={ref} className="relative py-24 px-6 md:px-10 overflow-hidden">
      {/* ── Background ── */}
      <div className="absolute inset-0 -z-10 bg-background">
        <div className="absolute inset-0 text-foreground/15 blur-sm">
          <DoodlesPattern />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/90 to-background/80 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 section-container">
        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-block mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary/70 border border-primary/20 px-3 py-1 rounded-full"
          >
            Career Path
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Professional Experience</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            My journey through the tech industry, where I've honed my skills and made meaningful contributions.
          </p>
        </motion.div>

        {/* ── Timeline ── */}
        <div className="relative mx-auto" style={{width:'100%'}}>
          {/* Spine — draws down on scroll */}
          <motion.div
            className="absolute left-5 top-0 bottom-0 w-px bg-border origin-top"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          />
          {/* Glowing shimmer layer on the spine */}
          <motion.div
            className="absolute left-[19px] w-[2px] rounded-full bg-primary/50 blur-[1.5px]"
            style={{ top: 0 }}
            initial={{ height: "0%", opacity: 0 }}
            animate={isInView ? { height: "100%", opacity: 1 } : {}}
            transition={{ duration: 1.3, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          />

          <div className="space-y-6 pl-14">
            {experiences.map((exp, index) => {
              const isOpen = openId === exp.id

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.45, delay: 0.35 + index * 0.13 }}
                  className="relative"
                >

                  {/* Card — glows left border when open */}
                  <div
                    className={`
                      border rounded-xl overflow-hidden bg-card card-hover
                      transition-all duration-300
                      ${isOpen
                        ? "border-primary/40 border-l-[3px] border-l-primary shadow-sm shadow-primary/10"
                        : "border-border"
                      }
                    `}
                  >
                    {/* Clickable header */}
                    <button
                      onClick={() => toggle(exp.id)}
                      className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl"
                    >
                      <div className="flex items-start gap-4">
                        <div className={`p-2 mt-0.5 rounded-full shrink-0 transition-colors duration-200 ${isOpen ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"}`}>
                          <Briefcase className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="font-bold text-base leading-snug">{exp.role}</h3>
                            {exp.isCurrent && (
                              <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/25 animate-pulse">
                                Current
                              </span>
                            )}
                          </div>
                          <p className="font-medium text-sm mt-0.5 text-muted-foreground">{exp.company}</p>
                          <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />{exp.period}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />{exp.location}
                            </span>
                          </div>
                        </div>
                      </div>

                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="shrink-0 mt-1 text-muted-foreground"
                      >
                        <ChevronDown className="h-4 w-4" />
                      </motion.div>
                    </button>

                    {/* Expandable body */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="body"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 border-t border-border pt-5 space-y-5">
                            <ul className="space-y-2">
                              {exp.description.map((item, i) => (
                                <motion.li
                                  key={i}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.06, duration: 0.25 }}
                                  className="flex items-start gap-2 text-sm text-muted-foreground"
                                >
                                  <span className="text-primary mt-0.5 shrink-0">•</span>
                                  {item}
                                </motion.li>
                              ))}
                            </ul>

                            <div>
                              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                                Technologies
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {exp.technologies.map((tech, i) => (
                                  <motion.span
                                    key={tech}
                                    initial={{ opacity: 0, scale: 0.85 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.05 + i * 0.04, duration: 0.2 }}
                                    className="inline-block px-2.5 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium"
                                  >
                                    {tech}
                                  </motion.span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
