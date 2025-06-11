import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "awards" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"project" varchar NOT NULL,
  	"location" varchar NOT NULL,
  	"year" varchar NOT NULL,
  	"award_image_id" integer NOT NULL,
  	"featured" boolean DEFAULT false,
  	"published" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "studio_info" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"image_id" integer NOT NULL,
  	"order" numeric DEFAULT 0,
  	"published" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "team_members" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"role" varchar NOT NULL,
  	"bio" varchar NOT NULL,
  	"interests" varchar,
  	"profile_image_id" integer NOT NULL,
  	"order" numeric DEFAULT 0,
  	"published" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "testimonials" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"quote" varchar NOT NULL,
  	"author" varchar NOT NULL,
  	"role" varchar NOT NULL,
  	"featured" boolean DEFAULT false,
  	"published" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "blog" ALTER COLUMN "featured_image_id" DROP NOT NULL;
  ALTER TABLE "projects" ALTER COLUMN "featured_image_id" DROP NOT NULL;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "awards_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "studio_info_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "team_members_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "testimonials_id" integer;
  DO $$ BEGIN
   ALTER TABLE "awards" ADD CONSTRAINT "awards_award_image_id_media_id_fk" FOREIGN KEY ("award_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "studio_info" ADD CONSTRAINT "studio_info_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "team_members" ADD CONSTRAINT "team_members_profile_image_id_media_id_fk" FOREIGN KEY ("profile_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "awards_award_image_idx" ON "awards" USING btree ("award_image_id");
  CREATE INDEX IF NOT EXISTS "awards_updated_at_idx" ON "awards" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "awards_created_at_idx" ON "awards" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "studio_info_image_idx" ON "studio_info" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "studio_info_updated_at_idx" ON "studio_info" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "studio_info_created_at_idx" ON "studio_info" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "team_members_profile_image_idx" ON "team_members" USING btree ("profile_image_id");
  CREATE INDEX IF NOT EXISTS "team_members_updated_at_idx" ON "team_members" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "team_members_created_at_idx" ON "team_members" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "testimonials_updated_at_idx" ON "testimonials" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "testimonials_created_at_idx" ON "testimonials" USING btree ("created_at");
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_awards_fk" FOREIGN KEY ("awards_id") REFERENCES "public"."awards"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_studio_info_fk" FOREIGN KEY ("studio_info_id") REFERENCES "public"."studio_info"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_team_members_fk" FOREIGN KEY ("team_members_id") REFERENCES "public"."team_members"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_testimonials_fk" FOREIGN KEY ("testimonials_id") REFERENCES "public"."testimonials"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_awards_id_idx" ON "payload_locked_documents_rels" USING btree ("awards_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_studio_info_id_idx" ON "payload_locked_documents_rels" USING btree ("studio_info_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_team_members_id_idx" ON "payload_locked_documents_rels" USING btree ("team_members_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_testimonials_id_idx" ON "payload_locked_documents_rels" USING btree ("testimonials_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "awards" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "studio_info" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "team_members" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "testimonials" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "awards" CASCADE;
  DROP TABLE "studio_info" CASCADE;
  DROP TABLE "team_members" CASCADE;
  DROP TABLE "testimonials" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_awards_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_studio_info_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_team_members_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_testimonials_fk";
  
  DROP INDEX IF EXISTS "payload_locked_documents_rels_awards_id_idx";
  DROP INDEX IF EXISTS "payload_locked_documents_rels_studio_info_id_idx";
  DROP INDEX IF EXISTS "payload_locked_documents_rels_team_members_id_idx";
  DROP INDEX IF EXISTS "payload_locked_documents_rels_testimonials_id_idx";
  ALTER TABLE "blog" ALTER COLUMN "featured_image_id" SET NOT NULL;
  ALTER TABLE "projects" ALTER COLUMN "featured_image_id" SET NOT NULL;
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "awards_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "studio_info_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "team_members_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "testimonials_id";`)
}
