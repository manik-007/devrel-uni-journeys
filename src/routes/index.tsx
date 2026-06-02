import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/show/Header";
import { Hero } from "@/components/show/Hero";
import { Story } from "@/components/show/Story";
import { Summaries } from "@/components/show/Summaries";
import { Episodes } from "@/components/show/Episodes";
import { Impact } from "@/components/show/Impact";
import { Footer } from "@/components/show/Footer";
import { ScrollToTop } from "@/components/show/ScrollToTop";
import { GlobeMembers } from "@/components/show/GlobeMembers";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The DevRel Uni Show" },
      {
        name: "description",
        content:
          "A mini-podcast featuring the people behind DevRel Uni Cohort 7.",
      },
      { property: "og:title", content: "The DevRel Uni Show" },
      {
        property: "og:description",
        content:
          "Meaningful conversations with the humans of DevRel Uni Cohort 7.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen text-foreground antialiased scroll-smooth">
      <Header />
      <main>
        <Hero />
        <Story />
        <Episodes />
        <GlobeMembers />
        <Summaries />
        <Impact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
