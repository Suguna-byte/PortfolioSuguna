"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Briefcase, GraduationCap, Calendar } from "lucide-react"

const experiences = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    company: "Tech Innovations Inc.",
    period: "2021 - Present",
    description:
      "Lead developer for multiple web applications, managing a team of 5 developers. Implemented CI/CD pipelines and improved application performance by 40%.",
    type: "work",
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    period: "2018 - 2021",
    description:
      "Developed and maintained various web applications using React, Node.js, and PostgreSQL. Collaborated with UX designers to implement responsive designs.",
    type: "work",
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "WebCraft Agency",
    period: "2016 - 2018",
    description:
      "Created responsive websites and web applications for clients across different industries. Specialized in JavaScript frameworks and CSS animations.",
    type: "work",
  },
  {
    id: 4,
    title: "Master's in Computer Science",
    company: "Tech University",
    period: "2014 - 2016",
    description:
      "Specialized in Web Technologies and Software Engineering. Thesis on 'Optimizing React Applications for Performance'.",
    type: "education",
  },
  {
    id: 5,
    title: "Bachelor's in Computer Science",
    company: "State University",
    period: "2010 - 2014",
    description: "Graduated with honors. Focused on programming fundamentals, data structures, and algorithms.",
    type: "education",
  },
]

export default function TimelineSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="timeline" ref={ref} className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="section-heading">Experience & Education</h2>
          <p className="max-w-3xl text-gray-600 dark:text-gray-400 text-lg">
            My professional journey and educational background that shaped my career.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="timeline-line left-1/2 transform -translate-x-1/2"></div>

          {experiences.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-12 ${
                index % 2 === 0 ? "md:ml-auto md:mr-0 md:pl-16" : "md:mr-auto md:ml-0 md:pr-16"
              } md:w-1/2`}
            >
              <div
                className={`timeline-dot ${
                  index % 2 === 0 ? "md:-left-2 left-1/2 -translate-x-1/2" : "md:-right-2 left-1/2 -translate-x-1/2"
                } top-5`}
              ></div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-primary">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-primary/10 rounded-full mr-3 text-primary">
                    {item.type === "work" ? <Briefcase className="h-5 w-5" /> : <GraduationCap className="h-5 w-5" />}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{item.company}</p>
                  </div>
                </div>
                <div className="flex items-center text-sm text-primary font-medium mb-4">
                  <Calendar className="h-4 w-4 mr-1" />
                  {item.period}
                </div>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
