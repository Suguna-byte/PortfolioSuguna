"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Camera, BookOpen, Gamepad2, Plane, Music, Palette } from "lucide-react"
import Image from "next/image"

export default function HobbiesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="hobbies" ref={ref} className="bg-muted/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="section-title">Hobbies & Interests</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Beyond coding, I'm passionate about these creative pursuits that keep me inspired and balanced.
          </p>
        </motion.div>

        <Tabs defaultValue="photography" className="w-full">
          <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-8">
            <TabsTrigger value="photography" className="flex items-center gap-2">
              <Camera className="h-4 w-4" />
              <span className="hidden sm:inline">Photography</span>
            </TabsTrigger>
            {/* <TabsTrigger value="blogging" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span className="hidden sm:inline">Blogging</span>
            </TabsTrigger> */}
            {/* <TabsTrigger value="gaming" className="flex items-center gap-2">
              <Gamepad2 className="h-4 w-4" />
              <span className="hidden sm:inline">Gaming</span>
            </TabsTrigger>
            <TabsTrigger value="travel" className="flex items-center gap-2">
              <Plane className="h-4 w-4" />
              <span className="hidden sm:inline">Travel</span>
            </TabsTrigger>
            <TabsTrigger value="music" className="flex items-center gap-2">
              <Music className="h-4 w-4" />
              <span className="hidden sm:inline">Music</span>
            </TabsTrigger> */}
            {/* <TabsTrigger value="art" className="flex items-center gap-2">
              <Palette className="h-4 w-4" />
              <span className="hidden sm:inline">Digital Art</span>
            </TabsTrigger> */}
          </TabsList>

          <TabsContent value="photography" className="mt-0">
            <Card>
              <CardContent className="p-6">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">Photography</h3>
                  <p className="text-muted-foreground">
                    I'm passionate about capturing moments and perspectives through my lens. I specialize in urban
                    landscapes, street photography, and abstract compositions that tell a story.
                  </p>
                </div>

                <div className="photo-grid">
  {['photo1.webp', 'photo2.webp', 'photo3.webp', 'photo4.webp', 'photo5.webp', 'photo6.jpg'].map((filename, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, delay: i * 0.1 }}
      className="photo-item"
    >
      <Image
        src={`/${filename}`} // Automatically handles .webp and .jpg
        alt={`Photography sample ${i + 1}`}
        fill
        className="object-cover"
      />
    </motion.div>
  ))}
