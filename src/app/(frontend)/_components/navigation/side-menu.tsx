import { Link } from "@i18n/navigation";
import { FacebookIcon, InstagramIcon, LinkedInIcon } from "@shared-ui/brands";
import { Button } from "@shared-ui/button";
import { SheetClose } from "@shared-ui/sheet";
import { Moon, Sun, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";

export function SideMenu() {
  const { theme, setTheme } = useTheme();
  const t = useTranslations();

  const menuItems = [
    { label: t("navigation.home"), href: "/" },
    { label: t("navigation.projects"), href: "/projects" },
    { label: t("navigation.studio"), href: "/studio" },
    { label: t("navigation.blogAndNews"), href: "/blog" },
    { label: t("navigation.openJobs"), href: "/jobs" },
    { label: t("navigation.budgetRequest"), href: "/budget" },
  ];

  const socialLinks = [
    { icon: FacebookIcon, href: "https://www.facebook.com/cvzconstrucoes", label: "Facebook" },
    { icon: InstagramIcon, href: "https://www.instagram.com/cvz_construcoes/", label: "Instagram" },
    {
      icon: LinkedInIcon,
      href: "https://www.linkedin.com/in/cvz-constru%C3%A7%C3%B5es-bb09b515a/",
      label: "LinkedIn",
    },
  ];

  return (
    <div className="flex flex-col h-full p-4 sm:p-6 md:p-8 bg-sidebar-background text-sidebar-foreground">
      <div className="flex items-center justify-between mb-6 sm:mb-8">
        <span className="text-xs sm:text-sm text-neutral-400">{t("navigation.menu")}</span>
        <SheetClose asChild>
          <Button
            variant="ghost"
            size="icon"
            className="dark:text-secondary-foreground dark:hover:text-secondary-foreground/80 transition-colors duration-200 ease-in-out"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="sr-only">{t("navigation.closeMenu")}</span>
          </Button>
        </SheetClose>
      </div>
      <nav className="flex-grow">
        <ul className="space-y-3 sm:space-y-4">
          {menuItems.map((item) => (
            <li key={item.label}>
              <SheetClose asChild>
                <Link
                  href={item.href}
                  className="block py-2 text-xl sm:text-2xl font-medium uppercase dark:text-secondary-foreground dark:hover:text-secondary-foreground/80 transition-colors duration-200 ease-in-out"
                >
                  {item.label}
                </Link>
              </SheetClose>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-auto pt-6 sm:pt-8">
        <div className="flex items-center justify-between">
          <ul className="flex items-center space-x-3 sm:space-x-4">
            {socialLinks.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-secondary transition-colors duration-200 ease-in-out"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              </li>
            ))}
          </ul>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="dark:text-secondary-foreground dark:hover:text-secondary-foreground/80 transition-colors duration-200 ease-in-out"
            aria-label={t("navigation.toggleTheme")}
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Moon className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
