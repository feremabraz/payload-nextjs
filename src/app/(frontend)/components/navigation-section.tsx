"use client";

import { NavigationBarWithLogo } from "@components/navigation-bar";
import { SideMenu } from "@components/side-menu";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { SectionContainer, SectionHeader } from "@shared-components/section-container";
import { isMenuOpenAtom } from "@store/atoms";
import { Sheet, SheetContent, SheetTitle } from "@ui/sheet";
import { useAtom } from "jotai";

interface NavigationSectionProps {
  background?: "light" | "dark";
}

export default function NavigationSection({ background = "dark" }: NavigationSectionProps) {
  const [isMenuOpen, setIsMenuOpen] = useAtom(isMenuOpenAtom);
  return (
    <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <SectionContainer maxWidth="container" paddingY="sm">
        <NavigationBarWithLogo background={background} />
      </SectionContainer>
      <SheetContent side="right" className="w-full max-w-md p-0 border-none bg-transparent">
        <VisuallyHidden>
          <SheetTitle>Navigation Menu</SheetTitle>
        </VisuallyHidden>
        <SideMenu />
      </SheetContent>
    </Sheet>
  );
}
