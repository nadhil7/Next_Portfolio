import Link from "next/link";

export function PageFrame({ children }: { children: React.ReactNode }) {
  return (
    <div id="main-content" className="page-shell">
      {children}
    </div>
  );
}

export function BackLink({ href = "/", label = "Back to home" }: { href?: string; label?: string }) {
  return <Link className="back-link" href={href}>←&nbsp; {label}</Link>;
}

export function PageTitle({ eyebrow, children }: { eyebrow?: string; children: React.ReactNode }) {
  return (
    <header className="page-header">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h1 className="page-title">{children}</h1>
    </header>
  );
}

export function SectionCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <section className={`section-card ${className}`}>{children}</section>;
}

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="section-heading">{children}</h2>;
}

export function BodyText({ children }: { children: React.ReactNode }) {
  return <p className="body-copy">{children}</p>;
}

export function Pill({ children }: { children: React.ReactNode }) {
  return <span className="tag">{children}</span>;
}
