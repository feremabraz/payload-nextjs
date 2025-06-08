import { blognewsPostsData } from "@shared-data/blog-news-data";
import { SectionContainer } from "@shared-layout/section-container";
import Image from "next/image";

interface BlogEntryStandaloneProps {
  id: string;
}

export default function BlogEntryStandalone({ id }: BlogEntryStandaloneProps) {
  const post = blognewsPostsData.find((p) => p.id === id);

  if (!post) {
    return null;
  }

  return (
    <SectionContainer maxWidth="container" paddingY="lg">
      <div className="flex flex-col gap-8">
        {/* Header with date */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground">{post.date}</p>
        </div>

        {/* Main content based on the image layout */}
        <div className="flex flex-col gap-12">
          {/* Title */}
          <div className="text-center">
            <h1 className="text-2xl md:text-4xl font-bold text-foreground max-w-4xl mx-auto">
              {post.title}
            </h1>
          </div>

          {/* Featured image */}
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

          {/* Content description */}
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed text-foreground">{post.description}</p>
          </div>

          {/* Additional content sections - repeated description to match the image layout */}
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
  );
}
