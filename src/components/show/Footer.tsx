import { Mail, Globe, Sparkles, Heart, ArrowUpRight } from "lucide-react";

const links = [
  {
    icon: Mail,
    label: "Email",
    value: "manik.officialwork@gmail.com",
    href: "mailto:manik.officialwork@gmail.com",
  },
  {
    icon: Globe,
    label: "Portfolio",
    value: "themanikdiaries.xyz",
    href: "https://themanikdiaries.xyz",
  },
  {
    icon: Sparkles,
    label: "Another initiative",
    value: "Wisdom Shots with Manik",
    href: "https://wisdomshotswithmanik.lovable.app/",
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-72 w-[40rem] rounded-full bg-primary/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">
            Let's stay in touch
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
            Built with care by{" "}
            <span className="text-primary">Manik</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            If this show resonated with you, find me here — I'd love to hear
            from you.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-3 gap-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group relative rounded-2xl border border-border bg-card p-6 hover:border-primary/60 hover:-translate-y-1 transition-all"
            >
              <div className="flex items-start justify-between">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
                  <l.icon className="h-5 w-5" />
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <p className="mt-5 text-xs uppercase tracking-widest text-muted-foreground">
                {l.label}
              </p>
              <p className="mt-1 font-medium break-words">{l.value}</p>
            </a>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} The DevRel Uni Show</p>
          <p className="inline-flex items-center gap-1.5">
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
      </div>
    </footer>
  );
}
