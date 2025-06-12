"use client";

import { BlogFilter } from "@blog/blog-filter";
import { BlogGallery } from "@blog/blog-gallery";
import { Link } from "@i18n/navigation";
import type { BlogCategory, BlogNewsPost } from "@shared-types/blog-and-news";
import { Button } from "@shared-ui/button";
import { EmptyState } from "@shared/empty-state";
import { SectionContainer } from "@shared/section-container";
import { PenTool } from "lucide-react";
import { useState } from "react";

interface BlogClientWrapperProps {
  initialPosts: BlogNewsPost[];
}

export default function BlogClientWrapper({ initialPosts }: BlogClientWrapperProps) {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory | "all">("all");

  const selectedPosts = initialPosts.filter(
    (post) => selectedCategory === "all" || post.category === selectedCategory,
  );

  if (initialPosts.length === 0) {
    return (
      <SectionContainer width="container" variant="loose">
        <div className="mb-8 md:mb-10 text-center">
          <h2 className="text-3xl text-foreground">BRUNO CÂMERA ARQUITETOS</h2>
          <h1 className="font-semibold text-8xl text-foreground">BLOG</h1>
        </div>
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
          width="container"
        />
      </SectionContainer>
    );
  }

  return (
    <SectionContainer width="container" variant="loose">
      <div className="mb-8 md:mb-10 text-center">
        <h2 className="text-3xl text-foreground">BRUNO CÂMERA ARQUITETOS</h2>
        <h1 className="font-semibold text-8xl text-foreground">BLOG</h1>
      </div>
      <BlogFilter selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
      {selectedPosts.length === 0 ? (
        <EmptyState
          icon={<PenTool size={48} />}
          title="No Posts Found"
          description={`No blog posts found in the "${selectedCategory === "all" ? "All" : selectedCategory.replace("-", " ")}" category.`}
          action={
            <Button onClick={() => setSelectedCategory("all")} variant="outline">
              Show All Posts
            </Button>
          }
          variant="compact"
          width="container"
        />
      ) : (
        <BlogGallery columns={4} posts={selectedPosts} />
      )}
    </SectionContainer>
  );
}
