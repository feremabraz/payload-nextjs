import { headers as getHeaders } from "next/headers";
import { getPayload } from "payload";

import NavigationSection from "@navigation/navigation-section";
import FooterSection from "@shared/footer-section";
import ProjectsClientWrapper from "@wrappers/projects-client-wrapper";

import config from "@/payload.config";

export default async function ProjectsPage() {
  const headers = await getHeaders();
  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });
  const { user: _user } = await payload.auth({ headers });

  return (
    <>
      <NavigationSection />
      <ProjectsClientWrapper />
      <FooterSection />
    </>
  );
}
