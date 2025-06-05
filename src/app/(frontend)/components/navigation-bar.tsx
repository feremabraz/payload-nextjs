import { LanguageSwitcher } from "@components/language-switcher";
import { MenuToggle } from "@components/menu-toggle";
import Image from "next/image";
import Link from "next/link";

const commonNavClasses = `top-0 left-0 right-0 z-50 
flex items-center justify-between 
w-full max-w-[1341px] 
pt-3 sm:pt-4 mx-auto px-1`;

interface NavigationBarProps {
  background?: "light" | "dark";
}

export function NavigationBar({ background = "dark" }: NavigationBarProps) {
  return (
    <nav className={commonNavClasses}>
      <LanguageSwitcher background={background} />
      <MenuToggle background={background} />
    </nav>
  );
}

export function NavigationBarWithLogo({ background = "dark" }: NavigationBarProps) {
  return (
    <nav className={commonNavClasses}>
      <Link href="/" aria-label="Bruno Câmara Arquitectos Home">
        <Image
          src="/logo.webp"
          alt="Bruno Câmara Arquitectos Logo"
          width={216}
          height={216}
          className="aspect-square"
        />
      </Link>
      <div className="flex items-center gap-4">
        <LanguageSwitcher background={background} />
        <MenuToggle background={background} />
      </div>
    </nav>
  );
}
