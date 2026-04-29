import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const projects = [
  {
    title: "Brand Identity Design",
    description:
      "A cohesive visual identity system for a contemporary lifestyle brand — logo, color, typography, and brand collateral.",
    category: "Branding",
    image: "/assets/generated/project-brand-identity.dim_800x600.jpg",
    accent: "bg-accent/10 text-accent border-accent/20",
  },
  {
    title: "Mobile App UI Concept",
    description:
      "An elegant digital wellness app UI with a clean design system, intuitive navigation, and refined visual hierarchy.",
    category: "UI/UX",
    image: "/assets/generated/project-mobile-app.dim_800x600.jpg",
    accent: "bg-primary/10 text-primary border-primary/20",
  },
  {
    title: "Editorial Layout Design",
    description:
      "Premium magazine layout with a sophisticated typographic system, editorial photography, and intentional grid structure.",
    category: "Editorial",
    image: "/assets/generated/project-editorial.dim_800x600.jpg",
    accent: "bg-accent/10 text-accent border-accent/20",
  },
  {
    title: "Social Media Campaign",
    description:
      "A cohesive social media visual identity — post templates, story formats, and campaign art direction.",
    category: "Campaign",
    image: "/assets/generated/project-social-media.dim_800x600.jpg",
    accent: "bg-primary/10 text-primary border-primary/20",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="work"
      className="py-28 lg:py-36 bg-muted/20"
      data-ocid="projects.section"
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
          <p className="text-label text-accent mb-3" data-ocid="projects.label">
            Selected Work
          </p>
          <h2 className="text-heading text-foreground">
            Projects that
            <br />
            <em
              className="font-display italic text-accent"
              style={{ fontStyle: "italic" }}
            >
              define
            </em>{" "}
            the work
          </h2>
        </motion.div>

        {/* Projects grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          data-ocid="projects.list"
        >
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-card border border-border rounded-3xl overflow-hidden transition-smooth hover:shadow-elevated hover:-translate-y-1"
              data-ocid={`projects.item.${i + 1}`}
            >
              {/* Project image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-smooth" />
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <span
                    className={`text-label text-xs px-3 py-1.5 rounded-full border ${project.accent}`}
                  >
                    {project.category}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-muted-foreground group-hover:text-accent transition-smooth flex-shrink-0 mt-1"
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground font-body mb-2 group-hover:text-accent transition-smooth">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-body mb-5">
                  {project.description}
                </p>
                <button
                  type="button"
                  className="text-xs text-label text-foreground border-b border-foreground/30 hover:border-accent hover:text-accent transition-smooth pb-0.5"
                  data-ocid={`projects.view_case_study_button.${i + 1}`}
                >
                  View Case Study
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
