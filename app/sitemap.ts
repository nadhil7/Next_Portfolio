import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/about", "/experience", "/projects", "/case-studies", "/projects/xerocare", "/projects/instaviz", "/projects/letsellr", "/contact"].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : path === "/projects/xerocare" ? 0.9 : 0.7,
  }));
}
