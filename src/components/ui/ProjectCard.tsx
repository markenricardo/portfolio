import { Project } from "@/types";
import { Badge } from "./Badge";
import { cn } from "@/lib/utils";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className={cn(
        "bg-white border border-black/10 rounded-card overflow-hidden",
        project.featured && "sm:col-span-2"
      )}
    >
      <div
        className={cn(
          "bg-charcoal flex items-center justify-center text-teal",
          project.featured ? "h-28" : "h-24"
        )}
      >
        {/* Swap for an <Image> once real screenshots are ready */}
        <span className="text-xs text-ink-muted">preview</span>
      </div>
      <div className="p-4">
        <p className="font-medium text-sm text-ink mb-1">{project.title}</p>
        <p className="text-xs text-ink-secondary mb-3 leading-relaxed">
          {project.description}
        </p>
        <div className="flex gap-1.5 flex-wrap">
          {project.stack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
