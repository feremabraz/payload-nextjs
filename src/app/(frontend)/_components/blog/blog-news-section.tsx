import { BlogNewsPostCard } from "@blog/blog-news-card";
import { getBlogPosts } from "@shared-lib/payload-api";
import type { BlogNewsPost } from "@shared-types/blog-and-news";
import { ContentGrid } from "@shared/content-grid";

export default async function BlogNewsSection() {
  const blogPosts = await getBlogPosts(4);

  return (
    <div id="blog-news">
      <ContentGrid<BlogNewsPost>
        title="BLOG & NEWS"
        linkHref="/blog"
        linkText="GO TO BLOG"
        items={blogPosts}
        renderItem={(post) => <BlogNewsPostCard key={post.id} {...post} />}
        columns={4}
        gap="md"
      />
    </div>
  );
}
