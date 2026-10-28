import type { Metadata } from "next";
import XerocareCaseStudy from "@/components/XerocareCaseStudy";

export const metadata: Metadata = {
  title: "Xerocare ERP/CRM Platform | Mohammed Nadhil K",
  description: "Explore my professional experience building an ERP/CRM platform from scratch, including business workflows, application architecture, frontend, backend, and database development.",
  alternates: { canonical: "/projects/xerocare" },
  openGraph: { title: "Xerocare ERP/CRM Platform | Mohammed Nadhil K", description: "A full-stack ERP/CRM case study covering business workflows, architecture, frontend, backend, and database development.", url: "/projects/xerocare" },
  twitter: { card: "summary", title: "Xerocare ERP/CRM Platform | Mohammed Nadhil K", description: "A full-stack ERP/CRM case study covering business workflows, architecture, frontend, backend, and database development." },
};

export default function Xerocare() {
  return <XerocareCaseStudy />;
}
