import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { BackLink, BodyText, PageFrame, PageTitle, Pill, SectionCard, SectionHeading } from "@/components/portfolio/ThemePage";

type Project = {
  title: string;
  date: string;
  status: string;
  techStack: readonly string[];
  description: readonly string[];
};

export default function ProjectDetailPage({ project, eyebrow }: { project: Project; eyebrow: string }) {
  return (
    <PageFrame>
      <BackLink href="/projects" label="Back to projects" />
      <PageTitle eyebrow={eyebrow}>{project.title}</PageTitle>
      <div className="section-grid">
        <SectionCard>
          <div className="experience-meta">
            <p className="meta">{project.date}</p>
            <p className="meta">{project.status}</p>
          </div>
          <div className="tag-list detail-tags">{project.techStack.map((tech) => <Pill key={tech}>{tech}</Pill>)}</div>
          <ul className="detail-list">{project.description.map((item) => <li key={item}>{item}</li>)}</ul>
          {project.title === "Letsellr" && <a className="text-link" href="https://letsellr.in/" target="_blank" rel="noreferrer">Visit Letsellr <ExternalLink size={15} aria-hidden="true" /></a>}
        </SectionCard>
        <SectionCard className="section-card--muted">
          <SectionHeading>Project context</SectionHeading>
          <BodyText>{project.title === "InstaViz" ? "InstaViz demonstrates product development experience across data visualization, authentication, payments, and administration features." : "Letsellr demonstrates freelance full-stack project experience across product design, application development, and infrastructure."}</BodyText>
          <Link className="text-link" href="/contact">Discuss a development requirement <ArrowRight size={15} aria-hidden="true" /></Link>
        </SectionCard>
      </div>
    </PageFrame>
  );
}
