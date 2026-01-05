// lib/substack.ts
import Parser from "rss-parser";

const parser = new Parser();

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

    return feed.items.map((item) => ({
      title: item.title ?? "",
      link: item.link ?? "",
      pubDate: item.pubDate ?? "",
      excerpt:
        item.contentSnippet ??
        item.content?.replace(/<[^>]*>/g, "").slice(0, 160) ??
        "",
    }));
  } catch (error) {
    console.error("Failed to fetch Substack feed:", error);
    return [];
  }
}
