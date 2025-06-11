import config from "@payload-config";
import type { ValuesAndMission } from "@payload-types";
import { unstable_cache } from "next/cache";
import { getPayload } from "payload";

export const getValuesAndMissionByType = unstable_cache(
  async (type: string): Promise<ValuesAndMission[]> => {
    const payload = await getPayload({ config });
    const content = await payload.find({
      collection: "values-and-mission",
      where: {
        and: [{ type: { equals: type } }, { published: { equals: true } }],
      },
      sort: "order",
      limit: 50,
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
  async (): Promise<ValuesAndMission[]> => {
    const payload = await getPayload({ config });
    const content = await payload.find({
      collection: "values-and-mission",
      where: { published: { equals: true } },
      sort: "order",
      limit: 100,
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
  async (): Promise<ValuesAndMission[]> => {
    const payload = await getPayload({ config });
    const content = await payload.find({
      collection: "values-and-mission",
      where: {
        and: [{ published: { equals: true } }, { featuredOnHomepage: { equals: true } }],
      },
      sort: "order",
      limit: 10,
    });
    return content.docs;
  },
  ["featured-values-and-mission"],
  {
    tags: ["values-and-mission"],
    revalidate: 3600, // Cache for 1 hour
  },
);

export const getCompanyValues = () => getValuesAndMissionByType("value");
export const getMissionStatements = () => getValuesAndMissionByType("mission");
export const getVisionStatements = () => getValuesAndMissionByType("vision");
export const getCompanyPrinciples = () => getValuesAndMissionByType("principle");
