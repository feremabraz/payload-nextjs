"use client";

import { cn } from "@lib/utils";
import type { Language } from "@shared-types/language";
import { currentLanguageAtom } from "@store/atoms";
import { Button } from "@ui/button";
import { useAtom } from "jotai";

export function LanguageSwitcher() {
  const [language, setLanguage] = useAtom(currentLanguageAtom);

  const languages: { id: Language; label: string }[] = [
    { id: "en", label: "EN" },
    { id: "pt", label: "PT" },
  ];

  return (
    <div className="flex items-center text-white">
      {languages.map((lang, index) => (
        <div key={lang.id}>
          <Button
            variant="ghost"
            size="sm"
            className={cn(
              "p-1 text-sm font-medium hover:bg-white/10 hover:text-white",
              language === lang.id ? "text-white" : "text-white/70",
            )}
            onClick={() => setLanguage(lang.id)}
          >
            {lang.label}
          </Button>
          {index < languages.length - 1 && <span className="text-white/70">|</span>}
        </div>
      ))}
    </div>
  );
}
