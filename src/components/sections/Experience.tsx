import { experience } from "@/data/experience";
import { Section } from "@/components/ui/Section";

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="grid sm:grid-cols-2 gap-4">
        {experience.map((exp) => (
          <div
            key={exp.company}
            className="bg-white border border-black/10 rounded-card p-4"
          >
            <p className="text-[11px] font-medium text-teal-dark mb-1 uppercase tracking-wide">
              {exp.role}
            </p>
            <p className="font-medium text-sm text-ink mb-2">{exp.company}</p>
            <ul className="list-disc pl-4 text-xs text-ink-secondary space-y-1 leading-relaxed">
              {exp.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
