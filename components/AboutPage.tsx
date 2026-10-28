"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { developmentApproach, experience, skills } from "@/lib/portfolio";
import { BackLink, BodyText, PageFrame, PageTitle, Pill, SectionCard, SectionHeading, usePortfolioTheme } from "@/components/portfolio/ThemePage";

export default function AboutPage() {
  const { isDark } = usePortfolioTheme();

  const textColor = isDark ? "#ffffff" : "#000000";
  const mutedColor = isDark ? "rgba(255,255,255,0.8)" : "rgba(0,0,0,0.8)";

  return (
    <PageFrame>
      <BackLink isDark={isDark} />
      <PageTitle isDark={isDark} eyebrow="Full-Stack Developer / Software Developer">About me</PageTitle>

      <div className="grid gap-6 md:gap-10 pb-10">
        <SectionCard isDark={isDark}>
          <SectionHeading isDark={isDark}>A developer focused on useful software</SectionHeading>
          <BodyText isDark={isDark}>I am a Full-Stack Developer with professional experience building web applications and business software. I work across frontend and backend development and translate business requirements into practical software features.</BodyText>
          <div className="mt-4"><BodyText isDark={isDark}>At Xerocare, I collaborated directly with company management and employees to understand their workflows and requirements. That experience shaped how I approach development: understand the operation first, then build software that fits it.</BodyText></div>
        </SectionCard>

        <SectionCard isDark={isDark}>
          <SectionHeading isDark={isDark}>Professional background</SectionHeading>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">
            <div><h3 className="text-xl md:text-2xl font-bold font-[family-name:var(--font-orbitron)]" style={{ color: textColor }}>{experience.role}</h3><p className="font-mono opacity-75" style={{ color: textColor }}>{experience.company} · {experience.arrangement}</p></div>
            <p className="text-sm font-mono opacity-75 md:text-right" style={{ color: textColor }}>{experience.period}<br />{experience.team} · {experience.leadership}</p>
          </div>
          <BodyText isDark={isDark}>{experience.summary}</BodyText>
          <Link href="/experience" className="inline-flex items-center gap-2 mt-6 font-mono underline underline-offset-4 hover:opacity-70" style={{ color: textColor }}>View professional experience <ArrowRight size={16} /></Link>
        </SectionCard>

        <SectionCard isDark={isDark}>
          <SectionHeading isDark={isDark}>Development approach</SectionHeading>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
            {developmentApproach.map((step, index) => <li key={step} className="flex items-start gap-3 text-sm md:text-base leading-relaxed" style={{ color: mutedColor }}><span className="font-mono opacity-60 min-w-6">{String(index + 1).padStart(2, "0")}</span><span>{step}</span></li>)}
          </ol>
        </SectionCard>

        <SectionCard isDark={isDark}>
          <SectionHeading isDark={isDark}>Technical skills</SectionHeading>
          <div className="grid gap-6 md:grid-cols-2">
            {Object.entries(skills).map(([category, items]) => <div key={category}><h3 className="font-mono text-sm uppercase tracking-wider opacity-70 mb-3" style={{ color: textColor }}>{category === "infrastructure" ? "Infrastructure & tools" : category}</h3><div className="flex flex-wrap gap-2">{items.map((skill) => <Pill isDark={isDark} key={skill}>{skill}</Pill>)}</div></div>)}
          </div>
        </SectionCard>
      </div>
    </PageFrame>
  );
}
