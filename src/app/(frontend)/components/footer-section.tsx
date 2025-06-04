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
      <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-16 w-full">
        <div className="space-y-8 lg:w-3/4">
          <Link href="/" aria-label="Bruno Câmara Arquitectos Home">
            <Image
              src="/hero-text-image.png"
              alt="Bruno Câmara Arquitectos Logo"
              width={350}
              height={90}
              className="h-auto"
            />
          </Link>

          <div className="space-y-1 text-sm mt-8">
            <p className="font-semibold text-base mb-2">Contact Info:</p>
            <p>info@cvz-construcoes.pt</p>
            <p>Av. da República 49</p>
            <p>1050-188 Lisboa</p>
            <p>Portugal</p>
          </div>

          <div className="flex space-x-4">
            <Link
              href="#"
              aria-label="Facebook"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              <FacebookIcon size={20} />
            </Link>
            <Link
              href="#"
              aria-label="Instagram"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              <InstagramIcon size={20} />
            </Link>
            <Link
              href="#"
              aria-label="LinkedIn"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              <LinkedInIcon size={20} />
            </Link>
          </div>
        </div>

        <div className="flex items-start gap-6 lg:gap-10 grow shrink-0 basis-0 pt-2 font-semibold">
          <nav>
            <ul className="flex flex-col items-start gap-3 grow shrink-0 basis-0">
              <NavLink href="/home">Home</NavLink>
              <NavLink href="/project">Project</NavLink>
              <NavLink href="/studio">Studio</NavLink>
              <NavLink href="/testimonials">Testimonials</NavLink>
              <NavLink href="/blog">Blog & News</NavLink>
            </ul>
          </nav>
          <nav>
            <ul className="flex flex-col items-start gap-3 grow shrink-0 basis-0">
              <NavLink href="/store">Store</NavLink>
              <NavLink href="/open-jobs">Open jobs</NavLink>
              <NavLink href="/budget-request">Budget request</NavLink>
            </ul>
          </nav>
        </div>
      </div>

      <hr className="border-t border-[#666d80] w-full" />

      <div className="flex flex-col md:flex-row justify-between items-start self-stretch text-sm font-semibold gap-4 w-full">
        <p>&copy; 2025 BRUNO CÂMARA ARQUITETOS. All rights reserved.</p>
        <div className="flex space-x-6">
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
