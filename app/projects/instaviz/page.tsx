import type { Metadata } from "next";
import ProjectDetailPage from "@/components/ProjectDetailPage";
import { projects } from "@/lib/portfolio";

const project = projects.find((item) => item.slug === "instaviz")!;

export const metadata: Metadata = {
  title: "InstaViz | Mohammed Nadhil K N",
  description: "Explore InstaViz, an AI-powered data visualization product built with modern full-stack technologies.",
  alternates: { canonical: "/projects/instaviz" },
  openGraph: { title: "InstaViz | Mohammed Nadhil K N", description: "An AI-powered data visualization product by Mohammed Nadhil K N.", url: "/projects/instaviz" },
  twitter: { card: "summary", title: "InstaViz | Mohammed Nadhil K N", description: "An AI-powered data visualization product by Mohammed Nadhil K N." },
};

export default function InstaViz() {
  return <ProjectDetailPage project={project} eyebrow="Product development project" />;
}
