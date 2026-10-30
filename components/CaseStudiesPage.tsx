import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/portfolio";
import { BackLink, BodyText, PageFrame, PageTitle, Pill, SectionCard } from "@/components/portfolio/ThemePage";

export default function CaseStudiesPage() {
  const project = projects[0];

  return (
    <PageFrame>
      <BackLink />
      <PageTitle eyebrow="Professional software development">Case studies</PageTitle>
      <SectionCard>
        <h2 className="section-heading">{project.title}</h2>
        <p className="meta">{project.date} · {project.status}</p>
        <div className="tag-list case-study-tags">{project.techStack.map((tech) => <Pill key={tech}>{tech}</Pill>)}</div>
        <BodyText>A detailed case study of my contribution to a full-stack ERP/CRM platform developed from scratch for printer-industry operations.</BodyText>
        <Link className="text-link" href="/projects/xerocare">Read the Xerocare case study <ArrowRight size={15} aria-hidden="true" /></Link>
      </SectionCard>
    </PageFrame>
  );
}
