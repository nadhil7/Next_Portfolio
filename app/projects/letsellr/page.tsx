import type { Metadata } from "next";
import ProjectDetailPage from "@/components/ProjectDetailPage";
import { projects } from "@/lib/portfolio";

const project = projects.find((item) => item.slug === "letsellr")!;

export const metadata: Metadata = {
  title: "Letsellr | Mohammed Nadhil K N",
  description: "Explore Letsellr, a freelance full-stack property management platform built by Mohammed Nadhil K N.",
  alternates: { canonical: "/projects/letsellr" },
  openGraph: { title: "Letsellr | Mohammed Nadhil K N", description: "A freelance full-stack property management platform by Mohammed Nadhil K N.", url: "/projects/letsellr" },
  twitter: { card: "summary", title: "Letsellr | Mohammed Nadhil K N", description: "A freelance full-stack property management platform by Mohammed Nadhil K N." },
};

export default function Letsellr() {
  return <ProjectDetailPage project={project} eyebrow="Freelance full-stack project" />;
}
