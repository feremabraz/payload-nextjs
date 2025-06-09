import { SectionContainer } from "@shared-layout/section-container";

import AwardsSection from "@sections/awards-section";
import GuaranteesSection from "@sections/guarantees-section";
import PublicationsSection from "@sections/publications-section";
import TeamSection from "@sections/team-section";
import TestimonialsSection from "@sections/testimonial-section";
import ValuesMissionSection from "@sections/values-mission-section";

export default function StudioStandalone() {
  return (
    <SectionContainer maxWidth="container" paddingY="xl">
      <div className="text-center">
        <h2 className="text-3xl text-foreground">BRUNO CÂMERA ARQUITETOS</h2>
        <h1 className="font-semibold text-8xl text-foreground">STUDIO</h1>
      </div>
      <div id="values">
        <ValuesMissionSection />
      </div>
      <div id="profile">
        <GuaranteesSection />
      </div>
      <div id="team">
        <TeamSection />
      </div>
      <div id="studio">
        <AwardsSection />
      </div>
      <PublicationsSection />
      <TestimonialsSection />
    </SectionContainer>
  );
}
