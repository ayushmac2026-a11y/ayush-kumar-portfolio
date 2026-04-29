import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Research",
    description:
      "Understanding the brief, the audience, and the context. Deep exploration to uncover insights that shape creative direction.",
    icon: "◎",
  },
  {
    number: "02",
    title: "Ideate",
    description:
      "Rapid concept generation, mind-mapping, and visual exploration. No idea is too wild at this stage.",
    icon: "◈",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Translating the strongest concepts into refined visual solutions. Crafting with intention and clarity.",
    icon: "◆",
  },
  {
    number: "04",
    title: "Refine",
    description:
      "Iterating based on feedback and self-critique. Pushing toward precision, balance, and visual excellence.",
    icon: "◐",
  },
  {
    number: "05",
    title: "Deliver",
    description:
      "Presenting polished final work with clarity — files, rationale, and assets that make handover seamless.",
    icon: "◉",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="py-28 lg:py-36 bg-muted/20"
      data-ocid="process.section"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-label text-accent mb-3" data-ocid="process.label">
            Design Process
          </p>
          <h2 className="text-heading text-foreground">
            How I approach
            <br />
            <em
              className="font-display italic text-accent"
              style={{ fontStyle: "italic" }}
            >
              every challenge
            </em>
          </h2>
        </motion.div>

        {/* Steps — horizontal flow on desktop */}
        <div className="relative" data-ocid="process.steps">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-px bg-border" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center group"
                data-ocid={`process.step.${i + 1}`}
              >
                {/* Icon circle */}
                <div className="relative z-10 w-14 h-14 rounded-full bg-background border-2 border-border flex items-center justify-center mb-5 transition-smooth group-hover:border-accent group-hover:bg-accent/5">
                  <span className="text-xl text-accent">{step.icon}</span>
                  {/* Arrow between steps */}
                  {i < steps.length - 1 && (
                    <span className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 text-muted-foreground/40 text-xs">
                      →
                    </span>
                  )}
                </div>

                <span className="text-label text-xs text-muted-foreground/50 mb-1.5">
                  {step.number}
                </span>
                <h3 className="text-base font-semibold text-foreground font-body mb-2 group-hover:text-accent transition-smooth">
                  {step.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed font-body max-w-[160px]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
