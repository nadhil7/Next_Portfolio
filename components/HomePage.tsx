import Link from "next/link";
import { ArrowRight, Download, Github, Instagram, Linkedin } from "lucide-react";
import { projects, socialLinks } from "@/lib/portfolio";
import { PageFrame } from "@/components/portfolio/ThemePage";

export default function HomePage() {
  const selectedProjects = projects.slice(0, 3);

  return (
    <PageFrame>
      <section className="page-header">
        <p className="eyebrow">Full-Stack Developer · Software Developer</p>
        <h1 className="display-heading">Mohammed Nadhil K N</h1>
        <p className="lead">
          Full-stack developer with professional experience building web applications and business software from scratch. I work across frontend, backend, databases, and application architecture, turning business requirements into practical software solutions.
        </p>
        <div className="button-row">
          <Link className="button" href="/projects">View projects <ArrowRight size={16} aria-hidden="true" /></Link>
          <a className="button button--secondary" href="/resume.pdf" download="mohammed-nadhil-k-n-resume.pdf"><Download size={16} aria-hidden="true" /> Download resume</a>
          <Link className="button button--secondary" href="/contact">Contact me</Link>
        </div>
        <div className="social-links" aria-label="Social links">
          <a href={socialLinks.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer"><Linkedin size={19} aria-hidden="true" /></a>
          <a href={socialLinks.github} aria-label="GitHub" target="_blank" rel="noreferrer"><Github size={19} aria-hidden="true" /></a>
          <a href={socialLinks.instagram} aria-label="Instagram" target="_blank" rel="noreferrer"><Instagram size={19} aria-hidden="true" /></a>
        </div>
      </section>

      <section className="section-grid" aria-labelledby="summary-heading">
        <div className="section-card section-card--muted">
          <p className="eyebrow">A quick overview</p>
          <h2 id="summary-heading" className="section-heading">Building software around real workflows</h2>
          <p className="body-copy">I have professional experience developing an ERP/CRM platform at Xerocare and additional experience delivering product and freelance projects. My work spans requirements analysis, application architecture, frontend and backend development, databases, testing, and deployment.</p>
        </div>
      </section>

      <section className="section-grid home-projects" aria-labelledby="selected-projects-heading">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 id="selected-projects-heading" className="section-heading">Projects that show how I work</h2>
          </div>
          <Link className="text-link" href="/projects">All projects <ArrowRight size={15} aria-hidden="true" /></Link>
        </div>
        <div className="project-list">
          {selectedProjects.map((project) => (
            <article className="project-card" key={project.slug}>
              <div className="project-card__top">
                <div>
                  <h3>{project.title}</h3>
                  <p className="project-label">{project.slug === "xerocare" ? "Professional software development" : project.slug === "letsellr" ? "Freelance full-stack project" : "Product development project"}</p>
                </div>
                <span className="meta">{project.status}</span>
              </div>
              <p className="body-copy">{project.description[0]}</p>
              <Link className="text-link" href={project.slug === "xerocare" ? project.link : `/projects/${project.slug}`}>{project.slug === "xerocare" ? "Read the case study" : "View project"} <ArrowRight size={15} aria-hidden="true" /></Link>
            </article>
          ))}
        </div>
      </section>
    </PageFrame>
  );
}
