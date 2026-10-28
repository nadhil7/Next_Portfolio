"use client";

import Link from "next/link";
import { Download, Github, Instagram, Linkedin } from "lucide-react";
import { socialLinks } from "@/lib/portfolio";
import { usePortfolioTheme } from "@/components/portfolio/ThemePage";

export default function HomePage() {
  const { isDark } = usePortfolioTheme();

  const textColor = isDark ? "#ffffff" : "#000000";
  const mutedColor = isDark ? "rgba(255,255,255,0.8)" : "rgba(0,0,0,0.8)";
  const buttonStyle = { borderColor: textColor, color: textColor, background: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)" };

  return (
    <div className="w-full h-screen relative overflow-hidden">
      <section className="w-full h-screen relative overflow-hidden">
        <div className="absolute top-[20%] left-4 right-4 md:left-24 md:right-24 z-10 w-auto md:max-w-6xl px-4 text-left md:scale-[0.8] md:origin-top" style={{ color: textColor }}>
          <span className="text-lg md:text-xl font-mono mb-2 block opacity-80">Hi, I am</span>
          <h1 className="text-2xl sm:text-5xl md:text-7xl font-[family-name:var(--font-orbitron)] font-bold mb-6 transition-colors duration-300 drop-shadow-md whitespace-nowrap">Mohammed Nadhil K N</h1>
          <p className="text-lg md:text-xl font-[family-name:var(--font-orbitron)] transition-colors duration-300 max-w-4xl drop-shadow-md opacity-90 mb-10 leading-relaxed text-balance" style={{ color: mutedColor }}>
            <span className="font-bold">Full-Stack Developer</span> and Software Developer with professional experience building web applications and business software from scratch. I work across frontend, backend, databases, and application architecture, turning business requirements into practical software solutions.
          </p>

          <div>
            <div className="flex justify-start gap-6" aria-label="Social links">
              <a href={socialLinks.instagram} aria-label="Instagram" className="transform transition-all duration-300 hover:scale-125 hover:rotate-6" style={{ color: textColor }}><Instagram size={32} /></a>
              <a href={socialLinks.linkedin} aria-label="LinkedIn" className="transform transition-all duration-300 hover:scale-125 hover:-rotate-6" style={{ color: textColor }}><Linkedin size={32} /></a>
              <a href={socialLinks.github} aria-label="GitHub" className="transform transition-all duration-300 hover:scale-125 hover:rotate-6" style={{ color: textColor }}><Github size={32} /></a>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/projects" className="px-6 py-3 rounded-full font-[family-name:var(--font-orbitron)] font-bold text-sm md:text-base border transition-all duration-300 hover:scale-105 hover:bg-opacity-20 flex items-center justify-center" style={buttonStyle}>See My Works</Link>
              <a href="/resume.pdf" download="mohammed-nadhil-k-n-resume.pdf" className="px-6 py-3 rounded-full font-[family-name:var(--font-orbitron)] font-bold text-sm md:text-base border transition-all duration-300 hover:scale-105 hover:bg-opacity-20 flex items-center justify-center gap-2" style={buttonStyle}><Download size={18} />Resume</a>
            </div>
            <nav className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm md:text-base font-mono" aria-label="Primary navigation">
              <Link href="/about" className="underline underline-offset-4 hover:opacity-70">About</Link>
              <Link href="/experience" className="underline underline-offset-4 hover:opacity-70">Experience</Link>
              <Link href="/case-studies" className="underline underline-offset-4 hover:opacity-70">Case Studies</Link>
              <Link href="/contact" className="underline underline-offset-4 hover:opacity-70">Contact</Link>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
}
