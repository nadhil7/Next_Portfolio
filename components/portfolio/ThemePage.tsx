"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

export function usePortfolioTheme() {
  const { resolvedTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false,
  );

  return { mounted, isDark: resolvedTheme === "dark" };
}

export function PageLoadingState() {
  return <div className="w-full min-h-screen relative bg-black" aria-hidden="true" />;
}

export function PageFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full min-h-screen relative overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-40 overflow-y-auto custom-scrollbar">
        <main className="w-full md:max-w-6xl mx-auto px-4 py-8 md:py-12 md:scale-[0.8] md:origin-top">
          {children}
        </main>
      </div>
    </div>
  );
}

export function BackLink({ isDark, href = "/", label = "Back to Home" }: { isDark: boolean; href?: string; label?: string }) {
  return (
    <a href={href} className="inline-flex items-center gap-2 mb-8 transition-colors duration-300 hover:opacity-70" style={{ color: isDark ? "#ffffff" : "#000000" }}>
      <span aria-hidden="true">←</span>
      <span className="text-lg font-mono">{label}</span>
    </a>
  );
}

export function SectionCard({ isDark, children, className = "" }: { isDark: boolean; children: React.ReactNode; className?: string }) {
  return (
    <section
      className={`p-5 md:p-8 rounded-2xl border backdrop-blur-md transition-all duration-300 ${className}`}
      style={{
        borderColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
        background: isDark ? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.4)",
        boxShadow: isDark ? "0 4px 30px rgba(0, 0, 0, 0.1)" : "0 4px 30px rgba(0, 0, 0, 0.05)",
      }}
    >
      {children}
    </section>
  );
}

export function PageTitle({ isDark, eyebrow, children }: { isDark: boolean; eyebrow?: string; children: React.ReactNode }) {
  return (
    <header className="mb-8 md:mb-12">
      {eyebrow && <p className="text-sm md:text-base font-mono opacity-70 mb-3" style={{ color: isDark ? "#ffffff" : "#000000" }}>{eyebrow}</p>}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-[family-name:var(--font-orbitron)] font-bold transition-colors duration-300 drop-shadow-md text-left" style={{ color: isDark ? "#ffffff" : "#000000" }}>
        {children}
      </h1>
    </header>
  );
}

export function SectionHeading({ isDark, children }: { isDark: boolean; children: React.ReactNode }) {
  return <h2 className="text-2xl md:text-4xl font-bold font-[family-name:var(--font-orbitron)] mb-4" style={{ color: isDark ? "#ffffff" : "#000000" }}>{children}</h2>;
}

export function BodyText({ isDark, children }: { isDark: boolean; children: React.ReactNode }) {
  return <p className="text-sm md:text-lg leading-relaxed opacity-90" style={{ color: isDark ? "rgba(255,255,255,0.85)" : "rgba(0,0,0,0.75)" }}>{children}</p>;
}

export function Pill({ isDark, children }: { isDark: boolean; children: React.ReactNode }) {
  return <span className="px-2 md:px-3 py-1 text-[10px] md:text-xs rounded-md font-medium whitespace-nowrap" style={{ backgroundColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)", color: isDark ? "#AED9E0" : "#005f73" }}>{children}</span>;
}
