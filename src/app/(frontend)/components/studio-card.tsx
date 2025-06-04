import type { StudioCardProps } from "@shared-types/studio";
import Image from "next/image";

export function StudioCard({ imageSrc, imageAlt, title, description }: StudioCardProps) {
  return (
    <article className="flex flex-col items-start gap-[12px] w-full sm:w-[calc(50%-6px)] lg:w-[calc(25%-9px)]">
      <div className="relative w-full aspect-[3/2] flex flex-col items-center self-stretch">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          style={{ objectFit: "cover" }}
          className="bg-neutral-200"
        />
      </div>
      <div className="flex flex-col items-start gap-[8px] self-stretch">
        <h2 className="text-[#000000] text-center font-medium text-lg leading-[1.4] tracking-[-0.36px] self-stretch">
          {title}
        </h2>
        <p className="text-[#666D80] font-normal text-sm leading-[1.4] tracking-[-0.24px]">
          {description}
        </p>
      </div>
    </article>
  );
}
