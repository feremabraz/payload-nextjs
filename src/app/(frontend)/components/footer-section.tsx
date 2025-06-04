import { SectionContainer } from "@components/section";
import { FacebookIcon, InstagramIcon, LinkedInIcon } from "@ui/brands";
import Image from "next/image";
import Link from "next/link";
import type React from "react";

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <Link href={href} className="hover:text-gray-300 transition-colors duration-200">
      {children}
    </Link>
  </li>
);

export default function FooterSection() {
  return (
    <SectionContainer className="bg-[#0d0d12] text-[#ffffff]">
      <div className="flex flex-col lg:flex-row justify-between gap-8 sm:gap-10 md:gap-12 lg:gap-16 w-full">
        <div className="space-y-6 sm:space-y-8 lg:w-3/4">
          <Link href="/" aria-label="Bruno Câmara Arquitectos Home">
            <Image
              src="/hero-text-image.png"
              alt="Bruno Câmara Arquitectos Logo"
              width={350}
              height={90}
              className="h-auto w-auto max-w-[250px] sm:max-w-[300px] md:max-w-[350px]"
            />
          </Link>

          <div className="space-y-1 text-xs sm:text-sm mt-6 sm:mt-8">
            <p className="font-semibold text-sm sm:text-base mb-2">Contact Info:</p>
            <p>info@cvz-construcoes.pt</p>
            <p>Av. da República 49</p>
            <p>1050-188 Lisboa</p>
            <p>Portugal</p>
          </div>

          <div className="flex space-x-3 sm:space-x-4">
            <Link
              href="#"
              aria-label="Facebook"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              <FacebookIcon size={18} className="sm:w-5 sm:h-5" />
            </Link>
            <Link
              href="#"
              aria-label="Instagram"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              <InstagramIcon size={18} className="sm:w-5 sm:h-5" />
            </Link>
            <Link
              href="#"
              aria-label="LinkedIn"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              <LinkedInIcon size={18} className="sm:w-5 sm:h-5" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8 md:gap-10 lg:gap-10 grow shrink-0 basis-0 pt-2 font-semibold">
          <nav className="w-full sm:w-auto">
            <ul className="flex flex-col items-start gap-2 sm:gap-3 grow shrink-0 basis-0 text-sm">
              <NavLink href="/home">Home</NavLink>
              <NavLink href="/project">Project</NavLink>
              <NavLink href="/studio">Studio</NavLink>
              <NavLink href="/testimonials">Testimonials</NavLink>
              <NavLink href="/blog">Blog & News</NavLink>
            </ul>
          </nav>
          <nav className="w-full sm:w-auto">
            <ul className="flex flex-col items-start gap-2 sm:gap-3 grow shrink-0 basis-0 text-sm">
              <NavLink href="/store">Store</NavLink>
              <NavLink href="/open-jobs">Open jobs</NavLink>
              <NavLink href="/budget-request">Budget request</NavLink>
            </ul>
          </nav>
        </div>
      </div>

      <hr className="border-t border-[#666d80] w-full my-6 sm:my-8" />

      <div className="flex flex-col md:flex-row justify-between items-start self-stretch text-xs sm:text-sm font-semibold gap-3 sm:gap-4 w-full">
        <p className="order-2 md:order-1">
          &copy; 2025 BRUNO CÂMARA ARQUITETOS. All rights reserved.
        </p>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-6 order-1 md:order-2">
          <Link
            href="/privacy-policy"
            className="hover:text-gray-400 transition-colors duration-200"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-of-service"
            className="hover:text-gray-400 transition-colors duration-200"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </SectionContainer>
  );
}
