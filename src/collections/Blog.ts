import type { CollectionConfig } from "payload";

export const Blog: CollectionConfig = {
  slug: "blog",
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "category", "date", "updatedAt"],
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      required: true,
    },
    {
      name: "content",
      type: "richText",
      required: true,
    },
    {
      name: "featuredImage",
      type: "upload",
      relationTo: "media",
      required: false, // Made optional for seeding without media
    },
    {
      name: "category",
      type: "select",
      options: [
        {
          label: "Publications",
          value: "publications",
        },
        {
          label: "Awards",
          value: "awards",
        },
        {
          label: "Conferences",
          value: "conferences",
        },
        {
          label: "Exhibitions",
          value: "exhibitions",
        },
        {
          label: "News",
          value: "news",
        },
      ],
      required: true,
    },
    {
      name: "date",
      type: "date",
      required: true,
      defaultValue: () => new Date().toISOString(),
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "published",
      type: "checkbox",
      defaultValue: false,
      admin: {
        position: "sidebar",
      },
    },
  ],
};
