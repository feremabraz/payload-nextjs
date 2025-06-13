import type { CollectionConfig } from "payload";

export const JobApplications: CollectionConfig = {
  slug: "job-applications",
  labels: {
    singular: "Job Application",
    plural: "Job Applications",
  },
  admin: {
    description: "Job applications submitted through the website",
    defaultColumns: ["name", "email", "position", "status", "createdAt"],
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      admin: {
        description: "Full name of the applicant",
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
      name: "position",
      type: "text",
      required: true,
      admin: {
        description: "Position applied for",
      },
    },
    {
      name: "jobId",
      type: "relationship",
      relationTo: "jobs",
      admin: {
        description: "Related job listing",
      },
    },
    {
      name: "coverLetter",
      type: "textarea",
      admin: {
        description: "Cover letter or message from applicant",
        rows: 6,
      },
    },
    {
      name: "cv",
      type: "relationship",
      relationTo: "media",
      required: true,
      admin: {
        description: "CV/Resume file",
      },
    },
    {
      name: "portfolio",
      type: "relationship",
      relationTo: "media",
      admin: {
        description: "Portfolio file (optional)",
      },
    },
    {
      name: "status",
      type: "select",
      defaultValue: "received",
      options: [
        { label: "Received", value: "received" },
        { label: "Under Review", value: "under-review" },
        { label: "Interview Scheduled", value: "interview-scheduled" },
        { label: "Interview Completed", value: "interview-completed" },
        { label: "Offer Made", value: "offer-made" },
        { label: "Hired", value: "hired" },
        { label: "Declined", value: "declined" },
        { label: "Withdrawn", value: "withdrawn" },
      ],
      admin: {
        position: "sidebar",
        description: "Application status",
      },
    },
    {
      name: "rating",
      type: "number",
      min: 1,
      max: 5,
      admin: {
        position: "sidebar",
        description: "Internal rating (1-5 stars)",
      },
    },
    {
      name: "interviewDate",
      type: "date",
      admin: {
        position: "sidebar",
        description: "Scheduled interview date",
        condition: (data) => ["interview-scheduled", "interview-completed"].includes(data.status),
      },
    },
    {
      name: "notes",
      type: "textarea",
      admin: {
        position: "sidebar",
        description: "Internal notes about the applicant",
        rows: 4,
      },
    },
  ],
  hooks: {
    beforeChange: [
      ({ data, operation }) => {
        if (operation === "create") {
          data.appliedAt = new Date().toISOString();
        }
        return data;
      },
    ],
  },
};
