"use client";

import Link from "next/link";
import { ArrowLeft, Github, Instagram, Linkedin, Mail } from "lucide-react";
import { socialLinks } from "@/lib/portfolio";
import { BodyText, PageFrame, SectionCard, SectionHeading, usePortfolioTheme } from "@/components/portfolio/ThemePage";

export default function ContactPage() {
  const { isDark } = usePortfolioTheme();
  const textColor = isDark ? "#ffffff" : "#000000";
  const buttonStyle = { borderColor: textColor, color: textColor, background: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)" };

  return (
    <PageFrame>
      <Link href="/" className="inline-flex items-center gap-2 mb-8 transition-colors duration-300 hover:opacity-70" style={{ color: textColor }}><ArrowLeft size={20} /><span className="text-lg font-mono">Back to Home</span></Link>
      <div className="mb-8 md:mb-12"><p className="text-sm md:text-base font-mono opacity-70 mb-3" style={{ color: textColor }}>Get in touch</p><h1 className="text-4xl sm:text-6xl md:text-7xl font-[family-name:var(--font-orbitron)] font-bold" style={{ color: textColor }}>Contact</h1></div>
      <SectionCard isDark={isDark}>
        <SectionHeading isDark={isDark}>Let&apos;s discuss an opportunity</SectionHeading>
        <BodyText isDark={isDark}>Have a development opportunity, web application requirement, or business software project? Feel free to contact me to discuss professional opportunities or your project requirements.</BodyText>
        <a href="mailto:mohammednadhilkn@gmail.com" className="inline-flex items-center gap-2 px-5 py-3 mt-7 rounded-full border font-mono transition-all hover:scale-105" style={buttonStyle}><Mail size={18} />mohammednadhilkn@gmail.com</a>
        <div className="flex gap-6 mt-8" aria-label="Social links">
          <a href={socialLinks.linkedin} aria-label="LinkedIn" className="transition-all hover:scale-125" style={{ color: textColor }}><Linkedin size={28} /></a>
          <a href={socialLinks.github} aria-label="GitHub" className="transition-all hover:scale-125" style={{ color: textColor }}><Github size={28} /></a>
          <a href={socialLinks.instagram} aria-label="Instagram" className="transition-all hover:scale-125" style={{ color: textColor }}><Instagram size={28} /></a>
        </div>
      </SectionCard>
    </PageFrame>
  );
}
