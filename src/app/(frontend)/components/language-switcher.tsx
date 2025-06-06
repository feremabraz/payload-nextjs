"use client";

import { cn } from "@lib/utils";
import type { Language } from "@shared-types/language";
import { currentLanguageAtom } from "@store/atoms";
import { Button } from "@ui/button";
import { useAtom } from "jotai";

interface LanguageSwitcherProps {
  background?: "light" | "dark";
}

export function LanguageSwitcher({ background = "dark" }: LanguageSwitcherProps) {
  const [language, setLanguage] = useAtom(currentLanguageAtom);

  const languages: { id: Language; label: string }[] = [
    { id: "en", label: "EN" },
    { id: "pt", label: "PT" },
  ];

  const backgroundClasses = {
    light: {
      container: "text-black",
      activeButton: "text-black",
      inactiveButton: "text-black/70",
      hoverBg: "hover:bg-black/10",
      hoverText: "hover:text-black",
      separator: "text-black/70",
    },
    dark: {
      container: "text-white",
      activeButton: "text-white",
      inactiveButton: "text-white/70",
      hoverBg: "hover:bg-white/10",
      hoverText: "hover:text-white",
      separator: "text-white/70",
    },
  };

  const currentBackground = backgroundClasses[background];

  return (
    <div className={cn("flex items-center", currentBackground.container)}>
      {languages.map((lang, index) => (
        <div key={lang.id}>
          <Button
            variant="ghost"
            size="default"
            className={cn(
              "px-3 py-2 text-language-switcher font-medium",
              currentBackground.hoverBg,
              currentBackground.hoverText,
              language === lang.id
                ? currentBackground.activeButton
                : currentBackground.inactiveButton,
            )}
            onClick={() => setLanguage(lang.id)}
          >
            {lang.label}
          </Button>
          {index < languages.length - 1 && (
            <span className={cn("text-language-switcher mx-1", currentBackground.separator)}>
              |
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
