import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Section } from "@/components/ui/Section";

export function Projects() {
  return (
    <Section id="projects" title="Featured projects">
      <div className="grid sm:grid-cols-2 gap-3.5">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
