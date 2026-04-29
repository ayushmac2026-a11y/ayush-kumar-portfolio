import { motion } from "motion/react";

const skills = [
  {
    name: "Visual Design",
    description: "Composition, color theory, and visual hierarchy",
  },
  {
    name: "Branding",
    description: "Identity systems, logo design, brand strategy",
  },
  {
    name: "UI/UX Design",
    description: "Digital product design and user experience",
  },
  {
    name: "Typography",
    description: "Type systems, editorial hierarchy, font pairings",
  },
  {
    name: "Layout Design",
    description: "Grid systems, spatial rhythm, editorial layouts",
  },
  {
    name: "Design Thinking",
    description: "Problem framing, ideation, solution design",
  },
  {
    name: "Visual Storytelling",
    description: "Narrative design and sequential communication",
  },
  {
    name: "Creative Strategy",
    description: "Concept development and strategic ideation",
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-28 lg:py-36 bg-background"
      data-ocid="skills.section"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <p className="text-label text-accent mb-3" data-ocid="skills.label">
              Skills &amp; Expertise
            </p>
            <h2 className="text-heading text-foreground">
              What I bring
              <br />
              to the table
            </h2>
          </div>
          <p className="text-muted-foreground max-w-xs text-sm leading-relaxed font-body md:text-right">
            A diverse set of design disciplines developed through academic study
            and hands-on creative work.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          data-ocid="skills.list"
        >
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group relative bg-card border border-border rounded-2xl p-6 transition-smooth hover:shadow-elevated hover:-translate-y-1 cursor-default"
              data-ocid={`skills.item.${i + 1}`}
            >
              {/* Number */}
              <span className="text-label text-muted-foreground/40 text-xs mb-4 block">
                {String(i + 1).padStart(2, "0")}
              </span>
              {/* Skill name */}
              <h3 className="text-base font-semibold text-foreground font-body mb-2 group-hover:text-accent transition-smooth">
                {skill.name}
              </h3>
              {/* Description */}
              <p className="text-xs text-muted-foreground leading-relaxed font-body">
                {skill.description}
              </p>
              {/* Hover accent bar */}
              <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-smooth" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
