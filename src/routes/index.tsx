import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/show/Header";
import { Hero } from "@/components/show/Hero";
import { Story } from "@/components/show/Story";
import { Episodes } from "@/components/show/Episodes";
import { Impact } from "@/components/show/Impact";
import { Footer } from "@/components/show/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The DevRel Uni Show — Meaningful Conversations with Cohort 7" },
      {
        name: "description",
        content:
          "A mini-podcast featuring the people behind DevRel Uni Cohort 7. Three episodes, three guests, two countries — and counting.",
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
    <div className="min-h-screen bg-background text-foreground antialiased scroll-smooth">
      <Header />
      <main>
        <Hero />
        <Story />
        <Episodes />
        <Impact />
      </main>
      <Footer />
    </div>
  );
}
