import * as Icons from "lucide-react";
import { Project } from "@/types";
import { Badge } from "./Badge";
import { cn } from "@/lib/utils";

const iconMap: Record<string, keyof typeof Icons> = {
  "ti-mood-smile": "Smile",
  "ti-chart-bar": "BarChart3",
  "ti-clock": "Clock",
  "ti-database": "Database",
  "ti-bolt": "Zap",
};

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  const iconKey = project.icon ? iconMap[project.icon] : undefined;
  const Icon = iconKey ? (Icons[iconKey] as Icons.LucideIcon) : Icons.Folder;

  return (
    <button
      onClick={onClick}
      className={cn(
        "text-left w-full bg-white border border-black/10 rounded-card overflow-hidden hover:border-teal/50 transition-colors",
        project.featured && "sm:col-span-2"
      )}
    >
      <div
        className={cn(
          "bg-charcoal flex items-center justify-center text-teal",
          project.featured ? "h-28" : "h-24"
        )}
      >
        <Icon size={26} />
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
    </button>
  );
}