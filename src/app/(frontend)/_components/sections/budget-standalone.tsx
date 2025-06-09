import BudgetRequestWithImageSection from "@sections/budget-request-with-image-section";
import TestimonialsSection from "@sections/testimonial-section";
import { SectionContainer } from "@shared-layout/section-container";

export default function BudgetStandalone() {
  return (
    <SectionContainer maxWidth="container" paddingY="xl">
      <BudgetRequestWithImageSection />
      <TestimonialsSection />
    </SectionContainer>
  );
}
