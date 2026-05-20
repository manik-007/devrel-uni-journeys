import { Link } from "@tanstack/react-router";
import { Mic } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/60 border-b border-border">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Mic className="h-4 w-4" />
          </span>
          <span className="font-bold tracking-tight">
            The DevRel Uni Show
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          <a href="#story" className="hover:text-foreground transition-colors">Story</a>
          <a href="#episodes" className="hover:text-foreground transition-colors">Episodes</a>
          <a href="#guests" className="hover:text-foreground transition-colors">Guests</a>
          <a href="#impact" className="hover:text-foreground transition-colors">Impact</a>
        </nav>
        <a
          href="https://www.devreluni.com/"
          target="_blank"
          rel="noreferrer"
          className="hidden sm:inline-flex items-center rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
        >
          DevRel Uni
        </a>
      </div>
    </header>
  );
}
