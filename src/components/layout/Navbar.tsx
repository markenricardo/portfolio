"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = ["About", "Experience", "Projects", "Skills", "Contact"];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-charcoal">
      <div className="h-16 flex justify-between items-center px-6 sm:px-8">
        <span className="text-paper font-medium">Marken Ricardo</span>

        <div className="hidden sm:flex gap-6 text-sm text-teal">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="hover:opacity-80">
              {link}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="sm:hidden text-paper"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="sm:hidden flex flex-col gap-1 px-6 pb-4 text-sm text-teal">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="py-2 border-t border-charcoal-muted/60 first:border-t-0"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
