import type { CollectionConfig } from "payload";

export const CompanySettings: CollectionConfig = {
  slug: "company-settings",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "category", "updatedAt"],
    group: "Settings",
    description: "Manage company information, contact details, and site configuration",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      admin: {
        description: "Setting name for identification (e.g., 'Contact Info', 'Social Media')",
      },
    },
    {
      name: "category",
      type: "select",
      required: true,
      options: [
        { label: "Contact Information", value: "contact" },
        { label: "Social Media", value: "social" },
        { label: "Company Info", value: "company" },
        { label: "Legal", value: "legal" },
        { label: "Other", value: "other" },
      ],
      admin: {
        description: "Category to organize settings",
      },
    },
    {
      name: "settings",
      type: "group",
      fields: [
        {
          name: "email",
          type: "email",
          admin: {
            condition: (data) => data.category === "contact",
            description: "Primary contact email address",
          },
        },
        {
          name: "phone",
          type: "text",
          admin: {
            condition: (data) => data.category === "contact",
            description: "Phone number",
          },
        },
        {
          name: "address",
          type: "textarea",
          admin: {
            condition: (data) => data.category === "contact",
            description: "Physical address (multi-line)",
          },
        },
        {
          name: "socialLinks",
          type: "array",
          admin: {
            condition: (data) => data.category === "social",
            description: "Social media links",
          },
          fields: [
            {
              name: "platform",
              type: "select",
              required: true,
              options: [
                { label: "Facebook", value: "facebook" },
                { label: "Instagram", value: "instagram" },
                { label: "LinkedIn", value: "linkedin" },
                { label: "Twitter", value: "twitter" },
                { label: "YouTube", value: "youtube" },
              ],
            },
            {
              name: "url",
              type: "text",
              required: true,
              admin: {
                description: "Full URL to the social media profile",
              },
            },
            {
              name: "isActive",
              type: "checkbox",
              defaultValue: true,
              admin: {
                description: "Show this social link on the website",
              },
            },
          ],
        },
        {
          name: "companyName",
          type: "text",
          admin: {
            condition: (data) => data.category === "company",
            description: "Official company name",
          },
        },
        {
          name: "companyDescription",
          type: "textarea",
          admin: {
            condition: (data) => data.category === "company",
            description: "Company description or tagline",
          },
        },
        {
          name: "copyright",
          type: "text",
          admin: {
            condition: (data) => data.category === "legal",
            description: "Copyright text (year will be auto-updated)",
          },
        },
        {
          name: "customValue",
          type: "text",
          admin: {
            condition: (data) => data.category === "other",
            description: "Custom setting value",
          },
        },
      ],
    },
    {
      name: "isActive",
      type: "checkbox",
      defaultValue: true,
      admin: {
        position: "sidebar",
        description: "Enable this setting on the website",
      },
    },
    {
      name: "order",
      type: "number",
      defaultValue: 0,
      admin: {
        position: "sidebar",
        description: "Display order (lower numbers appear first)",
      },
    },
  ],
  access: {
    read: () => true,
  },
};
