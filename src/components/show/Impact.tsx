import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef } from "react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toString() + suffix);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration: 1.6, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, to, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const stats = [
  { value: 3, label: "Episodes recorded", suffix: "" },
  { value: 3, label: "Inspiring guests", suffix: "" },
  { value: 2, label: "Countries represented", suffix: "" },
  { value: 1, label: "Cohort, infinite stories", suffix: "" },
];

export function Impact() {
  return (
    <section id="impact" className="py-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-widest text-primary">Impact</p>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight">
            In numbers
          </h2>
          <p className="mt-4 text-muted-foreground">
            Small numbers, big stories. Every episode is a person who said yes
            to a stranger with a microphone.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-card p-6 hover:bg-secondary transition-colors"
            >
              <div className="text-5xl md:text-6xl font-black text-primary tracking-tight">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-3 text-sm text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
