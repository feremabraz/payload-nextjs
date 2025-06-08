import type * as React from "react";

import { cn } from "@shared-utilities/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "border-0 border-b border-muted bg-transparent rounded-none w-full px-1 py-3 text-sm md:text-base text-foreground placeholder:text-muted focus:border-ring focus-visible:outline-none focus-visible:ring-0",
        "file:text-foreground selection:bg-primary selection:text-primary-foreground",
        "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
