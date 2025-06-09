import { BlogNewsPostCard } from "@blog/blog-news-card";
import { blognewsPostsData } from "@shared-data/blog-news-data";
import type { BlogNewsPost } from "@shared-types/blog-and-news";
import { ContentGrid } from "@shared/content-grid";

export default function BlogNewsSection() {
  return (
    <div id="blog-news">
      <ContentGrid<BlogNewsPost>
        title="BLOG & NEWS"
        linkHref="/blog"
        linkText="GO TO BLOG"
        items={blognewsPostsData}
        renderItem={(post) => <BlogNewsPostCard key={post.id} {...post} />}
        columns={{ default: 1, sm: 2, md: 3, lg: 4 }}
        gap="md"
      />
    </div>
  );
}
