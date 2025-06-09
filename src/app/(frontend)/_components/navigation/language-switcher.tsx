"use client";

import { currentLanguageAtom } from "@shared-store/atoms";
import type { Language } from "@shared-types/language";
import { Button } from "@shared-ui/button";
import { cn } from "@shared-utilities/utils";
import { useAtom } from "jotai";

interface LanguageSwitcherProps {
  background?: "light" | "dark";
}

export function LanguageSwitcher({ background }: LanguageSwitcherProps) {
  const [language, setLanguage] = useAtom(currentLanguageAtom);

  const languages: { id: Language; label: string }[] = [
    { id: "en", label: "EN" },
    { id: "pt", label: "PT" },
  ];

  // Use background override for specific contexts (like hero), otherwise use theme-aware styles
  const getStyles = () => {
    if (background === "dark") {
      return {
        container: "text-white",
        activeButton: "text-white",
        inactiveButton: "text-white/70",
        hoverBg: "hover:bg-white/10",
        hoverText: "hover:text-white",
        separator: "text-white/70",
      };
    }
    if (background === "light") {
      return {
        container: "text-black",
        activeButton: "text-black",
        inactiveButton: "text-black/70",
        hoverBg: "hover:bg-black/10",
        hoverText: "hover:text-black",
        separator: "text-black/70",
      };
    }
    // Default: use explicit light/dark mode classes for proper contrast
    return {
      container: "text-gray-900 dark:text-white",
      activeButton: "text-gray-900 dark:text-white",
      inactiveButton: "text-gray-600 dark:text-gray-300",
      hoverBg: "hover:bg-gray-100 dark:hover:bg-gray-800",
      hoverText: "hover:text-gray-900 dark:hover:text-white",
      separator: "text-gray-400 dark:text-gray-500",
    };
  };

  const styles = getStyles();

  return (
    <div className={cn("flex items-center", styles.container)}>
      {languages.map((lang, index) => (
        <div key={lang.id}>
          <Button
            variant="ghost"
            size="default"
            className={cn(
              "px-3 py-2 text-lg sm:text-base font-medium",
              styles.hoverBg,
              styles.hoverText,
              "transition-colors duration-200 ease-in-out",
              language === lang.id ? styles.activeButton : styles.inactiveButton,
            )}
            onClick={() => setLanguage(lang.id)}
          >
            {lang.label}
          </Button>
          {index < languages.length - 1 && (
            <span className={cn("text-lg sm:text-base mx-1", styles.separator)}>|</span>
          )}
        </div>
      ))}
    </div>
  );
}
