"use client";

import { X } from "lucide-react";
import { Project } from "@/types";
import { Badge } from "./Badge";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      {/* sheet */}
      <div className="relative w-full max-w-xl h-full bg-charcoal overflow-y-auto animate-sheet-in">
        <div className="flex items-start justify-between px-6 pt-6 pb-4">
          <p className="font-medium text-base text-paper pr-6">
            {project.title}
          </p>
          <button
            onClick={onClose}
            aria-label="Close"
            className="text-ink-muted hover:text-paper transition-colors shrink-0"
          >
            <X size={20} />
          </button>
        </div>

        <div className="px-6">
          <div className="h-48 bg-charcoal-light rounded-card flex items-center justify-center text-teal mb-6">
            <span className="text-xs text-ink-muted">preview</span>
          </div>

          {(project.outcome || project.details) && (
            <div className="mb-6">
              <p className="text-[11px] font-semibold text-teal uppercase tracking-wide mb-2">
                Overview
              </p>
              {project.outcome && (
                <p className="text-xs text-ink-muted leading-relaxed mb-2">
                  {project.outcome}
                </p>
              )}
              {project.details?.map((line, i) => (
                <p key={i} className="text-xs text-ink-muted leading-relaxed mb-2">
                  {line}
                </p>
              ))}
              {!project.outcome && !project.details && (
                <p className="text-xs text-ink-muted leading-relaxed">
                  {project.description}
                </p>
              )}
            </div>
          )}

          <div className="mb-6">
            <p className="text-[11px] font-semibold text-teal uppercase tracking-wide mb-2">
              Tech stack
            </p>
            <div className="flex gap-1.5 flex-wrap">
              {project.stack.map((tech) => (
                <Badge key={tech} variant="dark">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {project.features && (
            <div className="mb-6">
              <p className="text-[11px] font-semibold text-teal uppercase tracking-wide mb-2">
                Key features
              </p>
              <ul className="space-y-2">
                {project.features.map((feature, i) => (
                  <li
                    key={i}
                    className="text-xs text-ink-muted leading-relaxed flex gap-2"
                  >
                    <span className="text-teal">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {(project.link || project.repo) && (
            <div className="flex gap-4 pb-6">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  className="text-xs text-teal hover:underline"
                >
                  Live demo
                </a>
              )}
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  className="text-xs text-teal hover:underline"
                >
                  Repository
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
