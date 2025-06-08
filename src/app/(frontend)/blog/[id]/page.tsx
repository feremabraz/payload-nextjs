import { headers as getHeaders } from "next/headers.js";
import { getPayload } from "payload";

import ProjectCustomNavigation from "@navigation/project-custom-navigation";
import BlogEntryRelated from "@sections/blog-entry-related";
import BlogEntryStandalone from "@sections/blog-entry-standalone";
import FooterSection from "@sections/footer-section";

import config from "@/payload.config";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function BlogEntryPage({ params }: PageProps) {
  const headers = await getHeaders();
  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });
  const { user: _user } = await payload.auth({ headers });

  const resolvedParams = await params;
  const blogId = resolvedParams.id;

  return (
    <>
      <ProjectCustomNavigation id={Number.parseInt(blogId, 10)} />
      <BlogEntryStandalone id={blogId} />
      <BlogEntryRelated id={blogId} />
      <FooterSection />
    </>
  );
}
