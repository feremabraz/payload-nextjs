import { BlogGallery } from "@blog/blog-gallery";
import { blognewsPostsData } from "@shared-data/blog-news-data";
import { SectionContainer } from "@shared-layout/section-container";

interface BlogEntryRelatedProps {
  id: string;
}

export default function BlogEntryRelated({ id }: BlogEntryRelatedProps) {
  // Get related posts (excluding current post)
  const relatedPosts = blognewsPostsData.filter((post) => post.id !== id).slice(0, 3);

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <SectionContainer maxWidth="container" paddingY="xl">
      <div className="mb-8 md:mb-12">
        <h2 className="font-semibold text-4xl md:text-6xl text-foreground text-left">
          RELATED POSTS
        </h2>
      </div>
      <BlogGallery columns={3} posts={relatedPosts} />
      <div className="mt-8 md:mt-12">
        <a
          href="/blog"
          className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
        >
          SEE ALL THE BLOG ARTICLES
        </a>
      </div>
    </SectionContainer>
  );
}
