import { teamMembers } from "@shared-data/team-data";
import { SectionContainer } from "@shared-layout/section-container";
import { TeamGallery } from "@studio/team-gallery";
import Image from "next/image";

export default function TeamSection() {
  return (
    <SectionContainer paddingY="lg" gap="xl" maxWidth="container">
      <section className="flex flex-col items-center gap-8 md:gap-12 w-full">
        <h2 className="w-full text-center font-medium text-4xl md:text-6xl text-balance px-4 text-foreground">
          OUR TEAM
        </h2>
        <div className="w-full max-w-4xl mx-auto text-center mb-8">
          <p className="font-normal text-lg text-foreground">
            We guarantee strict compliance with work deadlines while ensuring top-tier quality in
            every detail. Our commitment to excellence is reflected in precise project execution and
            flawless finishes that meet the highest industry standards.
          </p>
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
