import type {
  Award,
  Blog,
  Media,
  Project,
  StudioInfo,
  TeamMember,
  ValuesAndMission,
} from "@/payload-types";
import config from "@/payload.config";
import type { Locale } from "@/types/locale";
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
export async function getBlogPosts(limit?: number, category?: string, locale: Locale = "en") {
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
    locale,
  });

  return result.docs.map((post) => transformBlogPost(post));
}

export async function getBlogPostBySlug(slug: string, locale: Locale = "en") {
  const payload = await getPayloadInstance();

  const result = await payload.find({
    collection: "blog",
    depth: 1,
    limit: 1,
    where: {
      slug: { equals: slug },
      published: { equals: true },
    },
    locale,
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
export async function getProjects(limit?: number, category?: string, locale: Locale = "en") {
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
    locale,
  });

  return result.docs.map(transformProject);
}

export async function getProjectBySlug(slug: string, locale: Locale = "en") {
  const payload = await getPayloadInstance();

  const result = await payload.find({
    collection: "projects",
    depth: 1,
    limit: 1,
    where: {
      slug: { equals: slug },
      published: { equals: true },
    },
    locale,
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

// Awards API functions
export async function getAwards(limit?: number, locale: Locale = "en") {
  const payload = await getPayloadInstance();

  const result = await payload.find({
    collection: "awards",
    depth: 1,
    limit: limit || 50,
    sort: "-year",
    where: {
      published: { equals: true },
    },
    locale,
  });

  return result.docs.map(transformAward);
}

function transformAward(award: Award) {
  return {
    id: award.id.toString(),
    title: award.title,
    description: award.description,
    project: award.project,
    location: award.location,
    year: award.year,
    imageUrl: transformMediaUrl(award.awardImage),
    altText: (typeof award.awardImage === "object" && award.awardImage?.alt) || award.title,
    featured: award.featured || false,
  };
}

// Studio Info API functions
export async function getStudioInfo(locale: Locale = "en") {
  const payload = await getPayloadInstance();

  const result = await payload.find({
    collection: "studio-info",
    depth: 1,
    sort: "order",
    where: {
      published: { equals: true },
    },
    locale,
  });

  return result.docs.map(transformStudioInfo);
}

function transformStudioInfo(info: StudioInfo) {
  return {
    id: info.id.toString(),
    title: info.title,
    description: info.description,
    imageUrl: transformMediaUrl(info.image),
    altText: (typeof info.image === "object" && info.image?.alt) || info.title,
    order: info.order || 0,
  };
}

// Team Members API functions
export async function getTeamMembers(locale: Locale = "en") {
  const payload = await getPayloadInstance();

  const result = await payload.find({
    collection: "team-members",
    depth: 1,
    sort: "order",
    where: {
      published: { equals: true },
    },
    locale,
  });

  return result.docs.map(transformTeamMember);
}

function transformTeamMember(member: TeamMember) {
  return {
    id: member.id.toString(),
    name: member.name,
    role: member.role,
    bio: member.bio,
    interests: member.interests,
    imageUrl: transformMediaUrl(member.profileImage),
    altText: (typeof member.profileImage === "object" && member.profileImage?.alt) || member.name,
    order: member.order || 0,
  };
}

// Values and Mission API functions
export async function getValuesAndMission(limit?: number, locale: Locale = "en") {
  const payload = await getPayloadInstance();

  const result = await payload.find({
    collection: "values-and-mission",
    depth: 1,
    limit: limit || 50,
    sort: "order",
    where: {
      published: { equals: true },
    },
    locale,
  });

  return result.docs.map(transformValuesAndMission);
}

export async function getFeaturedValuesAndMission(locale: Locale = "en") {
  const payload = await getPayloadInstance();

  const result = await payload.find({
    collection: "values-and-mission",
    depth: 1,
    sort: "order",
    where: {
      published: { equals: true },
      featuredOnHomepage: { equals: true },
    },
    locale,
  });

  return result.docs.map(transformValuesAndMission);
}

function transformValuesAndMission(item: ValuesAndMission) {
  return {
    id: item.id.toString(),
    title: item.title,
    type: item.type,
    content: item.content,
    summary: item.summary,
    icon: item.icon,
    order: item.order || 0,
    featuredOnHomepage: item.featuredOnHomepage || false,
  };
}
