"use client";

import { NavigationBar } from "@navigation/navigation-bar";
import { SideMenu } from "@navigation/side-menu";
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
    <div className="relative w-full max-w-xl h-xs sm:h-sm md:h-md aspect-[275/81] mb-10">
      <Image src="/hero-text-image.png" alt="Bruno Câmara Arquitectos" fill priority />
    </div>
  );
}

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useAtom(isMenuOpenAtom);
  return (
    <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <section className="relative self-stretch w-full h-lg sm:h-xl md:h-2xl lg:h-hero bg-cover bg-center bg-no-repeat">
        <HeroImage />
        <div className="absolute inset-0 z-0 bg-black/20" />
        <div className="relative z-10 flex flex-col w-full h-full px-5 sm:px-30 md:px-[49px] py-5 sm:py-hero">
          <NavigationBar />
          <div className="flex flex-col items-center justify-start flex-grow w-full pt-[250px] sm:pt-[350px] md:pt-[400px] lg:pt-[454px]">
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
