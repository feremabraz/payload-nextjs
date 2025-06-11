import type { CollectionConfig } from "payload";

export const ValuesAndMission: CollectionConfig = {
  slug: "values-and-mission",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "type", "order", "published"],
    group: "Content",
    description: "Manage company values, mission statements, and core messaging",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      admin: {
        description: "Title of the value or mission statement (e.g., 'Quality', 'Rigor')",
      },
    },
    {
      name: "type",
      type: "select",
      required: true,
      options: [
        { label: "Core Value", value: "value" },
        { label: "Mission Statement", value: "mission" },
        { label: "Vision Statement", value: "vision" },
        { label: "Company Principle", value: "principle" },
      ],
      defaultValue: "value",
      admin: {
        description: "Type of content this represents",
      },
    },
    {
      name: "content",
      type: "textarea",
      required: true,
      admin: {
        description: "The main text content describing this value or mission",
        rows: 5,
      },
    },
    {
      name: "summary",
      type: "text",
      admin: {
        description: "Optional short summary or tagline",
      },
    },
    {
      name: "icon",
      type: "text",
      admin: {
        description: "Optional icon identifier or emoji",
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
        description: "Publish this content on the website",
      },
    },
    {
      name: "featuredOnHomepage",
      type: "checkbox",
      defaultValue: false,
      admin: {
        position: "sidebar",
        description: "Feature this content on the homepage",
      },
    },
  ],
  access: {
    read: () => true,
  },
};
