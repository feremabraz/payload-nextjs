"use client";

import { Button } from "@ui/button";
import { SheetTrigger } from "@ui/sheet";
import { Menu } from "lucide-react";

export function MenuToggle() {
  return (
    <SheetTrigger asChild>
      <Button
        variant="ghost"
        className="w-10 h-10 aspect-square text-white hover:bg-white/10 hover:text-white p-0"
        aria-label={"Open menu"}
      >
        <Menu className="w-full h-full" />
      </Button>
    </SheetTrigger>
  );
}
