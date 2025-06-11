import { getPayload } from "payload";
import type { Testimonial } from "../../../payload-types";
import config from "../../../payload.config";

export async function getTestimonials(): Promise<Testimonial[]> {
  const payload = await getPayload({ config });

  const testimonials = await payload.find({
    collection: "testimonials",
    where: {
      published: {
        equals: true,
      },
    },
    sort: "-featured", // Featured testimonials first
  });

  return testimonials.docs;
}

export async function getFeaturedTestimonials(): Promise<Testimonial[]> {
  const payload = await getPayload({ config });

  const testimonials = await payload.find({
    collection: "testimonials",
    where: {
      and: [
        {
          published: {
            equals: true,
          },
        },
        {
          featured: {
            equals: true,
          },
        },
      ],
    },
  });

  return testimonials.docs;
}
