'use client'

import Link from 'next/link'
import Image from 'next/image'
import MobileMenu from './mobile-menu'

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-10 p-6">
      <div className="flex justify-between items-center">
        <Link href="/" className="block">
          <div className="bg-black p-4 w-16 h-16 flex items-center justify-center">
            <Image
              src="/cvz-logo.png"
              alt="CVZ CONSTRUÇÕES Logo"
              width={48}
              height={48}
              className="w-full h-full object-contain"
            />
          </div>
        </Link>

        <div className="flex items-center gap-4">
          <div className="flex gap-2 text-white">
            <Link href="/en" className="hover:underline">
              EN
            </Link>
            <span>|</span>
            <Link href="/pt" className="hover:underline">
              PT
            </Link>
          </div>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
