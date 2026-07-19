import type { MetadataRoute } from "next";
import { locales } from "@/lib/locales";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: locale === "en" ? 1 : 0.9,
    alternates: {
      languages: {
        ...Object.fromEntries(
          locales.map((item) => [item, `${siteUrl}/${item}`]),
        ),
        "x-default": `${siteUrl}/en`,
      },
    },
  }));
}
