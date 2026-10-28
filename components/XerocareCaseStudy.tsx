"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { developmentApproach, professionalResponsibilities, projects } from "@/lib/portfolio";
import { BodyText, PageFrame, PageTitle, Pill, SectionCard, SectionHeading, usePortfolioTheme } from "@/components/portfolio/ThemePage";

const businessModules = [
  ["CRM and customer management", "Customer-related records and workflows were organized within the platform so the team could work with business information in one connected application."],
  ["Sales and quotations", "Sales workflows, quotations, contracts, and rental or leasing requirements were represented as part of the broader business process."],
  ["Inventory management", "Product, stock, serial-number, and inventory workflows were included to support the operational needs of the printer-industry business."],
  ["Procurement and vendor management", "Vendor and purchasing workflows were connected to the wider operational system so procurement activity could be managed alongside inventory and sales processes."],
  ["Service and repair management", "Service-related workflows, including tickets and repair activity, were supported as part of the platform's business operations."],
  ["Contracts and business operations", "Contract-related functionality was connected with the relevant customer, sales, rental, and service workflows."],
  ["Billing", "Billing workflows were included as part of the integrated business functionality and its connection with the other application modules."],
] as const;

export default function XerocareCaseStudy() {
  const { isDark } = usePortfolioTheme();
  const textColor = isDark ? "#ffffff" : "#000000";

  return (
    <PageFrame>
      <Link href="/projects" className="inline-flex items-center gap-2 mb-8 transition-colors duration-300 hover:opacity-70" style={{ color: textColor }}><ArrowLeft size={20} /><span className="text-lg font-mono">Back to Selected Works</span></Link>
      <PageTitle isDark={isDark} eyebrow="Professional case study">Xerocare — ERP/CRM Platform</PageTitle>

      <div className="grid gap-6 md:gap-10 pb-10">
        <SectionCard isDark={isDark}>
          <div className="flex flex-wrap gap-2 mb-5">{projects[0].techStack.map((tech) => <Pill isDark={isDark} key={tech}>{tech}</Pill>)}</div>
          <BodyText isDark={isDark}>Xerocare is a business ERP/CRM platform developed from scratch to support printer-industry operations. The application was developed by a two-developer team based on the company&apos;s operational requirements and business workflows.</BodyText>
          <div className="mt-4"><BodyText isDark={isDark}>I was the lead developer and worked closely with my co-developer, management, and employees to understand business processes and translate requirements into software features. My contribution covered frontend and backend development, application architecture, database design, module implementation, testing, debugging, and deployment.</BodyText></div>
        </SectionCard>

        <SectionCard isDark={isDark}>
          <SectionHeading isDark={isDark}>Business requirements</SectionHeading>
          <BodyText isDark={isDark}>The company required an integrated software platform to organize its business operations and workflows. Management and employees shared their day-to-day requirements and existing processes; those requirements were analyzed and translated into connected application functionality.</BodyText>
          <div className="mt-4"><BodyText isDark={isDark}>This meant the platform had to reflect how teams worked across customers, sales, inventory, procurement, service, contracts, and billing rather than treating each activity as an isolated tool.</BodyText></div>
        </SectionCard>

        <SectionCard isDark={isDark}>
          <SectionHeading isDark={isDark}>My role</SectionHeading>
          <ul className="grid gap-3">
            {professionalResponsibilities.slice(0, 10).map((item) => <li key={item} className="flex items-start gap-3 text-sm md:text-lg leading-relaxed opacity-90" style={{ color: isDark ? "rgba(255,255,255,0.85)" : "rgba(0,0,0,0.75)" }}><span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: textColor }} /><span>{item}</span></li>)}
          </ul>
          <p className="mt-5 text-sm md:text-base opacity-75" style={{ color: textColor }}>This was shared team work in a two-developer environment; the description reflects contribution across the application rather than independent ownership of every module.</p>
        </SectionCard>

        <SectionCard isDark={isDark}>
          <SectionHeading isDark={isDark}>Business modules</SectionHeading>
          <div className="grid gap-5">{businessModules.map(([title, description]) => <div key={title}><h3 className="text-lg md:text-xl font-bold font-[family-name:var(--font-orbitron)] mb-1" style={{ color: textColor }}>{title}</h3><BodyText isDark={isDark}>{description}</BodyText></div>)}</div>
        </SectionCard>

        <SectionCard isDark={isDark}>
          <SectionHeading isDark={isDark}>Application architecture</SectionHeading>
          <BodyText isDark={isDark}>The platform was developed as a modular, service-oriented ERP/CRM application. Next.js and React.js supported the frontend, while Node.js, Express.js, and TypeScript supported backend services and APIs. PostgreSQL and MongoDB were used for application data, with Redis and RabbitMQ supporting the service-oriented workflows. AWS and Cloudflare supported infrastructure and delivery needs.</BodyText>
          <div className="mt-4"><BodyText isDark={isDark}>The architecture and database structure were shaped around the company&apos;s business modules so features could be integrated into shared operational workflows.</BodyText></div>
        </SectionCard>

        <SectionCard isDark={isDark}>
          <SectionHeading isDark={isDark}>Development process</SectionHeading>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">{developmentApproach.map((step, index) => <li key={step} className="flex items-start gap-3 text-sm md:text-base leading-relaxed" style={{ color: isDark ? "rgba(255,255,255,0.85)" : "rgba(0,0,0,0.75)" }}><span className="font-mono opacity-60 min-w-6">{String(index + 1).padStart(2, "0")}</span><span>{step}</span></li>)}</ol>
        </SectionCard>

        <SectionCard isDark={isDark}>
          <SectionHeading isDark={isDark}>Outcome and freelance relevance</SectionHeading>
          <BodyText isDark={isDark}>The platform was developed to support the company&apos;s business workflows through integrated functionality across the implemented modules. The project gave me practical experience translating operational requirements into a full-stack software system.</BodyText>
          <div className="mt-4"><BodyText isDark={isDark}>My experience building Xerocare helped me understand how business workflows can be translated into integrated software systems. From requirements analysis and architecture to frontend, backend, database design, testing, and deployment, I worked across the full-stack development lifecycle.</BodyText></div>
          <div className="mt-4"><BodyText isDark={isDark}>This experience is relevant to businesses looking for custom web applications, ERP/CRM functionality, and software tailored to their operational requirements.</BodyText></div>
          <Link href="/contact" className="inline-flex items-center gap-2 mt-6 font-mono underline underline-offset-4 hover:opacity-70" style={{ color: textColor }}>Discuss a development requirement <ArrowRight size={16} /></Link>
        </SectionCard>
      </div>
    </PageFrame>
  );
}
