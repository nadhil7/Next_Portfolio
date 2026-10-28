import type { Metadata } from "next";
import ContactPage from "@/components/ContactPage";

export const metadata: Metadata = {
  title: "Contact Mohammed Nadhil K N | Full-Stack Developer",
  description: "Contact Mohammed Nadhil K N about Full-Stack Developer opportunities, web applications, and business software projects.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact Mohammed Nadhil K N | Full-Stack Developer", description: "Discuss professional opportunities, web applications, and business software projects.", url: "/contact" },
  twitter: { card: "summary", title: "Contact Mohammed Nadhil K N | Full-Stack Developer", description: "Discuss professional opportunities, web applications, and business software projects." },
};

export default function Contact() {
  return <ContactPage />;
}
