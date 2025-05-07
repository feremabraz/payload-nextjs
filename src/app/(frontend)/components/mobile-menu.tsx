'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Facebook, Instagram, Linkedin } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/app/shared/components/ui/sheet'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  // Explicit handler for menu button click
  const handleMenuClick = () => {
    setIsOpen(true)
  }

  // Explicit handler for close button click
  const handleCloseClick = () => {
    setIsOpen(false)
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button
          className="text-white focus:outline-none"
          onClick={handleMenuClick}
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="p-0 w-full sm:w-80 bg-black text-white border-none"
        // Force the z-index to be higher than other elements
        style={{ zIndex: 100 }}
      >
        <div className="flex flex-col justify-between h-full py-12 px-6">
          <div>
            <div className="flex justify-between items-center mb-8">
              <p className="text-sm">Menu</p>
              <button
                onClick={handleCloseClick}
                className="focus:outline-none"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col space-y-6">
              <Link href="/" className="text-xl font-medium" onClick={handleLinkClick}>
                HOME
              </Link>
              <Link href="/project" className="text-xl font-medium" onClick={handleLinkClick}>
                PROJECT
              </Link>
              <Link href="/about-us" className="text-xl font-medium" onClick={handleLinkClick}>
                ABOUT US
              </Link>
              <Link href="/blog" className="text-xl font-medium" onClick={handleLinkClick}>
                BLOG
              </Link>
              <Link href="/join-us" className="text-xl font-medium" onClick={handleLinkClick}>
                JOIN US
              </Link>
              <Link href="/get-a-quote" className="text-xl font-medium" onClick={handleLinkClick}>
                GET A QUOTE
              </Link>
              <Link href="/shop" className="text-xl font-medium" onClick={handleLinkClick}>
                SHOP
              </Link>
            </nav>
          </div>

          <div className="flex space-x-6">
            <Link href="https://facebook.com" className="hover:opacity-80">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="https://instagram.com" className="hover:opacity-80">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="https://linkedin.com" className="hover:opacity-80">
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
