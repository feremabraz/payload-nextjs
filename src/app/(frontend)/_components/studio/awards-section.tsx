import { awards } from "@shared-data/awards-data";
import { SectionContainer } from "@shared/section-container";
import { AwardsGallery } from "@studio/awards-gallery";

export default function AwardsSection() {
  return (
    <SectionContainer paddingY="lg" gap="xl" maxWidth="container">
      <section className="flex flex-col items-center gap-8 md:gap-12 w-full">
        <h2 className="w-full text-center font-medium text-4xl md:text-6xl text-balance px-4 text-foreground">
          AWARDS
        </h2>
        <AwardsGallery columns={2} awards={awards} />
      </section>
    </SectionContainer>
  );
}
