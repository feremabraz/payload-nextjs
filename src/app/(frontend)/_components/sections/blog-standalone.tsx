"use client";

import { BlogGallery } from "@blog/blog-gallery";
import { blognewsPostsData } from "@shared-data/blog-news-data";
import { SectionContainer } from "@shared-layout/section-container";

export default function BlogStandalone() {
  return (
    <SectionContainer maxWidth="container" paddingY="xl" className="bg-white">
      <div className="mb-8 md:mb-10 text-center">
        <h2 className="text-3xl text-foreground">BRUNO CÂMERA ARQUITETOS</h2>
        <h1 className="font-semibold text-8xl text-foreground">BLOG</h1>
      </div>
      <BlogGallery columns={4} posts={blognewsPostsData} />
    </SectionContainer>
  );
}
