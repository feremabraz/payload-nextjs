import type { CollectionConfig } from "payload";

export const Projects: CollectionConfig = {
  slug: "projects",
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "category", "location", "year", "updatedAt"],
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
      name: "gallery",
      type: "array",
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
      ],
      minRows: 1,
      maxRows: 20,
    },
    {
      name: "category",
      type: "select",
      options: [
        {
          label: "Houses",
          value: "houses",
        },
        {
          label: "Interior Design",
          value: "interior-design",
        },
        {
          label: "Buildings",
          value: "buildings",
        },
        {
          label: "Corporative",
          value: "corporative",
        },
      ],
      required: true,
    },
    {
      name: "location",
      type: "text",
      required: true,
    },
    {
      name: "year",
      type: "number",
      required: true,
    },
    {
      name: "projectType",
      type: "text",
      required: true,
    },
    {
      name: "client",
      type: "text",
      required: true,
    },
    {
      name: "projectSize",
      type: "text",
      required: true,
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
