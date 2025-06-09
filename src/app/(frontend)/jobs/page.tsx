import { headers as getHeaders } from "next/headers.js";
import { getPayload } from "payload";

import JobsSection from "@jobs/jobs-section";
import NavigationSection from "@navigation/navigation-section";
import FooterSection from "@shared/footer-section";
import { SectionContainer, SectionHeader } from "@shared/section-container";

import config from "@/payload.config";

export default async function JobsPage() {
  const headers = await getHeaders();
  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });
  const { user: _user } = await payload.auth({ headers });

  return (
    <>
      <NavigationSection />
      <SectionContainer maxWidth="container" paddingY="xl">
        <SectionHeader title="OPEN JOBS" />
        <JobsSection />
      </SectionContainer>
      <FooterSection />
    </>
  );
}
