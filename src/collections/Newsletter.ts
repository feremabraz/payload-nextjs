import type { CollectionConfig } from "payload";

export const Newsletter: CollectionConfig = {
  slug: "newsletter",
  labels: {
    singular: "Newsletter Subscription",
    plural: "Newsletter Subscriptions",
  },
  admin: {
    description: "Newsletter email subscriptions",
    defaultColumns: ["email", "status", "subscribedAt", "createdAt"],
    useAsTitle: "email",
  },
  fields: [
    {
      name: "email",
      type: "email",
      required: true,
      unique: true,
      admin: {
        description: "Email address for newsletter subscription",
      },
    },
    {
      name: "status",
      type: "select",
      defaultValue: "active",
      options: [
        { label: "Active", value: "active" },
        { label: "Unsubscribed", value: "unsubscribed" },
        { label: "Bounced", value: "bounced" },
      ],
      admin: {
        position: "sidebar",
        description: "Subscription status",
      },
    },
    {
      name: "subscribedAt",
      type: "date",
      admin: {
        position: "sidebar",
        description: "Date of subscription",
        readOnly: true,
      },
    },
    {
      name: "unsubscribedAt",
      type: "date",
      admin: {
        position: "sidebar",
        description: "Date of unsubscription (if applicable)",
        condition: (data) => data.status === "unsubscribed",
      },
    },
    {
      name: "source",
      type: "text",
      admin: {
        position: "sidebar",
        description: "Source of subscription (website, form, etc.)",
        readOnly: true,
      },
    },
  ],
  hooks: {
    beforeChange: [
      ({ data, operation }) => {
        if (operation === "create") {
          data.subscribedAt = new Date().toISOString();
          data.source = "website";
        }

        if (data.status === "unsubscribed" && !data.unsubscribedAt) {
          data.unsubscribedAt = new Date().toISOString();
        }

        return data;
      },
    ],
  },
};
