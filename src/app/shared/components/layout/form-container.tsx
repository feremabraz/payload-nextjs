import { cn } from "@shared-utilities/utils";
import type { FormHTMLAttributes, ReactNode } from "react";

interface SimpleFormContainerProps extends Omit<FormHTMLAttributes<HTMLFormElement>, "className"> {
  title?: string;
  description?: string;
  children: ReactNode;
  width?: "narrow" | "normal" | "wide";
  className?: string;
}

const WIDTH_CLASSES = {
  narrow: "max-w-md",
  normal: "max-w-2xl",
  wide: "max-w-4xl",
};

export function SimpleFormContainer({
  title,
  description,
  children,
  width = "normal",
  className,
  ...formProps
}: SimpleFormContainerProps) {
  return (
    <div className={cn("w-full px-4 sm:px-0", WIDTH_CLASSES[width], className)}>
      {title && (
        <header className="mb-8 md:mb-10 text-center">
          <h1 className="text-center font-medium uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4 md:mb-6 text-foreground">
            {title}
          </h1>
          {description && (
            <p className="text-sm md:text-base lg:text-lg max-w-prose mx-auto px-4 text-start text-foreground">
              {description}
            </p>
          )}
        </header>
      )}
      <main>
        <form className="space-y-6 md:space-y-8" {...formProps}>
          {children}
        </form>
      </main>
    </div>
  );
}
