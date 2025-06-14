import { SectionContainer } from "@shared/section-container";
import Image from "next/image";

interface ProjectImagesSectionProps {
  images: string[];
  title?: string;
}

export default function ProjectImagesSection({
  images,
  title = "Project",
}: ProjectImagesSectionProps) {
  if (!images || images.length === 0) {
    return null;
  }

  const firstTwoImages = images.slice(0, 2);
  const remainingImages = images.slice(2);

  return (
    <>
      {firstTwoImages.length > 0 && (
        <section className="w-full">
          <div className="flex flex-col">
            {firstTwoImages.map((imageSrc, index) => (
              <div
                key={imageSrc}
                className="relative mb-10 w-full h-[60vh] sm:h-[70vh] md:h-[80vh]"
              >
                <Image
                  src={imageSrc}
                  alt={`${title} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                  quality={100}
                  sizes="100vw"
                />
              </div>
            ))}
          </div>
        </section>
      )}
      {remainingImages.length > 0 && (
        <SectionContainer>
          {remainingImages.map((imageSrc, index) => (
            <div key={imageSrc} className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh]">
              <Image
                src={imageSrc}
                alt={`${title} - Image ${index + 3}`}
                fill
                className="object-cover rounded-sm"
                quality={100}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </div>
          ))}
        </SectionContainer>
      )}
    </>
  );
}
