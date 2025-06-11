import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_company_settings_settings_social_links_platform" AS ENUM('facebook', 'instagram', 'linkedin', 'twitter', 'youtube');
  CREATE TYPE "public"."enum_company_settings_category" AS ENUM('contact', 'social', 'company', 'legal', 'other');
  CREATE TYPE "public"."enum_values_and_mission_type" AS ENUM('value', 'mission', 'vision', 'principle');
  CREATE TABLE IF NOT EXISTS "company_settings_settings_social_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"platform" "enum_company_settings_settings_social_links_platform",
  	"url" varchar,
  	"is_active" boolean DEFAULT true
  );
  
  CREATE TABLE IF NOT EXISTS "company_settings" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"category" "enum_company_settings_category" NOT NULL,
  	"settings_email" varchar,
  	"settings_phone" varchar,
  	"settings_address" varchar,
  	"settings_company_name" varchar,
  	"settings_company_description" varchar,
  	"settings_copyright" varchar,
  	"settings_custom_value" varchar,
  	"is_active" boolean DEFAULT true,
  	"order" numeric DEFAULT 0,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "values_and_mission" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"type" "enum_values_and_mission_type" DEFAULT 'value' NOT NULL,
  	"content" varchar NOT NULL,
  	"summary" varchar,
  	"icon" varchar,
  	"order" numeric DEFAULT 0,
  	"published" boolean DEFAULT true,
  	"featured_on_homepage" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "company_settings_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "values_and_mission_id" integer;
  DO $$ BEGIN
   ALTER TABLE "company_settings_settings_social_links" ADD CONSTRAINT "company_settings_settings_social_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."company_settings"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "company_settings_settings_social_links_order_idx" ON "company_settings_settings_social_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "company_settings_settings_social_links_parent_id_idx" ON "company_settings_settings_social_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "company_settings_updated_at_idx" ON "company_settings" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "company_settings_created_at_idx" ON "company_settings" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "values_and_mission_updated_at_idx" ON "values_and_mission" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "values_and_mission_created_at_idx" ON "values_and_mission" USING btree ("created_at");
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_company_settings_fk" FOREIGN KEY ("company_settings_id") REFERENCES "public"."company_settings"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_values_and_mission_fk" FOREIGN KEY ("values_and_mission_id") REFERENCES "public"."values_and_mission"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_company_settings_id_idx" ON "payload_locked_documents_rels" USING btree ("company_settings_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_values_and_mission_id_idx" ON "payload_locked_documents_rels" USING btree ("values_and_mission_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "company_settings_settings_social_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "company_settings" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "values_and_mission" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "company_settings_settings_social_links" CASCADE;
  DROP TABLE "company_settings" CASCADE;
  DROP TABLE "values_and_mission" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_company_settings_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_values_and_mission_fk";
  
  DROP INDEX IF EXISTS "payload_locked_documents_rels_company_settings_id_idx";
  DROP INDEX IF EXISTS "payload_locked_documents_rels_values_and_mission_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "company_settings_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "values_and_mission_id";
  DROP TYPE "public"."enum_company_settings_settings_social_links_platform";
  DROP TYPE "public"."enum_company_settings_category";
  DROP TYPE "public"."enum_values_and_mission_type";`)
}
