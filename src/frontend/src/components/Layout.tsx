import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Journey", href: "#journey" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md border-b border-border shadow-soft"
          : "bg-transparent"
      }`}
      data-ocid="header"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          className="text-foreground font-display text-xl font-semibold tracking-tight transition-smooth hover:opacity-70"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          data-ocid="header.logo_link"
        >
          Ayush Kumar
        </button>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-8"
          data-ocid="header.nav"
        >
          {navLinks.map((link) => (
            <button
              type="button"
              key={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-smooth font-body tracking-wide"
              onClick={() => handleNav(link.href)}
              data-ocid={`header.nav_link.${link.label.toLowerCase()}`}
            >
              {link.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => handleNav("#contact")}
            className="ml-2 px-5 py-2 rounded-full bg-foreground text-background text-sm font-body font-medium transition-smooth hover:opacity-80"
            data-ocid="header.cta_button"
          >
            Let&apos;s Connect
          </button>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5 transition-smooth"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          data-ocid="header.mobile_menu_toggle"
        >
          <span
            className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-card border-b border-border overflow-hidden"
            data-ocid="header.mobile_menu"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  type="button"
                  key={link.href}
                  className="text-base text-muted-foreground hover:text-foreground transition-smooth font-body text-left"
                  onClick={() => handleNav(link.href)}
                >
                  {link.label}
                </button>
              ))}
              <button
                type="button"
                onClick={() => handleNav("#contact")}
                className="mt-2 px-5 py-3 rounded-full bg-foreground text-background text-sm font-body font-medium text-center"
              >
                Let&apos;s Connect
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer className="bg-card border-t border-border" data-ocid="footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <span className="font-display text-lg font-semibold text-foreground">
            Ayush Kumar
          </span>
          <span className="text-muted-foreground text-sm hidden md:inline">
            Communication Designer
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
            data-ocid="footer.linkedin_link"
          >
            LinkedIn
          </a>
          <a
            href="https://behance.net"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
            data-ocid="footer.behance_link"
          >
            Behance
          </a>
          <a
            href="mailto:ayush@example.com"
            className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
            data-ocid="footer.email_link"
          >
            Email
          </a>
        </div>
        <p className="text-xs text-muted-foreground text-center md:text-right">
          © {year}. Built with love using{" "}
          <a
            href={caffeineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-smooth underline underline-offset-2"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
