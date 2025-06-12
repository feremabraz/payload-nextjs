import { Link } from "@i18n/navigation";
import { LanguageSwitcher } from "@navigation/language-switcher";
import { MenuToggle } from "@navigation/menu-toggle";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

const commonNavClasses = `top-0 left-0 right-0 z-50 
flex items-center justify-between 
w-full max-w-[1341px] 
pt-3 sm:pt-4 mx-auto px-1`;

interface NavigationBarProps {
  background?: "light" | "dark";
}

export function NavigationBar({ background }: NavigationBarProps) {
  return (
    <nav className={commonNavClasses}>
      <LanguageSwitcher background={background} />
      <MenuToggle background={background} />
    </nav>
  );
}

export function NavigationBarWithLogo({ background }: NavigationBarProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const t = useTranslations();

  // Prevent hydration mismatch by only using theme after component is mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine logo based on background prop override OR theme
  const getLogoSrc = () => {
    if (!mounted) return "/logo.svg"; // Prevent hydration mismatch

    // If background prop is provided, use it to determine logo
    if (background === "dark") {
      return "/logo-dark.svg"; // Light logo for dark backgrounds
    }
    if (background === "light") {
      return "/logo.svg"; // Dark logo for light backgrounds
    }

    // Fallback to theme-based logic
    return resolvedTheme === "dark" ? "/logo-dark.svg" : "/logo.svg";
  };

  return (
    <nav className={commonNavClasses}>
      <Link href="/" aria-label={`${t("company.name")} ${t("navigation.home")}`}>
        <Image
          src={getLogoSrc()}
          alt={t("company.name")}
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
