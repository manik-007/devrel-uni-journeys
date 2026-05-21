import { Link } from "@tanstack/react-router";

export function Header() {
  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <div className="pointer-events-auto inline-flex items-center gap-6 rounded-full border border-border bg-background/70 backdrop-blur-md px-5 py-2 shadow-sm">
        <Link to="/" className="text-xs font-semibold tracking-widest uppercase text-primary">
          DRU·Show
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
