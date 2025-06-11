import type { CollectionConfig } from "payload";

export const Testimonials: CollectionConfig = {
  slug: "testimonials",
  admin: {
    useAsTitle: "author",
    group: "Content",
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => !!user,
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => !!user,
  },
  fields: [
    {
      name: "quote",
      type: "textarea",
      required: true,
      admin: {
        description: "The testimonial quote text",
      },
    },
    {
      name: "author",
      type: "text",
      required: true,
      admin: {
        description: "Name of the person giving the testimonial",
      },
    },
    {
      name: "role",
      type: "text",
      required: true,
      admin: {
        description: "Role or title of the person (e.g., 'owner', 'client')",
      },
    },
    {
      name: "featured",
      type: "checkbox",
      defaultValue: false,
      admin: {
        description: "Feature this testimonial prominently",
      },
    },
    {
      name: "published",
      type: "checkbox",
      defaultValue: true,
      admin: {
        position: "sidebar",
        description: "Publish this testimonial on the website",
      },
    },
  ],
};
