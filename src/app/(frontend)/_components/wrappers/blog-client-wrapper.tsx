"use client";

import { BlogFilter } from "@blog/blog-filter";
import { BlogGallery } from "@blog/blog-gallery";
import { Link } from "@i18n/navigation";
import type { BlogCategory, BlogNewsPost } from "@shared-types/blog-and-news";
import { Button } from "@shared-ui/button";
import { EmptyState } from "@shared/empty-state";
import { SectionContainer } from "@shared/section-container";
import { PenTool } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

interface BlogClientWrapperProps {
  initialPosts: BlogNewsPost[];
}

export default function BlogClientWrapper({ initialPosts }: BlogClientWrapperProps) {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory | "all">("all");
  const t = useTranslations();

  const selectedPosts = initialPosts.filter(
    (post) => selectedCategory === "all" || post.category === selectedCategory,
  );

  if (initialPosts.length === 0) {
    return (
      <SectionContainer width="container" variant="loose">
        <div className="mb-8 md:mb-10 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl text-foreground">{t("company.name")}</h2>
          <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground">
            {t("navigation.blog")}
          </h1>
        </div>
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
          width="container"
        />
      </SectionContainer>
    );
  }

  return (
    <SectionContainer width="container" variant="loose">
      <div className="mb-8 md:mb-10 text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl text-foreground">{t("company.name")}</h2>
        <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground">
          {t("navigation.blog")}
        </h1>
      </div>
      <BlogFilter selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
      {selectedPosts.length === 0 ? (
        <EmptyState
          icon={<PenTool size={48} />}
          title={t("blog.empty.noPostsFound")}
          description={t("blog.empty.noPostsInCategory", {
            category:
              selectedCategory === "all"
                ? t("blog.filter.showAll")
                : t(`blog.filter.${selectedCategory}`),
          })}
          action={
            <Button onClick={() => setSelectedCategory("all")} variant="outline">
              {t("blog.empty.showAllPosts")}
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
