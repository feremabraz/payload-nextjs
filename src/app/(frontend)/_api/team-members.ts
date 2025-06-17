import type { Locale } from "@/types/locale";
import { getPayload } from "payload";
import type { TeamMember } from "../../../payload-types";
import config from "../../../payload.config";

export async function getTeamMembers(locale: Locale = "en"): Promise<TeamMember[]> {
  const payload = await getPayload({ config });

  const teamMembers = await payload.find({
    collection: "team-members",
    where: {
      published: {
        equals: true,
      },
    },
    sort: "order", // Order field for custom sorting
    locale,
  });

  return teamMembers.docs;
}
