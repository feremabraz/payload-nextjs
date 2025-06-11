import type { CollectionConfig } from "payload";

export const Awards: CollectionConfig = {
  slug: "awards",
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
        description: "Award title or name",
      },
    },
    {
      name: "description",
      type: "text",
      required: true,
      admin: {
        description: "Brief description of the award",
      },
    },
    {
      name: "project",
      type: "text",
      required: true,
      admin: {
        description: "Project that received the award",
      },
    },
    {
      name: "location",
      type: "text",
      required: true,
      admin: {
        description: "Location where the award was given or project is located",
      },
    },
    {
      name: "year",
      type: "text",
      required: true,
      admin: {
        description: "Year the award was received",
      },
    },
    {
      name: "awardImage",
      type: "upload",
      relationTo: "media",
      required: true,
      admin: {
        description: "Image representing the award or awarded project",
      },
    },
    {
      name: "featured",
      type: "checkbox",
      defaultValue: false,
      admin: {
        description: "Feature this award prominently",
      },
    },
    {
      name: "published",
      type: "checkbox",
      defaultValue: true,
      admin: {
        position: "sidebar",
        description: "Display this award on the website",
      },
    },
  ],
};
