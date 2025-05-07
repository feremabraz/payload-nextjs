import Image from 'next/image'
import { Play } from 'lucide-react'

type TestimonialCardProps = {
  type: 'text' | 'video' | 'full-video'
  quote?: string
  author: string
  image?: string
}

export default function TestimonialCard({ type, quote, author, image }: TestimonialCardProps) {
  // Text-only card
  if (type === 'text') {
    return (
      <div className="bg-gray-50 p-6 h-full flex flex-col justify-between">
        <p className="text-xl font-bold mb-8">{quote}</p>
        <p className="text-sm text-gray-600">{author}</p>
      </div>
    )
  }

  // Video cards (half-height or full-height)
  return (
    <div className={`relative h-full`}>
      <div className="relative h-full">
        {image && (
          <Image
            src={image || '/placeholder.svg'}
            alt={`Testimonial by ${author}`}
            fill
            className="object-cover"
          />
        )}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white rounded-full p-4 cursor-pointer hover:bg-gray-100 transition-colors">
            <Play className="w-8 h-8" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-white p-3">
          <p className="text-sm">{author}</p>
        </div>
      </div>
    </div>
  )
}
