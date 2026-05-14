import type { MetadataRoute } from "next";

const BASE_URL = "https://asimpta.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/politica-de-privacidade`,
      lastModified: new Date("2026-05-13"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/termos-de-uso`,
      lastModified: new Date("2026-05-13"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
