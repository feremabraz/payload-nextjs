import { TestimonialCard } from "@components/testimonial-card";
import { testimonials } from "@lib/testimonial-data";
import type { Testimonial } from "@shared-types/testimonials";
import Link from "next/link";

function getTestimonialColumns(testimonials: Testimonial[]) {
  if (testimonials.length === 0) return [];
  if (testimonials.length <= 2) return [testimonials]; // Single column for 1 or 2 items
  if (testimonials.length === 3) return [[testimonials[0]], [testimonials[1]], [testimonials[2]]]; // 3 items, 3 columns
  if (testimonials.length === 4)
    return [
      [testimonials[0], testimonials[1]],
      [testimonials[2], testimonials[3]],
    ]; // 4 items, 2 columns of 2
  // Default for 5 items as per original design
  return [
    [testimonials[0], testimonials[1]], // Column 1
    [testimonials[2], testimonials[3]], // Column 2
    [testimonials[4]], // Column 3
  ];
}

export default function TestimonialsSection() {
  const columns = getTestimonialColumns(testimonials);

  return (
    <section className="bg-[#ffffff] flex flex-col items-center max-w-[1440px] py-[100px] px-[48px] gap-[48px] mx-auto">
      <div className="flex flex-col items-center gap-[12px]">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#121212] text-center">
          TESTIMONIALS
        </h2>
        <Link
          href="#"
          className="text-[#121212] text-center text-[18px] font-normal leading-[140%] tracking-[-0.36px] uppercase hover:underline"
        >
          Go to Testimonials
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[12px] self-stretch">
        {columns.map((columnTestimonials) => {
          const columnKey = columnTestimonials.map((t) => t.id).join("-");
          return (
            <div key={columnKey} className="flex flex-col gap-[12px]">
              {columnTestimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
}
