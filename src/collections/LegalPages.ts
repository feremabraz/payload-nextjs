import type { CollectionConfig } from "payload";

export const LegalPages: CollectionConfig = {
  slug: "legal-pages",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "pageType", "lastUpdated", "published"],
    group: "Content",
    description: "Manage legal documents like Terms of Service and Privacy Policy",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      admin: {
        description: "Title of the legal document (e.g., 'Privacy Policy', 'Terms of Service')",
      },
    },
    {
      name: "pageType",
      type: "select",
      required: true,
      options: [
        { label: "Privacy Policy", value: "privacy" },
        { label: "Terms of Service", value: "terms" },
        { label: "Cookie Policy", value: "cookies" },
        { label: "Data Protection", value: "data-protection" },
        { label: "Disclaimer", value: "disclaimer" },
        { label: "Other", value: "other" },
      ],
      admin: {
        description: "Type of legal document",
      },
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      admin: {
        description: "URL slug for the page (e.g., 'privacy', 'tos')",
      },
    },
    {
      name: "lastUpdated",
      type: "date",
      required: true,
      defaultValue: () => new Date(),
      admin: {
        description: "Date when this document was last updated",
      },
    },
    {
      name: "introduction",
      type: "group",
      fields: [
        {
          name: "subtitle",
          type: "text",
          admin: {
            description: "Optional subtitle or description",
          },
        },
        {
          name: "content",
          type: "textarea",
          required: true,
          admin: {
            description: "Main introduction text",
            rows: 4,
          },
        },
      ],
    },
    {
      name: "sections",
      type: "array",
      required: true,
      minRows: 1,
      admin: {
        description: "Content sections of the legal document",
      },
      fields: [
        {
          name: "heading",
          type: "text",
          required: true,
          admin: {
            description: "Section heading (e.g., '1. Information We Collect')",
          },
        },
        {
          name: "content",
          type: "textarea",
          required: true,
          admin: {
            description: "Main content for this section",
            rows: 4,
          },
        },
        {
          name: "subsections",
          type: "array",
          admin: {
            description: "Optional subsections within this section",
          },
          fields: [
            {
              name: "subheading",
              type: "text",
              required: true,
              admin: {
                description: "Subsection heading",
              },
            },
            {
              name: "content",
              type: "textarea",
              required: true,
              admin: {
                description: "Subsection content",
                rows: 3,
              },
            },
            {
              name: "listItems",
              type: "array",
              admin: {
                description: "Optional bullet points for this subsection",
              },
              fields: [
                {
                  name: "item",
                  type: "text",
                  required: true,
                },
              ],
            },
          ],
        },
        {
          name: "listItems",
          type: "array",
          admin: {
            description: "Optional bullet points for this section",
          },
          fields: [
            {
              name: "item",
              type: "text",
              required: true,
            },
          ],
        },
        {
          name: "order",
          type: "number",
          defaultValue: 0,
          admin: {
            description: "Display order for this section",
          },
        },
      ],
    },
    {
      name: "contactInfo",
      type: "group",
      admin: {
        description: "Contact information section (usually at the bottom)",
      },
      fields: [
        {
          name: "includeContact",
          type: "checkbox",
          defaultValue: true,
          admin: {
            description: "Include contact information section",
          },
        },
        {
          name: "heading",
          type: "text",
          defaultValue: "Contact Us",
          admin: {
            condition: (data) => data.includeContact,
          },
        },
        {
          name: "content",
          type: "textarea",
          admin: {
            condition: (data) => data.includeContact,
            description: "Contact information text",
            rows: 3,
          },
        },
      ],
    },
    {
      name: "published",
      type: "checkbox",
      defaultValue: true,
      admin: {
        position: "sidebar",
        description: "Publish this legal page on the website",
      },
    },
    {
      name: "order",
      type: "number",
      defaultValue: 0,
      admin: {
        position: "sidebar",
        description: "Display order in legal pages list",
      },
    },
  ],
  hooks: {
    beforeChange: [
      ({ data }) => {
        // Auto-generate slug from title if not provided
        if (!data.slug && data.title) {
          data.slug = data.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "");
        }
        return data;
      },
    ],
  },
  access: {
    read: () => true,
  },
};
