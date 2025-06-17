import type { Locale } from "@/types/locale";
import { Link } from "@i18n/navigation";
import { ProjectImageCard } from "@projects/project-image-card";
import { getProjects } from "@shared-lib/payload-api";
import type { Project } from "@shared-types/projects";
import { Button } from "@shared-ui/button";
import { ContentGrid } from "@shared/content-grid";
import { EmptyState } from "@shared/empty-state";
import { SectionContainer, SectionHeader } from "@shared/section-container";
import { Building2 } from "lucide-react";
import { getTranslations } from "next-intl/server";

interface ProjectsSectionProps {
  locale: Locale;
}

export default async function ProjectsSection({ locale }: ProjectsSectionProps) {
  const t = await getTranslations({ locale });
  const projects = await getProjects(8, undefined, locale);

  if (projects.length === 0) {
    return (
      <div id="projects">
        <SectionContainer variant="default" width="wide">
          <SectionHeader
            title={t("projects.title")}
            linkHref="/projects"
            linkText={t("projects.viewProjects")}
          />
          <EmptyState
            icon={<Building2 size={64} />}
            title={t("projects.noProjects")}
            description={t("projects.noProjectsDescription")}
            action={
              <Button asChild variant="outline">
                <Link href="/budget">{t("budget.getInTouch") || t("studio.getInTouch")}</Link>
              </Button>
            }
            variant="compact"
            width="wide"
          />
        </SectionContainer>
      </div>
    );
  }

  return (
    <div id="projects">
      <ContentGrid<Project>
        title={t("projects.title")}
        linkHref="/projects"
        linkText={t("projects.viewProjects")}
        items={projects}
        renderItem={(project) => <ProjectImageCard key={project.id} project={project} size="md" />}
        columns={4}
        gap="md"
      />
    </div>
  );
}
