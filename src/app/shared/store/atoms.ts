import type { Language } from "@shared-types/language";
import { atom } from "jotai";

export const isMenuOpenAtom = atom<boolean>(false);

// Initialize with default locale, will be synced with URL in components
export const currentLanguageAtom = atom<Language>("en");
