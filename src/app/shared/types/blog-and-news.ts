export type BlogCategory = "publications" | "awards" | "conferences" | "exhibitions" | "news";

export type BlogNewsPost = {
  id: string;
  imagePath: string;
  altText: string;
  title: string;
  description: string;
  content?: unknown; // Rich text content
  date: string;
  category: BlogCategory;
  slug?: string;
};
