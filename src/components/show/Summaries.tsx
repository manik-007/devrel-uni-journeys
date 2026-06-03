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
      "Just do it. Begin immediately rather than waiting for the right time or the perfect conditions.",
    bullets: [
      "Started in tech through a blockchain security internship with no prior blockchain knowledge, then moved through DevRel at Ziki, DevOps at EPAM, and a side product management role.",
      "Cofounded the Sunway Blockchain Club in Malaysia and later launched a new community in Tashkent after spotting a clear gap back home.",
      "Believes community work should stay free and passion driven; it rarely pays the bills, but it is where the real connections live.",
    ],
  },
  {
    number: "02",
    name: "Lupe Canaviri Maydana",
    takeaway:
      "DevRel is bigger than code. It is storytelling, education, and inclusion that change real lives.",
    bullets: [
      "Software engineer with over a decade of experience and ex Microsoft, who has taught hundreds of Latin American women to break into tech.",
      "Founded It Crypto in Bolivia to help women navigate crypto safely amid dollar scarcity and political turmoil.",
      "Filmmaker, aerialist, and salsa community lead, treating documentaries and community work as a continuation of her engineering practice.",
    ],
  },
  {
    number: "03",
    name: "Surya Gupta",
    takeaway:
      "Build in public, pick a niche, and let the network find you.",
    bullets: [
      "Moved from hackathons and a NASA Space Apps finalist project to growth roles at BlockOn Ventures and now Mizzle.",
      "Runs Science Surya as a marketing agency and Zaifer as a Web3 community on the side; every channel feeds the next opportunity.",
      "His three rules for beginners are: identify your niche, ship proof of work publicly, and show up to events with a value first mindset.",
    ],
  },
  {
    number: "04",
    name: "Atharva Shah",
    takeaway:
      "Great DevRel turns deep technical work into something developers actually want to read.",
    bullets: [
      "Leads technical content and DevRel at AccuKnox, spanning blogs, GTM, webinars, hackathons, and internal tooling.",
      "Built an AI second brain of over two thousand linked notes that powers his GTM motion, blog clusters, and product launches.",
      "His four pillars for high impact DevRel are: nail the message, ship integrations, build internal tools, and treat documentation as a product.",
    ],
  },
  {
    number: "05",
    name: "Jay Makwana",
    takeaway:
      "High agency beats waiting for permission. Experiment, ship, and tell the story.",
    bullets: [
      "Smart contract engineer at ZeroCodeLabs, now in the Uniswap Hook Incubator Cohort 9 working on impermanent loss.",
      "Was the sole Solidity engineer on a one hundred thousand dollar Polygon Village social DeFi grant and leaned on self learning and AI to fill the mentorship gap.",
      "Joined DevRel Uni to break out of the engineering bubble and learn distribution, and is now storytelling his incubator journey in public.",
    ],
  },
  {
    number: "06",
    name: "Yerang Kim",
    takeaway:
      "Careers are not linear. Start with A instead of obsessing over Z.",
    bullets: [
      "Software engineer turned art school student turned policy professional, now bridging policy and technology from Berlin.",
      "Building Find Your Taste and a Mixtape Generator as her DevRel Uni projects, learning to ship in public despite impostor syndrome.",
      "Her advice is to show up, meet the right people, and let serendipity compound; small consistent actions beat fixating on a distant goal.",
    ],
  },
  {
    number: "07",
    name: "Alex Stoicescu",
    takeaway:
      "Do not wait to be ready. Segment your audience and never stop archiving your proof of work.",
    bullets: [
      "Two decades across gaming at Ubisoft, automotive at OT Group, DAOs, and Web3 at Request Network, treating adaptability as a superpower.",
      "Building a white label hackathon platform with escrow smart contracts to finally fix the chronic payout delay problem hackers face.",
      "Uses AI for content, code, and clarity, including a full Rummy game built in two days, but always humanises the output before shipping.",
    ],
  },
  {
    number: "08",
    name: "Dayana Mick Forero",
    takeaway:
      "Newcomers bring fresh eyes. Speak up, build in public, and treat rejection as data.",
    bullets: [
      "Colombian born and Berlin based engineer who entered tech through a feminist coding collective and is now pivoting into DevRel.",
      "Exploring payments as her DevRel Uni theme, looking at the social hierarchies hidden behind everyday transactions.",
      "Job search wisdom: cold applications lose to networking, every rejection is a data point, and visibility matters as much as the work itself.",
    ],
  },
  {
    number: "09",
    name: "Purple Zhang",
    takeaway:
      "In an AI driven world, your personal voice and genuine curiosity are the real moat.",
    bullets: [
      "Journalism major who fell into DAOs during COVID, then volunteered at China's first hacker house and never looked back.",
      "Now researching formal verification while using AI as a personal study assistant rather than a substitute for original thought.",
      "Advises beginners to follow real interest, share the messy learning publicly, and trust themselves before chasing trends.",
    ],
  },
  {
    number: "10",
    name: "Parul Yadav",
    takeaway:
      "Tools are getting cheap. Judgment is the thing that is not.",
    bullets: [
      "Went from Solidity internships at Nethermind to business analysis at Accenture, then landed at Kleros as a Web3 DevRel.",
      "Building DevRel AI Stack, a monthly research report that filters AI signal from noise for DevRel teams.",
      "Three habits she swears by: make real connections, consistently go the extra ten to fifteen percent, and overlap roles before fully switching.",
    ],
  },
  {
    number: "11",
    name: "Kevin Padilla Islas",
    takeaway:
      "Do not overthink, do not gatekeep, and keep it fun. That is how you build and teach in Web3.",
    bullets: [
      "CTO of EVVM and builder of Shine, and a core contributor to Mexican Web3 communities like Ethereum Mexico and H.E.R. DAO.",
      "Tailors learning paths to background: Solidity for EVM, Rust for Solana, Cairo for StarkNet, with strong fundamentals first for everyone.",
      "From a family of teachers, he treats knowledge as something to be shared freely; accessibility beats gatekeeping every time.",
    ],
  },
  {
    number: "12",
    name: "Hardik Bandhiya",
    takeaway:
      "Empathy is the cornerstone of community. AI cannot replicate it, and titles cannot replace it.",
    bullets: [
      "Leads the GDGC and AWS communities at his college in Junagarh while still completing his diploma, and speaks regularly at student events.",
      "Building a Tinder for developers to help students across regions find hackathon teammates and learning partners.",
      "Warns new community leads against overrelying on AI, urging them to lead from the front and treat members like family.",
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
              Not in the mood to press play? Here is the key takeaway from every
              episode we have shot so far, a text first way to skim the show.
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
