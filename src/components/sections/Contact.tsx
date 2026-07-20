import { Mail, Github, Linkedin, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function Contact() {
  return (
    <section id="contact" className="px-6 sm:px-8 py-14 text-center bg-charcoal scroll-mt-16">
      <Container>
        <h2 className="text-lg font-medium text-paper mb-2">Let&apos;s talk</h2>
        <p className="text-xs text-ink-muted mb-6">
          Open to entry-level roles in software, frontend, and data analytics.
        </p>

        <div className="flex gap-4 justify-center flex-wrap text-sm text-teal">
          <a
            href="mailto:markenricardoo@gmail.com"
            className="flex items-center gap-1.5 hover:opacity-80"
          >
            <Mail size={16} /> markenricardoo@gmail.com
          </a>

          <a
            href="http://www.linkedin.com/in/markenricardo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:opacity-80"
          >
            <Linkedin size={16} /> LinkedIn
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:opacity-80"
          >
            <Github size={16} /> GitHub
          </a>

          <span className="flex items-center gap-1.5 text-ink-muted">
            <MapPin size={16} /> Caloocan City, Metro Manila
          </span>
        </div>
      </Container>
    </section>
  );
}