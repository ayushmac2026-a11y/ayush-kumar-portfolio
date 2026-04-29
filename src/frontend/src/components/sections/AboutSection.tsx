import { motion } from "motion/react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-28 lg:py-36 bg-muted/30"
      data-ocid="about.section"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: label + heading */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-label text-accent mb-4" data-ocid="about.label">
              About Me
            </p>
            <h2 className="text-heading text-foreground mb-6">
              Designing
              <br />
              <em
                className="font-display italic not-italic text-accent"
                style={{ fontStyle: "italic" }}
              >
                meaningful
              </em>
              <br />
              experiences
            </h2>
            <div className="accent-line w-16 mt-2" />
          </motion.div>

          {/* Right: bio text */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-5"
          >
            <p className="text-base lg:text-lg text-foreground leading-relaxed font-body">
              I&apos;m <strong className="font-semibold">Ayush Kumar</strong>, a
              B.Des Communication Design student at{" "}
              <strong className="font-semibold">
                Vivekananda Global University, Jaipur
              </strong>{" "}
              — where I&apos;m building a foundation in visual communication,
              brand strategy, and digital experience design.
            </p>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed font-body">
              My work sits at the intersection of clarity and creativity.
              I&apos;m passionate about branding, design systems, and visual
              storytelling — driven by the belief that great design communicates
              ideas before a single word is read.
            </p>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed font-body">
              I combine design thinking with creative strategy to craft visual
              solutions that are not just beautiful, but <em>purposeful</em> —
              resonating with audiences and creating lasting impact.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
              {[
                { value: "4+", label: "Projects" },
                { value: "3rd", label: "Year B.Des" },
                { value: "∞", label: "Curiosity" },
              ].map((stat) => (
                <div key={stat.label} data-ocid="about.stat">
                  <p className="text-3xl font-display font-semibold text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 font-body tracking-wide">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
