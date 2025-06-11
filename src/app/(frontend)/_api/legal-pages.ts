import config from "@payload-config";
import type { LegalPage } from "@payload-types";
import { unstable_cache } from "next/cache";
import { getPayload } from "payload";

export const getLegalPageBySlug = unstable_cache(
  async (slug: string): Promise<LegalPage | null> => {
    const payload = await getPayload({ config });

    const pages = await payload.find({
      collection: "legal-pages",
      where: {
        and: [{ slug: { equals: slug } }, { published: { equals: true } }],
      },
      limit: 1,
    });

    return pages.docs[0] || null;
  },
  ["legal-page"],
  {
    tags: ["legal-pages"],
    revalidate: 3600, // Cache for 1 hour
  },
);

export const getAllLegalPages = unstable_cache(
  async (): Promise<LegalPage[]> => {
    const payload = await getPayload({ config });

    const pages = await payload.find({
      collection: "legal-pages",
      where: { published: { equals: true } },
      sort: "order",
      limit: 50,
    });

    return pages.docs;
  },
  ["all-legal-pages"],
  {
    tags: ["legal-pages"],
    revalidate: 3600, // Cache for 1 hour
  },
);

export const getLegalPagesByType = unstable_cache(
  async (type: string): Promise<LegalPage[]> => {
    const payload = await getPayload({ config });

    const pages = await payload.find({
      collection: "legal-pages",
      where: {
        and: [{ pageType: { equals: type } }, { published: { equals: true } }],
      },
      sort: "order",
      limit: 20,
    });

    return pages.docs;
  },
  ["legal-pages-by-type"],
  {
    tags: ["legal-pages"],
    revalidate: 3600, // Cache for 1 hour
  },
);

export const getPrivacyPolicy = () => getLegalPageBySlug("privacy");
export const getTermsOfService = () => getLegalPageBySlug("tos");
export const getCookiePolicy = () => getLegalPageBySlug("cookies");
