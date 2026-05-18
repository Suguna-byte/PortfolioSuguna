// app/.../HobbiesSection.tsx
import { getSubstackPosts } from "@/lib/substack";
import HobbiesClient from "./HobbiesClient";

// ISR: re-fetches every hour automatically after deployment
export const revalidate = 3600;

export default async function HobbiesSection() {
  const posts = await getSubstackPosts();
  return <HobbiesClient posts={posts} />;
}
