import path from "node:path";
import { fileURLToPath } from "node:url";
import { vercelPostgresAdapter } from "@payloadcms/db-vercel-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import { buildConfig } from "payload";

import { Awards } from "./collections/Awards";
import { Blog } from "./collections/Blog";
import { CompanySettings } from "./collections/CompanySettings";
import { Jobs } from "./collections/Jobs";
import { LegalPages } from "./collections/LegalPages";
import { Media } from "./collections/Media";
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
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
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
});
