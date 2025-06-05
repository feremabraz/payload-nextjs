import { headers as getHeaders } from "next/headers.js";
import { getPayload } from "payload";

import FooterSection from "@components/footer-section";
import ProjectCustomNavigation from "@components/project-custom-navigation";
import ProjectImagesSection from "@components/project-images-section";
import ProjectStandalone from "@components/project-standalone";

import config from "@/payload.config";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectPage({ params }: PageProps) {
  const headers = await getHeaders();
  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });
  const { user: _user } = await payload.auth({ headers });

  const resolvedParams = await params;
  const projectId = Number.parseInt(resolvedParams.id, 10);

  return (
    <>
      <ProjectCustomNavigation id={projectId} />
      <ProjectStandalone id={projectId} />
      <ProjectImagesSection id={projectId} />
      <FooterSection />
    </>
  );
}
