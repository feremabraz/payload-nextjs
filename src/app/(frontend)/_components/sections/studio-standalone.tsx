import { SectionContainer } from "@shared-layout/section-container";

import AwardsSection from "@sections/awards-section";
import GuaranteesSection from "@sections/guarantees-section";
import PublicationsSection from "@sections/publications-section";
import StudioInfoSection from "@sections/studio-info-section";
import TeamSection from "@sections/team-section";
import TestimonialsSection from "@sections/testimonial-section";
import ValuesMissionSection from "@sections/values-mission-section";

export default function StudioStandalone() {
  return (
    <SectionContainer maxWidth="container" paddingY="xl" className="bg-white">
      <div className="mb-8 md:mb-10 text-center">
        <h2 className="text-3xl text-foreground">BRUNO CÂMERA ARQUITETOS</h2>
        <h1 className="font-semibold text-8xl text-foreground">STUDIO</h1>
      </div>
      <div className="space-y-16 md:space-y-24">
        <StudioInfoSection />
        <ValuesMissionSection />
        <GuaranteesSection />
        <TeamSection />
        <AwardsSection />
        <PublicationsSection />
        <TestimonialsSection />
      </div>
    </SectionContainer>
  );
}
