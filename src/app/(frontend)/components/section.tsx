import { cn } from "@lib/utils";
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
    sm: "py-[var(--spacing-2xl)] md:py-[var(--spacing-8xl)]",
    md: "py-[var(--spacing-8xl)] md:py-[var(--spacing-11xl)]",
    lg: "py-[var(--spacing-9xl)] md:py-[var(--spacing-13xl)]",
    xl: "py-[var(--spacing-12xl)] md:py-[var(--spacing-14xl)]",
    custom: "", // allows for override
  };

  const paddingXClasses = {
    none: "px-0",
    sm: "px-[var(--spacing-md)] md:px-[var(--spacing-xl)]",
    md: "px-[var(--spacing-lg)] md:px-[var(--spacing-4xl)]",
    lg: "px-[var(--spacing-xl)] md:px-[var(--spacing-6xl)]",
    xl: "px-[var(--spacing-3xl)] md:px-[var(--spacing-10xl)]",
    custom: "",
  };

  const gapClasses = {
    none: "gap-0",
    sm: "gap-[var(--spacing-md)] md:gap-[var(--spacing-xl)]",
    md: "gap-[var(--spacing-xl)] md:gap-[var(--spacing-4xl)]",
    lg: "gap-[var(--spacing-3xl)] md:gap-[var(--spacing-6xl)]",
    xl: "gap-[var(--spacing-5xl)] md:gap-[var(--spacing-10xl)]",
    custom: "",
  };

  const maxWidthClasses = {
    sm: "max-w-[var(--max-width-2xl)]",
    md: "max-w-[var(--max-width-3xl)]",
    lg: "max-w-[var(--max-width-4xl)]",
    xl: "max-w-[var(--max-width-5xl)]",
    "2xl": "max-w-[var(--max-width-8xl)]",
    full: "max-w-full",
    container: "max-w-[var(--max-width-7xl)]",
  };

  return (
    <section
      className={cn(
        "bg-white flex flex-col items-center selection:bg-[var(--brand-dark)] selection:text-[var(--brand-white)]",
        paddingYClasses[paddingY],
        paddingXClasses[paddingX],
        variant === "full-height" && "min-h-screen",
        variant === "compact" && "py-[var(--spacing-8xl)]",
        variant === "loose" && "py-[var(--spacing-15xl)]",
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
    <header className="flex flex-col items-center gap-[var(--gap-sm)] px-4 sm:px-0">
      <h1 className="text-center text-8xl font-medium uppercase text-brand-black">{title}</h1>
      <Link
        href={linkHref}
        className="text-center text-xl font-normal uppercase hover:text-neutral-sub-title transition-colors text-brand-dark"
      >
        {linkText}
      </Link>
    </header>
  );
}
