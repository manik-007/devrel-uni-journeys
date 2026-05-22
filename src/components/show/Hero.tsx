import { motion } from "motion/react";
import { Play, ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden pt-36 pb-28"
      style={{ backgroundImage: "var(--gradient-hero)" }}
    >
      {/* ambient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/30 blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -right-20 h-[28rem] w-[28rem] rounded-full bg-primary/20 blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 text-5xl md:text-7xl lg:text-8xl font-black leading-[1.02] tracking-tight"
        >
          The <span className="text-primary">DevRel Uni</span>
          <br />
          Show
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground"
        >
          A mini-podcast featuring the people behind DevRel Uni Cohort 7 — their
          journeys, their craft, and the meaningful conversations in between.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-9 flex flex-wrap justify-center gap-3"
        >
          <a
            href="#episodes"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground shadow-[var(--shadow-glow)] hover:translate-y-[-1px] transition-transform"
          >
            <Play className="h-4 w-4 fill-current" />
            Watch episodes
          </a>
          <a
            href="#story"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 backdrop-blur px-6 py-3 font-medium hover:bg-card transition-colors"
          >
            How it started
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-14 flex items-center justify-center gap-8 text-sm text-muted-foreground"
        >
          <Stat label="Episodes" value="15" />
          <span className="h-8 w-px bg-border" />
          <Stat label="Guests" value="15" />
          <span className="h-8 w-px bg-border" />
          <Stat label="Countries" value="7" />
        </motion.div>

        <motion.a
          href="#story"
          aria-label="Scroll to story"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{
            opacity: { delay: 0.8, duration: 0.6 },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          }}
          className="mt-16 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary/60 transition-colors"
        >
          <ArrowDown className="h-4 w-4" />
        </motion.a>
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
