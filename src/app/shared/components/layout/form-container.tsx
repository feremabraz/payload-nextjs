import { cn } from "@shared-utilities/utils";
import type { FormHTMLAttributes, ReactNode } from "react";

interface FormContainerProps extends Omit<FormHTMLAttributes<HTMLFormElement>, "className"> {
  title?: string;
  description?: string;
  children: ReactNode;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  spacing?: "sm" | "md" | "lg";
  className?: string;
  headerClassName?: string;
  formClassName?: string;
}

export function FormContainer({
  title,
  description,
  children,
  maxWidth = "3xl",
  spacing = "md",
  className,
  headerClassName,
  formClassName,
  ...formProps
}: FormContainerProps) {
  const maxWidthClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    "3xl": "max-w-3xl",
  };

  const spacingClasses = {
    sm: "space-y-4 md:space-y-5",
    md: "space-y-6 md:space-y-8",
    lg: "space-y-8 md:space-y-10",
  };

  return (
    <div className={cn("w-full px-4 sm:px-0", maxWidthClasses[maxWidth], className)}>
      {title && (
        <header className={cn("mb-8 md:mb-10 text-center", headerClassName)}>
          {
            <h1 className="text-center font-medium uppercase text-8xl mb-4 md:mb-6 text-foreground">
              {title}
            </h1>
          }
          {description && (
            <p className="text-sm md:text-base lg:text-lg max-w-md mx-auto px-4 text-foreground">
              {description}
            </p>
          )}
        </header>
      )}
      <main>
        <form className={cn(spacingClasses[spacing], formClassName)} {...formProps}>
          {children}
        </form>
      </main>
    </div>
  );
}
