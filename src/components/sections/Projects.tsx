"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { Section } from "@/components/ui/Section";
import { Project } from "@/types";

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <Section id="projects" title="Featured projects">
      <div className="grid sm:grid-cols-2 gap-3.5">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            onClick={() => setSelected(project)}
          />
        ))}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </Section>
  );
}