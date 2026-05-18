"use client"

import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, X, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { DoodlesPattern } from "@/components/doodles-pattern"

const projects = [
  {
    id: 1,
    title: "DNA Classification to Detect E-Coli Virus",
    subtitle: "Detection of E-Coli using DNA Promoter Classification",
    description:
      "Detects if a person has E-Coli virus using DNA dataset encoded into nucleotides (A, C, G, T). Preprocessing data and training an MLP model.",
    image: "/dna.jpg",
    tags: ["Django", "Python", "React"],
    liveUrl: null,
    githubUrl: null,
    details:
      "To detect the presence of an E. coli infection using DNA sequence data, the input DNA strings—composed of the nucleotides A, C, G, and T—are first preprocessed by converting each character into a one-hot encoded format, transforming the sequences into numerical arrays suitable for machine learning models. The sequences are also standardized to a fixed length for consistency. Labels are assigned to indicate whether each sequence corresponds to an infected or uninfected individual. This processed data is then used to train a Multi-Layer Perceptron (MLP) model, a type of neural network that consists of an input layer, one or more hidden layers with nonlinear activation functions, and a final output layer with a sigmoid function for binary classification.",
  },
  {
    id: 2,
    title: "Bharat Microfinance Report",
    subtitle: "Digitalization Dashboard",
    description: "A comprehensive dashboard for tracking and analyzing microfinance activities across India.",
    image: "/report.jpg",
    tags: ["Next.js", "D3.js", "Python"],
    liveUrl: "#",
    githubUrl: "#",
    details:
      "Interactive dashboard to analyse and view reports with multiple charts, graphs and maps. Provides real-time insights into microfinance data with filtering, drill-down capabilities, and exportable reports.",
  },
  {
    id: 3,
    title: "GradeGuide",
    subtitle: "Student Evaluation System",
    description: "Tracks student performance based on grades, attendance, and submissions — then suggests ways to improve.",
    image: "/grade.jpg",
    tags: ["JavaScript", "Python", "Django"],
    liveUrl: "#",
    githubUrl: "#",
    details:
      "Student evaluation system that tracks performance on the basis of their previous grades, attendance and submissions suggesting ways to improve their performance. Uses historical data to surface actionable feedback for students and educators.",
  },
  {
    id: 4,
    title: "BizMapper India",
    subtitle: "Interactive Business Map",
    description: "A platform to browse businesses based on categories and location across India with filterable data export.",
    image: "/map.jpg",
    tags: ["React", "Express", "Node.js", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
    details:
      "BizMapper India is a web app built with PostgreSQL, Node.js, React, and Leaflet that visualises the spread of businesses across India on an interactive map. Users can filter by category, state, district, and pin code to explore business locations. The app also features a data download tool to export only the filtered or selected business data as needed.",
  },
  {
    id: 5,
    title: "Breast Cancer Detection",
    subtitle: "ML-Based Medical Diagnosis",
    description: "A data-driven application using machine learning to detect breast cancer presence from structured clinical data.",
    image: "/cancer.jpg",
    tags: ["React", "Flask"],
    liveUrl: "#",
    githubUrl: "#",
    details:
      "Instead of relying on images, this system processes structured medical data—such as tumor size, cell characteristics, and other biomarkers—to predict whether a tumor is benign or malignant, assisting healthcare professionals in early diagnosis. The model is evaluated for precision, recall, and AUC to minimise false negatives.",
  },
]

type Project = typeof projects[number]

// ── Shared fade-up variant ────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="projects" ref={ref} className="relative py-24 px-6 md:px-10 overflow-hidden">
      {/* ── Background ── */}
      <div className="absolute inset-0 -z-10 bg-background">
        <div className="absolute inset-0 text-foreground/15 blur-sm">
          <DoodlesPattern />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/90 to-background/80 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 section-container px-4 md:px-8">
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
            Portfolio
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Featured Projects</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating my skills in design, development, and problem-solving.
          </p>
        </motion.div>

        {/* ── Project Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={index}
              className="group relative"
            >

              <div
                className="relative h-full flex flex-col rounded-xl border border-border bg-card overflow-hidden
                           shadow-sm transition-all duration-300 cursor-pointer
                           hover:border-primary/40 hover:shadow-[0_0_0_1px_hsl(var(--primary)/0.15),0_8px_24px_-8px_hsl(var(--primary)/0.2)]"
                onClick={() => setSelectedProject(project)}
              >
                {/* Image area with reveal overlay */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Dark overlay that lifts on hover to reveal a tinted glow */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-primary/10 transition-colors duration-400" />

                  {/* Tags slide up into the image on hover */}
                  <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-350 ease-out p-3 flex flex-wrap gap-1.5 bg-gradient-to-t from-black/70 to-transparent">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-medium px-2 py-0.5 rounded bg-white/20 text-white backdrop-blur-sm border border-white/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card body */}
                <div className="flex flex-col flex-1 p-5 gap-3">
                  <div>
                    <h3 className="font-bold text-base leading-snug group-hover:text-primary transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{project.subtitle}</p>
                  </div>
                  <p className="text-sm text-muted-foreground flex-1 line-clamp-3">{project.description}</p>

                  {/* Bottom row — static tags (desktop) + action */}
                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-border/50">
                    <div className="flex gap-1.5 flex-wrap md:hidden">
                      {project.tags.slice(0, 2).map(tag => (
                        <Badge key={tag} variant="outline" className="bg-accent/10 text-[10px] px-1.5 py-0">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="hidden md:flex gap-1.5 flex-wrap">
                      {project.tags.slice(0, 2).map(tag => (
                        <Badge key={tag} variant="outline" className="bg-accent/10 text-[10px] px-1.5 py-0">
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 2 && (
                        <Badge variant="outline" className="bg-accent/10 text-[10px] px-1.5 py-0 text-muted-foreground">
                          +{project.tags.length - 2}
                        </Badge>
                      )}
                    </div>

                    <button className="flex items-center gap-1 text-xs font-medium text-primary group-hover:gap-2 transition-all duration-200">
                      Details <ArrowUpRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Modal ── */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 md:p-10 bg-black/40 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              key="modal"
              initial={{ scale: 0.93, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.93, opacity: 0, y: 16 }}
              transition={{ type: "spring", damping: 24, stiffness: 260 }}
              className="bg-card rounded-2xl shadow-2xl border border-border max-w-2xl w-full max-h-[80vh] overflow-auto"
              onClick={e => e.stopPropagation()}
            >
              {/* Modal image — blurred edges with gradient overlay */}
              <div className="relative h-52 sm:h-72 overflow-hidden rounded-t-2xl">
                <Image
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
                {/* Gradient fade at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                {/* Title pinned on top of image */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold leading-snug drop-shadow-sm">{selectedProject.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{selectedProject.subtitle}</p>
                </div>
                {/* Close button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-3 right-3 bg-black/50 hover:bg-black/70 text-white rounded-full h-8 w-8"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {/* Modal body */}
              <div className="p-6 space-y-5">
                <p className="text-sm text-muted-foreground leading-relaxed">{selectedProject.details}</p>

                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="bg-primary/10 text-primary border-primary/20">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  {selectedProject.liveUrl && selectedProject.liveUrl !== "#" && (
                    <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                        Live Demo <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
                      </a>
                    </Button>
                  )}
                  {selectedProject.githubUrl && selectedProject.githubUrl !== "#" && (
                    <Button variant="outline" size="sm" asChild className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                        Source Code <Github className="ml-1.5 h-3.5 w-3.5" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
