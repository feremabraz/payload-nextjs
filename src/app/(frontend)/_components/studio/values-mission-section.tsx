import { SectionContainer } from "@shared/section-container";
import Image from "next/image";

export default function ValuesMissionSection() {
  return (
    <SectionContainer paddingY="lg" gap="xl" maxWidth="xl">
      <section className="flex flex-col items-center gap-8 md:gap-12 w-full">
        <h2 className="w-full text-center font-medium text-4xl md:text-6xl text-balance px-4 text-foreground">
          VALUES AND MISSION
        </h2>
        <div className="flex flex-col gap-8 w-full max-w-4xl">
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-semibold text-foreground">Quality</h3>
            <p className="font-normal text-base text-foreground text-justify">
              We are dedicated to delivering exceptional construction quality by prioritizing our
              clients' satisfaction at every stage. From the foundation to the final finishes, we
              apply the correct material methodologies and best practices to ensure that every
              detail meets the highest standards. Our commitment to quality is reflected in the
              durability, aesthetics, and performance of each project we complete.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-semibold text-foreground">Rigor</h3>
            <p className="font-normal text-base text-foreground text-justify">
              Our multidisciplinary team operates with precision and discipline, ensuring that every
              project adheres strictly to its defined work plan. Through careful planning,
              coordination, and execution, we guarantee that deadlines are met without compromising
              on the integrity of the work. This rigorous approach allows us to consistently deliver
              reliable results while maintaining efficiency and accountability.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-semibold text-foreground">Responsibility</h3>
            <p className="font-normal text-base text-foreground text-justify">
              We recognize our role in shaping a more sustainable future through conscious
              construction practices. By integrating the latest eco-friendly solutions and
              technologies, we actively seek to reduce the environmental impact of our work.
              Sustainability is not just a feature— it's a responsibility we embrace in every
              decision we make, from design to material selection and execution.
            </p>
          </div>
        </div>
        <div className="relative w-full h-64 md:h-96 max-w-4xl mt-8">
          <Image
            src="/studio/map-base.webp"
            alt="World map illustration highlighting global presence"
            fill
            className="object-contain opacity-80"
          />
        </div>
      </section>
    </SectionContainer>
  );
}
