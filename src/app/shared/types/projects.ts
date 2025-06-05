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
  // Project details for standalone page
  title: string;
  location: string;
  year: string;
  projectType: string;
  client: string;
  projectSize: string;
  // Gallery images
  images: string[];
}
