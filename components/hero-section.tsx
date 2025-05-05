"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-primary/10 to-transparent opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-secondary/10 to-transparent opacity-60"></div>
      </div>

      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                <span>Available for new projects</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Hi, I'm <span className="text-gradient">Suguna P J</span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-lg">
              I’m a full-stack explorer who turns chai and code into delightfully interactive web applications, dives into machine learning, and creates unique digital experiences. When I’m not busy debugging reality, I’m behind the camera or blogging about life’s odd little moments—because storytelling isn’t just for scripts.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="rounded-full"
                  onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                >
                  View my work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full"
                  onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Ping me
                </Button>
              </div>

              <div className="flex items-center space-x-4 pt-4">
                <div className="flex -space-x-2">
                  {["React", "Node.js", "TypeScript"].map((tech, i) => (
                    <div
                      key={tech}
                      className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-mono text-primary border border-primary/30"
                      style={{ zIndex: 3 - i }}
                    >
                      {tech.charAt(0)}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">Specialized in modern web technologies</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -z-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -z-10 w-48 h-48 bg-secondary/10 rounded-full blur-xl -right-12 -bottom-10"></div>

              {/* Profile image */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden blob-shape border-4 border-background shadow-xl">
                <Image
                  src="/me1.jpg"
                  alt="Suguna P J"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating elements */}
              <div className="absolute -right-6 top-1/4 w-16 h-16 bg-accent rounded-2xl rotate-12 animate-float opacity-80"></div>
              <div
                className="absolute -left-8 bottom-10 w-12 h-12 bg-primary rounded-full animate-float opacity-80"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute right-12 -bottom-6 w-10 h-10 bg-secondary rounded-lg rotate-45 animate-float opacity-80"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="animate-bounce"
        >
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={() => document.querySelector("#skills")?.scrollIntoView({ behavior: "smooth" })}
          >
            <ChevronDown className="h-6 w-6" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
