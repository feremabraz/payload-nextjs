import type * as React from "react";

import { cn } from "@shared-utilities/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-0 border-b border-input bg-transparent rounded-none w-full px-1 py-3 text-sm md:text-base text-foreground placeholder:text-muted-foreground focus:border-ring focus-visible:outline-none focus-visible:ring-0",
        "min-h-20 md:min-h-40",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:border-destructive",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
