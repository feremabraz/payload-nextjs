"use client";

import { BlogFilter } from "@blog/blog-filter";
import { BlogGallery } from "@blog/blog-gallery";
import { blognewsPostsData } from "@shared-data/blog-news-data";
import { SectionContainer } from "@shared-layout/section-container";
import type { BlogCategory } from "@shared-types/blog-and-news";
import { useState } from "react";

export default function BlogStandalone() {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory | "all">("all");

  const selectedPosts = blognewsPostsData.filter(
    (post) => selectedCategory === "all" || post.category === selectedCategory,
  );

  return (
    <SectionContainer maxWidth="container" paddingY="xl" className="bg-white">
      <div className="mb-8 md:mb-10 text-center">
        <h2 className="text-3xl text-foreground">BRUNO CÂMERA ARQUITETOS</h2>
        <h1 className="font-semibold text-8xl text-foreground">BLOG</h1>
      </div>
      <BlogFilter selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
      <BlogGallery columns={4} posts={selectedPosts} />
    </SectionContainer>
  );
}
