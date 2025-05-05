"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Send } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    setIsSubmitting(false)

    // You would typically show a success message here
    alert("Message sent successfully!")
  }

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "jayarajansuguna@gmail.com",
      href: "jayarajansuguna@gmail.com",
    },
    // {
    //   icon: <Phone className="h-5 w-5" />,
    //   label: "Phone",
    //   value: "+1 (555) 123-4567",
    //   href: "tel:+15551234567",
    // },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Pune, MAH",
      href: "#",
    },
  ]

  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com",
      label: "GitHub",
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      href: "https://twitter.com",
      label: "Twitter",
    },
  ]

  return (
    <section id="contact" ref={ref} className="bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="h-full border border-border card-hover">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6 mb-8">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                      className="flex items-start group"
                    >
                      <div className="p-3 bg-primary/10 rounded-full mr-4 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-medium">{item.label}</h4>
                        <a href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                          {item.value}
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                      className="p-3 bg-accent/10 rounded-full text-accent-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label={item.label}
                    >
                      {item.icon}
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* <Card className="border border-border card-hover">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Suguna"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@example.com"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hello, I'd like to talk about..."
                      required
                      className="w-full min-h-[120px]"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card> */}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
