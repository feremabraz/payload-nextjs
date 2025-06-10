"use client";

import { NavigationBarWithLogo } from "@navigation/navigation-bar";
import { SideMenu } from "@navigation/side-menu";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { isMenuOpenAtom } from "@shared-store/atoms";
import { Sheet, SheetContent, SheetTitle } from "@shared-ui/sheet";
import { SectionContainer } from "@shared/section-container";
import { useAtom } from "jotai";

interface NavigationSectionProps {
  background?: "light" | "dark";
}

export default function NavigationSection({ background }: NavigationSectionProps) {
  const [isMenuOpen, setIsMenuOpen] = useAtom(isMenuOpenAtom);
  return (
    <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <SectionContainer width="container" variant="compact">
        <NavigationBarWithLogo background={background} />
      </SectionContainer>
      <SheetContent
        side="right"
        className="w-full max-w-md p-0 border-none bg-transparent"
        hideDefaultCloseButton
      >
        <VisuallyHidden>
          <SheetTitle>Navigation Menu</SheetTitle>
        </VisuallyHidden>
        <SideMenu />
      </SheetContent>
    </Sheet>
  );
}
