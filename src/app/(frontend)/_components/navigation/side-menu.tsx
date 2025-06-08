import { FacebookIcon, InstagramIcon, LinkedInIcon } from "@ui/brands";
import { Button } from "@ui/button";
import { SheetClose } from "@ui/sheet";
import { X } from "lucide-react";
import Link from "next/link";

const menuItems = [
  { label: "HOME", href: "/" },
  { label: "PROJECTS", href: "/projects" },
  { label: "STUDIO", href: "/studio" },
  { label: "BLOG AND NEWS", href: "/blog" },
  { label: "OPEN JOBS", href: "/jobs" },
  { label: "BUDGET REQUEST", href: "/budget-request" },
];

const socialLinks = [
  { icon: FacebookIcon, href: "https://facebook.com", label: "Facebook" },
  { icon: InstagramIcon, href: "https://instagram.com", label: "Instagram" },
  { icon: LinkedInIcon, href: "https://linkedin.com", label: "LinkedIn" },
];

export function SideMenu() {
  return (
    <div className="flex flex-col h-full p-4 sm:p-6 md:p-8 bg-sidebar-background text-sidebar-foreground">
      <div className="flex items-center justify-between mb-6 sm:mb-8">
        <span className="text-xs sm:text-sm text-neutral-400">Menu</span>
        <SheetClose asChild>
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-white/10 text-secondary hover:text-secondary transition-colors duration-200 ease-in-out"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="sr-only">Close menu</span>
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
                  className="block py-2 text-xl sm:text-2xl font-medium uppercase text-secondary hover:text-neutral-300 transition-colors duration-200 ease-in-out"
                >
                  {item.label}
                </Link>
              </SheetClose>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto pt-6 sm:pt-8">
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
      </div>
    </div>
  );
}
