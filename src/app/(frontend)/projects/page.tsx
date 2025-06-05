import { headers as getHeaders } from "next/headers.js";
import { getPayload } from "payload";

import FooterSection from "@components/footer-section";
import NavigationSection from "@components/navigation-section";
import ProjectsStandalone from "@components/projects-standalone";

import config from "@/payload.config";

export default async function HomePage() {
  const headers = await getHeaders();
  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });
  const { user: _user } = await payload.auth({ headers });

  return (
    <>
      <NavigationSection background={"light"} />
      <ProjectsStandalone />
      <FooterSection />
    </>
  );
}
