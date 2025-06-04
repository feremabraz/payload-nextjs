import type { StudioCardProps } from "@shared-types/studio";
import Image from "next/image";

export function StudioCard({ imageSrc, imageAlt, title, description }: StudioCardProps) {
  return (
    <article className="flex flex-col items-start gap-3 sm:gap-[12px] w-full">
      <div className="relative w-full aspect-[3/2] flex flex-col items-center self-stretch">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          style={{ objectFit: "cover" }}
          className="bg-neutral-200"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <div className="flex flex-col items-start gap-2 sm:gap-[8px] self-stretch px-1">
        <h2 className="text-[#000000] text-left font-medium text-base sm:text-lg leading-[1.4] tracking-[-0.28px] sm:tracking-[-0.36px] self-stretch">
          {title}
        </h2>
        <p className="text-[#666D80] font-normal text-xs sm:text-sm leading-[1.4] tracking-[-0.20px] sm:tracking-[-0.24px]">
          {description}
        </p>
      </div>
    </article>
  );
}
