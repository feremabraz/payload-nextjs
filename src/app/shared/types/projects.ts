export type ProjectCategory =
  | "houses"
  | "buildings"
  | "corporative"
  | "interior-design"
  | "product-design";

export interface ProjectItem {
  id: number;
  imageUrl: string;
  altText: string;
  overlayText?: string;
  category: ProjectCategory;
  title: string;
  location: string;
  year: string;
  projectType: string;
  client: string;
  projectSize: string;
}

export interface Project {
  id: string;
  imageUrl: string;
  altText: string;
  title: string;
  description: string;
  content?: unknown;
  location: string;
  year: string;
  projectType: string;
  client: string;
  projectSize: string;
  category: ProjectCategory;
  slug: string;
}
