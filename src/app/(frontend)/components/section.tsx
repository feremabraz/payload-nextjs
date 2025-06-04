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
    sm: "py-[50px]",
    md: "py-[75px]",
    lg: "py-[100px]",
    xl: "py-[125px]",
    custom: "", // allows for override
  };

  const paddingXClasses = {
    none: "px-0",
    sm: "px-[24px]",
    md: "px-[36px]",
    lg: "px-[48px]",
    xl: "px-[64px]",
    custom: "",
  };

  const gapClasses = {
    none: "gap-0",
    sm: "gap-[24px]",
    md: "gap-[36px]",
    lg: "gap-[48px]",
    xl: "gap-[64px]",
    custom: "",
  };

  const maxWidthClasses = {
    sm: "max-w-[640px]",
    md: "max-w-[768px]",
    lg: "max-w-[1024px]",
    xl: "max-w-[1280px]",
    "2xl": "max-w-[1536px]",
    full: "max-w-full",
    container: "max-w-[1440px]",
  };

  return (
    <section
      className={cn(
        "bg-white flex flex-col items-center selection:bg-[#121212] selection:text-[#ffffff]",
        paddingYClasses[paddingY],
        paddingXClasses[paddingX],
        variant === "full-height" && "min-h-screen",
        variant === "compact" && "py-[50px]",
        variant === "loose" && "py-[150px]",
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
    <header className="flex flex-col items-center gap-[12px]">
      <h1 className="text-[#000000] text-center font-medium text-[100px] leading-[1.2] tracking-[-4px]">
        {title}
      </h1>
      <Link
        href={linkHref}
        className="text-[#121212] text-center font-normal text-[18px] leading-[1.4] tracking-[-0.36px] uppercase hover:text-neutral-sub-title transition-colors"
      >
        {linkText}
      </Link>
    </header>
  );
}
