import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="inline-block mb-6">
              <div className="border border-white p-4 w-16 h-16 flex items-center justify-center">
                <Image
                  src="/cvz-logo.png"
                  alt="CVZ CONSTRUÇÕES Logo"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                />
              </div>
            </Link>

            <div className="mb-6">
              <h3 className="font-medium mb-2">Contact Info:</h3>
              <p className="text-sm mb-1">info@cvz-construcoes.pt</p>
              <p className="text-sm mb-1">Av. da República 49</p>
              <p className="text-sm mb-1">1050-188 Lisboa</p>
              <p className="text-sm">Portugal</p>
            </div>

            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="hover:text-gray-300">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="https://instagram.com" className="hover:text-gray-300">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="https://linkedin.com" className="hover:text-gray-300">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="md:col-span-2 grid grid-cols-2 gap-8">
            <div>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/project" className="hover:underline">
                    Project
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/testimonial" className="hover:underline">
                    Testimonial
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:underline">
                    Blog & News
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <ul className="space-y-2">
                <li>
                  <Link href="/shop" className="hover:underline">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link href="/join-us" className="hover:underline">
                    Join Us
                  </Link>
                </li>
                <li>
                  <Link href="/get-a-quote" className="hover:underline">
                    Get A Quote
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">© 2025 CVZ CONSTRUCOES. All rights reserved.</p>

          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="text-sm hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm hover:underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
