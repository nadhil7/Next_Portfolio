"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, ExternalLink } from "lucide-react";
import { projects } from "@/lib/portfolio";
import { usePortfolioTheme } from "@/components/portfolio/ThemePage";
import { useEffect, useState } from "react";

export default function ProjectsPage() {
  const { isDark } = usePortfolioTheme();
  const [expandedProjects, setExpandedProjects] = useState<number[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    let timeoutId: ReturnType<typeof setTimeout>;
    const onResize = () => { clearTimeout(timeoutId); timeoutId = setTimeout(checkMobile, 100); };
    window.addEventListener("resize", onResize);
    return () => { window.removeEventListener("resize", onResize); clearTimeout(timeoutId); };
  }, []);

  const textColor = isDark ? "#ffffff" : "#000000";

  return (
    <div className="w-full min-h-screen relative overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-40 overflow-y-auto custom-scrollbar">
        <main className="w-full md:max-w-6xl mx-auto px-4 py-8 md:py-12 md:scale-[0.8] md:origin-top">
          <Link href="/" className="inline-flex items-center gap-2 mb-8 transition-colors duration-300 hover:opacity-70" style={{ color: textColor }}><ArrowLeft size={24} /><span className="text-lg font-mono">Back to Home</span></Link>
          <p className="text-sm md:text-base font-mono opacity-70 mb-3" style={{ color: textColor }}>Full-stack development work</p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-[family-name:var(--font-orbitron)] font-bold mb-8 md:mb-12 transition-colors duration-300 drop-shadow-md text-left" style={{ color: textColor }}>Selected Works</h1>

          <div className="grid grid-cols-1 gap-6 md:gap-10 pb-10 w-full">
            {projects.map((project, index) => {
              const isExpanded = !isMobile || expandedProjects.includes(index);
              const toggleProject = () => { if (isMobile) setExpandedProjects((current) => current.includes(index) ? current.filter((item) => item !== index) : [...current, index]); };
              return (
                <article key={project.slug} onClick={toggleProject} className={`p-5 md:p-8 rounded-2xl border backdrop-blur-md transition-all duration-300 hover:shadow-2xl group relative overflow-hidden w-full ${isMobile ? "cursor-pointer active:scale-[0.98]" : ""}`} style={{ borderColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)", background: isDark ? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.4)", boxShadow: isDark ? "0 4px 30px rgba(0, 0, 0, 0.1)" : "0 4px 30px rgba(0, 0, 0, 0.05)" }}>
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
                    <div className="flex-1 w-full"><div className="flex items-center justify-between w-full md:w-auto"><h2 className="text-xl md:text-4xl font-bold font-[family-name:var(--font-orbitron)] break-words leading-tight" style={{ color: textColor }}>{project.title}</h2><span className="md:hidden opacity-70 transition-transform duration-300" style={{ color: textColor }}>{isExpanded ? "▲" : "▼"}</span></div><div className="flex flex-wrap items-center gap-3 mt-3 text-xs md:text-sm font-mono opacity-70" style={{ color: textColor }}><span className="flex items-center gap-1"><Calendar size={13} />{project.date}</span><span className="w-1 h-1 rounded-full bg-current opacity-50" /><span className={project.status === "Live" ? "text-green-500" : "text-blue-500"}>{project.status}</span></div></div>
                  </div>

                  {!isExpanded && <div className="flex flex-wrap gap-2 mt-2 opacity-60">{project.techStack.slice(0, 3).map((tech) => <span key={tech} className="text-[10px] md:text-xs font-mono border px-1.5 py-0.5 rounded" style={{ borderColor: isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)" }}>{tech}</span>)}{project.techStack.length > 3 && <span className="text-[10px] md:text-xs font-mono opacity-70">+{project.techStack.length - 3}</span>}</div>}

                  <div className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${isExpanded ? "grid-rows-[1fr] opacity-100 mt-4 md:mt-6" : "grid-rows-[0fr] opacity-0 mt-0"}`}><div className="overflow-hidden"><div className="flex flex-wrap gap-2 mb-6">{project.techStack.map((tech) => <span key={tech} className="px-2 md:px-3 py-1 text-[10px] md:text-xs rounded-md font-medium whitespace-nowrap" style={{ backgroundColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)", color: isDark ? "#AED9E0" : "#005f73" }}>{tech}</span>)}</div>
                    <div className="flex flex-wrap items-center gap-4 mb-6">{"externalLink" in project && project.externalLink ? <a href={project.externalLink} target="_blank" rel="noopener noreferrer" onClick={(event) => event.stopPropagation()} className="px-4 py-2 rounded-full text-xs md:text-sm font-mono border flex items-center gap-2 transition-all hover:scale-105 hover:opacity-80 bg-transparent w-fit" style={{ borderColor: isDark ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.3)", color: isDark ? "rgba(255,255,255,0.8)" : "rgba(0,0,0,0.8)" }}>Visit Project <ExternalLink size={14} /></a> : <Link href={`/projects/${project.slug}`} onClick={(event) => event.stopPropagation()} className="px-4 py-2 rounded-full text-xs md:text-sm font-mono border flex items-center gap-2 transition-all hover:scale-105 hover:opacity-80 bg-transparent w-fit" style={{ borderColor: isDark ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.3)", color: isDark ? "rgba(255,255,255,0.8)" : "rgba(0,0,0,0.8)" }}>Read Case Study <ArrowRight size={14} /></Link>}</div>
                    <ul className="space-y-3">{project.description.map((item) => <li key={item} className="flex items-start gap-3 leading-relaxed opacity-90 text-sm md:text-lg text-left" style={{ color: isDark ? "rgba(255,255,255,0.85)" : "rgba(0,0,0,0.75)" }}><span className="mt-1.5 md:mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: textColor }} /><span>{item}</span></li>)}</ul>
                  </div></div>
                </article>
              );
            })}
          </div>
          <p className="pb-12 text-sm md:text-base font-mono opacity-75" style={{ color: textColor }}>Interested in a similar project? <Link href="/contact" className="underline underline-offset-4 hover:opacity-70">Get in touch</Link>.</p>
        </main>
      </div>
    </div>
  );
}
