import type { CollectionConfig } from "payload";

export const Jobs: CollectionConfig = {
  slug: "jobs",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "department", "location", "employmentType", "published"],
    group: "Content",
    description: "Manage job listings and career opportunities",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      admin: {
        description: "Job title (e.g., 'Senior Architect', 'Project Manager')",
      },
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      admin: {
        description: "URL slug for the job listing",
      },
    },
    {
      name: "department",
      type: "select",
      required: true,
      options: [
        { label: "Architecture", value: "architecture" },
        { label: "Design", value: "design" },
        { label: "Engineering", value: "engineering" },
        { label: "Project Management", value: "project-management" },
        { label: "Business Development", value: "business-development" },
        { label: "Administration", value: "administration" },
        { label: "Other", value: "other" },
      ],
      admin: {
        description: "Department or area of expertise",
      },
    },
    {
      name: "location",
      type: "text",
      required: true,
      admin: {
        description: "Job location (e.g., 'Lisbon, Portugal', 'Remote', 'Hybrid')",
      },
    },
    {
      name: "employmentType",
      type: "select",
      required: true,
      options: [
        { label: "Full-time", value: "full-time" },
        { label: "Part-time", value: "part-time" },
        { label: "Contract", value: "contract" },
        { label: "Internship", value: "internship" },
        { label: "Freelance", value: "freelance" },
      ],
      admin: {
        description: "Type of employment",
      },
    },
    {
      name: "experienceLevel",
      type: "select",
      required: true,
      options: [
        { label: "Entry Level", value: "entry" },
        { label: "Mid Level", value: "mid" },
        { label: "Senior Level", value: "senior" },
        { label: "Lead/Principal", value: "lead" },
        { label: "Executive", value: "executive" },
      ],
      admin: {
        description: "Required experience level",
      },
    },
    {
      name: "summary",
      type: "textarea",
      required: true,
      admin: {
        description: "Brief job summary (2-3 sentences)",
        rows: 3,
      },
    },
    {
      name: "description",
      type: "textarea",
      required: true,
      admin: {
        description: "Detailed job description",
        rows: 6,
      },
    },
    {
      name: "responsibilities",
      type: "array",
      required: true,
      minRows: 1,
      admin: {
        description: "Key responsibilities and duties",
      },
      fields: [
        {
          name: "responsibility",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "requirements",
      type: "array",
      required: true,
      minRows: 1,
      admin: {
        description: "Required qualifications and skills",
      },
      fields: [
        {
          name: "requirement",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "preferredQualifications",
      type: "array",
      admin: {
        description: "Nice-to-have qualifications (optional)",
      },
      fields: [
        {
          name: "qualification",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "benefits",
      type: "array",
      admin: {
        description: "Job benefits and perks",
      },
      fields: [
        {
          name: "benefit",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "salaryRange",
      type: "group",
      admin: {
        description: "Salary information (optional)",
      },
      fields: [
        {
          name: "showSalary",
          type: "checkbox",
          defaultValue: false,
          admin: {
            description: "Display salary information publicly",
          },
        },
        {
          name: "minSalary",
          type: "number",
          admin: {
            condition: (data) => data.showSalary,
            description: "Minimum salary (annual)",
          },
        },
        {
          name: "maxSalary",
          type: "number",
          admin: {
            condition: (data) => data.showSalary,
            description: "Maximum salary (annual)",
          },
        },
        {
          name: "currency",
          type: "select",
          defaultValue: "EUR",
          options: [
            { label: "EUR (€)", value: "EUR" },
            { label: "USD ($)", value: "USD" },
            { label: "GBP (£)", value: "GBP" },
          ],
          admin: {
            condition: (data) => data.showSalary,
          },
        },
        {
          name: "salaryNote",
          type: "text",
          admin: {
            condition: (data) => data.showSalary,
            description: "Additional salary information",
          },
        },
      ],
    },
    {
      name: "applicationInstructions",
      type: "textarea",
      admin: {
        description: "Custom application instructions (optional)",
        rows: 3,
      },
    },
    {
      name: "applicationDeadline",
      type: "date",
      admin: {
        description: "Application deadline (optional)",
      },
    },
    {
      name: "contactEmail",
      type: "email",
      admin: {
        description: "Contact email for applications (defaults to company email)",
      },
    },
    {
      name: "featured",
      type: "checkbox",
      defaultValue: false,
      admin: {
        position: "sidebar",
        description: "Feature this job listing prominently",
      },
    },
    {
      name: "urgent",
      type: "checkbox",
      defaultValue: false,
      admin: {
        position: "sidebar",
        description: "Mark as urgent hiring",
      },
    },
    {
      name: "published",
      type: "checkbox",
      defaultValue: true,
      admin: {
        position: "sidebar",
        description: "Publish this job listing on the website",
      },
    },
    {
      name: "order",
      type: "number",
      defaultValue: 0,
      admin: {
        position: "sidebar",
        description: "Display order (higher numbers appear first)",
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
