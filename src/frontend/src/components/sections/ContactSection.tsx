import { ArrowUpRight, Globe, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";

const contactLinks = [
  {
    label: "Email",
    value: "ayush@example.com",
    href: "mailto:ayush@example.com",
    description:
      "Drop a message for project inquiries, collaborations, or just to say hello.",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/ayushkumar",
    href: "https://linkedin.com",
    description:
      "Connect professionally and explore my career journey and academic background.",
    icon: Linkedin,
  },
  {
    label: "Behance",
    value: "behance.net/ayushkumar",
    href: "https://behance.net",
    description:
      "Browse my full portfolio with case studies, process work, and visual projects.",
    icon: Globe,
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-28 lg:py-36 bg-background"
      data-ocid="contact.section"
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
          <p className="text-label text-accent mb-3" data-ocid="contact.label">
            Get In Touch
          </p>
          <h2 className="text-heading text-foreground">
            Let&apos;s create
            <br />
            <em
              className="font-display italic text-accent"
              style={{ fontStyle: "italic" }}
            >
              something together
            </em>
          </h2>
          <p className="mt-5 text-base text-muted-foreground leading-relaxed font-body max-w-md">
            I&apos;m open to internship opportunities, freelance projects, and
            creative collaborations. Reach out — I&apos;d love to connect.
          </p>
        </motion.div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12"
          data-ocid="contact.links"
        >
          {contactLinks.map((link, i) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-card border border-border rounded-2xl p-6 lg:p-8 flex flex-col gap-4 transition-smooth hover:shadow-elevated hover:-translate-y-1 hover:border-accent/30"
                data-ocid={`contact.link.${i + 1}`}
              >
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Icon size={18} className="text-accent" />
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-muted-foreground group-hover:text-accent transition-smooth"
                  />
                </div>
                <div>
                  <p className="text-label text-xs text-muted-foreground mb-1">
                    {link.label}
                  </p>
                  <p className="text-sm font-medium text-foreground font-body mb-2">
                    {link.value}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed font-body">
                    {link.description}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-start"
        >
          <a
            href="mailto:ayush@example.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-foreground text-background text-sm font-body font-medium transition-smooth hover:opacity-80 hover:-translate-y-0.5 shadow-soft"
            data-ocid="contact.cta_button"
          >
            Send a Message
            <ArrowUpRight size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
