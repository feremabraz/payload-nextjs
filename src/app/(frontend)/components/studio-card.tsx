import type { StudioCardProps } from "@shared-types/studio";
import Image from "next/image";

export function StudioCard({ imageSrc, imageAlt, title, description }: StudioCardProps) {
  return (
    <article className="flex flex-col items-start gap-3 sm:gap-[var(--gap-sm)] w-full">
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
      <div className="flex flex-col items-start gap-2 sm:gap-[var(--gap-xs)] self-stretch px-1">
        <h2 className="text-left font-medium text-card-title leading-[1.4] tracking-[var(--tracking-tight-md)] sm:tracking-[var(--tracking-tight-xl)] self-stretch text-brand-black">
          {title}
        </h2>
        <p className="font-normal text-card-description leading-[1.4] tracking-[var(--tracking-tight-xs)] sm:tracking-[var(--tracking-tight-sm)] text-brand-accent">
          {description}
        </p>
      </div>
    </article>
  );
}
