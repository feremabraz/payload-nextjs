import type { Locale } from "@/types/locale";
import { getPayload } from "payload";
import type { Award } from "../../../payload-types";
import config from "../../../payload.config";

export async function getAwards(locale: Locale = "en"): Promise<Award[]> {
  const payload = await getPayload({ config });

  const awards = await payload.find({
    collection: "awards",
    where: {
      published: {
        equals: true,
      },
    },
    sort: "-year", // Most recent awards first
    locale,
  });

  return awards.docs;
}

export async function getFeaturedAwards(locale: Locale = "en"): Promise<Award[]> {
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
    locale,
  });

  return awards.docs;
}
