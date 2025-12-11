"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Calendar, Code2 } from "lucide-react";

export default function Projects() {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

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
                <div className="max-w-6xl mx-auto px-4 py-8 md:py-16 md:scale-[0.8] md:origin-top">
                    <Link href="/" className="inline-flex items-center gap-2 mb-8 transition-colors duration-300 hover:opacity-70" style={{ color: isDark ? '#ffffff' : '#000000' }}>
                        <ArrowLeft size={24} />
                        <span className="text-lg font-mono">Back to Home</span>
                    </Link>

                    <h1
                        className="text-4xl sm:text-6xl md:text-7xl font-[family-name:var(--font-orbitron)] font-bold mb-16 transition-colors duration-300 drop-shadow-md text-left"
                        style={{ color: isDark ? '#ffffff' : '#000000' }}
                    >
                        Selected Works
                    </h1>

                    <div className="grid grid-cols-1 gap-12 pb-20">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="p-8 rounded-2xl border backdrop-blur-md transition-all duration-300 hover:shadow-2xl group"
                                style={{
                                    borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                                    background: isDark ? 'rgba(0,0,0,0.4)' : 'rgba(255,255,255,0.4)',
                                    boxShadow: isDark ? '0 4px 30px rgba(0, 0, 0, 0.1)' : '0 4px 30px rgba(0, 0, 0, 0.05)'
                                }}
                            >
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                                    <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-orbitron)] mb-2 md:mb-0" style={{ color: isDark ? '#ffffff' : '#000000' }}>
                                        {project.title}
                                    </h2>
                                    <div className="flex items-center gap-4">
                                        {/* @ts-ignore */}
                                        {project.link ? (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-3 py-1 rounded-full text-xs font-mono border flex items-center gap-1 transition-all hover:scale-105 hover:opacity-80 bg-transparent"
                                                style={{
                                                    borderColor: isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)',
                                                    color: isDark ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)'
                                                }}
                                            >
                                                {project.status} <ExternalLink size={10} />
                                            </a>
                                        ) : (
                                            <span className="px-3 py-1 rounded-full text-xs font-mono border"
                                                style={{
                                                    borderColor: isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)',
                                                    color: isDark ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)'
                                                }}>
                                                {project.status}
                                            </span>
                                        )}
                                        <div className="flex items-center gap-2 text-sm font-mono opacity-70" style={{ color: isDark ? '#ffffff' : '#000000' }}>
                                            <Calendar size={14} />
                                            <span>{project.date}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.techStack.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-xs rounded-md bg-opacity-10 font-medium"
                                            style={{
                                                backgroundColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
                                                color: isDark ? '#AED9E0' : '#005f73'
                                            }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <ul className="space-y-3">
                                    {project.description.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 leading-relaxed opacity-90 text-base md:text-lg" style={{ color: isDark ? 'rgba(255,255,255,0.85)' : 'rgba(0,0,0,0.75)' }}>
                                            <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: isDark ? '#ffffff' : '#000000' }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
