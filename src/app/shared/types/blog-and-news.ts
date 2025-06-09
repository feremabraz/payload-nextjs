export type BlogCategory = "publications" | "awards" | "conferences" | "exhibitions" | "news";

export type BlogNewsPost = {
  id: string;
  imagePath: string;
  altText: string;
  title: string;
  description: string;
  date: string;
  category: BlogCategory;
};
