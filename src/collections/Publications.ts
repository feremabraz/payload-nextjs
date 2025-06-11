import type { CollectionConfig } from "payload";

export const Publications: CollectionConfig = {
  slug: "publications",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "publication", "date", "published"],
    group: "Content",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      admin: {
        description:
          "The publication source or project name (e.g., 'ARCH DAILY PUBLICATION', 'HOUSE IN LISBON')",
      },
    },
    {
      name: "publication",
      type: "text",
      required: true,
      admin: {
        description:
          "The article title or publication name (e.g., 'White Forest in Monsorrato / Bruno Câmara Architectos')",
      },
    },
    {
      name: "date",
      type: "text",
      required: true,
      admin: {
        description: "Publication date (e.g., 'February, 2020')",
      },
    },
    {
      name: "description",
      type: "textarea",
      admin: {
        description: "Optional description or summary of the publication",
      },
    },
    {
      name: "order",
      type: "number",
      defaultValue: 0,
      admin: {
        description: "Display order (lower numbers appear first)",
      },
    },
    {
      name: "published",
      type: "checkbox",
      defaultValue: true,
      admin: {
        position: "sidebar",
        description: "Publish this publication on the website",
      },
    },
  ],
  hooks: {
    beforeChange: [
      ({ data }) => {
        if (data.title) {
          data.title = data.title.toUpperCase();
        }
        return data;
      },
    ],
  },
};
