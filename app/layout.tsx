import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import SiteHeader from "@/components/SiteHeader";
import { siteUrl } from "@/lib/portfolio";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mohammed Nadhil K N | Full-Stack Developer",
    template: "%s",
  },
  description: "Full-stack developer with professional experience building web applications, ERP/CRM software, and business solutions using modern frontend, backend, and database technologies.",
  applicationName: "Mohammed Nadhil K N Portfolio",
  authors: [{ name: "Mohammed Nadhil K N", url: siteUrl }],
  creator: "Mohammed Nadhil K N",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Mohammed Nadhil K N Portfolio",
    title: "Mohammed Nadhil K N | Full-Stack Developer",
    description: "Full-stack developer building web applications, ERP/CRM software, and business solutions.",
  },
  twitter: { card: "summary", title: "Mohammed Nadhil K N | Full-Stack Developer", description: "Full-stack developer building web applications, ERP/CRM software, and business solutions." },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="nadhil-theme"
        >
          <a className="skip-link" href="#main-content">Skip to content</a>
          <SiteHeader />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              { "@type": "Person", name: "Mohammed Nadhil K N", url: siteUrl, jobTitle: "Full-Stack Developer", sameAs: ["https://www.linkedin.com/in/mohammed-nadhil-k-n/", "https://github.com/nadhil7", "https://www.instagram.com/nadhilkn_/"] },
              { "@type": "WebSite", name: "Mohammed Nadhil K N Portfolio", url: siteUrl, description: "Portfolio of Mohammed Nadhil K N, Full-Stack Developer and Software Developer." },
            ],
          }) }} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
