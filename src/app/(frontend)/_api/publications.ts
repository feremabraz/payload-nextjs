import config from "@payload-config";
import type { Publication } from "@payload-types";
import { unstable_cache } from "next/cache";
import { getPayload } from "payload";

export const getPublications = unstable_cache(
  async (): Promise<Publication[]> => {
    const payload = await getPayload({ config });

    const publications = await payload.find({
      collection: "publications",
      where: { published: { equals: true } },
      sort: "-date",
      limit: 100, // Adjust as needed
    });

    return publications.docs;
  },
  ["publications"],
  {
    tags: ["publications"],
    revalidate: 3600, // Cache for 1 hour
  },
);
