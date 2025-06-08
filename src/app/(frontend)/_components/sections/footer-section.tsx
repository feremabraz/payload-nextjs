import { FooterLogo } from "@branding/footer-logo";
import { SectionContainer } from "@shared-layout/section-container";
import { FacebookIcon, InstagramIcon, LinkedInIcon } from "@shared-ui/brands";
import Link from "next/link";
import type React from "react";

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <Link href={href} className="hover:text-gray-300 transition-colors duration-200 ease-in-out">
      {children}
    </Link>
  </li>
);

export default function FooterSection() {
  return (
    <SectionContainer className="bg-primary text-secondary">
      <div className="flex flex-col lg:flex-row justify-between gap-8 sm:gap-10 md:gap-12 lg:gap-16 w-full">
        <div className="space-y-6 sm:space-y-8 lg:w-3/4">
          <FooterLogo />

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
              className="hover:text-gray-300 transition-colors duration-200 ease-in-out"
            >
              <FacebookIcon size={18} className="sm:w-5 sm:h-5" />
            </Link>
            <Link
              href="#"
              aria-label="Instagram"
              className="hover:text-gray-300 transition-colors duration-200 ease-in-out"
            >
              <InstagramIcon size={18} className="sm:w-5 sm:h-5" />
            </Link>
            <Link
              href="#"
              aria-label="LinkedIn"
              className="hover:text-gray-300 transition-colors duration-200 ease-in-out"
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

      <hr className="border-t w-full my-6 sm:my-8 border-accent" />

      <div className="flex flex-col md:flex-row justify-between items-start self-stretch text-xs sm:text-sm font-semibold gap-3 sm:gap-4 w-full">
        <p className="order-2 md:order-1">
          &copy; 2025 BRUNO CÂMARA ARQUITETOS. All rights reserved.
        </p>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 order-1 md:order-2 [&>*+*]:sm:ml-4 md:[&>*+*]:sm:ml-6">
          <Link
            href="/privacy-policy"
            className="hover:text-gray-400 transition-colors duration-200 ease-in-out"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-of-service"
            className="hover:text-gray-400 transition-colors duration-200 ease-in-out"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </SectionContainer>
  );
}
