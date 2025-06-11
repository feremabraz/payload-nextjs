import type { CollectionConfig } from "payload";

export const StudioInfo: CollectionConfig = {
  slug: "studio-info",
  admin: {
    useAsTitle: "title",
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
      name: "title",
      type: "text",
      required: true,
      admin: {
        description: "Section title (e.g., 'Values', 'Team', 'Studio')",
      },
    },
    {
      name: "description",
      type: "textarea",
      required: true,
      admin: {
        description: "Detailed description of this studio aspect",
      },
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
      admin: {
        description: "Representative image for this section",
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
        description: "Display this section on the website",
      },
    },
  ],
};
