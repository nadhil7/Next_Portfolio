import type { Metadata } from "next";
import HomePage from "@/components/HomePage";

export const metadata: Metadata = {
  title: "Mohammed Nadhil K N | Full-Stack Developer",
  description: "Full-stack developer with professional experience building web applications, ERP/CRM software, and business solutions using modern frontend, backend, and database technologies.",
  alternates: { canonical: "/" },
  openGraph: { title: "Mohammed Nadhil K N | Full-Stack Developer", description: "Full-stack developer building web applications, ERP/CRM software, and business solutions.", url: "/" },
};

export default function Home() {
  return <HomePage />;
}
