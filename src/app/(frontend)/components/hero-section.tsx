"use client";

import { NavigationBar } from "@components/navigation-bar";
import { SideMenu } from "@components/side-menu";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { isMenuOpenAtom } from "@store/atoms";
import { Sheet, SheetContent, SheetTitle } from "@ui/sheet";
import { useAtom } from "jotai";
import Image from "next/image";

function HeroImage() {
  return (
    <Image
      src="/hero-background-new.webp"
      alt="Hero background"
      fill
      className="object-cover"
      priority
    />
  );
}

function HeroText() {
  return (
    <div className="relative w-full max-w-[var(--max-width-xl)] h-[var(--height-xs)] sm:h-[var(--height-sm)] md:h-[var(--height-md)] aspect-[275/81]">
      <Image
        src="/hero-text-image.png"
        alt="Bruno Câmara Arquitectos"
        fill
        style={{ objectFit: "contain" }}
        priority
      />
    </div>
  );
}

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useAtom(isMenuOpenAtom);
  return (
    <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <section className="relative self-stretch w-full h-[var(--height-lg)] sm:h-[var(--height-xl)] md:h-[var(--height-2xl)] lg:h-[var(--height-hero)] bg-cover bg-center bg-no-repeat">
        <HeroImage />
        <div className="absolute inset-0 z-0 bg-black/20" />
        <div className="relative z-10 flex flex-col w-full h-full px-[var(--spacing-lg)] sm:px-[var(--spacing-2xl)] md:px-[var(--spacing-7xl)] py-[var(--spacing-lg)] sm:py-[var(--spacing-hero-1)]">
          <NavigationBar />
          <div className="flex flex-col items-center justify-start flex-grow w-full pt-[var(--pt-hero-sm)] sm:pt-[var(--pt-hero-md)] md:pt-[var(--pt-hero-lg)] lg:pt-[var(--pt-hero-xl)]">
            <HeroText />
          </div>
        </div>
      </section>
      <SheetContent side="right" className="w-full max-w-md p-0 border-none bg-transparent">
        <VisuallyHidden>
          <SheetTitle>Navigation Menu</SheetTitle>
        </VisuallyHidden>
        <SideMenu />
      </SheetContent>
    </Sheet>
  );
}
