import type { Testimonial } from "@shared-types/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <figure className="bg-[#f6f8fa] p-4 sm:p-6 md:p-8 h-full flex flex-col">
      <blockquote className="flex-grow self-stretch">
        <p className="text-[#121212] text-lg sm:text-xl md:text-[24px] font-medium leading-[120%] tracking-[-0.72px] sm:tracking-[-0.80px] md:tracking-[-0.96px]">
          {testimonial.quote}
        </p>
      </blockquote>
      <figcaption className="mt-4 sm:mt-6 text-[#666D80] text-sm sm:text-[16px] font-medium leading-[140%] tracking-[-0.28px] sm:tracking-[-0.32px]">
        <span className="font-semibold text-[#121212]">{testimonial.author}</span>
        {testimonial.role && <span className="text-[#666D80]">, {testimonial.role}</span>}
      </figcaption>
    </figure>
  );
}
