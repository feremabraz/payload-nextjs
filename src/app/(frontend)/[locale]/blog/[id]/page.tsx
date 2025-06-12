import { headers as getHeaders } from "next/headers.js";
import { notFound } from "next/navigation";
import { getPayload } from "payload";

import { BlogGallery } from "@blog/blog-gallery";
import { getBlogPostBySlug, getBlogPosts } from "@shared-lib/payload-api";
import type { BlogNewsPost } from "@shared-types/blog-and-news";
import { SectionContainer } from "@shared/section-container";
import Image from "next/image";

import NavigationSection from "@navigation/navigation-section";
import FooterSection from "@shared/footer-section";
import { RichTextRenderer } from "@shared/rich-text-renderer";

import config from "@/payload.config";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function BlogEntryPage({ params }: PageProps) {
  const headers = await getHeaders();
  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });
  const { user: _user } = await payload.auth({ headers });

  const resolvedParams = await params;
  const slug = resolvedParams.id;

  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = await getBlogPosts(3);
  const filteredRelatedPosts = relatedPosts.filter((p: BlogNewsPost) => p.slug !== slug);

  return (
    <>
      <NavigationSection />
      <SectionContainer width="container" variant="default">
        <div className="flex flex-col gap-8">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">{post.date}</p>
          </div>
          <div className="flex flex-col gap-12">
            <div className="text-center">
              <h1 className="text-2xl md:text-4xl font-bold text-foreground max-w-4xl mx-auto">
                {post.title}
              </h1>
            </div>
            <div className="relative w-full h-[50vh] md:h-[60vh] rounded-lg overflow-hidden">
              <Image
                src={post.imagePath}
                alt={post.altText}
                fill
                className="object-cover"
                quality={100}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </div>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg leading-relaxed text-foreground">{post.description}</p>
            </div>
            <div className="max-w-4xl mx-auto space-y-6">
              <RichTextRenderer content={post.content} />
            </div>
          </div>
        </div>
      </SectionContainer>
      {filteredRelatedPosts.length > 0 && (
        <SectionContainer width="container" variant="loose">
          <div className="mb-8 md:mb-12">
            <h2 className="font-semibold text-4xl md:text-6xl text-foreground text-left">
              RELATED POSTS
            </h2>
          </div>
          <BlogGallery columns={3} posts={filteredRelatedPosts} />
          <div className="mt-8 md:mt-12">
            <a
              href="/blog"
              className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
            >
              SEE ALL THE BLOG ARTICLES
            </a>
          </div>
        </SectionContainer>
      )}
      <FooterSection />
    </>
  );
}
