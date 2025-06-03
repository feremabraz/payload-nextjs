import Link from "next/link";
import TestimonialCard from "./testimonial-card";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-7xl font-bold text-center mb-4">TESTIMONIALS</h2>
        <div className="flex justify-center mb-12">
          <Link href="/testimonials" className="hover:underline">
            GO TO TESTIMONIALS
          </Link>
        </div>

        {/* Desktop Layout (3 columns) */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {/* First Column - Two half-height cards */}
          <div className="grid grid-rows-2 gap-6 h-[800px]">
            <TestimonialCard
              type="text"
              quote="Beautiful, modern with lots of light, with quality materials, and most importantly, well built."
              author="Rogério Santos, 2016 | Coffee shop on Avenida da Liberdade"
            />
            <TestimonialCard
              type="video"
              author="Rogério Santos, 2016 | Coffee shop on Avenida da Liberdade"
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
            />
          </div>

          {/* Second Column - One full-height card */}
          <div className="h-[800px]">
            <TestimonialCard
              type="full-video"
              author="Rogério Santos, 2016 | Coffee shop on Avenida da Liberdade"
              image="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop"
            />
          </div>

          {/* Third Column - Two half-height cards (swapped order) */}
          <div className="grid grid-rows-2 gap-6 h-[800px]">
            <TestimonialCard
              type="video"
              author="Rogério Santos, 2016 | Coffee shop on Avenida da Liberdade"
              image="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
            />
            <TestimonialCard
              type="text"
              quote="A work with the accompaniment of an Architect, who showed knowledge and confidence in the execution, which always left us calm, I fully recommend it."
              author="Rogério Santos, 2016 | Coffee shop on Avenida da Liberdade"
            />
          </div>
        </div>

        {/* Mobile Layout (single column) */}
        <div className="grid md:hidden grid-cols-1 gap-6">
          <div className="h-[400px]">
            <TestimonialCard
              type="text"
              quote="Beautiful, modern with lots of light, with quality materials, and most importantly, well built."
              author="Rogério Santos, 2016 | Coffee shop on Avenida da Liberdade"
            />
          </div>
          <div className="h-[400px]">
            <TestimonialCard
              type="video"
              author="Rogério Santos, 2016 | Coffee shop on Avenida da Liberdade"
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
            />
          </div>
          <div className="h-[400px]">
            <TestimonialCard
              type="video"
              author="Rogério Santos, 2016 | Coffee shop on Avenida da Liberdade"
              image="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop"
            />
          </div>
          <div className="h-[400px]">
            <TestimonialCard
              type="video"
              author="Rogério Santos, 2016 | Coffee shop on Avenida da Liberdade"
              image="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
            />
          </div>
          <div className="h-[400px]">
            <TestimonialCard
              type="text"
              quote="A work with the accompaniment of an Architect, who showed knowledge and confidence in the execution, which always left us calm, I fully recommend it."
              author="Rogério Santos, 2016 | Coffee shop on Avenida da Liberdade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
