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
    <div className="flex flex-col h-full p-card side-menu">
      <div className="flex items-center justify-between mb-6 sm:mb-8">
        <span className="text-menu text-neutral-400">Menu</span>
        <SheetClose asChild>
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-white/10 text-brand-white hover:text-brand-white transition-colors-smooth"
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
                  className="block py-2 text-nav-link font-medium uppercase text-brand-white hover:text-neutral-300 transition-colors-smooth"
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
                className="text-neutral-400 hover:text-brand-white transition-colors-smooth"
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
