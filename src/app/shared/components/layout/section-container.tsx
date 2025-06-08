import { cn } from "@shared-utilities/utils";
import Link from "next/link";
import type { ReactNode } from "react";

interface SectionHeaderProps {
  title: string;
  linkHref: string;
  linkText: string;
}

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "full-height" | "compact" | "loose";
  paddingY?: "none" | "sm" | "md" | "lg" | "xl" | "custom";
  paddingX?: "none" | "sm" | "md" | "lg" | "xl" | "custom";
  gap?: "none" | "sm" | "md" | "lg" | "xl" | "custom";
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full" | "container";
}

export function SectionContainer({
  children,
  className,
  variant = "default",
  paddingY = "lg",
  paddingX = "lg",
  gap = "lg",
  maxWidth = "2xl",
}: SectionContainerProps) {
  const paddingYClasses = {
    none: "py-0",
    sm: "py-30 md:py-12",
    md: "py-12 md:py-18",
    lg: "py-15 md:py-25",
    xl: "py-20 md:py-31",
    custom: "", // allows for override
  };

  const paddingXClasses = {
    none: "px-0",
    sm: "px-4 md:px-6",
    md: "px-5 md:px-9",
    lg: "px-6 md:px-12",
    xl: "px-8 md:px-16",
    custom: "",
  };

  const gapClasses = {
    none: "gap-0",
    sm: "gap-4 md:gap-6",
    md: "gap-6 md:gap-9",
    lg: "gap-8 md:gap-12",
    xl: "gap-10 md:gap-16",
    custom: "",
  };

  const maxWidthClasses = {
    sm: "max-w-2xl",
    md: "max-w-3xl",
    lg: "max-w-4xl",
    xl: "max-w-5xl",
    "2xl": "max-w-8xl",
    full: "max-w-full",
    container: "max-w-7xl",
  };

  return (
    <section
      className={cn(
        "bg-secondary flex flex-col items-center selection:bg-background selection:text-secondary",
        paddingYClasses[paddingY],
        paddingXClasses[paddingX],
        variant === "full-height" && "min-h-screen",
        variant === "compact" && "py-12",
        variant === "loose" && "py-37",
        className,
      )}
    >
      <div
        className={cn(
          "w-full mx-auto flex flex-col items-center",
          maxWidthClasses[maxWidth],
          gapClasses[gap],
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
      <Link
        href={linkHref}
        className="text-center text-xl font-normal uppercase hover:text-neutral-sub-title transition-colors duration-200 ease-in-out text-foreground"
      >
        {linkText}
      </Link>
    </header>
  );
}
