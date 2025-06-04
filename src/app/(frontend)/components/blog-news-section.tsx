import { BlogNewsPostCard } from "@components/blog-news-card";
import { SectionContainer, SectionHeader } from "@components/section";
import { blognewsPostsData } from "@lib/blog-news-data";

export default function BlogNewsSection() {
  return (
    <SectionContainer>
      <SectionHeader title="BLOG & NEWS" linkHref="/blog" linkText="GO TO BLOG" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 w-full">
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
