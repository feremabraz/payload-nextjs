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
}
