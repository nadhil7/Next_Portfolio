"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Calendar } from "lucide-react";

export default function Projects() {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [expandedProjects, setExpandedProjects] = useState<number[]>([]);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setMounted(true);
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();

        let timeoutId: NodeJS.Timeout;
        const debouncedCheck = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(checkMobile, 100);
        };

        window.addEventListener('resize', debouncedCheck);
        return () => {
            window.removeEventListener('resize', debouncedCheck);
            clearTimeout(timeoutId);
        };
    }, []);

    const toggleProject = (index: number) => {
        if (!isMobile) return;
        setExpandedProjects(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    if (!mounted) {
        return (
            <div className="w-full h-screen relative bg-black">
            </div>
        );
    }

    const isDark = resolvedTheme === "dark";

    const projects = [
        {
            title: "InstaViz",
            date: "November-2025",
            status: "Completed",
            techStack: ["Next.js", "Node.js", "Mongo DB", "TypeScript", "MCP", "Vercel", "AWS(EC2)", "Supabase", "R2", "Gemini APIs", "JWT"],
            description: [
                "Built an AI-powered data visualization tool capable of transforming CSV data into dynamic charts and accurate insights with 100% consistency across datasets.",
                "Used two Gemini models—one dedicated to chart generation and another lightweight model for handling conversational responses—optimizing performance and token usage.",
                "Implemented an MCP server for CSV data aggregation, cutting redundant Gemini API requests and reducing token usage by 50%.",
                "Implemented JWT authentication with access and refresh tokens for secure and scalable user authorization.",
                "Integrated Google OAuth login, reducing login friction by 60%, and implemented Stripe payments to enable secure, reliable transactions.",
                "Built an advanced admin dashboard with real-time analytics, including user active time tracking and device-based login insights (mobile vs. desktop).",
                "Built a device-level session tracking system that displays all logged-in devices (mobile/laptop) and supports remote logout, improving account security by 70%."
            ]
        },
        {
            title: "XeroCare",
            date: "In-Progress",
            status: "In-Progress",
            techStack: ["Next.js", "Node.js", "TypeScript", "PostgreSQL", "Redis", "RabbitMQ", "R2", "JWT", "Microservices Architecture"],
            description: [
                "Architecting a microservices-based ERP + CRM platform for printer industry operations, designed to support 5,000+ concurrent users with 99.9% uptime.",
                "Implementing JWT + Refresh Token authentication, RBAC permissions, 2FA, and complete audit logging for secure multi-branch access control.",
                "Developing CRM and Sales modules including lead management, customer 360°, sales pipeline, quotation builder, and rental/leasing workflows.",
                "Building advanced Inventory & Service modules with serial number tracking, multi-location stock, automated purchasing, AMC contracts, and service ticketing with SLA monitoring.",
                "Engineering the backend with PostgreSQL, Redis, and RabbitMQ, ensuring API response times < 200ms and scalable real-time workflow processing."
            ]
        },
        {
            title: "Letsellr",
            date: "October-2025",
            status: "Live",
            link: "https://letsellr.in/",
            techStack: ["Next.js", "Node.js", "TypeScript", "Mongo DB", "AWS (EC2,S3)", "Shadcn Ui"],
            description: [
                "Built a full-stack property management platform enabling listing, tracking, and management of properties — improving client–contractor communication and operational efficiency.",
                "Implemented AWS S3 signed URL uploads for image storage, reducing backend payload size by 80% and improving upload performance by 60%.",
                "Delivered the project end-to-end as a freelance assignment — from UI/UX design to backend & infrastructure — demonstrating initiative, ownership, and full-cycle development ability."
            ]
        }
    ];

    return (
        <div className="w-full min-h-screen relative overflow-x-hidden">
            <div className="absolute top-0 left-0 w-full h-full z-40 overflow-y-auto custom-scrollbar">
                {/* Responsive container: Full width on mobile, constrained on desktop */}
                <div className="w-full md:max-w-6xl mx-auto px-4 py-8 md:py-12 md:scale-[0.8] md:origin-top">
                    <Link href="/" className="inline-flex items-center gap-2 mb-8 transition-colors duration-300 hover:opacity-70" style={{ color: isDark ? '#ffffff' : '#000000' }}>
                        <ArrowLeft size={24} />
                        <span className="text-lg font-mono">Back to Home</span>
                    </Link>

                    <h1
                        className="text-4xl sm:text-6xl md:text-7xl font-[family-name:var(--font-orbitron)] font-bold mb-8 md:mb-12 transition-colors duration-300 drop-shadow-md text-left"
                        style={{ color: isDark ? '#ffffff' : '#000000' }}
                    >
                        Selected Works
                    </h1>

                    <div className="grid grid-cols-1 gap-6 md:gap-10 pb-8 w-full">
                        {projects.map((project, index) => {
                            // Logic: If NOT mobile, ALWAYS expanded.
                            // If IS mobile, check if in expandedProjects array.
                            const isExpanded = !isMobile || expandedProjects.includes(index);

                            return (
                                <div
                                    key={index}
                                    onClick={() => toggleProject(index)}
                                    // Remove any restricting fixed widths. On mobile w-full is key. cursor-pointer only on mobile.
                                    className={`p-5 md:p-8 rounded-2xl border backdrop-blur-md transition-all duration-300 hover:shadow-2xl group relative overflow-hidden w-full ${isMobile ? 'cursor-pointer active:scale-[0.98]' : ''}`}
                                    style={{
                                        borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                                        background: isDark ? 'rgba(0,0,0,0.4)' : 'rgba(255,255,255,0.4)',
                                        boxShadow: isDark ? '0 4px 30px rgba(0, 0, 0, 0.1)' : '0 4px 30px rgba(0, 0, 0, 0.05)'
                                    }}
                                >
                                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
                                        <div className="flex-1 w-full">
                                            <div className="flex items-center justify-between w-full md:w-auto">
                                                <h2 className="text-xl md:text-4xl font-bold font-[family-name:var(--font-orbitron)] break-words leading-tight" style={{ color: isDark ? '#ffffff' : '#000000' }}>
                                                    {project.title}
                                                </h2>
                                                {/* Mobile chevron only */}
                                                <div className="md:hidden opacity-70 flex-shrink-0 ml-2">
                                                    <span className={`inline-block transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} style={{ color: isDark ? '#ffffff' : '#000000' }}>▼</span>
                                                </div>
                                            </div>

                                            <div className="flex flex-wrap items-center gap-3 mt-3 text-xs md:text-sm font-mono opacity-70" style={{ color: isDark ? '#ffffff' : '#000000' }}>
                                                <div className="flex items-center gap-1">
                                                    <Calendar size={12} className="md:w-3.5 md:h-3.5" />
                                                    <span>{project.date}</span>
                                                </div>
                                                <span className="w-1 h-1 rounded-full bg-current opacity-50"></span>
                                                <span className={`${project.status === 'Live' ? 'text-green-500' : 'text-blue-500'}`}>{project.status}</span>
                                            </div>
                                        </div>

                                        {/* Desktop Action/Chevron (Hidden or Static) - User wants default view on desktop */}
                                        <div className="hidden md:flex items-center gap-4 opacity-0 pointer-events-none">
                                            {/* Placeholder for layout balance if needed */}
                                        </div>
                                    </div>

                                    {/* Preview Tech Stack - Only visible on Mobile when Collapsed */}
                                    {!isExpanded && (
                                        <div className="flex flex-wrap gap-2 mt-2 opacity-60">
                                            {project.techStack.slice(0, 3).map((tech, i) => (
                                                <span key={i} className="text-[10px] md:text-xs font-mono border px-1.5 py-0.5 rounded" style={{ borderColor: isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)' }}>{tech}</span>
                                            ))}
                                            {project.techStack.length > 3 && (
                                                <span className="text-[10px] md:text-xs font-mono opacity-70">+{project.techStack.length - 3}</span>
                                            )}
                                        </div>
                                    )}

                                    {/* Expandable Content (Description, Full Tech, Links) */}
                                    <div
                                        className={`grid transition-[grid-template-rows,opacity,padding] duration-500 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100 mt-4 md:mt-6' : 'grid-rows-[0fr] opacity-0 mt-0'}`}
                                    >
                                        <div className="overflow-hidden">
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {project.techStack.map((tech, i) => (
                                                    <span
                                                        key={i}
                                                        className="px-2 md:px-3 py-1 text-[10px] md:text-xs rounded-md bg-opacity-10 font-medium whitespace-nowrap"
                                                        style={{
                                                            backgroundColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
                                                            color: isDark ? '#AED9E0' : '#005f73'
                                                        }}
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="flex items-center gap-4 mb-6">
                                                {/* @ts-ignore */}
                                                {project.link ? (
                                                    <a
                                                        href={project.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        onClick={(e) => e.stopPropagation()}
                                                        className="px-4 py-2 rounded-full text-xs md:text-sm font-mono border flex items-center gap-2 transition-all hover:scale-105 hover:opacity-80 bg-transparent w-fit"
                                                        style={{
                                                            borderColor: isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)',
                                                            color: isDark ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)'
                                                        }}
                                                    >
                                                        Visit Project <ExternalLink size={14} />
                                                    </a>
                                                ) : (
                                                    <span className="px-4 py-2 rounded-full text-xs md:text-sm font-mono border w-fit"
                                                        style={{
                                                            borderColor: isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)',
                                                            color: isDark ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)'
                                                        }}>
                                                        {project.status}
                                                    </span>
                                                )}
                                            </div>

                                            <ul className="space-y-3">
                                                {project.description.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-3 leading-relaxed opacity-90 text-sm md:text-lg text-left" style={{ color: isDark ? 'rgba(255,255,255,0.85)' : 'rgba(0,0,0,0.75)' }}>
                                                        <span className="mt-1.5 md:mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: isDark ? '#ffffff' : '#000000' }} />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Removed tap hint completely */}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
