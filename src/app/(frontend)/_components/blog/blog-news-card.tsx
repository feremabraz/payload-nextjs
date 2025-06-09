import { BlogImageCard } from "@blog/blog-image-card";
import type { BlogNewsPost } from "@shared-types/blog-and-news";

export interface BlogNewsPostCardProps extends BlogNewsPost {}

export function BlogNewsPostCard(props: BlogNewsPost) {
  return <BlogImageCard post={props} size="md" />;
}
