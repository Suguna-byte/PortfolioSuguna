"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, X, ArrowUpRight } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "DNA Classification to detect e-coli virus",
    subtitle: "Detection of e-coli Virus using DNA Promoter Classification",
    description:
      "Detects if a person has e-coli virus using DNA dataset encoded into four types of DNA molecule(A,C,G,T) Preprocessing data into usable format and training MLP model.",
    image: "/dna.jpg",
    tags: ["Django", "Python", "React"],
    // liveUrl: "#",
    // githubUrl: "#",
    details:
      "To detect the presence of an E. coli infection using DNA sequence data, the input DNA strings—composed of the nucleotides A, C, G, and T—are first preprocessed by converting each character into a one-hot encoded format, transforming the sequences into numerical arrays suitable for machine learning models. The sequences are also standardized to a fixed length for consistency. Labels are assigned to indicate whether each sequence corresponds to an infected or uninfected individual. This processed data is then used to train a Multi-Layer Perceptron (MLP) model, a type of neural network that consists of an input layer, one or more hidden layers with nonlinear activation functions, and a final output layer with a sigmoid function for binary classification. The model is trained using a binary cross-entropy loss function and evaluated based on metrics such as accuracy and AUC to determine its effectiveness in detecting E. coli infections from DNA sequences.",
  },
  {
    id: 2,
    title: "Bharat Microfinance Report",
    subtitle: "Digitalization",
    description: "A comprehensive Dashboard for tracking amd analyzing microfinance activities",
    image: "/report.jpg",
    tags: ["Next.js", "D3.js", "Python"],
    liveUrl: "#",
    githubUrl: "#",
    details:
      "Interactive dashboard to analyse and view report with multiple charts, ghraphs and maps",
  },
  {
    id: 3,
    title: "GradeGuide",
    subtitle: "Student Evaluation System",
    description: "",
    image: "/grade.jpg",
    tags: ["JavaScript", "Python", "Django"],
    liveUrl: "#",
    githubUrl: "#",
    details:
      "Student evaluation system that tracks performance on the basis of their previous grades, attendance and submissions suggesting ways to improve their performance",
  },
  {
    id: 4,
    title: "",
    subtitle: "Interactive map showing spread of businesses all over India",
    description: "A platform to browse buisnesses based on categories and location",
    image: "/map.jpg",
    tags: ["React", "Express", "Node.js", "PostgresSQL"],
    liveUrl: "#",
    githubUrl: "#",
    details:
      "Interactive map showing spread of businesses all over India, with multiple filters, categories, and option to download data",
  },

  {
    id: 5,
    title: "Breast Cancer Detection",
    subtitle: "A Machine Learning-Based Breast Cancer Detection System",
    description: "data-driven application that uses machine learning algorithms to detect the presence of breast cancer based on clinical and cellular data. ",
    image: "/cancer.jpg",
    tags: ["React", "Flask"],
    liveUrl: "#",
    githubUrl: "#",
    details:
      "Instead of relying on images, this system processes structured medical data—such as tumor size, cell characteristics, and other biomarkers—to predict whether a tumor is benign or malignant, assisting healthcare professionals in early diagnosis.",
  },
]

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const openProjectDetails = (project) => {
    setSelectedProject(project)
  }

  const closeProjectDetails = () => {
    setSelectedProject(null)
  }

  return (
    <section id="projects" ref={ref} className="bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle max-w-2xl">
            A showcase of my recent work, demonstrating my skills in design, development, and problem-solving.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full border border-border bg-card shadow-sm hover:shadow-md transition-all duration-300 rounded-xl card-hover">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="mb-2">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                  </div>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="bg-accent/10">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <Button
                      variant="outline"
                      onClick={() => openProjectDetails(project)}
                      className="group border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      View Details
                      <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Button>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-primary">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub repository"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      </Button>
                      <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-primary">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live demo">
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Project Details Modal */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={closeProjectDetails}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="bg-card rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 sm:h-80">
                <Image
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full"
                  onClick={closeProjectDetails}
                  aria-label="Close details"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="p-8">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                  <p className="text-muted-foreground">{selectedProject.subtitle}</p>
                </div>
                <p className="text-muted-foreground mb-6">{selectedProject.details}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="bg-accent/10">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                      View Live Demo
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    asChild
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                      View Source Code
                      <Github className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
