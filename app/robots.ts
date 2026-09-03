import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/form-submission", "/api/"],
    },
    sitemap: "https://credex.rocks/sitemap.xml",
  };
}
