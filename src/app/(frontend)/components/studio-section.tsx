import { studioData } from "@/app/shared/lib/studio-data";
import { StudioCard } from "@components/studio-card";
import Link from "next/link";

export default function StudioSection() {
  return (
    <div className="bg-[#ffffff] flex flex-col items-center self-stretch py-[100px] px-[48px] gap-[48px] min-h-screen">
      <div className="container mx-auto flex flex-col items-center gap-[48px]">
        <header className="flex flex-col items-center gap-[12px]">
          <h1 className="text-[#000000] text-center font-medium text-[100px] leading-[1.2] tracking-[-4px]">
            STUDIO
          </h1>
          <Link
            href="/studio"
            className="text-[#121212] text-center font-normal text-[18px] leading-[1.4] tracking-[-0.36px] uppercase hover:text-[#666d80] transition-colors"
          >
            Go to Studio
          </Link>
        </header>
        <main className="w-full flex flex-wrap justify-center items-start gap-[12px] self-stretch">
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
      </div>
    </div>
  );
}
