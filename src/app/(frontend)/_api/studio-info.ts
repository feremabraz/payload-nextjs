import type { Locale } from "@/types/locale";
import { getPayload } from "payload";
import type { StudioInfo } from "../../../payload-types";
import config from "../../../payload.config";

export async function getStudioInfo(locale: Locale = "en"): Promise<StudioInfo[]> {
  const payload = await getPayload({ config });

  const studioSections = await payload.find({
    collection: "studio-info",
    where: {
      published: {
        equals: true,
      },
    },
    sort: "order", // Order field for custom sorting
    locale,
  });

  return studioSections.docs;
}
