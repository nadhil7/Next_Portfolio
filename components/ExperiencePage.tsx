"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { experience, professionalResponsibilities, projects, skills } from "@/lib/portfolio";
import { BackLink, BodyText, PageFrame, PageTitle, Pill, SectionCard, SectionHeading, usePortfolioTheme } from "@/components/portfolio/ThemePage";

export default function ExperiencePage() {
  const { isDark } = usePortfolioTheme();
  const textColor = isDark ? "#ffffff" : "#000000";

  return (
    <PageFrame>
      <BackLink isDark={isDark} />
      <PageTitle isDark={isDark} eyebrow="Professional experience">Software Developer Experience</PageTitle>

      <div className="grid gap-6 md:gap-10 pb-10">
        <SectionCard isDark={isDark}>
          <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-6">
            <div><h2 className="text-2xl md:text-4xl font-bold font-[family-name:var(--font-orbitron)]" style={{ color: textColor }}>{experience.role}</h2><p className="text-lg font-mono opacity-80" style={{ color: textColor }}>{experience.company}</p></div>
            <div className="md:text-right text-sm font-mono opacity-75" style={{ color: textColor }}><p>{experience.period}</p><p>{experience.arrangement} · {experience.team}</p><p>{experience.leadership}</p></div>
          </div>
          <BodyText isDark={isDark}>{experience.summary}</BodyText>
          <div className="mt-5"><BodyText isDark={isDark}>The work covered the full-stack development lifecycle: understanding business workflows, shaping application architecture and database structure, developing frontend and backend functionality, integrating modules, testing, debugging, and deployment.</BodyText></div>
        </SectionCard>

        <SectionCard isDark={isDark}>
          <SectionHeading isDark={isDark}>Responsibilities</SectionHeading>
          <ul className="grid gap-3">
            {professionalResponsibilities.map((item) => <li key={item} className="flex items-start gap-3 text-sm md:text-lg leading-relaxed opacity-90" style={{ color: isDark ? "rgba(255,255,255,0.85)" : "rgba(0,0,0,0.75)" }}><span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: textColor }} /><span>{item}</span></li>)}
          </ul>
        </SectionCard>

        <SectionCard isDark={isDark}>
          <SectionHeading isDark={isDark}>Technology stack</SectionHeading>
          <div className="flex flex-wrap gap-2">{["Next.js", "React.js", "Node.js", "Express.js", "TypeScript", "PostgreSQL", "MongoDB", "Redis", "RabbitMQ", "AWS", "Cloudflare", "Microservices Architecture"].map((item) => <Pill isDark={isDark} key={item}>{item}</Pill>)}</div>
          <p className="mt-5 text-sm md:text-base opacity-75" style={{ color: textColor }}>My broader working toolkit also includes {Object.values(skills).flat().join(", ")}.</p>
        </SectionCard>

        <SectionCard isDark={isDark}>
          <SectionHeading isDark={isDark}>See the work in context</SectionHeading>
          <BodyText isDark={isDark}>Xerocare is the strongest example of this experience: a business ERP/CRM platform developed from scratch by a two-developer team around the company&apos;s operational requirements.</BodyText>
          <Link href={projects[0].link} className="inline-flex items-center gap-2 mt-6 font-mono underline underline-offset-4 hover:opacity-70" style={{ color: textColor }}>Read the Xerocare case study <ArrowRight size={16} /></Link>
        </SectionCard>
      </div>
    </PageFrame>
  );
}
