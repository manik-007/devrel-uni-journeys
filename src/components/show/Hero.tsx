import { motion } from "motion/react";
import { Play, Sparkles } from "lucide-react";
import thumb from "@/assets/episode-2-thumbnail.png";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden pt-32 pb-24"
      style={{ backgroundImage: "var(--gradient-hero)" }}
    >
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            A DevRel Uni Cohort 7 initiative
          </span>
          <h1 className="mt-5 text-5xl md:text-6xl font-black leading-[1.05] tracking-tight">
            The <span className="text-primary">DevRel Uni</span> Show
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-lg">
            A mini-podcast featuring the people behind DevRel Uni Cohort 7 —
            their journeys, their craft, and the meaningful conversations in
            between.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#episodes"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 font-medium text-primary-foreground shadow-[var(--shadow-glow)] hover:translate-y-[-1px] transition-transform"
            >
              <Play className="h-4 w-4 fill-current" />
              Watch episodes
            </a>
            <a
              href="#story"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 font-medium hover:bg-card transition-colors"
            >
              How it started
            </a>
          </div>

          <div className="mt-10 flex items-center gap-8 text-sm text-muted-foreground">
            <Stat label="Episodes" value="13" />
            <span className="h-8 w-px bg-border" />
            <Stat label="Guests" value="13" />
            <span className="h-8 w-px bg-border" />
            <Stat label="Countries" value="7" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-3xl bg-primary/20 blur-3xl" />
          <motion.img
            src={thumb}
            alt="The DevRel Uni Show — Episode 02 with Lupe Canaviri Maydana"
            className="relative rounded-2xl border border-border shadow-2xl"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-2xl font-bold text-foreground">{value}</div>
      <div className="text-xs uppercase tracking-wider">{label}</div>
    </div>
  );
}
