import type { Locale } from "@/types/locale";
import { getTestimonials } from "@actions/testimonials";
import type { Testimonial } from "@payload-types";
import { EmptyState } from "@shared/empty-state";
import { SectionContainer, SectionHeader } from "@shared/section-container";
import { TestimonialCard } from "@shared/testimonial-card";
import { MessageSquareQuote } from "lucide-react";
import { getTranslations } from "next-intl/server";

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

interface TestimonialsSectionProps {
  locale: Locale;
}

export default async function TestimonialsSection({ locale }: TestimonialsSectionProps) {
  const t = await getTranslations({ locale });
  const testimonials = await getTestimonials();

  if (testimonials.length === 0) {
    return (
      <div id="testimonials">
        <SectionContainer>
          <SectionHeader
            title={t("testimonials.title")}
            linkHref="/testimonials"
            linkText={t("testimonials.goToTestimonials")}
          />
          <EmptyState
            icon={<MessageSquareQuote className="h-12 w-12" />}
            title="testimonials.noTestimonials"
            description="testimonials.noTestimonialsDescription"
          />
        </SectionContainer>
      </div>
    );
  }

  const columns = getTestimonialColumns(testimonials);

  return (
    <div id="testimonials">
      <SectionContainer>
        <SectionHeader
          title={t("testimonials.title")}
          linkHref="/testimonials"
          linkText={t("testimonials.goToTestimonials")}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-2 w-full">
          {columns.map((columnTestimonials) => {
            const columnKey = columnTestimonials.map((t) => t.id).join("-");
            return (
              <div key={columnKey} className="flex flex-col gap-3 sm:gap-2">
                {columnTestimonials.map((testimonial) => (
                  <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))}
              </div>
            );
          })}
        </div>
      </SectionContainer>
    </div>
  );
}
