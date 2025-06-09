import type { StudioCardProps } from "@shared-types/studio";
import Image from "next/image";
import Link from "next/link";

const sectionMap: Record<string, string> = {
  Values: "values",
  Team: "team",
  Profile: "profile",
  Studio: "studio",
};

export function StudioCard({ imageSrc, imageAlt, title, description }: StudioCardProps) {
  const sectionId = sectionMap[title] || "";
  return (
    <Link href={sectionId ? `/studio#${sectionId}` : "/studio"} className="block w-full">
      <article className="flex flex-col items-start gap-3 sm:gap-3 w-full">
        <div className="relative w-full aspect-[4/5] flex flex-col items-center self-stretch rounded-sm overflow-hidden group">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            style={{ objectFit: "cover" }}
            className="hover:scale-105 hover:brightness-110 transition-all duration-300 ease-in-out"
          />
        </div>
        <div className="flex flex-col items-start gap-2 sm:gap-2 self-stretch px-1">
          <h2 className="text-left font-semibold text-base sm:text-lg leading-[1.4] self-stretch text-foreground">
            {title}
          </h2>
          <p className="font-normal text-xs sm:text-sm leading-[1.4] text-accent">{description}</p>
        </div>
      </article>
    </Link>
  );
}
