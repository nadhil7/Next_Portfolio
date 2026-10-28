import type { Metadata } from "next";
import ProjectsPage from "@/components/ProjectsPage";

export const metadata: Metadata = {
  title: "Selected Works | Mohammed Nadhil K N",
  description: "Explore selected full-stack development projects by Mohammed Nadhil K N, including Xerocare, InstaViz, and Letsellr.",
  alternates: { canonical: "/projects" },
  openGraph: { title: "Selected Works | Mohammed Nadhil K N", description: "Selected full-stack development projects by Mohammed Nadhil K N.", url: "/projects" },
  twitter: { card: "summary", title: "Selected Works | Mohammed Nadhil K N", description: "Selected full-stack development projects by Mohammed Nadhil K N." },
};

export default function Projects() {
  return <ProjectsPage />;
}
