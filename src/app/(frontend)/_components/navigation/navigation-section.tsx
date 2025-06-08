"use client";

import { NavigationBarWithLogo } from "@navigation/navigation-bar";
import { SideMenu } from "@navigation/side-menu";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { SectionContainer, SectionHeader } from "@shared-layout/section-container";
import { isMenuOpenAtom } from "@shared-store/atoms";
import { Sheet, SheetContent, SheetTitle } from "@shared-ui/sheet";
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
