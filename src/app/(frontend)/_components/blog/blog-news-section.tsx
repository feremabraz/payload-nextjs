import { BlogNewsPostCard } from "@blog/blog-news-card";
import { Link } from "@i18n/navigation";
import { getBlogPosts } from "@shared-lib/payload-api";
import type { BlogNewsPost } from "@shared-types/blog-and-news";
import { Button } from "@shared-ui/button";
import { ContentGrid } from "@shared/content-grid";
import { EmptyState } from "@shared/empty-state";
import { SectionContainer, SectionHeader } from "@shared/section-container";
import { PenTool } from "lucide-react";
import { getTranslations } from "next-intl/server";

export default async function BlogNewsSection() {
  const blogPosts = await getBlogPosts(4);
  const t = await getTranslations();

  if (blogPosts.length === 0) {
    return (
      <div id="blog-news">
        <SectionContainer variant="default" width="wide">
          <SectionHeader
            title={t("navigation.blogAndNews")}
            linkHref="/blog"
            linkText={t("navigation.blog")}
          />
          <EmptyState
            icon={<PenTool size={64} />}
            title={t("blog.empty.title")}
            description={t("blog.empty.description")}
            action={
              <Button asChild variant="outline">
                <Link href="/budget">{t("common.contactUs")}</Link>
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
        title={t("navigation.blogAndNews")}
        linkHref="/blog"
        linkText={t("navigation.blog")}
        items={blogPosts}
        renderItem={(post) => <BlogNewsPostCard key={post.id} {...post} />}
        columns={4}
        gap="md"
      />
    </div>
  );
}
