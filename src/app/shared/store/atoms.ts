import type { Language } from "@shared-types/language";
import { atom } from "jotai";

export const isMenuOpenAtom = atom<boolean>(false);

export const currentLanguageAtom = atom<Language>("en");
