import path from "node:path";
import { fileURLToPath } from "node:url";
import { vercelPostgresAdapter } from "@payloadcms/db-vercel-postgres";
import { nodemailerAdapter } from "@payloadcms/email-nodemailer";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import { buildConfig } from "payload";

import { Awards } from "./collections/Awards";
import { Blog } from "./collections/Blog";
import { BudgetRequests } from "./collections/BudgetRequests";
import { CompanySettings } from "./collections/CompanySettings";
import { JobApplications } from "./collections/JobApplications";
import { Jobs } from "./collections/Jobs";
import { LegalPages } from "./collections/LegalPages";
import { Media } from "./collections/Media";
import { Newsletter } from "./collections/Newsletter";
import { Projects } from "./collections/Projects";
import { Publications } from "./collections/Publications";
import { StudioInfo } from "./collections/StudioInfo";
import { TeamMembers } from "./collections/TeamMembers";
import { Testimonials } from "./collections/Testimonials";
import { Users } from "./collections/Users";
import { ValuesAndMission } from "./collections/ValuesAndMission";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  localization: {
    locales: [
      {
        label: "English",
        code: "en",
      },
      {
        label: "Portuguese",
        code: "pt",
      },
    ],
    defaultLocale: "en",
    fallback: true,
  },
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      title: "Bruno Câmara Arquitetos",
      description: "BCA Content Management System",
      icons: [
        {
          rel: "icon",
          type: "image/svg+xml",
          url: "/favicon.svg",
        },
        {
          rel: "icon",
          type: "image/x-icon",
          url: "/favicon.ico",
        },
        {
          rel: "apple-touch-icon",
          type: "image/png",
          url: "/apple-touch-icon.png",
        },
      ],
    },
    components: {
      graphics: {
        Logo: "./app/(payload)/components/CustomLogo",
        Icon: "./app/(payload)/components/CustomIcon",
      },
    },
  },
  collections: [
    Users,
    Media,
    Blog,
    Projects,
    Awards,
    StudioInfo,
    TeamMembers,
    Testimonials,
    Publications,
    CompanySettings,
    ValuesAndMission,
    LegalPages,
    Jobs,
    JobApplications,
    BudgetRequests,
    Newsletter,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: vercelPostgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URL || "",
    },
  }),
  plugins: [
    vercelBlobStorage({
      collections: {
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN || "",
    }),
  ],
  email: nodemailerAdapter({
    defaultFromAddress: process.env.EMAIL_FROM || "onboarding@resend.dev",
    defaultFromName: "CVZ Portugal",
    // Resend SMTP configuration
    transportOptions: {
      host: "smtp.resend.com",
      port: 465,
      secure: true,
      auth: {
        user: "resend",
        pass: process.env.RESEND_API_KEY,
      },
    },
  }),
});
