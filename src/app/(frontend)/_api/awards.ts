import { getPayload } from "payload";
import type { Award } from "../../../payload-types";
import config from "../../../payload.config";

export async function getAwards(): Promise<Award[]> {
  const payload = await getPayload({ config });

  const awards = await payload.find({
    collection: "awards",
    where: {
      published: {
        equals: true,
      },
    },
    sort: "-year", // Most recent awards first
  });

  return awards.docs;
}

export async function getFeaturedAwards(): Promise<Award[]> {
  const payload = await getPayload({ config });

  const awards = await payload.find({
    collection: "awards",
    where: {
      and: [
        {
          published: {
            equals: true,
          },
        },
        {
          featured: {
            equals: true,
          },
        },
      ],
    },
    sort: "-year",
  });

  return awards.docs;
}
