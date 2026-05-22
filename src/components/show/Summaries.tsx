import { motion } from "motion/react";
import { Quote } from "lucide-react";

type Summary = {
  number: string;
  name: string;
  takeaway: string;
  bullets: string[];
};

const summaries: Summary[] = [
  {
    number: "01",
    name: "Asilbek Abdullaev",
    takeaway:
      "Community is the bridge between curiosity and a career in DevRel.",
    bullets: [
      "Co-founded a blockchain club at university — his first taste of building community.",
      "Bridged into DevRel at ZeroBase by showing up consistently and shipping in public.",
      "Believes Central Asia is the next big region for developer communities.",
    ],
  },
  {
    number: "02",
    name: "Lupe Canaviri Maydana",
    takeaway:
      "DevRel is bigger than code — it's storytelling, education and inclusion.",
    bullets: [
      "Ex-Microsoft engineer who left to teach the women of Bolivia about crypto.",
      "Brings the discipline of a gymnast and the eye of a filmmaker into her work.",
      "Real DevRel impact is measured in lives changed, not just downloads.",
    ],
  },
  {
    number: "03",
    name: "Surya Gupta",
    takeaway:
      "Early-stage growth is part research, part empathy, part doing the unscalable.",
    bullets: [
      "Moved from market research at BlockOn Ventures to driving growth at Mizzle.",
      "Talks to users daily — that's where every good growth experiment starts.",
      "In Web3, partnerships beat paid acquisition almost every time.",
    ],
  },
  {
    number: "04",
    name: "Atharva Shah",
    takeaway:
      "Great DevRel content turns deep technical work into something developers actually want to read.",
    bullets: [
      "Leads technical content + DevRel at AccuKnox.",
      "Treats every blog post as a small product with its own user.",
      "The job is not to dumb things down — it's to make them click.",
    ],
  },
  {
    number: "05",
    name: "Jay Makwana",
    takeaway:
      "Shipping is the strongest signal you can send in Web3.",
    bullets: [
      "Smart contract + full-stack developer at ZeroCodeLabs in Mumbai.",
      "Learned more from hackathons and side projects than from any course.",
      "If you want to break into Web3, build something — anything — and publish it.",
    ],
  },
  {
    number: "06",
    name: "Yerang Kim",
    takeaway:
      "DevRel can sit at the intersection of policy, peace and technology.",
    bullets: [
      "Secretary, Northern European Chapter; Global Advisor at PUAC.",
      "Bridges policy makers and builders from her base in Berlin.",
      "Diversity of background is a feature, not a bug, in DevRel.",
    ],
  },
  {
    number: "07",
    name: "Alex Stoicescu",
    takeaway:
      "Communications is product work — narrative shapes what people are willing to try.",
    bullets: [
      "Ex-Communications Lead at Request Network, now advising Claimr.",
      "Spends most of her time on how a Web3 brand sounds, not just what it says.",
      "The best DevRel and comms people are obsessed with their audience.",
    ],
  },
  {
    number: "08",
    name: "Dayana Mick Forero",
    takeaway:
      "DevRel is also about translating between cultures, not just languages.",
    bullets: [
      "Dev3Pack fellow and active DevRel Uni member based in Berlin.",
      "Helps connect Latin American builders with European Web3 ecosystems.",
      "Authentic community work is slow, and that's exactly the point.",
    ],
  },
  {
    number: "09",
    name: "Parul Yadav",
    takeaway:
      "Enterprise discipline plus a builder's mindset is a powerful DevRel combo.",
    bullets: [
      "From Accenture and Nethermind to DevRel at Kleros.",
      "Believes the on-chain justice space needs more developer education, not more whitepapers.",
      "Document everything — your past self is your best junior teammate.",
    ],
  },
  {
    number: "10",
    name: "Hardik Bandhiya",
    takeaway:
      "Student communities are where most great DevRel careers quietly begin.",
    bullets: [
      "AWS Campus Leader energising student developer communities in India.",
      "Runs workshops, study jams and cloud meetups from Junagarh, Gujarat.",
      "If you can teach a beginner, you can do DevRel.",
    ],
  },
  {
    number: "11",
    name: "Hilina Damte",
    takeaway:
      "Web3 in East Africa is not a thought experiment — it's already shipping.",
    bullets: [
      "Partner at PayWay, co-founder at mereb.dev, advisor at P3 Smart City.",
      "Building local payments and smart city infrastructure from Addis Ababa.",
      "Adoption follows real-world problems, not the loudest narratives.",
    ],
  },
  {
    number: "12",
    name: "Kevin Raúl Padilla Islas",
    takeaway:
      "Building the protocol and building the community are the same job.",
    bullets: [
      "CTO at EVVM, core team at Her DAO Mexico.",
      "Actively lifting up the next generation of women builders in LATAM.",
      "Open-source is the most honest form of marketing.",
    ],
  },
  {
    number: "13",
    name: "Purple Zhang",
    takeaway:
      "Developer ecosystems across Asia need bridges, not gatekeepers.",
    bullets: [
      "DevRel at SECBIT Labs, previously Antalpha and SocialWiki.",
      "Connects Chinese and global Web3 communities through translation and events.",
      "Patience and consistency beat hype in cross-cultural DevRel.",
    ],
  },
  {
    number: "14",
    name: "Mahima Thacker",
    takeaway:
      "DevRel can look like wearing many hats with intention.",
    bullets: [
      "SheFi 11 graduate, ambassador at Cyfrin and H.E.R. DAO.",
      "Mentor at Dev3Pack and ETHGlobal, contributor to Avax Team 1.",
      "Showing up for multiple communities compounds your impact.",
    ],
  },
  {
    number: "15",
    name: "Gopika Chauhan",
    takeaway:
      "A small-town origin story is a DevRel superpower, not a footnote.",
    bullets: [
      "Builder and community contributor from Karnal, Haryana.",
      "Champions accessibility for developers outside the usual tech hubs.",
      "Your background is your differentiator — lean into it.",
    ],
  },
];

export function Summaries() {
  return (
    <section id="summaries" className="py-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-widest text-primary">
              Summaries
            </p>
            <h2 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight">
              The gist of every conversation
            </h2>
            <p className="mt-4 text-muted-foreground">
              Not in the mood to press play? Here's the key takeaway from each
              guest — a text-first way to skim the show.
            </p>
          </div>
          <a
            href="#episodes"
            className="text-sm text-primary hover:underline underline-offset-4"
          >
            Or watch the episodes →
          </a>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-5">
          {summaries.map((s, i) => (
            <motion.article
              key={s.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
              className="group relative rounded-2xl border border-border bg-card/70 backdrop-blur-sm p-6 hover:border-primary/60 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                    Ep {s.number}
                  </p>
                  <h3 className="mt-1 text-lg font-bold">{s.name}</h3>
                </div>
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
                  <Quote className="h-4 w-4" />
                </span>
              </div>
              <p className="mt-4 text-base leading-relaxed text-foreground">
                {s.takeaway}
              </p>
              <ul className="mt-4 space-y-2">
                {s.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex gap-2 text-sm text-muted-foreground leading-relaxed"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
