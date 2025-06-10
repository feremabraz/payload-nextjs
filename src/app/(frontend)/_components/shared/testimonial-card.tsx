import type { Testimonial } from "@shared-types/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <figure className="p-4 sm:p-6 md:p-8 h-full flex flex-col bg-card rounded-sm">
      <blockquote className="flex-grow self-stretch">
        <p className="text-lg sm:text-xl md:text-xl font-semibold leading-[120%] text-foreground">
          "{testimonial.quote}"
        </p>
      </blockquote>
      <figcaption className="mt-4 sm:mt-6 text-sm font-medium leading-[140%] text-accent">
        <span className="font-medium text-foreground">{testimonial.author}</span>
        {testimonial.role && <span className="text-accent">, {testimonial.role}</span>}
      </figcaption>
    </figure>
  );
}
