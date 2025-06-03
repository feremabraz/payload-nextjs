import type { Testimonial } from "@shared-types/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <figure className="bg-[#f6f8fa] p-6 md:p-8 h-full flex flex-col">
      <blockquote className="flex-grow self-stretch">
        <p className="text-[#121212] text-[24px] font-medium leading-[120%] tracking-[-0.96px]">
          {testimonial.quote}
        </p>
      </blockquote>
      <figcaption className="mt-6 text-[#666D80] text-[16px] font-medium leading-[140%] tracking-[-0.32px]">
        <span className="font-semibold text-[#121212]">{testimonial.author}</span>
        {testimonial.role && <span className="text-[#666D80]">, {testimonial.role}</span>}
      </figcaption>
    </figure>
  );
}
