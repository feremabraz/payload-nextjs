import type { Locale } from "@/types/locale";
import config from "@payload-config";
import type { ValuesAndMission } from "@payload-types";
import { unstable_cache } from "next/cache";
import { getPayload } from "payload";

export const getValuesAndMissionByType = unstable_cache(
  async (type: string, locale: Locale = "en"): Promise<ValuesAndMission[]> => {
    const payload = await getPayload({ config });
    const content = await payload.find({
      collection: "values-and-mission",
      where: {
        and: [{ type: { equals: type } }, { published: { equals: true } }],
      },
      sort: "order",
      limit: 50,
      locale,
    });
    return content.docs;
  },
  ["values-and-mission"],
  {
    tags: ["values-and-mission"],
    revalidate: 3600, // Cache for 1 hour
  },
);

export const getAllValuesAndMission = unstable_cache(
  async (locale: Locale = "en"): Promise<ValuesAndMission[]> => {
    const payload = await getPayload({ config });
    const content = await payload.find({
      collection: "values-and-mission",
      where: { published: { equals: true } },
      sort: "order",
      limit: 100,
      locale,
    });
    return content.docs;
  },
  ["all-values-and-mission"],
  {
    tags: ["values-and-mission"],
    revalidate: 3600, // Cache for 1 hour
  },
);

export const getFeaturedValuesAndMission = unstable_cache(
  async (locale: Locale = "en"): Promise<ValuesAndMission[]> => {
    const payload = await getPayload({ config });
    const content = await payload.find({
      collection: "values-and-mission",
      where: {
        and: [{ published: { equals: true } }, { featuredOnHomepage: { equals: true } }],
      },
      sort: "order",
      limit: 10,
      locale,
    });
    return content.docs;
  },
  ["featured-values-and-mission"],
  {
    tags: ["values-and-mission"],
    revalidate: 3600, // Cache for 1 hour
  },
);

export const getCompanyValues = (locale: Locale = "en") =>
  getValuesAndMissionByType("value", locale);
export const getMissionStatements = (locale: Locale = "en") =>
  getValuesAndMissionByType("mission", locale);
export const getVisionStatements = (locale: Locale = "en") =>
  getValuesAndMissionByType("vision", locale);
export const getCompanyPrinciples = (locale: Locale = "en") =>
  getValuesAndMissionByType("principle", locale);
