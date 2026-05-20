import { motion } from "motion/react";
import { Play, MapPin, Linkedin } from "lucide-react";
import asilbek from "@/assets/guests/asilbek.jpg";
import lupe from "@/assets/guests/lupe.jpg";
import surya from "@/assets/guests/surya.jpg";

type Episode = {
  number: string;
  name: string;
  role: string;
  location: string;
  blurb: string;
  image: string;
  youtube: string;
  linkedin: string;
};

const episodes: Episode[] = [
  {
    number: "01",
    name: "Asilbek Abdullaev",
    role: "Cloud & DevOps Engineer @ EPAM · Founder, DevPev",
    location: "Tashkent, Uzbekistan",
    blurb:
      "From co-founding a blockchain club to DevRel at ZeroBase — building community across continents.",
    image: asilbek,
    youtube: "https://youtu.be/YUmeZLNJ6BY?si=W_1dUMY6bn9msQNb",
    linkedin: "https://www.linkedin.com/in/asilbek0311/",
  },
  {
    number: "02",
    name: "Lupe Canaviri Maydana",
    role: "Ex-Frontend Engineer @ Microsoft · Community Builder",
    location: "Seattle, Washington",
    blurb:
      "Filmmaker, gymnast, and educator teaching the women of Bolivia about crypto — a truly meaningful conversation.",
    image: lupe,
    youtube: "https://youtu.be/YLw9PueK9jA?si=sjtqKUGhd_DwIVCK",
    linkedin: "https://www.linkedin.com/in/luucamay/",
  },
  {
    number: "03",
    name: "Surya Gupta",
    role: "Growth & Partnerships @ Mizzle",
    location: "New Delhi, India",
    blurb:
      "From market research at BlockOn Ventures to driving growth at Mizzle — a peek into early-stage growth.",
    image: surya,
    youtube: "#",
    linkedin: "https://www.linkedin.com/in/surya-gupta-ai/",
  },
];

export function Episodes() {
  return (
    <section id="episodes" className="py-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <p className="text-sm uppercase tracking-widest text-primary">Episodes</p>
            <h2 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight">
              Conversations so far
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Three episodes, three perspectives, three different corners of the
            DevRel world.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6" id="guests">
          {episodes.map((ep, i) => (
            <motion.article
              key={ep.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card hover:border-primary/60 transition-all hover:-translate-y-1"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={ep.image}
                  alt={ep.name}
                  className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <span className="absolute top-4 left-4 rounded-md bg-primary px-2.5 py-1 text-xs font-bold text-primary-foreground tracking-wider">
                  EP {ep.number}
                </span>
                {ep.youtube !== "#" && (
                  <a
                    href={ep.youtube}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Watch episode with ${ep.name}`}
                    className="absolute bottom-4 right-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-110 transition-transform"
                  >
                    <Play className="h-5 w-5 fill-current" />
                  </a>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{ep.name}</h3>
                <p className="mt-1 text-sm text-primary">{ep.role}</p>
                <div className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" />
                  {ep.location}
                </div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  {ep.blurb}
                </p>
                <div className="mt-5 flex items-center gap-3">
                  {ep.youtube !== "#" ? (
                    <a
                      href={ep.youtube}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
                    >
                      <Play className="h-3.5 w-3.5" /> Watch
                    </a>
                  ) : (
                    <span className="text-sm font-medium text-muted-foreground">
                      Coming soon
                    </span>
                  )}
                  <span className="h-4 w-px bg-border" />
                  <a
                    href={ep.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-3.5 w-3.5" /> LinkedIn
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
