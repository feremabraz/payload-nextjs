import config from "@payload-config";
import type { Job } from "@payload-types";
import { unstable_cache } from "next/cache";
import { getPayload } from "payload";

export const getJobs = unstable_cache(
  async (limit?: number): Promise<Job[]> => {
    const payload = await getPayload({ config });
    const jobs = await payload.find({
      collection: "jobs",
      where: { published: { equals: true } },
      sort: "-order",
      limit: limit || 50,
    });
    return jobs.docs;
  },
  ["jobs"],
  {
    tags: ["jobs"],
    revalidate: 3600, // Cache for 1 hour
  },
);

export const getJobBySlug = unstable_cache(
  async (slug: string): Promise<Job | null> => {
    const payload = await getPayload({ config });
    const jobs = await payload.find({
      collection: "jobs",
      where: {
        and: [{ slug: { equals: slug } }, { published: { equals: true } }],
      },
      limit: 1,
    });
    return jobs.docs[0] || null;
  },
  ["job-by-slug"],
  {
    tags: ["jobs"],
    revalidate: 3600, // Cache for 1 hour
  },
);

export const getJobsByDepartment = unstable_cache(
  async (department: string): Promise<Job[]> => {
    const payload = await getPayload({ config });
    const jobs = await payload.find({
      collection: "jobs",
      where: {
        and: [{ department: { equals: department } }, { published: { equals: true } }],
      },
      sort: "-order",
      limit: 20,
    });
    return jobs.docs;
  },
  ["jobs-by-department"],
  {
    tags: ["jobs"],
    revalidate: 3600, // Cache for 1 hour
  },
);

export const getFeaturedJobs = unstable_cache(
  async (limit?: number): Promise<Job[]> => {
    const payload = await getPayload({ config });

    const jobs = await payload.find({
      collection: "jobs",
      where: {
        and: [{ featured: { equals: true } }, { published: { equals: true } }],
      },
      sort: "-order",
      limit: limit || 10,
    });
    return jobs.docs;
  },
  ["featured-jobs"],
  {
    tags: ["jobs"],
    revalidate: 3600, // Cache for 1 hour
  },
);

export const getJobDepartments = unstable_cache(
  async (): Promise<string[]> => {
    const jobs = await getJobs();
    const departments = [...new Set(jobs.map((job) => job.department))];
    return departments.sort();
  },
  ["job-departments"],
  {
    tags: ["jobs"],
    revalidate: 3600, // Cache for 1 hour
  },
);
