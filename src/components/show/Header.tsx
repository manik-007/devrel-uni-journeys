import { Link } from "@tanstack/react-router";

export function Header() {
  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <div className="pointer-events-auto inline-flex items-center gap-6 rounded-full border border-border bg-background/70 backdrop-blur-md px-5 py-2 shadow-sm">
        <Link
          to="/"
          aria-label="The DevRel Uni Show — Home"
          className="relative inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/60 text-primary-foreground font-black text-lg shadow-[0_4px_14px_-2px_hsl(var(--primary)/0.6),inset_0_1px_0_rgba(255,255,255,0.35),inset_0_-2px_0_rgba(0,0,0,0.25)] hover:scale-105 transition-transform"
          style={{ fontFamily: "Georgia, serif" }}
        >
          D
        </Link>
        <nav className="hidden md:flex items-center gap-5 text-sm text-muted-foreground">
          <a href="#story" className="hover:text-foreground transition-colors">Story</a>
          <a href="#episodes" className="hover:text-foreground transition-colors">Episodes</a>
          <a href="#impact" className="hover:text-foreground transition-colors">Impact</a>
        </nav>
        <a
          href="https://www.devreluni.com/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground hover:opacity-90 transition-opacity"
        >
          DevRel Uni
        </a>
      </div>
    </header>
  );
}
