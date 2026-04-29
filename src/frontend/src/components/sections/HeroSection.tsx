import { motion } from "motion/react";

export default function HeroSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background"
      data-ocid="hero.section"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/assets/generated/hero-bg.dim_1600x900.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          opacity: 0.35,
        }}
      />
      {/* Overlay gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/60 via-background/40 to-background/90" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20 flex flex-col justify-center min-h-screen">
        <div className="max-w-5xl">
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-label text-accent mb-6"
            data-ocid="hero.label"
          >
            Communication Designer
          </motion.p>

          {/* Hero name */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-hero text-foreground mb-4"
            data-ocid="hero.name"
          >
            Ayush
            <br />
            Kumar
          </motion.h1>

          {/* Accent underline */}
          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
            className="accent-line w-32 mb-8"
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-10 font-body"
            data-ocid="hero.subtitle"
          >
            B.Des Communication Design student crafting meaningful visual
            experiences through design, storytelling, and creative thinking.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-wrap gap-4"
          >
            <button
              type="button"
              onClick={() => handleScroll("#work")}
              className="px-8 py-3.5 rounded-full bg-foreground text-background text-sm font-body font-medium transition-smooth hover:opacity-80 hover:-translate-y-0.5 shadow-soft"
              data-ocid="hero.view_work_button"
            >
              View Work
            </button>
            <button
              type="button"
              onClick={() => handleScroll("#contact")}
              className="px-8 py-3.5 rounded-full border border-border text-foreground text-sm font-body font-medium transition-smooth hover:bg-secondary hover:-translate-y-0.5"
              data-ocid="hero.contact_button"
            >
              Contact Me
            </button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute bottom-10 left-6 lg:left-12 flex items-center gap-3"
        >
          <div className="w-px h-12 bg-border" />
          <span className="text-label text-muted-foreground text-xs">
            Scroll to explore
          </span>
        </motion.div>
      </div>
    </section>
  );
}
