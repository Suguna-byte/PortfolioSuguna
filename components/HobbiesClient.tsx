"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Camera, ExternalLink } from "lucide-react";
import Image from "next/image";
import { DoodlesPattern } from "@/components/doodles-pattern";
import type { SubstackPost } from "@/lib/substack";

// ── Animation variant ────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
};

// ── Section label pill (shared) ──────────────────────────────────────────────
function SectionLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-block text-xs font-semibold uppercase tracking-[0.18em] px-3 py-1 rounded-full border ${className}`}
    >
      {children}
    </span>
  );
}

// ── Blog post card ───────────────────────────────────────────────────────────
function PostCard({
  post,
  index,
  accentClass,
}: {
  post: SubstackPost;
  index: number;
  accentClass: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.12 });

  return (
    <motion.a
      ref={ref}
      href={post.link}
      target="_blank"
      rel="noopener noreferrer"
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={index}
      className="group relative flex flex-col rounded-xl overflow-hidden border border-border/40
                 bg-card/60 backdrop-blur-sm hover:border-border/80
                 transition-all duration-300 shadow-sm hover:shadow-md"
    >
      {/* Cover image */}
      <div className="relative h-44 w-full bg-muted overflow-hidden shrink-0">
        {post.image ? (
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20 text-5xl font-bold select-none">
            ✦
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Text */}
      <div className="flex flex-col flex-1 p-5 gap-2">
        <h4 className="font-semibold text-sm leading-snug text-foreground group-hover:text-primary transition-colors duration-200 line-clamp-2">
          {post.title}
        </h4>
        {post.excerpt && (
          <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 flex-1">
            {post.excerpt}
          </p>
        )}
        <span
          className={`inline-flex items-center gap-1 text-xs font-medium mt-auto pt-2 ${accentClass}
                      group-hover:gap-2 transition-all duration-200`}
        >
          Read post <ExternalLink className="h-3 w-3" />
        </span>
      </div>
    </motion.a>
  );
}

// ── Photography grid ─────────────────────────────────────────────────────────
const photos = [
  "photo1.webp",
  "photo2.webp",
  "photo3.webp",
  "photo4.webp",
  "photo5.webp",
  "photo6.jpg",
];

function PhotographySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div ref={ref} className="space-y-8">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        custom={0}
        className="space-y-3"
      >
        <SectionLabel className="border-border/40 text-muted-foreground">
          <Camera className="inline h-3 w-3 mr-1.5 -mt-0.5" />
          Through the lens
        </SectionLabel>
        <h3 className="text-3xl md:text-4xl font-bold tracking-tight">Photography</h3>
        <p className="text-muted-foreground max-w-xl text-sm leading-relaxed">
          Urban landscapes, street moments, and abstract compositions — capturing
          stories one frame at a time.
        </p>
      </motion.div>

      {/* Masonry-style columns */}
      <div className="columns-2 sm:columns-3 gap-3 space-y-3">
        {photos.map((filename, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={i * 0.08}
            className="relative rounded-lg overflow-hidden border border-border/30
                       hover:border-border/60 transition-colors duration-300 group break-inside-avoid"
          >
            <Image
              src={`/${filename}`}
              alt={`Photo ${i + 1}`}
              width={600}
              height={400}
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ── Main client component ────────────────────────────────────────────────────
export default function HobbiesClient({ posts }: { posts: SubstackPost[] }) {
  const techPosts = posts.filter((p) => p.source === "tech");
  const humanPosts = posts.filter((p) => p.source === "human");

  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.2 });

  const techRef = useRef(null);
  const techInView = useInView(techRef, { once: true, amount: 0.1 });

  const humanRef = useRef(null);
  const humanInView = useInView(humanRef, { once: true, amount: 0.1 });

  return (
    <section id="hobbies" className="relative py-28 overflow-hidden">
      {/* ── Background ── */}
      <div className="absolute inset-0 -z-10 bg-background">
        <div className="absolute inset-0 text-foreground/20 blur-sm">
          <DoodlesPattern />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-background/85 via-background/92 to-background/85 backdrop-blur-md" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
        {/* ── Page heading ── */}
        <motion.div
          ref={headerRef}
          variants={fadeUp}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          custom={0}
          className="text-center space-y-4"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={headerInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-block mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary/70 border border-primary/20 px-3 py-1 rounded-full"
          >
            Beyond Code
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            Hobbies &amp; Interests
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Beyond coding — the creative pursuits that keep me curious and balanced.
          </p>
        </motion.div>

        {/* ══════════════════════════════════════════════════════
            SECTION 1 — Tech & Science
        ══════════════════════════════════════════════════════ */}
        <div ref={techRef} className="space-y-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={techInView ? "visible" : "hidden"}
            custom={0}
            className="space-y-3"
          >
            <SectionLabel className="border-primary/30 text-primary bg-primary/5">
              ✦ Writing
            </SectionLabel>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
              Tech &amp; Science
            </h3>
            <p className="text-muted-foreground max-w-xl text-sm leading-relaxed">
              Notes on software, systems thinking, and the science behind the
              things I build.
            </p>
          </motion.div>

          {techPosts.length === 0 ? (
            <p className="text-muted-foreground text-sm">No posts found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {techPosts.map((post, i) => (
                <PostCard
                  key={post.link}
                  post={post}
                  index={i}
                  accentClass="text-primary"
                />
              ))}
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="border-t border-border/30" />

        {/* ══════════════════════════════════════════════════════
            SECTION 2 — The Human Update
        ══════════════════════════════════════════════════════ */}
        <div ref={humanRef} className="space-y-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={humanInView ? "visible" : "hidden"}
            custom={0}
            className="space-y-3"
          >
            <SectionLabel className="border-amber-500/30 text-amber-600 bg-amber-500/5">
              ✦ Newsletter
            </SectionLabel>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
              The Human Update
            </h3>
            <p className="text-muted-foreground max-w-xl text-sm leading-relaxed">
              Reflections on people, behaviour, psychology, and what it means to
              be human in a fast-moving world.
            </p>
          </motion.div>

          {humanPosts.length === 0 ? (
            <p className="text-muted-foreground text-sm">No posts found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {humanPosts.map((post, i) => (
                <PostCard
                  key={post.link}
                  post={post}
                  index={i}
                  accentClass="text-amber-600"
                />
              ))}
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="border-t border-border/30" />

        {/* ══════════════════════════════════════════════════════
            SECTION 3 — Photography
        ══════════════════════════════════════════════════════ */}
        <PhotographySection />
      </div>
    </section>
  );
}
