import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

export default async function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop')",
      }}
    >
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative h-full flex flex-col justify-center items-center text-white">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 text-center">CVZ CONSTRUÇÕES</h1>
        </div>

        <div className="absolute bottom-24 flex flex-col items-center">
          <Link
            href="/admin/login"
            className="px-8 py-3 hover:bg-white hover:text-black transition-colors mb-8"
          >
            PAYLOAD ADMIN
          </Link>

          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8" />
          </div>
        </div>
      </div>

      <nav className="absolute bottom-0 left-0 right-0 bg-white py-4">
        <div className="container mx-auto px-4">
          <ul className="flex justify-center space-x-8 text-sm font-medium">
            <li>
              <Link href="#project" className="hover:underline">
                PROJECT
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:underline">
                ABOUT US
              </Link>
            </li>
            <li>
              <Link href="#testimonials" className="hover:underline">
                TESTIMONIALS
              </Link>
            </li>
            <li>
              <Link href="#blog" className="hover:underline">
                BLOG AND NEWS
              </Link>
            </li>
            <li>
              <Link href="#shop" className="hover:underline">
                SHOP
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  )
}
