import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import { socialLinks } from "@/lib/portfolio";
import { BackLink, BodyText, PageFrame, PageTitle, SectionCard, SectionHeading } from "@/components/portfolio/ThemePage";

export default function ContactPage() {
  return (
    <PageFrame>
      <BackLink />
      <PageTitle eyebrow="Get in touch">Contact</PageTitle>
      <SectionCard>
        <SectionHeading>Let&apos;s discuss an opportunity</SectionHeading>
        <BodyText>Have a development opportunity, web application requirement, or business software project? Feel free to contact me to discuss professional opportunities or your project requirements.</BodyText>
        <div className="button-row">
          <a className="button" href="mailto:mohammednadhilkn@gmail.com"><Mail size={16} aria-hidden="true" /> mohammednadhilkn@gmail.com</a>
        </div>
        <div className="social-links" aria-label="Social links">
          <a href={socialLinks.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer"><Linkedin size={19} aria-hidden="true" /></a>
          <a href={socialLinks.github} aria-label="GitHub" target="_blank" rel="noreferrer"><Github size={19} aria-hidden="true" /></a>
          <a href={socialLinks.instagram} aria-label="Instagram" target="_blank" rel="noreferrer"><Instagram size={19} aria-hidden="true" /></a>
        </div>
      </SectionCard>
    </PageFrame>
  );
}
