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
      "Just do it — community and career grow when you stop waiting for the right moment.",
    bullets: [
      "Started in blockchain as a security intern, then moved through DevRel at Ziki, DevOps at EPAM, and a side product-management role.",
      "Co-founded the Sunway Blockchain Club in Malaysia and launched a new community in Tashkent after spotting a gap back home.",
      "Believes community work should stay free and passion-driven — it rarely pays bills, but it's where the real connections live.",
    ],
  },
  {
    number: "02",
    name: "Lupe Canaviri Maydana",
    takeaway:
      "DevRel is bigger than code — it's storytelling, education, and inclusion.",
    bullets: [
      "Software engineer with 10+ years, ex-Microsoft, who has taught 100+ Latin American women to break into tech.",
      "Founded 'It Crypto' in Bolivia to help women navigate crypto safely amid dollar scarcity and political turmoil.",
      "Filmmaker, aerialist, and salsa community lead — proof that DevRel impact is measured in lives changed, not just downloads.",
    ],
  },
  {
    number: "03",
    name: "Surya Gupta",
    takeaway:
      "Build in public, pick a niche, and let the network find you.",
    bullets: [
      "Moved from hackathons and a NASA Space Apps finalist project to growth roles at Block On Ventures and now Mizzle.",
      "Runs Science Surya (marketing agency) and Zaifer (Web3 community) on the side — every channel feeds the next opportunity.",
      "His three rules for beginners: identify your niche, ship proof-of-work publicly, and show up to events with a value-first mindset.",
    ],
  },
  {
    number: "04",
    name: "Atharva Shah",
    takeaway:
      "Great DevRel turns deep technical work into something developers actually want to read.",
    bullets: [
      "Leads technical content and DevRel at AccuKnox, spanning blogs, GTM, webinars, hackathons, and internal tooling.",
      "Built an AI 'second brain' of 2,000+ linked notes that powers his GTM, blog clusters, and product launches.",
      "His four pillars for high-impact DevRel: nail the message, ship integrations, build internal tools, and treat documentation as a product.",
    ],
  },
  {
    number: "05",
    name: "Jay Makwana",
    takeaway:
      "High agency beats waiting for permission — experiment, ship, and tell the story.",
    bullets: [
      "Smart-contract engineer at ZeroCodeLabs, now in the Uniswap Hook Incubator Cohort 9 working on impermanent loss.",
      "Was the sole Solidity engineer on a $100K Polygon Village social-DeFi grant — leaned on self-learning and AI to fill the mentorship gap.",
      "Joined DevRel Uni to break out of the engineering bubble and learn distribution; now storytelling his incubator journey in public.",
    ],
  },
  {
    number: "06",
    name: "Yerang Kim",
    takeaway:
      "Careers aren't linear — start with 'A' instead of obsessing over 'Z'.",
    bullets: [
      "Software engineer turned art-school student turned policy professional, now bridging policy and tech from Berlin.",
      "Building 'Find Your Taste' and a 'Mixtape Generator' as her DevRel Uni projects, learning to ship in public despite imposter syndrome.",
      "Her advice: show up, meet the right people, and let serendipity compound — small consistent actions beat fixating on a distant goal.",
    ],
  },
  {
    number: "07",
    name: "Alex Stoicescu",
    takeaway:
      "Don't wait to be ready, segment your audience, and never stop archiving your proof of work.",
    bullets: [
      "Two decades across gaming (Ubisoft), automotive (OT Group), DAOs, and Web3 (Request Network) — adaptability as a superpower.",
      "Building a white-label hackathon platform with escrow smart contracts to finally fix the chronic payout-delay problem hackers face.",
      "Uses AI for content, code (built a full Rummy game in two days), and clarity — but always humanises the output before shipping.",
    ],
  },
  {
    number: "08",
    name: "Dayana Mick Forero",
    takeaway:
      "Newcomers bring fresh eyes — speak up, build in public, and treat rejection as data.",
    bullets: [
      "Colombian-born, Berlin-based engineer who entered tech through a feminist coding collective and is now pivoting to DevRel.",
      "Exploring payments as her DevRel Uni theme — looking at the social hierarchies hidden behind everyday transactions.",
      "Job-search wisdom: cold apps lose to networking, every rejection is a data point, and visibility matters as much as the work itself.",
    ],
  },
  {
    number: "09",
    name: "Purple Zhang",
    takeaway:
      "In an AI-driven world, your personal voice and curiosity are the moat.",
    bullets: [
      "Journalism major who fell into DAOs during COVID, then volunteered at China's first hacker house and never looked back.",
      "Now researching formal verification while using AI as a personal study assistant — not a substitute for original thought.",
      "Advises beginners to follow real interest, share the messy learning publicly, and trust themselves before chasing trends.",
    ],
  },
  {
    number: "10",
    name: "Parul Yadav",
    takeaway:
      "Tools are getting cheap — judgment is the thing that isn't.",
    bullets: [
      "Went from Solidity internships at Nethermind to business analysis at Accenture, then landed at Kleros as a Web3 DevRel.",
      "Building 'DevRel AI Stack', a monthly research report filtering AI signal-from-noise for DevRel teams.",
      "Three habits she swears by: make real connections, consistently go the extra 10–15%, and overlap roles before fully switching.",
    ],
  },
  {
    number: "11",
    name: "Hardik Bandhiya",
    takeaway:
      "Empathy is the cornerstone of community — AI can't replicate it, and titles can't replace it.",
    bullets: [
      "Leads GDGC and AWS communities at his college in Junagarh while still completing his diploma.",
      "Building a 'Tinder for developers' to help students across regions find hackathon teammates and learning partners.",
      "Warns new community leads against over-relying on AI, urging them to lead from the front and treat members like family.",
    ],
  },
  {
    number: "12",
    name: "Kevin Padilla Islas",
    takeaway:
      "Don't overthink, don't gatekeep, and keep it fun — that's how you build (and teach) in Web3.",
    bullets: [
      "CTO of EVVM and builder of Shine; core contributor to Mexican Web3 communities like Ethereum Mexico and H.E.R. DAO.",
      "Tailors learning paths to background: Solidity for EVM, Rust for Solana, Cairo for StarkNet — and basics first for everyone.",
      "From a family of teachers, he treats knowledge as something to be shared freely — accessibility beats gatekeeping every time.",
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
