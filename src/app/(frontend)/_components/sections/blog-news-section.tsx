import { BlogNewsPostCard } from "@cards/blog-news-card";
import { blognewsPostsData } from "@shared-data/blog-news-data";
import { ContentGrid } from "@shared-layout/content-grid";
import type { BlogNewsPost } from "@shared-types/blog-and-news";

export default function BlogNewsSection() {
  return (
    <div id="blog-news">
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
    </div>
  );
}
