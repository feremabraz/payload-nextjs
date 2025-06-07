import type { StudioCardProps } from "@shared-types/studio";
import Image from "next/image";

export function StudioCard({ imageSrc, imageAlt, title, description }: StudioCardProps) {
  return (
    <article className="flex flex-col items-start gap-3 sm:gap-3 w-full">
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
      <div className="flex flex-col items-start gap-2 sm:gap-2 self-stretch px-1">
        <h2 className="text-left font-medium text-base sm:text-lg leading-[1.4] self-stretch text-foreground">
          {title}
        </h2>
        <p className="font-normal text-xs sm:text-sm leading-[1.4] text-accent">{description}</p>
      </div>
    </article>
  );
}
