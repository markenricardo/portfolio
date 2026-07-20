import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "inverted" | "outlineDark";
}

// primary/secondary: for use on light (paper) backgrounds.
// inverted/outlineDark: for use on the dark (charcoal) backgrounds, e.g. Hero/Contact.
const variants = {
  primary: "bg-teal text-teal-deep hover:bg-teal/90",
  secondary: "bg-transparent text-ink border border-ink hover:bg-ink/5",
  inverted: "bg-paper text-charcoal hover:bg-paper/90",
  outlineDark: "bg-transparent text-paper border border-charcoal-muted hover:bg-white/5",
};

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "px-5 py-2.5 rounded-lg text-sm font-medium transition-colors",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
