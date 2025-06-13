import type { Blog, Media, Project } from "@/payload-types";
import config from "@/payload.config";
import { type Payload, getPayload } from "payload";

// Cache the payload instance
let payloadInstance: Payload | null = null;

export async function getPayloadInstance() {
  if (!payloadInstance) {
    payloadInstance = await getPayload({ config });
  }
  return payloadInstance;
}

// Transform Payload media to frontend format
export function transformMediaUrl(media: string | number | Media | null | undefined): string {
  if (!media) return "/placeholder.svg";

  if (typeof media === "string") {
    return media;
  }

  if (typeof media === "number") {
    // Media ID only - not populated, return placeholder
    return "/placeholder.svg";
  }

  return media.url || "/placeholder.svg";
}

// Blog API functions
export async function getBlogPosts(limit?: number, category?: string) {
  const payload = await getPayloadInstance();

  const where: { published: { equals: boolean }; category?: { equals: string } } = {
    published: { equals: true },
  };

  if (category && category !== "all") {
    where.category = { equals: category };
  }

  const result = await payload.find({
    collection: "blog",
    depth: 1,
    limit: limit || 50,
    sort: "-date",
    where,
  });

  return result.docs.map(transformBlogPost);
}

export async function getBlogPostBySlug(slug: string) {
  const payload = await getPayloadInstance();

  const result = await payload.find({
    collection: "blog",
    depth: 1,
    limit: 1,
    where: {
      slug: { equals: slug },
      published: { equals: true },
    },
  });

  if (result.docs.length === 0) {
    return null;
  }

  return transformBlogPost(result.docs[0]);
}

function transformBlogPost(post: Blog) {
  return {
    id: post.id.toString(),
    imagePath: transformMediaUrl(post.featuredImage),
    altText: (typeof post.featuredImage === "object" && post.featuredImage?.alt) || post.title,
    title: post.title,
    description: post.description,
    content: post.content,
    date: new Date(post.date).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
    category: post.category,
    slug: post.slug,
  };
}

// Projects API functions
export async function getProjects(limit?: number, category?: string) {
  const payload = await getPayloadInstance();

  const where: { published: { equals: boolean }; category?: { equals: string } } = {
    published: { equals: true },
  };

  if (category && category !== "all") {
    where.category = { equals: category };
  }

  const result = await payload.find({
    collection: "projects",
    depth: 1,
    limit: limit || 50,
    sort: "-year",
    where,
  });

  return result.docs.map(transformProject);
}

export async function getProjectBySlug(slug: string) {
  const payload = await getPayloadInstance();

  const result = await payload.find({
    collection: "projects",
    depth: 1,
    limit: 1,
    where: {
      slug: { equals: slug },
      published: { equals: true },
    },
  });

  if (result.docs.length === 0) {
    return null;
  }

  return transformProject(result.docs[0]);
}

function transformProject(project: Project) {
  return {
    id: project.id.toString(),
    imageUrl: transformMediaUrl(project.featuredImage),
    altText:
      (typeof project.featuredImage === "object" && project.featuredImage?.alt) || project.title,
    title: project.title,
    description: project.description,
    content: project.content,
    location: project.location,
    year: project.year.toString(),
    projectType: project.projectType,
    client: project.client,
    projectSize: project.projectSize,
    category: project.category,
    slug: project.slug,
  };
}
