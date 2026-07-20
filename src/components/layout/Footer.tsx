export function Footer() {
  return (
    <footer className="px-6 sm:px-8 py-6 bg-charcoal text-center">
      <p className="text-xs text-ink-muted">
        © {new Date().getFullYear()} Marken Ricardo. Built with Next.js and Tailwind CSS.
      </p>
    </footer>
  );
}
