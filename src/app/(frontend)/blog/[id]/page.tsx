import { headers as getHeaders } from "next/headers.js";
import { getPayload } from "payload";

import { BlogGallery } from "@blog/blog-gallery";
import { blognewsPostsData } from "@shared-data/blog-news-data";
import { SectionContainer } from "@shared/section-container";
import Image from "next/image";

import ProjectCustomNavigation from "@navigation/project-custom-navigation";
import FooterSection from "@shared/footer-section";

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
  const blogId = resolvedParams.id;

  const post = blognewsPostsData.find((p) => p.id === blogId);

  if (!post) {
    return null;
  }

  const relatedPosts = blognewsPostsData.filter((post) => post.id !== blogId).slice(0, 3);

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <>
      <ProjectCustomNavigation id={Number.parseInt(blogId, 10)} />
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
              <p className="text-base leading-relaxed text-foreground">
                Perched on a scenic plot overlooking the tranquil Vale do Silêncio, The House in
                Lisbon stands as a thoughtful reinterpretation of a single-family dwelling. This
                project embraces the concept of spatial fluidity by emphasizing the seamless
                connection between interior and exterior environments. Large openings, continuous
                lines, and strategic alignments help dissolve the boundaries between the built space
                and the surrounding landscape, creating an experience that feels both open and
                intimate.
              </p>
              <p className="text-base leading-relaxed text-foreground">
                Perched on a scenic plot overlooking the tranquil Vale do Silêncio, The House in
                Lisbon stands as a thoughtful reinterpretation of a single-family dwelling. This
                project embraces the concept of spatial fluidity by emphasizing the seamless
                connection between interior and exterior environments. Large openings, continuous
                lines, and strategic alignments help dissolve the boundaries between the built space
                and the surrounding landscape, creating an experience that feels both open and
                intimate.
              </p>
              <p className="text-base leading-relaxed text-foreground">
                Perched on a scenic plot overlooking the tranquil Vale do Silêncio, The House in
                Lisbon stands as a thoughtful reinterpretation of a single-family dwelling. This
                project embraces the concept of spatial fluidity by emphasizing the seamless
                connection between interior and exterior environments. Large openings, continuous
                lines, and strategic alignments help dissolve the boundaries between the built space
                and the surrounding landscape, creating an experience that feels both open and
                intimate.
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>
      <SectionContainer width="container" variant="loose">
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
      <FooterSection />
    </>
  );
}
