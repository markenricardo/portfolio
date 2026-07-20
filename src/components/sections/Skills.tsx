import { skills } from "@/data/skills";
import { Section } from "@/components/ui/Section";

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4">
        {skills.map((group) => (
          <div key={group.label}>
            <p className="text-[11px] font-medium text-ink-muted mb-2 uppercase tracking-wide">
              {group.label}
            </p>
            <ul className="text-xs text-ink space-y-1.5 leading-relaxed">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
