import { Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="px-6 sm:px-8 py-16 sm:py-20 bg-charcoal">
      <Container className="grid sm:grid-cols-[1fr_auto] gap-10 items-center">
        <div>
          <span className="inline-block bg-teal-deep text-teal text-xs font-medium px-3 py-1.5 rounded-full mb-5">
            Open to work
          </span>

          <h1 className="text-3xl sm:text-4xl font-semibold text-paper mb-3">
            Marken Ricardo
          </h1>

          <p className="text-sm text-ink-muted mb-4">
            A Computer Engineering graduate specializing in Big Data Analytics 
            with hands-on experience in frontend web development, data analytics, and 
            software development. I enjoy building user-centered applications and transforming data into 
            meaningful insights through technology.
          </p>

          <p className="text-sm text-ink-muted max-w-md mb-7 leading-relaxed">
            
            Currently seeking opportunities where I can learn, grow, and contribute as an aspiring software and data professional.
          </p>

          <div className="flex flex-wrap gap-3 mb-7">
            <a href="#projects">
              <Button variant="inverted">View projects</Button>
            </a>
            <a href="#contact">
              <Button variant="outlineDark">Contact me</Button>
            </a>
            <a href="/RESUME.pdf" download>
              <Button variant="outlineDark" className="flex items-center gap-1.5">
                <Download size={15} aria-hidden="true" />
                Resume
              </Button>
            </a>
          </div>

          <div className="flex gap-4 text-ink-muted">
            <a href="#" aria-label="GitHub" className="hover:text-teal transition-colors">
              <Github size={18} />
            </a>
            <a
              href="http://www.linkedin.com/in/markenricardo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-teal transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:markenricardoo@gmail.com"
              aria-label="Email"
              className="hover:text-teal transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 justify-self-center">
          <div className="w-40 h-40 rounded-full bg-teal-deep flex items-center justify-center">
            <span className="text-4xl font-semibold text-teal">MR</span>
          </div>
          <div className="flex gap-2 flex-wrap justify-center max-w-[200px]">
            <Badge variant="dark">Python</Badge>
            <Badge variant="dark">React</Badge>
            <Badge variant="dark">SQL</Badge>
          </div>
        </div>
      </Container>
    </section>
  );
}
