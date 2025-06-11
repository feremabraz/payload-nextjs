import { getAwards } from "@actions/awards";
import { EmptyState } from "@shared/empty-state";
import { SectionContainer } from "@shared/section-container";
import { AwardsGallery } from "@studio/awards-gallery";
import { Trophy } from "lucide-react";

export default async function AwardsSection() {
  const awards = await getAwards();

  if (awards.length === 0) {
    return (
      <SectionContainer variant="default" width="container">
        <section className="flex flex-col items-center gap-8 md:gap-12 w-full">
          <h2 className="w-full text-center font-medium text-4xl md:text-6xl text-balance px-4 text-foreground">
            AWARDS
          </h2>
          <EmptyState
            icon={<Trophy className="h-12 w-12" />}
            title="No awards yet"
            description="We're working hard to earn recognition for our projects. Check back soon for our latest achievements!"
          />
        </section>
      </SectionContainer>
    );
  }

  return (
    <SectionContainer variant="default" width="container">
      <section className="flex flex-col items-center gap-8 md:gap-12 w-full">
        <h2 className="w-full text-center font-medium text-4xl md:text-6xl text-balance px-4 text-foreground">
          AWARDS
        </h2>
        <AwardsGallery columns={2} awards={awards} />
      </section>
    </SectionContainer>
  );
}