</div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="blogging" className="mt-0">
            <Card>
              <CardContent className="p-6">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">Blogging</h3>
                  <p className="text-muted-foreground">
                    I write about technology, design, and the intersection of both. My blog is where I share tutorials,
                    insights, and thoughts on the evolving tech landscape.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "The Future of Web Development: What's Next After React?",
                      excerpt:
                        "Exploring emerging frameworks and technologies that might shape the future of frontend development...",
                      date: "March 15, 2023",
                      image: "/placeholder.svg?height=200&width=400&text=Web+Dev+Future",
                    },
                    {
                      title: "Designing for Accessibility: More Than Just Compliance",
                      excerpt:
                        "How thinking about accessibility from the start leads to better products for everyone...",
                      date: "February 2, 2023",
                      image: "/placeholder.svg?height=200&width=400&text=Accessibility",
                    },
                    {
                      title: "From Monolith to Microservices: Our Journey",
                      excerpt:
                        "A case study on how our team transitioned a legacy application to a modern microservices architecture...",
                      date: "December 10, 2022",
                      image: "/placeholder.svg?height=200&width=400&text=Microservices",
                    },
                    {
                      title: "The Psychology of Color in UI Design",
                      excerpt: "How color choices affect user perception and behavior in digital interfaces...",
                      date: "October 5, 2022",
                      image: "/placeholder.svg?height=200&width=400&text=Color+Psychology",
                    },
                  ].map((post, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                    >
                      <Card className="overflow-hidden">
                        <div className="relative h-40">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardContent className="p-4">
                          <h4 className="font-bold mb-2">{post.title}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{post.excerpt}</p>
                          <p className="text-xs text-primary">{post.date}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="gaming" className="mt-0">
            <Card>
              <CardContent className="p-6">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">Gaming</h3>
                  <p className="text-muted-foreground">
                    Exploring virtual worlds and solving puzzles helps me unwind and keeps my problem-solving skills
                    sharp. I enjoy strategy games, RPGs, and indie titles with innovative mechanics.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      title: "Strategy",
                      games: ["Civilization VI", "Age of Empires IV", "Into the Breach", "XCOM 2"],
                      color: "from-pink-500 to-rose-400",
                    },
                    {
                      title: "RPGs",
                      games: ["The Witcher 3", "Disco Elysium", "Divinity: Original Sin 2", "Baldur's Gate 3"],
                      color: "from-fuchsia-500 to-pink-500",
                    },
                    {
                      title: "Indie",
                      games: ["Hades", "Hollow Knight", "Stardew Valley", "Outer Wilds"],
                      color: "from-rose-400 to-pink-300",
                    },
                    {
                      title: "Currently Playing",
                      games: ["Elden Ring", "Starfield", "Factorio", "Crusader Kings III"],
                      color: "from-purple-500 to-pink-500",
                    },
                  ].map((category, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                    >
                      <Card className="overflow-hidden">
                        <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
                        <CardContent className="p-4">
                          <h4 className="font-bold mb-3">{category.title}</h4>
                          <ul className="space-y-2">
                            {category.games.map((game, j) => (
                              <li key={j} className="flex items-start">
                                <span className="text-primary mr-2">•</span>
                                <span className="text-muted-foreground text-sm">{game}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="travel" className="mt-0">
            <Card>
              <CardContent className="p-6">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">Travel</h3>
                  <p className="text-muted-foreground">
                    Exploring new cultures, cuisines, and landscapes is one of my greatest passions. I believe travel
                    broadens perspective and fuels creativity.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-medium mb-4">Favorite Destinations</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {["Japan", "Iceland", "Peru", "Thailand"].map((country, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                          className="relative h-40 rounded-lg overflow-hidden"
                        >
                          <Image
                            src={`/placeholder.svg?height=200&width=300&text=${country}`}
                            alt={country}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                            <span className="p-3 text-white font-medium">{country}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium mb-4">Travel Bucket List</h4>
                    <Card>
                      <CardContent className="p-4">
                        <div className="grid grid-cols-2 gap-y-3 gap-x-6">
                          {[
                            "New Zealand",
                            "Morocco",
                            "Norway",
                            "Croatia",
                            "Argentina",
                            "South Africa",
                            "Egypt",
                            "Vietnam",
                          ].map((place, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                              transition={{ duration: 0.3, delay: i * 0.05 }}
                              className="flex items-center"
                            >
                              <span className="text-primary mr-2">•</span>
                              <span className="text-muted-foreground">{place}</span>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <h4 className="text-lg font-medium mt-6 mb-4">Travel Philosophy</h4>
                    <p className="text-muted-foreground">
                      I believe in immersive travel experiences that connect with local cultures and communities. My
                      approach is to explore beyond tourist attractions and discover the authentic essence of each
                      destination.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="music" className="mt-0">
            <Card>
              <CardContent className="p-6">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">Music</h3>
                  <p className="text-muted-foreground">
                    Music has always been a significant part of my life. I play guitar and piano in my free time and
                    enjoy exploring different genres and artists.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-medium mb-4">Instruments I Play</h4>
                    <div className="space-y-4">
                      {[
                        { name: "Guitar", years: "8 years", level: 80 },
                        { name: "Piano", years: "5 years", level: 65 },
                        { name: "Drums", years: "2 years", level: 40 },
                      ].map((instrument, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                        >
                          <div className="flex justify-between mb-1">
                            <span className="font-medium">{instrument.name}</span>
                            <span className="text-muted-foreground text-sm">{instrument.years}</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={isInView ? { width: `${instrument.level}%` } : { width: 0 }}
                              transition={{ duration: 1, delay: i * 0.2 }}
                              className="h-full bg-gradient-to-r from-primary to-secondary"
                            ></motion.div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <h4 className="text-lg font-medium mt-8 mb-4">Favorite Artists</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {["Radiohead", "Bon Iver", "Ludovico Einaudi", "Nils Frahm", "Arcade Fire", "Tycho"].map(
                        (artist, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                            transition={{ duration: 0.3, delay: i * 0.05 }}
                            className="flex items-center"
                          >
                            <span className="text-primary mr-2">•</span>
                            <span className="text-muted-foreground">{artist}</span>
                          </motion.div>
                        ),
                      )}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium mb-4">Favorite Genres</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { name: "Indie Rock", color: "from-red-500 to-orange-500" },
                        { name: "Classical", color: "from-blue-500 to-cyan-500" },
                        { name: "Jazz", color: "from-amber-500 to-yellow-500" },
                        { name: "Electronic", color: "from-purple-500 to-pink-500" },
                        { name: "Folk", color: "from-emerald-500 to-green-500" },
                        { name: "Ambient", color: "from-indigo-500 to-violet-500" },
                      ].map((genre, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                          className="rounded-lg overflow-hidden"
                        >
                          <div className={`h-20 bg-gradient-to-r ${genre.color} flex items-center justify-center`}>
                            <span className="text-white font-medium">{genre.name}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <h4 className="text-lg font-medium mt-8 mb-4">Music Production</h4>
                    <p className="text-muted-foreground">
                      I also dabble in music production using Ableton Live and various virtual instruments. I enjoy
                      creating ambient soundscapes and electronic compositions in my home studio setup.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="art" className="mt-0">
            <Card>
              <CardContent className="p-6">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">Digital Art</h3>
                  <p className="text-muted-foreground">
                    Creating digital art allows me to express my creativity in a different medium. I enjoy experimenting
                    with various styles and techniques using digital tools.
                  </p>
                </div>

                <div className="photo-grid">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className="photo-item"
                    >
                      <Image
                        src={`/placeholder.svg?height=300&width=300&text=Art+${i}`}
                        alt={`Digital art sample ${i}`}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-medium mb-4">Tools & Software</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Procreate", "Adobe Photoshop", "Illustrator", "Blender", "Figma", "Midjourney"].map(
                      (tool, i) => (
                        <span key={tool} className="px-3 py-1 bg-accent/10 text-accent-foreground text-sm rounded-full">
                          {tool}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
