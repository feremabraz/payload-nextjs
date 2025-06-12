import { Link } from "@i18n/navigation";
import { cn } from "@shared-utilities/utils";
import type { ReactNode } from "react";

type SectionVariant = "default" | "compact" | "loose" | "full-height";
type SectionWidth = "container" | "wide" | "full";

interface SectionContainerProps {
  children: ReactNode;
  variant?: SectionVariant;
  width?: SectionWidth;
  className?: string;
}

interface SectionHeaderProps {
  title: string;
  linkHref?: string;
  linkText?: string;
}

const VARIANT_CLASSES: Record<SectionVariant, string> = {
  default: "py-15 md:py-25",
  compact: "py-12",
  loose: "py-37",
  "full-height": "min-h-screen py-15 md:py-25",
};

const WIDTH_CLASSES: Record<SectionWidth, string> = {
  container: "max-w-7xl",
  wide: "max-w-8xl",
  full: "max-w-full",
};

export function SectionContainer({
  children,
  variant = "default",
  width = "wide",
  className,
}: SectionContainerProps) {
  return (
    <section
      className={cn(
        "bg-secondary flex flex-col items-center selection:bg-primary selection:text-secondary px-6 md:px-12",
        VARIANT_CLASSES[variant],
        className,
      )}
    >
      <div
        className={cn(
          "w-full mx-auto flex flex-col items-center gap-8 md:gap-12",
          WIDTH_CLASSES[width],
        )}
      >
        {children}
      </div>
    </section>
  );
}

export function SectionHeader({ title, linkHref, linkText }: SectionHeaderProps) {
  return (
    <header className="flex flex-col items-center gap-3 px-4 sm:px-0">
      <h1 className="text-center text-8xl font-medium uppercase text-foreground">{title}</h1>
      {linkHref && linkText && (
        <Link
          href={linkHref}
          className="text-center text-xl font-normal uppercase hover:text-neutral-sub-title transition-colors duration-200 ease-in-out text-foreground"
        >
          {linkText}
        </Link>
      )}
    </header>
  );
}
