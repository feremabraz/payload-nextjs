'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Facebook, Instagram, Linkedin } from 'lucide-react'

export default function MobileMenuFallback() {
  const [isOpen, setIsOpen] = useState(false)

  // Close menu when clicking outside
  useEffect(() => {
    if (!isOpen) return

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest('[data-menu-content]') && !target.closest('[data-menu-trigger]')) {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isOpen])

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      <button
        className="text-white focus:outline-none"
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
        data-menu-trigger
      >
        <Menu className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 transition-opacity duration-300">
          <div
            className="fixed inset-y-0 right-0 w-full sm:w-80 bg-black text-white h-full"
            data-menu-content
          >
            <div className="flex flex-col justify-between h-full py-12 px-6">
              <div>
                <div className="flex justify-between items-center mb-8">
                  <p className="text-sm">Menu</p>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="focus:outline-none"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="flex flex-col space-y-6">
                  <Link href="/" className="text-xl font-medium" onClick={() => setIsOpen(false)}>
                    HOME
                  </Link>
                  <Link
                    href="/project"
                    className="text-xl font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    PROJECT
                  </Link>
                  <Link
                    href="/about-us"
                    className="text-xl font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    ABOUT US
                  </Link>
                  <Link
                    href="/blog"
                    className="text-xl font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    BLOG
                  </Link>
                  <Link
                    href="/join-us"
                    className="text-xl font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    JOIN US
                  </Link>
                  <Link
                    href="/get-a-quote"
                    className="text-xl font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    GET A QUOTE
                  </Link>
                  <Link
                    href="/shop"
                    className="text-xl font-medium"
                    onClick={() => setIsOpen(false)}
                  >
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
          </div>
        </div>
      )}
    </>
  )
}
