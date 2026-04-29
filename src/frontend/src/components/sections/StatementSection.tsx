import { motion } from "motion/react";

export default function StatementSection() {
  return (
    <section
      id="statement"
      className="py-32 lg:py-48 bg-foreground relative overflow-hidden"
      data-ocid="statement.section"
    >
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-8 left-8 w-48 h-48 rounded-full border border-background" />
        <div className="absolute top-16 left-16 w-80 h-80 rounded-full border border-background" />
        <div className="absolute bottom-8 right-8 w-64 h-64 rounded-full border border-background" />
        <div className="absolute bottom-0 right-24 w-96 h-96 rounded-full border border-background" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-label text-accent mb-8"
          data-ocid="statement.label"
        >
          Why Design?
        </motion.p>

        {/* Statement quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-background"
          data-ocid="statement.quote"
        >
          <span
            className="block font-display text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight max-w-4xl mx-auto"
            style={{ fontStyle: "italic" }}
          >
            &ldquo;Design is where strategy meets creativity to create
            meaningful experiences.&rdquo;
          </span>
        </motion.blockquote>

        {/* Accent divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          className="mx-auto mt-10 w-16 h-0.5 bg-accent rounded-full"
        />

        {/* Attribution */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-6 text-sm text-background/50 font-body tracking-widest uppercase"
        >
          Ayush Kumar — Communication Designer
        </motion.p>
      </div>
    </section>
  );
}
