import { cn } from "@shared-utilities/utils";
import { SectionContainer } from "@shared/section-container";
import { useTranslations } from "next-intl";
import type { ReactNode } from "react";

interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
  variant?: "default" | "compact" | "loose" | "full-height";
  width?: "container" | "wide" | "full";
}

export function EmptyState({
  icon,
  title,
  description,
  action,
  className,
  variant = "default",
  width = "wide",
}: EmptyStateProps) {
  const t = useTranslations();
  return (
    <SectionContainer variant={variant} width={width}>
      <div
        className={cn(
          "flex flex-col items-center justify-center text-center py-16 md:py-24",
          className,
        )}
      >
        {icon && <div className="mb-6 text-muted-foreground opacity-50">{icon}</div>}
        <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">{t(title)}</h3>
        {description && (
          <p className="text-lg text-muted-foreground mb-8 max-w-md">{t(description)}</p>
        )}
        {action && <div className="mt-4">{action}</div>}
      </div>
    </SectionContainer>
  );
}
