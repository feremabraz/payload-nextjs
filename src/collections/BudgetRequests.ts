import type { CollectionConfig } from "payload";

export const BudgetRequests: CollectionConfig = {
  slug: "budget-requests",
  labels: {
    singular: "Budget Request",
    plural: "Budget Requests",
  },
  admin: {
    description: "Budget requests submitted through the website",
    defaultColumns: ["name", "email", "phone", "createdAt"],
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      admin: {
        description: "Full name of the person requesting the budget",
      },
    },
    {
      name: "email",
      type: "email",
      required: true,
      admin: {
        description: "Email address for contact",
      },
    },
    {
      name: "phone",
      type: "text",
      required: true,
      admin: {
        description: "Phone number for contact",
      },
    },
    {
      name: "message",
      type: "textarea",
      admin: {
        description: "Project description or additional information",
        rows: 4,
      },
    },
    {
      name: "status",
      type: "select",
      defaultValue: "pending",
      options: [
        { label: "Pending", value: "pending" },
        { label: "In Review", value: "in-review" },
        { label: "Contacted", value: "contacted" },
        { label: "Quoted", value: "quoted" },
        { label: "Closed", value: "closed" },
      ],
      admin: {
        position: "sidebar",
        description: "Status of the budget request",
      },
    },
    {
      name: "priority",
      type: "select",
      defaultValue: "normal",
      options: [
        { label: "Low", value: "low" },
        { label: "Normal", value: "normal" },
        { label: "High", value: "high" },
        { label: "Urgent", value: "urgent" },
      ],
      admin: {
        position: "sidebar",
        description: "Priority level of the request",
      },
    },
    {
      name: "notes",
      type: "textarea",
      admin: {
        position: "sidebar",
        description: "Internal notes (not visible to client)",
        rows: 3,
      },
    },
  ],
  hooks: {
    beforeChange: [
      ({ data }) => {
        if (!data.id) {
          data.submittedAt = new Date().toISOString();
        }
        return data;
      },
    ],
  },
};
