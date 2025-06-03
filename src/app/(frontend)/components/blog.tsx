import Link from "next/link";
import BlogCard, { type BlogPost } from "./blog-card";

export default function Blog() {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "New Project Finished: Villa 18, House in Lisbon",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
      date: "12 March 2025",
      slug: "new-project-villa-18-lisbon",
      category: "Projects",
    },
    {
      id: 2,
      title: "Industry Insights & Trends",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
      date: "12 March 2025",
      slug: "industry-insights-trends-1",
      category: "Industry",
    },
    {
      id: 3,
      title: "Industry Insights & Trends",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
      date: "12 March 2025",
      slug: "industry-insights-trends-2",
      category: "Industry",
    },
    {
      id: 4,
      title: "Industry Insights & Trends",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop",
      date: "12 March 2025",
      slug: "industry-insights-trends-3",
      category: "Industry",
    },
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-7xl font-bold text-center mb-4">BLOG & NEWS</h2>
        <div className="flex justify-center mb-12">
          <Link href="/blog" className="hover:underline">
            GO TO BLOG
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
