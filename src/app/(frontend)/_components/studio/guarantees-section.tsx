import { SectionContainer } from "@shared/section-container";

export default function GuaranteesSection() {
  return (
    <SectionContainer paddingY="lg" gap="xl" maxWidth="xl">
      <section className="flex flex-col items-center gap-8 md:gap-12 w-full">
        <h2 className="w-full text-center font-medium text-4xl md:text-6xl text-balance px-4 text-foreground">
          OUR GUARANTEES
        </h2>
        <div className="w-full max-w-4xl mx-auto text-center">
          <p className="font-normal text-lg text-foreground">
            We guarantee strict compliance with work deadlines while ensuring top-tier quality in
            every detail. Our commitment to excellence is reflected in precise project execution and
            flawless finishes that meet the highest industry standards.
          </p>
        </div>
      </section>
    </SectionContainer>
  );
}
