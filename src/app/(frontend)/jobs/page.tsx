import { headers as getHeaders } from "next/headers.js";
import { getPayload } from "payload";

import NavigationSection from "@navigation/navigation-section";
import FooterSection from "@sections/footer-section";
import JobsStandalone from "@sections/jobs-standalone";

import config from "@/payload.config";

export default async function JobsPage() {
  const headers = await getHeaders();
  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });
  const { user: _user } = await payload.auth({ headers });

  return (
    <>
      <NavigationSection />
      <JobsStandalone />
      <FooterSection />
    </>
  );
}
