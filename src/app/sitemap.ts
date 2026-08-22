import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { solutions } from "@/lib/content";
import { legalDocs, posts } from "@/lib/stories";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/platform",
    "/solutions",
    "/solutions/threat-detection",
    "/solutions/cloud-security",
    "/solutions/devsecops",
    "/compliance",
    "/integrations",
    "/customers",
    "/case-studies",
    "/resources",
    "/blog",
    "/security",
    "/contact",
    "/legal",
  ];

  const now = new Date();

  return [
    ...routes.map((route) => ({
      url: `${site.url}${route}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.7,
    })),
    ...solutions.map((s) => ({
      url: `${site.url}/solutions/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...posts.map((p) => ({
      url: `${site.url}/blog/${p.slug}`,
      lastModified: new Date(`${p.date}T00:00:00Z`),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    ...legalDocs.map((d) => ({
      url: `${site.url}/legal/${d.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
