"use client";

import { cn } from "@lib/utils";
import { Button } from "@ui/button";
import { SheetTrigger } from "@ui/sheet";
import { Menu } from "lucide-react";

interface MenuToggleProps {
  background?: "light" | "dark";
}

export function MenuToggle({ background = "dark" }: MenuToggleProps) {
  const backgroundClasses = {
    light: {
      text: "text-black",
      hoverBg: "hover:bg-black/10",
      hoverText: "hover:text-black",
    },
    dark: {
      text: "text-white",
      hoverBg: "hover:bg-white/10",
      hoverText: "hover:text-white",
    },
  };

  const currentBackground = backgroundClasses[background];

  return (
    <SheetTrigger asChild>
      <Button
        variant="ghost"
        className={cn(
          "size-10 sm:size-10 aspect-square p-0",
          currentBackground.text,
          currentBackground.hoverBg,
          currentBackground.hoverText,
        )}
        aria-label={"Open menu"}
      >
        <Menu className="size-8 sm:size-8" />
      </Button>
    </SheetTrigger>
  );
}
