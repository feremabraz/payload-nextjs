import { SectionContainer } from "@shared-layout/section-container";

import AwardsSection from "@sections/awards-section";
import PublicationsSection from "@sections/publications-section";
import TeamSection from "@sections/team-section";
import TestimonialsSection from "@sections/testimonial-section";
import ValuesMissionSection from "@sections/values-mission-section";

export default function StudioStandalone() {
  return (
    <SectionContainer maxWidth="container" paddingY="xl" className="bg-white">
      <div className="text-center">
        <h2 className="text-3xl text-foreground">BRUNO CÂMERA ARQUITETOS</h2>
        <h1 className="font-semibold text-8xl text-foreground">STUDIO</h1>
      </div>
      <ValuesMissionSection />
      <TeamSection />
      <AwardsSection />
      <PublicationsSection />
      <TestimonialsSection />
    </SectionContainer>
  );
}
