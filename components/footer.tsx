"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"
import Link from "next/link"
import Logo from "@/components/logo"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Hobbies", href: "#hobbies" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <footer className="py-12 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link href="#home" className="flex items-center mb-4">
              <Logo className="w-10 h-10 text-primary" />
              <span className="ml-3 text-xl font-bold">Suguna P J</span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-xs">
            Creative developer blending code, design, and a dash of curiosity to craft cool digital experiences.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector(link.href)?.scrollIntoView({
                        behavior: "smooth",
                      })
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-muted-foreground mb-2">jayarajansuguna@gmail.com</p>
            <p className="text-muted-foreground mb-2"></p>
            <p className="text-muted-foreground"></p>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-between"
          >
            <p className="text-muted-foreground text-center md:text-left">
              © {currentYear} Suguna P J. All rights reserved.
            </p>
            <div className="flex items-center mt-4 md:mt-0 text-muted-foreground text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 mx-1 text-red-500" />
              <span>using Next.js, Framer Motion & Tailwind CSS</span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
