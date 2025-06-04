import { LanguageSwitcher } from "@components/language-switcher";
import { MenuToggle } from "@components/menu-toggle";

export function NavigationBar() {
  return (
    <nav className="top-0 left-0 right-0 z-50 flex items-center justify-between w-full max-w-[1341px] pt-3 sm:pt-4 mx-auto px-1">
      <LanguageSwitcher />
      <MenuToggle />
    </nav>
  );
}
