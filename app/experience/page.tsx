import type { Metadata } from "next";
import ExperiencePage from "@/components/ExperiencePage";

export const metadata: Metadata = {
  title: "Software Developer Experience | Mohammed Nadhil K",
  description: "Explore my software development experience at Xerocare, including full-stack development, ERP/CRM modules, architecture, database design, testing, and deployment.",
  alternates: { canonical: "/experience" },
  openGraph: { title: "Software Developer Experience | Mohammed Nadhil K", description: "Full-stack software development experience at Xerocare.", url: "/experience" },
  twitter: { card: "summary", title: "Software Developer Experience | Mohammed Nadhil K", description: "Full-stack software development experience at Xerocare." },
};

export default function Experience() {
  return <ExperiencePage />;
}
