import { getTeamMembers } from "@actions/team-members";
import { EmptyState } from "@shared/empty-state";
import { SectionContainer } from "@shared/section-container";
import { TeamGallery } from "@studio/team-gallery";
import { Users } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

interface TeamSectionProps {
  locale: string;
}

export default async function TeamSection({ locale }: TeamSectionProps) {
  const t = await getTranslations({ locale });
  const teamMembers = await getTeamMembers();

  if (teamMembers.length === 0) {
    return (
      <SectionContainer variant="default" width="container">
        <section className="flex flex-col items-center gap-8 md:gap-12 w-full">
          <h2 className="w-full text-center font-medium text-4xl md:text-6xl text-balance px-4 text-foreground">
            {t("studio.team")}
          </h2>
          <EmptyState
            icon={<Users className="h-12 w-12" />}
            title="studio.noTeamMembers"
            description="studio.noTeamMembersDescription"
          />
        </section>
      </SectionContainer>
    );
  }

  return (
    <SectionContainer variant="default" width="container">
      <section className="flex flex-col items-center gap-8 md:gap-12 w-full">
        <h2 className="w-full text-center font-medium text-4xl md:text-6xl text-balance px-4 text-foreground">
          {t("studio.team")}
        </h2>
        <div className="w-full max-w-4xl mx-auto text-center mb-8">
          <p className="font-normal text-lg text-foreground">{t("studio.teamDescription")}</p>
        </div>
        <div className="relative w-full h-72 max-w-7xl">
          <Image
            src="/studio/team_0.webp"
            alt="Bruno Câmara Architects team"
            fill
            className="scale-down rounded-sm overflow-hidden"
          />
        </div>
        <TeamGallery columns={3} members={teamMembers} />
      </section>
    </SectionContainer>
  );
}
