"use client";

import { usePathname, useRouter } from "@i18n/navigation";
import { currentLanguageAtom } from "@shared-store/atoms";
import type { Language } from "@shared-types/language";
import { Button } from "@shared-ui/button";
import { cn } from "@shared-utilities/utils";
import { useAtom } from "jotai";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

interface LanguageSwitcherProps {
  background?: "light" | "dark";
}

export function LanguageSwitcher({ background }: LanguageSwitcherProps) {
  const t = useTranslations();
  const [language, setLanguage] = useAtom(currentLanguageAtom);
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const currentLocale = params.locale as Language;

  // Sync Jotai atom with current URL locale
  useEffect(() => {
    if (currentLocale !== language) {
      setLanguage(currentLocale);
    }
  }, [currentLocale, language, setLanguage]);

  const handleLanguageChange = (newLanguage: Language) => {
    // Update Jotai atom
    setLanguage(newLanguage);
    // Navigate to the same page with new locale using next-intl
    router.push(pathname, { locale: newLanguage });
  };

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
    <div className={cn("flex items-center space-x-1", styles.container)}>
      {languages.map((lang, index) => (
        <React.Fragment key={lang.id}>
          <Button
            variant="ghost"
            size="sm"
            className={cn(
              "px-2 py-1 text-sm md:text-base font-medium min-h-0 h-8",
              styles.hoverBg,
              styles.hoverText,
              "transition-colors duration-200 ease-in-out",
              language === lang.id ? styles.activeButton : styles.inactiveButton,
            )}
            onClick={() => handleLanguageChange(lang.id)}
            aria-label={t("navigation.switchToLanguage", {
              language: t(`navigation.${lang.id === "en" ? "english" : "portuguese"}`),
            })}
          >
            {lang.label}
          </Button>
          {index < languages.length - 1 && (
            <span className={cn("text-sm md:text-base", styles.separator)}>|</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
