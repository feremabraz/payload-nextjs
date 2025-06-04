import { Button } from "@ui/button";
import { SheetClose } from "@ui/sheet";
import { Facebook, Instagram, Linkedin, X } from "lucide-react";
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
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
];

export function SideMenu() {
  return (
    <div className="flex flex-col h-full bg-[#121212] text-white p-6 sm:p-8">
      <div className="flex items-center justify-between mb-8">
        <span className="text-sm text-neutral-400">Menu</span>
        <SheetClose asChild>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10 hover:text-white"
          >
            <X className="w-6 h-6" />
            <span className="sr-only">Close menu</span>
          </Button>
        </SheetClose>
      </div>

      <nav className="flex-grow">
        <ul className="space-y-4">
          {menuItems.map((item) => (
            <li key={item.label}>
              <SheetClose asChild>
                <Link
                  href={item.href}
                  className="block py-2 text-2xl font-medium uppercase transition-colors hover:text-neutral-300"
                >
                  {item.label}
                </Link>
              </SheetClose>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto pt-8">
        <ul className="flex items-center space-x-4">
          {socialLinks.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
