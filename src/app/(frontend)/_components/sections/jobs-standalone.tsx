import JobsSection from "@sections/jobs-section";
import { SectionContainer, SectionHeader } from "@shared-layout/section-container";

export default function JobsStandalone() {
  return (
    <SectionContainer maxWidth="container" paddingY="xl" className="bg-white">
      <SectionHeader title="OPEN JOBS" />
      <JobsSection />
    </SectionContainer>
  );
}
