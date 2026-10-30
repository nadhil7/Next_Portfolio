import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { developmentApproach, professionalResponsibilities, projects } from "@/lib/portfolio";
import { BackLink, BodyText, PageFrame, PageTitle, Pill, SectionCard, SectionHeading } from "@/components/portfolio/ThemePage";

const businessModules = [
  ["CRM", "Customer management and related business workflows were organized within the platform."],
  ["Sales", "Sales workflows, quotations, and contracts were represented as part of the wider business process where implemented."],
  ["Inventory", "Product, stock, serial-number, and inventory workflows supported printer-industry operations where implemented."],
  ["Procurement", "Vendor and purchasing workflows connected procurement activity with the wider operational system."],
  ["Service", "Service tickets, repair activity, and related service operations were supported as part of the platform."],
  ["Billing", "Billing functionality was integrated with the relevant business workflows."],
] as const;

const technologyStack = projects[0].techStack;

export default function XerocareCaseStudy() {
  return (
    <PageFrame>
      <BackLink href="/projects" label="Back to projects" />
      <PageTitle eyebrow="Professional case study">Xerocare — ERP/CRM Platform</PageTitle>

      <div className="section-grid">
        <SectionCard>
          <div className="tag-list">{technologyStack.map((tech) => <Pill key={tech}>{tech}</Pill>)}</div>
          <div className="spaced-copy"><BodyText>Xerocare is a business ERP/CRM platform developed from scratch to support printer-industry operations. The application was developed by a two-developer team based on the company&apos;s business requirements and workflows.</BodyText></div>
          <BodyText>I was the lead developer and worked closely with my co-developer, management, and employees to understand those workflows and translate requirements into software features. My contribution included frontend and backend development, application architecture, database design, module implementation, testing, debugging, and deployment.</BodyText>
        </SectionCard>

        <SectionCard>
          <SectionHeading>Business modules</SectionHeading>
          <div className="module-grid">
            {businessModules.map(([title, description]) => <div className="module-item" key={title}><h3>{title}</h3><p className="body-copy">{description}</p></div>)}
          </div>
        </SectionCard>

        <SectionCard>
          <SectionHeading>My role</SectionHeading>
          <ul className="detail-list">{professionalResponsibilities.map((item) => <li key={item}>{item}</li>)}</ul>
          <p className="note">This was shared team work in a two-developer environment; the description reflects contribution across the application rather than independent ownership of every module.</p>
        </SectionCard>

        <SectionCard>
          <SectionHeading>Application architecture</SectionHeading>
          <BodyText>The platform used Next.js and React.js for frontend development, Node.js, Express.js, and TypeScript for backend services and APIs, PostgreSQL and MongoDB for application data, and Redis and RabbitMQ within its microservices architecture. AWS and Cloudflare supported infrastructure and delivery needs.</BodyText>
          <BodyText>The architecture and database structure were shaped around the company&apos;s business modules so features could work together across shared operational workflows.</BodyText>
        </SectionCard>

        <SectionCard>
          <SectionHeading>Development process</SectionHeading>
          <ol className="numbered-list">{developmentApproach.map((step) => <li key={step}>{step}</li>)}</ol>
        </SectionCard>

        <SectionCard className="section-card--muted">
          <SectionHeading>Outcome and freelance relevance</SectionHeading>
          <BodyText>The platform was developed to support the company&apos;s business workflows through integrated functionality across its implemented modules. The project gave me practical experience translating operational requirements into a full-stack software system.</BodyText>
          <BodyText>This experience is relevant to businesses looking for custom web applications, ERP/CRM functionality, and software tailored to their operational requirements.</BodyText>
          <Link className="text-link" href="/contact">Discuss a development requirement <ArrowRight size={15} aria-hidden="true" /></Link>
        </SectionCard>
      </div>
    </PageFrame>
  );
}
