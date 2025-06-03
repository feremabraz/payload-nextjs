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
    <div className="relative w-[550px] h-[162px] aspect-[275/81]">
      <Image
        src="/hero-text-image.png"
        alt="Bruno Câmara Arquitectos"
        fill
        objectFit="contain"
        priority
      />
    </div>
  );
}

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useAtom(isMenuOpenAtom);
  return (
    <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <section className="relative self-stretch w-full h-[772px] bg-cover bg-center bg-no-repeat">
        <HeroImage />
        <div className="absolute inset-0 z-0 bg-black/20" />
        <div className="relative z-10 flex flex-col w-full h-full px-[49px] py-[31px]">
          <NavigationBar />
          <div className="flex flex-col items-center justify-start flex-grow w-full pt-[454px]">
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
