import type { Testimonial } from "@shared-types/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <figure className="p-4 sm:p-6 md:p-8 h-full flex flex-col bg-brand-light">
      <blockquote className="flex-grow self-stretch">
        <p className="text-lg sm:text-xl md:text-[var(--text-xl-responsive)] font-medium leading-[120%] tracking-[var(--tracking-tight-2xl)] sm:tracking-[var(--tracking-tight-4xl)] md:tracking-[var(--tracking-tight-5xl)] text-brand-dark">
          {testimonial.quote}
        </p>
      </blockquote>
      <figcaption className="mt-4 sm:mt-6 text-sm sm:text-[var(--text-sm-responsive)] font-medium leading-[140%] tracking-[var(--tracking-tight-md)] sm:tracking-[var(--tracking-tight-lg)] text-brand-accent">
        <span className="font-semibold text-brand-dark">{testimonial.author}</span>
        {testimonial.role && <span className="text-brand-accent">, {testimonial.role}</span>}
      </figcaption>
    </figure>
  );
}
