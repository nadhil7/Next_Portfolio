import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { experience, professionalResponsibilities, projects } from "@/lib/portfolio";
import { BackLink, BodyText, PageFrame, PageTitle, Pill, SectionCard, SectionHeading } from "@/components/portfolio/ThemePage";

const technologyStack = ["Next.js", "React.js", "Node.js", "Express.js", "TypeScript", "PostgreSQL", "MongoDB", "Redis", "RabbitMQ", "AWS", "Cloudflare", "Microservices Architecture"];

export default function ExperiencePage() {
  return (
    <PageFrame>
      <BackLink />
      <PageTitle eyebrow="Professional experience">Software Developer Experience</PageTitle>

      <div className="section-grid">
        <SectionCard>
          <div className="experience-meta">
            <div>
              <h2 className="section-heading">{experience.role}</h2>
              <p className="meta">{experience.company}</p>
            </div>
            <p className="meta-list"><span>{experience.period}</span><span>{experience.arrangement}</span><span>{experience.team} · {experience.leadership}</span></p>
          </div>
          <div className="spaced-copy"><BodyText>{experience.summary}</BodyText></div>
          <BodyText>The work covered the full-stack development lifecycle: understanding business workflows, shaping application architecture and database structure, developing frontend and backend functionality, integrating modules, testing, debugging, and deployment.</BodyText>
        </SectionCard>

        <SectionCard>
          <SectionHeading>Responsibilities</SectionHeading>
          <ul className="detail-list">{professionalResponsibilities.map((item) => <li key={item}>{item}</li>)}</ul>
        </SectionCard>

        <SectionCard>
          <SectionHeading>Technology stack</SectionHeading>
          <div className="tag-list">{technologyStack.map((item) => <Pill key={item}>{item}</Pill>)}</div>
        </SectionCard>

        <SectionCard className="section-card--muted">
          <SectionHeading>See the work in context</SectionHeading>
          <BodyText>Xerocare is the strongest example of this experience: a business ERP/CRM platform developed from scratch by a two-developer team around the company&apos;s operational requirements.</BodyText>
          <Link className="text-link" href={projects[0].link}>Read the Xerocare case study <ArrowRight size={15} aria-hidden="true" /></Link>
        </SectionCard>
      </div>
    </PageFrame>
  );
}
