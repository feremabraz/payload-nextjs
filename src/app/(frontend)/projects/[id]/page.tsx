import { headers as getHeaders } from "next/headers.js";
import { notFound } from "next/navigation";
import { getPayload } from "payload";

import ProjectCustomNavigation from "@navigation/project-custom-navigation";
import ProjectImagesSection from "@projects/project-images-section";
import { projects } from "@shared-data/project-data";
import FooterSection from "@shared/footer-section";
import { SectionContainer } from "@shared/section-container";

import config from "@/payload.config";

interface PageProps {
  params: Promise<{ id: string }>;
}

interface ProjectFieldProps {
  label: string;
  value: string;
  isTitle?: boolean;
}

function ProjectField({ label, value, isTitle = false }: ProjectFieldProps) {
  return (
    <div className="flex flex-col items-start gap-2 flex-1">
      <span className="text-sm font-medium text-muted">{label}</span>
      {isTitle ? (
        <h1 className="text-4xl font-semibold w-[300px] text-foreground">{value}</h1>
      ) : (
        <p className="text-4xl font-semibold w-[300px] text-foreground">{value}</p>
      )}
    </div>
  );
}

export default async function ProjectPage({ params }: PageProps) {
  const headers = await getHeaders();
  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });
  const { user: _user } = await payload.auth({ headers });

  const resolvedParams = await params;
  const projectId = Number.parseInt(resolvedParams.id, 10);

  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    notFound();
  }

  const firstRowFields = [
    { label: "Project Title", value: project.title, isTitle: true },
    { label: "Location", value: project.location },
    { label: "Year", value: project.year },
  ];

  const secondRowFields = [
    { label: "Project Type", value: project.projectType },
    { label: "Client", value: project.client },
    { label: "Project Size", value: project.projectSize },
  ];

  return (
    <>
      <ProjectCustomNavigation id={projectId} />
      <SectionContainer width="container" variant="default">
        <div className="flex flex-col gap-16">
          <div className="flex items-start gap-16">
            {firstRowFields.map((field) => (
              <ProjectField
                key={field.label}
                label={field.label}
                value={field.value}
                isTitle={field.isTitle}
              />
            ))}
          </div>
          <div className="flex items-start gap-16">
            {secondRowFields.map((field) => (
              <ProjectField key={field.label} label={field.label} value={field.value} />
            ))}
          </div>
        </div>
      </SectionContainer>
      <ProjectImagesSection id={projectId} />
      <FooterSection />
    </>
  );
}
