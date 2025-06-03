import Image from "next/image";
import Link from "next/link";

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  slug: string;
  category: string;
}

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="group">
      <Link href={`/blog/${post.slug}`}>
        <div className="relative aspect-[4/3] overflow-hidden mb-4">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <h3 className="text-lg font-medium mb-2">{post.title}</h3>
        <p className="text-sm text-gray-700 mb-2">{post.excerpt}</p>
        <p className="text-xs text-gray-500">{post.date}</p>
      </Link>
    </div>
  );
}
