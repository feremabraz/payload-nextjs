import config from "@payload-config";
import type { CompanySetting } from "@payload-types";
import { unstable_cache } from "next/cache";
import { getPayload } from "payload";

export const getCompanySettingsByCategory = unstable_cache(
  async (category: string): Promise<CompanySetting[]> => {
    const payload = await getPayload({ config });
    const settings = await payload.find({
      collection: "company-settings",
      where: {
        and: [{ category: { equals: category } }, { isActive: { equals: true } }],
      },
      sort: "order",
      limit: 50,
    });
    return settings.docs;
  },
  ["company-settings"],
  {
    tags: ["company-settings"],
    revalidate: 3600, // Cache for 1 hour
  },
);

export const getAllCompanySettings = unstable_cache(
  async (): Promise<CompanySetting[]> => {
    const payload = await getPayload({ config });
    const settings = await payload.find({
      collection: "company-settings",
      where: { isActive: { equals: true } },
      sort: "order",
      limit: 100,
    });
    return settings.docs;
  },
  ["all-company-settings"],
  {
    tags: ["company-settings"],
    revalidate: 3600, // Cache for 1 hour
  },
);

export const getContactInfo = () => getCompanySettingsByCategory("contact");
export const getSocialMediaLinks = () => getCompanySettingsByCategory("social");
export const getCompanyInfo = () => getCompanySettingsByCategory("company");
export const getLegalInfo = () => getCompanySettingsByCategory("legal");
