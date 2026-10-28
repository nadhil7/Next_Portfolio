"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/portfolio";
import { BackLink, BodyText, PageFrame, PageTitle, Pill, SectionCard, usePortfolioTheme } from "@/components/portfolio/ThemePage";

export default function CaseStudiesPage() {
  const { isDark } = usePortfolioTheme();
  const textColor = isDark ? "#ffffff" : "#000000";
  const caseStudies = projects.filter((project) => project.slug === "xerocare");

  return (
    <PageFrame>
      <BackLink isDark={isDark} />
      <PageTitle isDark={isDark} eyebrow="Professional software development">Case Studies</PageTitle>
      <div className="grid gap-6 md:gap-10 pb-10">
        {caseStudies.map((study) => (
          <SectionCard isDark={isDark} key={study.slug}>
            <h2 className="text-2xl md:text-4xl font-bold font-[family-name:var(--font-orbitron)] mb-3" style={{ color: textColor }}>{study.title}</h2>
            <p className="font-mono text-sm opacity-70 mb-5" style={{ color: textColor }}>{study.date} · {study.status}</p>
            <div className="flex flex-wrap gap-2 mb-6">{study.techStack.map((tech) => <Pill isDark={isDark} key={tech}>{tech}</Pill>)}</div>
            <BodyText isDark={isDark}>A detailed case study of my contribution to a full-stack ERP/CRM platform developed from scratch for printer-industry operations.</BodyText>
            <Link href={`/projects/${study.slug}`} className="inline-flex items-center gap-2 mt-6 font-mono underline underline-offset-4 hover:opacity-70" style={{ color: textColor }}>Read the Xerocare case study <ArrowRight size={16} /></Link>
          </SectionCard>
        ))}
      </div>
    </PageFrame>
  );
}
