// lib/substack.ts
import Parser from "rss-parser";

const parser = new Parser({
  customFields: {
    item: [
      "content:encoded",
      "description",
      ["enclosure", "enclosure", { keepArray: false }],
      ["media:content", "mediaContent", { keepArray: false }],
      ["media:thumbnail", "mediaThumbnail", { keepArray: false }],
    ],
  },
});

export type SubstackPost = {
  title: string;
  link: string;
  pubDate: string;
  excerpt: string;
  image: string | null;
  source: "tech" | "human";
};

function extractImage(item: any): string | null {
  if (item.enclosure?.url && item.enclosure.type?.startsWith("image")) {
    return item.enclosure.url;
  }
  if (item.mediaContent?.["$"]?.url) return item.mediaContent["$"].url;
  if (item.mediaThumbnail?.["$"]?.url) return item.mediaThumbnail["$"].url;
  const html = item["content:encoded"] || item.content || item.description || "";
  const match = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  if (match) return match[1];
  return null;
}

async function fetchFeed(
  url: string,
  source: SubstackPost["source"]
): Promise<SubstackPost[]> {
  try {
    const feed = await parser.parseURL(url);
    return feed.items.slice(0, 8).map((item: any) => {
      const content =
        item["content:encoded"] || item.content || item.description || "";
      const cleanedContent = content.replace(/<[^>]*>/g, "").trim();

      let excerpt = item.contentSnippet || "";
      if (excerpt.length < 50 && cleanedContent.length > excerpt.length) {
        excerpt = cleanedContent.slice(0, 160) + "...";
      }

      return {
        title: item.title ?? "",
        link: item.link ?? "",
        pubDate: item.pubDate ?? "",
        excerpt,
        image: extractImage(item),
        source,
      };
    });
  } catch (error) {
    console.error(`Failed to fetch Substack feed (${source}):`, error);
    return [];
  }
}

export async function getSubstackPosts(): Promise<SubstackPost[]> {
  const [techPosts, humanPosts] = await Promise.all([
    fetchFeed("https://sugunajayarajan.substack.com/feed", "tech"),
    fetchFeed("https://thehumanupdate.substack.com/feed", "human"),
  ]);
  return [...techPosts, ...humanPosts];
}
