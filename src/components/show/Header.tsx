import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const navItems = [
  { href: "#story", label: "Story" },
  { href: "#episodes", label: "Episodes" },
  { href: "#summaries", label: "Summaries" },
  { href: "#impact", label: "Impact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <div className="pointer-events-auto inline-flex flex-col items-stretch rounded-2xl border border-border bg-background/70 backdrop-blur-md shadow-sm">
        <div className="inline-flex items-center gap-4 md:gap-6 px-4 md:px-5 py-2">
          <Link
            to="/"
            aria-label="The DevRel Uni Show — Home"
            className="relative inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/60 text-primary-foreground font-black text-lg shadow-[0_4px_14px_-2px_hsl(var(--primary)/0.6),inset_0_1px_0_rgba(255,255,255,0.35),inset_0_-2px_0_rgba(0,0,0,0.25)] hover:scale-105 transition-transform"
            style={{ fontFamily: "Georgia, serif" }}
          >
            D
          </Link>
          <nav className="hidden md:flex items-center gap-5 text-sm text-muted-foreground">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-foreground transition-colors">
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="https://www.devreluni.com/"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground hover:opacity-90 transition-opacity"
          >
            DevRel Uni
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground hover:bg-secondary transition-colors"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.nav
              key="mobile-nav"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden border-t border-border"
            >
              <div className="flex flex-col px-4 py-3 gap-1 text-sm">
                {navItems.map((n) => (
                  <a
                    key={n.href}
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                  >
                    {n.label}
                  </a>
                ))}
                <a
                  href="https://www.devreluni.com/"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                  className="sm:hidden mt-1 inline-flex justify-center rounded-full bg-primary px-3 py-2 text-xs font-medium text-primary-foreground"
                >
                  DevRel Uni
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
