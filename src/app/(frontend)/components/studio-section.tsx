import { studioData } from "@/app/shared/lib/studio-data";
import { SectionContainer, SectionHeader } from "@components/section";
import { StudioCard } from "@components/studio-card";

export default function StudioSection() {
  return (
    <SectionContainer>
      <SectionHeader title="STUDIO" linkHref="/studio" linkText="GO TO STUDIO" />
      <main className="w-full flex flex-wrap justify-center items-start gap-[12px]">
        {studioData.map((item) => (
          <StudioCard
            key={item.title}
            imageSrc={item.imageSrc}
            imageAlt={item.imageAlt}
            title={item.title}
            description={item.description}
          />
        ))}
      </main>
    </SectionContainer>
  );
}
