"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award, Calendar } from "lucide-react"

const education = [
  {
    id: 1,
    degree: "Master of Science in Computer Application",
    institution: "PES Modern College of Engineering, SPPU",
    period: "2023 - 2025",
    description:
      " ",
    achievements: [
      "72%",
      "Published 1 research papers on Epigenetic biomarkers for predicting neurogenerative diseases using Machine learning",
      "Allumni coordinator",
      "Coordinator for S4DS- Society for Data Science",
    ],
  },
  {
    id: 2,
    degree: "Bachelor of Science in Computer Science",
    institution: "Kalindi College, DU",
    period: "2019 - 2022",
    description: " ",
    achievements: ["Writer, Editor for College news Letter", "Vocalist at Classical music society", "Lead-vocalist at Ivory band"],
  },
]

const certifications = [
  {
    id: 1,
    name: "Binformatics",
    // issuer: "Amazon Web Service",
    // date: "2022",
    description: "Bioinformatics using python",
  },
  {
    id: 2,
    name: "Javascript",
    // issuer: "Google Cloud",
    // date: "2021",
    description: "Advanced java script",
  },
  // {
  //   id: 3,
  //   name: "Android app using Flutter",
  //   // issuer: "Cloud Native Computing Foundation",
  //   // date: "2020",
  //   description: "Expertise in making and managing Android Apps",
  // },
  // {
  //   id: 4,
  //   name: "React Advanced Patterns",
  //   issuer: "Frontend Masters",
  //   date: "2019",
  //   description: "Mastery of advanced React patterns, performance optimization, and state management.",
  // },
]

export default function EducationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="education" ref={ref} className="bg-muted/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="section-title">Education & Certifications</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            My academic background and professional certifications that have shaped my expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {education.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border border-border card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-primary/10 rounded-full mr-3 text-primary">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{item.degree}</h3>
                      <p className="text-muted-foreground">{item.institution}</p>
                    </div>
                  </div>

                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{item.period}</span>
                  </div>

                  <p className="text-muted-foreground mb-4">{item.description}</p>

                  <div>
                    <h4 className="text-sm font-medium mb-2">Achievements:</h4>
                    <ul className="space-y-1">
                      {item.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span className="text-muted-foreground text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl font-bold mb-6"
        >
          Professional Certifications
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <Card className="h-full border border-border card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="p-2 bg-primary/10 rounded-full mr-3 text-primary">
                      <Award className="h-4 w-4" />
                    </div>
                    <h4 className="font-medium text-sm">{cert.name}</h4>
                  </div>
                  <p className="text-xs text-muted-foreground mb-1">{cert.issuer}</p>
                  <p className="text-xs text-muted-foreground mb-3">{cert.date}</p>
                  <p className="text-xs text-muted-foreground">{cert.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
