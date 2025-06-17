import type { CollectionConfig } from "payload";

export const TeamMembers: CollectionConfig = {
  slug: "team-members",
  admin: {
    useAsTitle: "name",
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
      name: "name",
      type: "text",
      required: true,
      admin: {
        description: "Full name of the team member",
      },
    },
    {
      name: "role",
      type: "text",
      required: true,
      localized: true,
      admin: {
        description: "Job title or role in the company",
      },
    },
    {
      name: "bio",
      type: "textarea",
      required: true,
      localized: true,
      admin: {
        description: "Professional biography",
      },
    },
    {
      name: "interests",
      type: "text",
      localized: true,
      admin: {
        description: "Personal interests or hobbies (optional)",
      },
    },
    {
      name: "profileImage",
      type: "upload",
      relationTo: "media",
      required: true,
      admin: {
        description: "Professional headshot or profile photo",
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
        description: "Show this team member on the website",
      },
    },
  ],
};
