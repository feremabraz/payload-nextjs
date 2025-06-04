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
    <div className="relative w-full max-w-[550px] h-[80px] sm:h-[120px] md:h-[162px] aspect-[275/81]">
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
      <section className="relative self-stretch w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[772px] bg-cover bg-center bg-no-repeat">
        <HeroImage />
        <div className="absolute inset-0 z-0 bg-black/20" />
        <div className="relative z-10 flex flex-col w-full h-full px-[20px] sm:px-[30px] md:px-[49px] py-[20px] sm:py-[31px]">
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
