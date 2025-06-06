import { BlogNewsPostCard } from "@components/blog-news-card";
import { SectionContainer, SectionHeader } from "@components/section";
import { blognewsPostsData } from "@lib/blog-news-data";

export default function BlogNewsSection() {
  return (
    <SectionContainer>
      <SectionHeader title="BLOG & NEWS" linkHref="/blog" linkText="GO TO BLOG" />
      <div className="grid-gallery-4 gap-3 sm:gap-4 md:gap-3 w-full">
        {blognewsPostsData.map((post) => (
          <BlogNewsPostCard
            key={post.id}
            imagePath={post.imagePath}
            altText={post.altText}
            title={post.title}
            description={post.description}
            date={post.date}
          />
        ))}
      </div>
    </SectionContainer>
  );
}
