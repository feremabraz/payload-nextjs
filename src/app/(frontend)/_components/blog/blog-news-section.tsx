import { BlogNewsPostCard } from "@blog/blog-news-card";
import { Link } from "@i18n/navigation";
import { getBlogPosts } from "@shared-lib/payload-api";
import type { BlogNewsPost } from "@shared-types/blog-and-news";
import { Button } from "@shared-ui/button";
import { ContentGrid } from "@shared/content-grid";
import { EmptyState } from "@shared/empty-state";
import { SectionContainer, SectionHeader } from "@shared/section-container";
import { PenTool } from "lucide-react";

export default async function BlogNewsSection() {
  const blogPosts = await getBlogPosts(4);

  if (blogPosts.length === 0) {
    return (
      <div id="blog-news">
        <SectionContainer variant="default" width="wide">
          <SectionHeader title="BLOG & NEWS" linkHref="/blog" linkText="GO TO BLOG" />
          <EmptyState
            icon={<PenTool size={64} />}
            title="No Blog Posts Available"
            description="We're working on new content. Stay tuned for insights, project updates, and architectural news."
            action={
              <Button asChild variant="outline">
                <Link href="/budget">Get In Touch</Link>
              </Button>
            }
            variant="compact"
            width="wide"
          />
        </SectionContainer>
      </div>
    );
  }

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
