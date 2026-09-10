import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Default
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/form-submission",
          "/search?",
          "/*?*utm_",
          "/*?*gclid=",
          "/*?*fbclid=",
          "/*?*msclkid=",
          "/*?*session",
        ],
      },

      // Search engines
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Googlebot-Image", allow: "/" },
      { userAgent: "Googlebot-News", allow: "/" },
      { userAgent: "Googlebot-Video", allow: "/" },
      { userAgent: "Storebot-Google", allow: "/" },
      { userAgent: "GoogleOther", allow: "/" },
      { userAgent: "bingbot", allow: "/" },
      { userAgent: "msnbot", allow: "/" },
      { userAgent: "Slurp", allow: "/" },
      { userAgent: "DuckDuckBot", allow: "/" },
      { userAgent: "Applebot", allow: "/" },
      { userAgent: "YandexBot", allow: "/" },
      { userAgent: "Baiduspider", allow: "/" },
      { userAgent: "Yeti", allow: "/" },
      { userAgent: "PetalBot", allow: "/" },
      { userAgent: "SeznamBot", allow: "/" },
      { userAgent: "BraveBot", allow: "/" },
      { userAgent: "archive.org_bot", allow: "/" },

      // AI search and assistants
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "OAI-AdsBot", allow: "/" },
      { userAgent: "Claude-SearchBot", allow: "/" },
      { userAgent: "Claude-User", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Perplexity-User", allow: "/" },
      { userAgent: "DuckAssistBot", allow: "/" },
      { userAgent: "MistralAI-User", allow: "/" },
      { userAgent: "YouBot", allow: "/" },

      // AI model training — not permitted
      { userAgent: "GPTBot", disallow: "/" },
      { userAgent: "ClaudeBot", disallow: "/" },
      { userAgent: "Applebot-Extended", disallow: "/" },
      { userAgent: "Google-CloudVertexBot", disallow: "/" },
      { userAgent: "meta-externalagent", disallow: "/" },
      { userAgent: "meta-externalfetcher", disallow: "/" },
      { userAgent: "FacebookBot", disallow: "/" },
      { userAgent: "Bytespider", disallow: "/" },
      { userAgent: "CCBot", disallow: "/" },
      { userAgent: "Amazonbot", disallow: "/" },
      { userAgent: "cohere-ai", disallow: "/" },
      { userAgent: "cohere-training-data-crawler", disallow: "/" },
      { userAgent: "AI2Bot", disallow: "/" },
      { userAgent: "Ai2Bot-Dolma", disallow: "/" },
      { userAgent: "Diffbot", disallow: "/" },
      { userAgent: "Omgilibot", disallow: "/" },
      { userAgent: "Webzio-Extended", disallow: "/" },
      { userAgent: "ImagesiftBot", disallow: "/" },
      { userAgent: "img2dataset", disallow: "/" },
      { userAgent: "PanguBot", disallow: "/" },
      { userAgent: "Timpibot", disallow: "/" },
      { userAgent: "VelenPublicWebCrawler", disallow: "/" },
      { userAgent: "ICC-Crawler", disallow: "/" },

      // Link previews
      { userAgent: "facebookexternalhit", allow: "/" },
      { userAgent: "Twitterbot", allow: "/" },
      { userAgent: "LinkedInBot", allow: "/" },
      { userAgent: "WhatsApp", allow: "/" },
      { userAgent: "Slackbot", allow: "/" },
      { userAgent: "Slackbot-LinkExpanding", allow: "/" },
      { userAgent: "Discordbot", allow: "/" },
      { userAgent: "TelegramBot", allow: "/" },
      { userAgent: "redditbot", allow: "/" },
      { userAgent: "Pinterestbot", allow: "/" },

      // Ad verification
      { userAgent: "AdsBot-Google", allow: "/" },
      { userAgent: "AdsBot-Google-Mobile", allow: "/" },
      { userAgent: "AdsBot-Google-Mobile-Apps", allow: "/" },
      { userAgent: "Mediapartners-Google", allow: "/" },
      { userAgent: "adidxbot", allow: "/" },

      // Scrapers
      { userAgent: "Scrapy", disallow: "/" },
      { userAgent: "magpie-crawler", disallow: "/" },
      { userAgent: "peer39_crawler", disallow: "/" },
      { userAgent: "BLEXBot", disallow: "/" },
    ],
    sitemap: "https://credex.rocks/sitemap.xml",
  };
}
