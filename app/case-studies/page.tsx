import type { Metadata } from "next";
import CaseStudiesPage from "@/components/CaseStudiesPage";

export const metadata: Metadata = {
  title: "Case Studies | Mohammed Nadhil K N",
  description: "Explore professional software development case studies by Mohammed Nadhil K N, including ERP/CRM and business software development work.",
  alternates: { canonical: "/case-studies" },
  openGraph: { title: "Case Studies | Mohammed Nadhil K N", description: "Professional software development case studies by Mohammed Nadhil K N.", url: "/case-studies" },
  twitter: { card: "summary", title: "Case Studies | Mohammed Nadhil K N", description: "Professional software development case studies by Mohammed Nadhil K N." },
};

export default function CaseStudies() {
  return <CaseStudiesPage />;
}
