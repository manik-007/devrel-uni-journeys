import { motion } from "motion/react";
import { Lightbulb, MessageCircle, Send, Mic } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    title: "The spark",
    body: "Mid-cohort, I had an idea: what if we put a mic in front of the humans behind DevRel Uni and just… talked?",
  },
  {
    icon: MessageCircle,
    title: "Asking Bianca",
    body: "I pitched the idea to Bianca Buzea, founder of DevRel Uni. She said yes. That was all the green light I needed.",
  },
  {
    icon: Send,
    title: "Cold DMs, warm replies",
    body: "I DM'd a lot of cohort members. Slowly, the yeses started coming in — from Tashkent to Seattle to New Delhi.",
  },
  {
    icon: Mic,
    title: "Recording, episode by episode",
    body: "Three conversations later, The DevRel Uni Show is a real, growing thing — and we're just getting started.",
  },
];

export function Story() {
  return (
    <section id="story" className="py-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-widest text-primary">The Journey</p>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight">
            How it started
          </h2>
          <p className="mt-4 text-muted-foreground">
            No studio, no big plan — just an idea, a permission, and a string of
            DMs that turned into something special.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-2xl border border-border bg-card p-6 hover:border-primary/60 transition-colors"
            >
              <div className="absolute top-4 right-5 text-xs font-mono text-muted-foreground">
                0{i + 1}
              </div>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <s.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
