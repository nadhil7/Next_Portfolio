import type { Metadata } from "next";
import AboutPage from "@/components/AboutPage";

export const metadata: Metadata = {
  title: "About Mohammed Nadhil K | Full-Stack Developer",
  description: "Learn about Mohammed Nadhil K's professional software development experience, technical skills, and approach to building web applications and business software.",
  alternates: { canonical: "/about" },
  openGraph: { title: "About Mohammed Nadhil K | Full-Stack Developer", description: "Professional software development experience, technical skills, and development approach.", url: "/about" },
  twitter: { card: "summary", title: "About Mohammed Nadhil K | Full-Stack Developer", description: "Professional software development experience, technical skills, and development approach." },
};

export default function About() {
  return <AboutPage />;
}
