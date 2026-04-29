import { motion } from "motion/react";

const milestones = [
  {
    year: "2022 — Present",
    title: "B.Des Communication Design",
    description:
      "Pursuing Bachelor of Design in Communication Design at Vivekananda Global University, Jaipur. Learning the foundations of visual communication, brand design, and design thinking.",
    tag: "Education",
  },
  {
    year: "2023 — Present",
    title: "Freelance Design Projects",
    description:
      "Taking on freelance briefs to apply academic knowledge in real-world contexts — from brand identity work to digital design projects for emerging clients.",
    tag: "Work",
  },
  {
    year: "2023 — Present",
    title: "Personal Creative Explorations",
    description:
      "Self-directed creative projects exploring typography, editorial layouts, and experimental visual identity — building a distinctive personal design language.",
    tag: "Creative",
  },
  {
    year: "2024 — Present",
    title: "Building Digital Design Skills",
    description:
      "Deepening expertise in UI/UX design, design systems, and digital product design — bridging the gap between traditional communication design and contemporary digital experiences.",
    tag: "Growth",
  },
];

const tagColors: Record<string, string> = {
  Education: "bg-accent/10 text-accent border-accent/20",
  Work: "bg-primary/10 text-primary border-primary/20",
  Creative: "bg-accent/10 text-accent border-accent/20",
  Growth: "bg-primary/10 text-primary border-primary/20",
};

export default function JourneySection() {
  return (
    <section
      id="journey"
      className="py-28 lg:py-36 bg-background"
      data-ocid="journey.section"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-label text-accent mb-3" data-ocid="journey.label">
            Experience &amp; Journey
          </p>
          <h2 className="text-heading text-foreground">
            The path
            <br />
            so far
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative" data-ocid="journey.timeline">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-[180px] top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {milestones.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="relative flex flex-col md:flex-row gap-6 md:gap-0"
                data-ocid={`journey.item.${i + 1}`}
              >
                {/* Year — left column */}
                <div className="md:w-[180px] md:pr-10 flex-shrink-0">
                  <span className="text-xs text-muted-foreground font-body font-medium tracking-wide pl-4 md:pl-0">
                    {item.year}
                  </span>
                </div>

                {/* Dot */}
                <div className="absolute left-0 md:left-[180px] top-0 w-3 h-3 rounded-full bg-accent border-2 border-background -translate-x-1/2 mt-0.5" />

                {/* Content */}
                <div className="pl-8 md:pl-10 flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-base font-semibold text-foreground font-body">
                      {item.title}
                    </h3>
                    <span
                      className={`text-label text-xs px-2.5 py-1 rounded-full border ${tagColors[item.tag] || ""}`}
                    >
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed font-body max-w-xl">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
