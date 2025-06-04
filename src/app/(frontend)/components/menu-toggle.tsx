"use client";

import { Button } from "@ui/button";
import { SheetTrigger } from "@ui/sheet";
import { Menu } from "lucide-react";

export function MenuToggle() {
  return (
    <SheetTrigger asChild>
      <Button
        variant="ghost"
        className="w-8 h-8 sm:w-10 sm:h-10 aspect-square text-white hover:bg-white/10 hover:text-white p-0"
        aria-label={"Open menu"}
      >
        <Menu className="w-5 h-5 sm:w-full sm:h-full" />
      </Button>
    </SheetTrigger>
  );
}
