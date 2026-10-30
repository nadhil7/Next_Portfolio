import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { developmentApproach, experience, skills } from "@/lib/portfolio";
import { BackLink, BodyText, PageFrame, PageTitle, Pill, SectionCard, SectionHeading } from "@/components/portfolio/ThemePage";

export default function AboutPage() {
  return (
    <PageFrame>
      <BackLink />
      <PageTitle eyebrow="Full-Stack Developer / Software Developer">About me</PageTitle>

      <div className="section-grid">
        <SectionCard>
          <SectionHeading>About me</SectionHeading>
          <BodyText>I am a Full-Stack Developer with professional experience building web applications and business software. I work across frontend and backend development and translate business requirements into practical software features.</BodyText>
          <BodyText>At Xerocare, I worked directly with management and employees to understand their business workflows. That experience shaped my approach to development: understand how the work happens, then design and build software that supports it.</BodyText>
        </SectionCard>

        <SectionCard>
          <SectionHeading>Professional background</SectionHeading>
          <div className="experience-meta">
            <div>
              <h3>{experience.role}</h3>
              <p className="meta">{experience.company} · {experience.arrangement}</p>
            </div>
            <p className="meta-list"><span>{experience.period}</span><span>{experience.team}</span><span>{experience.leadership}</span></p>
          </div>
          <div className="spaced-copy"><BodyText>{experience.summary}</BodyText></div>
          <Link className="text-link" href="/experience">View professional experience <ArrowRight size={15} aria-hidden="true" /></Link>
        </SectionCard>

        <SectionCard>
          <SectionHeading>Development approach</SectionHeading>
          <ol className="numbered-list">
            {developmentApproach.map((step) => <li key={step}>{step}</li>)}
          </ol>
        </SectionCard>

        <SectionCard>
          <SectionHeading>Technical skills</SectionHeading>
          <div className="skill-groups">
            {Object.entries(skills).map(([category, items]) => (
              <div className="skill-group" key={category}>
                <h3>{category === "infrastructure" ? "Infrastructure & tools" : category}</h3>
                <div className="tag-list">{items.map((skill) => <Pill key={skill}>{skill}</Pill>)}</div>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>
    </PageFrame>
  );
}
