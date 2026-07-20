import { cn } from "@/lib/utils";
import { Container } from "./Container";

export function Section({
  id,
  title,
  children,
  className,
  bordered = true,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  bordered?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "px-6 sm:px-8 py-12 scroll-mt-16",
        bordered && "border-b border-black/10",
        className
      )}
    >
      <Container>
        <h2 className="text-lg font-medium text-ink mb-5">{title}</h2>
        {children}
      </Container>
    </section>
  );
}
