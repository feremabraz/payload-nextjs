import JobsSection from "@sections/jobs-section";
import { SectionContainer, SectionHeader } from "@shared-layout/section-container";

export default function JobsStandalone() {
  return (
    <SectionContainer maxWidth="container" paddingY="xl">
      <SectionHeader title="OPEN JOBS" />
      <JobsSection />
    </SectionContainer>
  );
}
