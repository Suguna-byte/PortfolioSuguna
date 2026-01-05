// import { useRef } from "react"
// import { motion, useInView } from "framer-motion"
// import { Card, CardContent } from "@/components/ui/card"
// import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
// import { Camera, BookOpen } from "lucide-react"
// import Image from "next/image"
// import { DoodlesPattern } from "@/components/doodles-pattern"
// import { getSubstackPosts } from "@/lib/substack";
// export default async function HobbiesSection()  {
//  const posts = await getSubstackPosts();
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, amount: 0.1 })

//   return (
//     <section id="hobbies" ref={ref} className="relative py-32 overflow-hidden">
//       <div className="absolute inset-0 -z-10 bg-background">
//         <div className="absolute inset-0 text-foreground/20 blur-sm">
//           <DoodlesPattern />
//         </div>
//         <div className="absolute inset-0 bg-gradient-to-br from-background/85 via-background/92 to-background/85 backdrop-blur-md" />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-16 space-y-4"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-balance">Hobbies & Interests</h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
//             Beyond coding, I'm passionate about these creative pursuits that keep me inspired and balanced.
//           </p>
//         </motion.div>

//         <Tabs defaultValue="photography" className="w-full">
//           <div className="flex justify-center mb-12">
//           <TabsList className="flex gap-2 p-3 rounded-xl border border-border/40 bg-white/6 backdrop-blur-sm shadow-sm">
//           <TabsTrigger
//             value="photography"
//             className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 text-foreground/80 hover:text-foreground hover:bg-white/20 data-[state=active]:bg-white/30 data-[state=active]:text-foreground"
//           >
//             <Camera className="h-4 w-4" />
//             <span className="hidden sm:inline text-sm font-medium">Photography</span>
//           </TabsTrigger>

//           <TabsTrigger
//             value="blogging"
//             className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 text-foreground/80 hover:text-foreground hover:bg-white/20 data-[state=active]:bg-white/30 data-[state=active]:text-foreground"
//           >
//             <BookOpen className="h-4 w-4" />
//             <span className="hidden sm:inline text-sm font-medium">Blogging</span>
//           </TabsTrigger>

//           {/* add more triggers - each will be equal width */}
//         </TabsList>


//        </div>

//           <TabsContent value="photography" className="mt-0">
//             <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
//               <CardContent className="p-8 space-y-8">
//                 <div className="space-y-3">
//                   <h3 className="text-3xl font-bold">Photography</h3>
//                   <p className="text-base text-muted-foreground leading-relaxed max-w-3xl">
//                     I'm passionate about capturing moments and perspectives through my lens. I specialize in urban
//                     landscapes, street photography, and abstract compositions that tell a story.
//                   </p>
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {["photo1.webp", "photo2.webp", "photo3.webp", "photo4.webp", "photo5.webp", "photo6.jpg"].map(
//                     (filename, i) => (
//                       <motion.div
//                         key={i}
//                         initial={{ opacity: 0, scale: 0.95 }}
//                         animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
//                         transition={{ duration: 0.3, delay: i * 0.08 }}
//                         className="relative h-64 rounded-lg overflow-hidden border border-border/30 hover:border-border/60 transition-colors group"
//                       >
//                         <Image
//                           src={`/${filename}`}
//                           alt={`Photography sample ${i + 1}`}
//                           fill
//                           className="object-cover group-hover:scale-105 transition-transform duration-300"
//                         />
//                       </motion.div>
//                     ),
//                   )}
//                 </div>
//               </CardContent>
//             </Card>
//           </TabsContent>

//           <TabsContent value="blogging" className="mt-0">
//             <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
//               <CardContent className="p-8 space-y-8">
//                 <div className="space-y-3">
//                   <h3 className="text-3xl font-bold">Blogging</h3>
//                   <p className="text-base text-muted-foreground leading-relaxed max-w-3xl">
//                     I write
//                   </p>
//                 </div>

//                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//   {posts.map((post, i) => (
//     <motion.a
//       key={i}
//       href={post.link}
//       target="_blank"
//       rel="noopener noreferrer"
//       initial={{ opacity: 0, scale: 0.95 }}
//       animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
//       transition={{ duration: 0.3, delay: i * 0.08 }}
//       className="relative h-64 rounded-lg overflow-hidden border border-border/30 
//                  hover:border-border/60 transition-colors group p-6 flex flex-col
//                  justify-between bg-background/40 backdrop-blur-sm"
//     >
//       <h4 className="text-lg font-semibold group-hover:underline">
//         {post.title}
//       </h4>

//       <p className="text-sm text-muted-foreground line-clamp-4">
//         {post.description?.replace(/<[^>]+>/g, "")}
//       </p>

//       <span className="text-sm text-primary mt-4">
//         Read on Substack →
//       </span>
//     </motion.a>
//   ))}
// </div>

//               </CardContent>
//             </Card>
//           </TabsContent>
//         </Tabs>
//       </div>
//     </section>
//   )
// }

// app/components/HobbiesSection.tsx (SERVER)
import { getSubstackPosts } from "@/lib/substack";
import HobbiesClient from "./HobbiesClient";

export const revalidate = 3600;

export default async function HobbiesSection() {
  const posts = await getSubstackPosts();

  return <HobbiesClient posts={posts} />;
}
