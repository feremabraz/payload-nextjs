"use client";

import { Button } from "@shared-ui/button";
import { SheetTrigger } from "@shared-ui/sheet";
import { cn } from "@shared-utilities/utils";
import { Menu } from "lucide-react";
import { useTranslations } from "next-intl";

interface MenuToggleProps {
  background?: "light" | "dark";
}

export function MenuToggle({ background }: MenuToggleProps) {
  const t = useTranslations();

  // Use background override for specific contexts (like hero), otherwise use theme-aware styles
  const getStyles = () => {
    if (background === "dark") {
      return "text-white hover:bg-white/10 hover:text-white";
    }
    if (background === "light") {
      return "text-black hover:bg-black/10 hover:text-black";
    }
    // Default: use theme-aware styles with proper contrast
    return "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white";
  };

  return (
    <SheetTrigger asChild>
      <Button
        variant="ghost"
        className={cn(
          "size-10 sm:size-10 aspect-square p-0",
          getStyles(),
          "transition-colors duration-200 ease-in-out",
        )}
        aria-label={t("navigation.openMenu")}
      >
        <Menu className="size-8 sm:size-8" />
      </Button>
    </SheetTrigger>
  );
}
