// lib/substack.ts
import Parser from "rss-parser";

const parser = new Parser({
  customFields: {
    item: ["content:encoded", "description"],
  },
});

export type SubstackPost = {
  title: string;
  link: string;
  pubDate: string;
  excerpt: string;
};

export async function getSubstackPosts(): Promise<SubstackPost[]> {
  try {
    const feed = await parser.parseURL(
      "https://sugunajayarajan.substack.com/feed"
    );

    return feed.items.map((item: any) => {
      // Substack often puts the subtitle in contentSnippet.
      // We try to get a better excerpt from description or content:encoded if contentSnippet is too short.
      const content = item["content:encoded"] || item.content || item.description || "";
      const cleanedContent = content.replace(/<[^>]*>/g, "").trim();
      
      let excerpt = item.contentSnippet || "";
      if (excerpt.length < 50 && cleanedContent.length > excerpt.length) {
        excerpt = cleanedContent.slice(0, 160) + "...";
      }

      return {
        title: item.title ?? "",
        link: item.link ?? "",
        pubDate: item.pubDate ?? "",
        excerpt: excerpt,
      };
    });
  } catch (error) {
    console.error("Failed to fetch Substack feed:", error);
    return [];
  }
}
