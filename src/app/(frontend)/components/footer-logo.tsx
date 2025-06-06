"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function FooterLogo() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <Link href="/" aria-label="Bruno Câmara Arquitectos Home">
      {isHomePage ? (
        <Image
          src="/hero-text-image.png"
          alt="Bruno Câmara Arquitectos Logo"
          width={350}
          height={90}
          className="h-auto w-auto max-w-[var(--max-width-xs)] sm:max-w-[var(--max-width-sm)] md:max-w-[var(--max-width-md)]"
        />
      ) : (
        <Image
          src="/logo.webp"
          alt="Bruno Câmara Arquitectos Logo"
          width={128}
          height={128}
          className="h-auto w-auto aspect-square footer-logo-border"
        />
      )}
    </Link>
  );
}
