import { motion } from "motion/react";
import { Play, MapPin, Linkedin, Twitter } from "lucide-react";
import asilbek from "@/assets/guests/asilbek.jpg";
import lupe from "@/assets/guests/lupe.jpg";
import surya from "@/assets/guests/surya.jpg";
import atharva from "@/assets/guests/atharva.jpg";
import jay from "@/assets/guests/jay.jpg";
import purple from "@/assets/guests/purple.jpg";
import yerang from "@/assets/guests/yerang.jpg";
import alex from "@/assets/guests/alex.jpg";
import dayana from "@/assets/guests/dayana.jpg";
import parul from "@/assets/guests/parul.jpg";
import hardik from "@/assets/guests/hardik.jpg";
import kevin from "@/assets/guests/kevin.jpg";

type Episode = {
  number: string;
  name: string;
  role: string;
  location: string;
  blurb: string;
  image?: string;
  youtube: string;
  linkedin: string;
  twitter?: string;
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
    twitter: "https://x.com/asil_beck",
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
    twitter: "https://x.com/luucamay_",
  },
  {
    number: "03",
    name: "Surya Gupta",
    role: "Growth & Partnerships @ Mizzle",
    location: "New Delhi, India",
    blurb:
      "From market research at BlockOn Ventures to driving growth at Mizzle — a peek into early-stage growth.",
    image: surya,
    youtube: "https://youtu.be/P-I_B8lZslY?si=5f62LsyjGI3sH9fv",
    linkedin: "https://www.linkedin.com/in/surya-gupta-ai/",
    twitter: "https://x.com/surya_web3",
  },
  {
    number: "04",
    name: "Atharva Shah",
    role: "Technical Content Lead + DevRel @ AccuKnox",
    location: "Pune, Maharashtra, India",
    blurb:
      "Turning deep technical work into stories developers actually want to read.",
    image: atharva,
    youtube: "#",
    linkedin: "https://www.linkedin.com/in/atharva-shah-tech/",
  },
  {
    number: "05",
    name: "Jay Makwana",
    role: "Smart Contract & Full Stack Developer @ ZeroCodeLabs",
    location: "Mumbai, Maharashtra, India",
    blurb:
      "Shipping smart contracts and full-stack experiences from India's startup capital.",
    image: jay,
    youtube: "#",
    linkedin: "https://www.linkedin.com/in/jay-makwana-313b411a5/",
  },
  {
    number: "06",
    name: "Purple Zhang",
    role: "Developer Relations @ SECBIT Labs · Prev Antalpha, SocialWiki",
    location: "Suzhou, Jiangsu, China",
    blurb:
      "Bridging developer ecosystems across Asia with a love for community-driven Web3.",
    image: purple,
    youtube: "#",
    linkedin: "https://www.linkedin.com/in/purple-zhang-7b0673180/",
    twitter: "https://x.com/ziyinlox",
  },
  {
    number: "07",
    name: "Yerang Kim",
    role: "Secretary, Northern European Chapter · Global Advisor, PUAC",
    location: "Berlin, Germany",
    blurb:
      "Connecting policy, peace and tech across continents from her base in Berlin.",
    image: yerang,
    youtube: "#",
    linkedin: "https://www.linkedin.com/in/yerang-kim/",
  },
  {
    number: "08",
    name: "Alex Stoicescu",
    role: "Advisor @ Claimr · Ex-Communications Lead @ Request Network",
    location: "Berlin Metropolitan Area",
    blurb:
      "A storyteller who shapes how Web3 brands talk to the world.",
    image: alex,
    youtube: "#",
    linkedin: "https://www.linkedin.com/in/alexstoicescu/",
    twitter: "https://x.com/st0icescu",
  },
  {
    number: "09",
    name: "Dayana Mick Forero",
    role: "Fellow @ Dev3Pack · Member @ DevRel Uni",
    location: "Berlin, Germany",
    blurb:
      "Building bridges between developers and the future of Web3 from Berlin.",
    image: dayana,
    youtube: "#",
    linkedin: "https://www.linkedin.com/in/dayanamick/",
    twitter: "https://x.com/AydaMacink",
  },
  {
    number: "10",
    name: "Parul Yadav",
    role: "DevRel @ Kleros · Ex-Nethermind · Ex-Accenture",
    location: "India",
    blurb:
      "From enterprise consulting to building with on-chain justice protocols.",
    image: parul,
    youtube: "#",
    linkedin: "https://www.linkedin.com/in/parulyadav18/",
  },
  {
    number: "11",
    name: "Hardik Bandhiya",
    role: "AWS Campus Leader · Member @ DevRel Uni",
    location: "Junagarh, Gujarat, India",
    blurb:
      "Energising student developer communities one campus at a time.",
    image: hardik,
    youtube: "#",
    linkedin: "https://www.linkedin.com/in/bandhiya-hardik/",
    twitter: "https://x.com/bandhiyahardik8",
  },
  {
    number: "12",
    name: "Hilina Damte",
    role: "Partner @ PayWay · Co-Founder @ mereb.dev · Advisor @ P3 Smart City",
    location: "Addis Ababa, Ethiopia",
    blurb:
      "Driving Web3 adoption and smart-city innovation across East Africa.",
    linkedin: "https://www.linkedin.com/in/hilina-damte-532751158/",
    twitter: "https://x.com/decentralizeEA",
    youtube: "#",
  },
  {
    number: "13",
    name: "Kevin Raúl Padilla Islas",
    role: "CTO @ EVVM · Core Team @ Her DAO Mexico",
    location: "Puebla Metropolitan Area",
    blurb:
      "Building protocols and lifting up the next generation of women in Web3 in Mexico.",
    image: kevin,
    youtube: "#",
    linkedin: "https://www.linkedin.com/in/kevin-padilla-islas/",
    twitter: "https://x.com/jistro",
  },
];

function Initials({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
  return (
    <div className="h-full w-full bg-gradient-to-br from-primary/40 via-primary/20 to-card flex items-center justify-center">
      <span className="text-6xl font-black text-primary/80 tracking-tight">
        {initials}
      </span>
    </div>
  );
}

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
            Thirteen episodes, thirteen perspectives, thirteen different
            corners of the DevRel world.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6" id="guests">
          {episodes.map((ep, i) => (
            <motion.article
              key={ep.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card hover:border-primary/60 transition-all hover:-translate-y-1"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                {ep.image ? (
                  <img
                    src={ep.image}
                    alt={ep.name}
                    loading="lazy"
                    className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                ) : (
                  <Initials name={ep.name} />
                )}
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
                <div className="mt-5 flex items-center gap-3 flex-wrap">
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
                    aria-label={`${ep.name} on LinkedIn`}
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-3.5 w-3.5" /> LinkedIn
                  </a>
                  {ep.twitter && (
                    <>
                      <span className="h-4 w-px bg-border" />
                      <a
                        href={ep.twitter}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${ep.name} on X / Twitter`}
                        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Twitter className="h-3.5 w-3.5" /> X
                      </a>
                    </>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
