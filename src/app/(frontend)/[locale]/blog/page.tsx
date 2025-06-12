import { headers as getHeaders } from "next/headers";
import { getPayload } from "payload";

import NavigationSection from "@navigation/navigation-section";
import { getBlogPosts } from "@shared-lib/payload-api";
import FooterSection from "@shared/footer-section";
import BlogClientWrapper from "@wrappers/blog-client-wrapper";

import config from "@/payload.config";

export default async function BlogPage(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;
  const { locale } = params;

  const headers = await getHeaders();
  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });
  const { user: _user } = await payload.auth({ headers });

  // Fetch blog posts from CMS
  const blogPosts = await getBlogPosts();

  return (
    <>
      <NavigationSection />
      <BlogClientWrapper initialPosts={blogPosts} />
      <FooterSection locale={locale} />
    </>
  );
}
