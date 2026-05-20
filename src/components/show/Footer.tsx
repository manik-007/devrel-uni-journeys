import { Mic, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Mic className="h-4 w-4" />
          </span>
          <span className="font-bold">The DevRel Uni Show</span>
        </div>
        <p className="text-sm text-muted-foreground inline-flex items-center gap-1.5">
          Made with <Heart className="h-3.5 w-3.5 text-primary fill-current" /> for{" "}
          <a
            href="https://www.devreluni.com/"
            target="_blank"
            rel="noreferrer"
            className="text-foreground hover:text-primary transition-colors"
          >
            DevRel Uni
          </a>{" "}
          · Cohort 7
        </p>
      </div>
    </footer>
  );
}
