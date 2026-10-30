import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/portfolio";
import { BackLink, PageFrame, PageTitle, Pill } from "@/components/portfolio/ThemePage";

export default function ProjectsPage() {
  return (
    <PageFrame>
      <BackLink />
      <PageTitle eyebrow="Selected work">Projects</PageTitle>
      <div className="project-list">
        {projects.map((project) => (
          <article className="project-card" key={project.slug}>
            <div className="project-card__top">
              <div>
                <h2>{project.title}</h2>
                <p className="project-label">
                  {project.slug === "xerocare" ? "ERP/CRM Platform · Professional Software Development" : project.slug === "instaviz" ? "Product Development" : "Freelance Full-Stack Project"}
                </p>
              </div>
              <div className="meta-list"><span>{project.date}</span><span>{project.status}</span></div>
            </div>
            <div className="tag-list">{project.techStack.map((tech) => <Pill key={tech}>{tech}</Pill>)}</div>
            <ul className="detail-list">{project.description.map((item) => <li key={item}>{item}</li>)}</ul>
            <div>
              {project.slug === "xerocare" ? (
                <Link className="text-link" href="/projects/xerocare">Read the case study <ArrowRight size={15} aria-hidden="true" /></Link>
              ) : project.slug === "letsellr" ? (
                <Link className="text-link" href="/projects/letsellr">View project <ArrowRight size={15} aria-hidden="true" /></Link>
              ) : null}
            </div>
          </article>
        ))}
      </div>
      <p className="closing-copy">Interested in a similar project? <Link className="text-link" href="/contact">Get in touch</Link>.</p>
    </PageFrame>
  );
}
