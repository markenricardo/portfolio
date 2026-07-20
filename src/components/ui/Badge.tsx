import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "dark";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "text-xs px-2.5 py-1 rounded-md font-medium",
        variant === "default" && "bg-teal-tint text-teal-dark",
        variant === "dark" && "bg-charcoal text-teal",
        className
      )}
    >
      {children}
    </span>
  );
}
