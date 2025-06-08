import { headers as getHeaders } from "next/headers.js";
import { getPayload } from "payload";

import NavigationSection from "@navigation/navigation-section";
import BlogStandalone from "@sections/blog-standalone";
import FooterSection from "@sections/footer-section";

import config from "@/payload.config";

export default async function BlogPage() {
  const headers = await getHeaders();
  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });
  const { user: _user } = await payload.auth({ headers });

  return (
    <>
      <NavigationSection background={"light"} />
      <BlogStandalone />
      <FooterSection />
    </>
  );
}
