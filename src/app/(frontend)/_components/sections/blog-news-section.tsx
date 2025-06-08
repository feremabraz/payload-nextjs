import { BlogNewsPostCard } from "@cards/blog-news-card";
import { ContentGrid } from "@layout/content-grid";
import { blognewsPostsData } from "@shared-data/blog-news-data";
import type { BlogNewsPost } from "@shared-types/blog-and-news";

export default function BlogNewsSection() {
  return (
    <ContentGrid<BlogNewsPost>
      title="BLOG & NEWS"
      linkHref="/blog"
      linkText="GO TO BLOG"
      items={blognewsPostsData}
      renderItem={(post) => (
        <BlogNewsPostCard
          key={post.id}
          imagePath={post.imagePath}
          altText={post.altText}
          title={post.title}
          description={post.description}
          date={post.date}
        />
      )}
      columns={{ default: 1, sm: 2, md: 3, lg: 4 }}
      gap="md"
    />
  );
}
