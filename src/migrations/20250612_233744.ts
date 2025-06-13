import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_legal_pages_page_type" AS ENUM('privacy', 'terms', 'cookies', 'data-protection', 'disclaimer', 'other');
  CREATE TYPE "public"."enum_jobs_department" AS ENUM('architecture', 'design', 'engineering', 'project-management', 'business-development', 'administration', 'other');
  CREATE TYPE "public"."enum_jobs_employment_type" AS ENUM('full-time', 'part-time', 'contract', 'internship', 'freelance');
  CREATE TYPE "public"."enum_jobs_experience_level" AS ENUM('entry', 'mid', 'senior', 'lead', 'executive');
  CREATE TYPE "public"."enum_jobs_salary_range_currency" AS ENUM('EUR', 'USD', 'GBP');
  CREATE TYPE "public"."enum_job_applications_status" AS ENUM('received', 'under-review', 'interview-scheduled', 'interview-completed', 'offer-made', 'hired', 'declined', 'withdrawn');
  CREATE TYPE "public"."enum_budget_requests_status" AS ENUM('pending', 'in-review', 'contacted', 'quoted', 'closed');
  CREATE TYPE "public"."enum_budget_requests_priority" AS ENUM('low', 'normal', 'high', 'urgent');
  CREATE TYPE "public"."enum_newsletter_status" AS ENUM('active', 'unsubscribed', 'bounced');
  CREATE TABLE IF NOT EXISTS "legal_pages_sections_subsections_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "legal_pages_sections_subsections" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"subheading" varchar NOT NULL,
  	"content" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "legal_pages_sections_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "legal_pages_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"content" varchar NOT NULL,
  	"order" numeric DEFAULT 0
  );
  
  CREATE TABLE IF NOT EXISTS "legal_pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"page_type" "enum_legal_pages_page_type" NOT NULL,
  	"slug" varchar NOT NULL,
  	"last_updated" timestamp(3) with time zone NOT NULL,
  	"introduction_subtitle" varchar,
  	"introduction_content" varchar NOT NULL,
  	"contact_info_include_contact" boolean DEFAULT true,
  	"contact_info_heading" varchar DEFAULT 'Contact Us',
  	"contact_info_content" varchar,
  	"published" boolean DEFAULT true,
  	"order" numeric DEFAULT 0,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "jobs_responsibilities" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"responsibility" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "jobs_requirements" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"requirement" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "jobs_preferred_qualifications" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"qualification" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "jobs_benefits" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"benefit" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "jobs" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"department" "enum_jobs_department" NOT NULL,
  	"location" varchar NOT NULL,
  	"employment_type" "enum_jobs_employment_type" NOT NULL,
  	"experience_level" "enum_jobs_experience_level" NOT NULL,
  	"summary" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"salary_range_show_salary" boolean DEFAULT false,
  	"salary_range_min_salary" numeric,
  	"salary_range_max_salary" numeric,
  	"salary_range_currency" "enum_jobs_salary_range_currency" DEFAULT 'EUR',
  	"salary_range_salary_note" varchar,
  	"application_instructions" varchar,
  	"application_deadline" timestamp(3) with time zone,
  	"contact_email" varchar,
  	"featured" boolean DEFAULT false,
  	"urgent" boolean DEFAULT false,
  	"published" boolean DEFAULT true,
  	"order" numeric DEFAULT 0,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "job_applications" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"email" varchar NOT NULL,
  	"phone" varchar NOT NULL,
  	"position" varchar NOT NULL,
  	"job_id_id" integer,
  	"cover_letter" varchar,
  	"cv_id" integer NOT NULL,
  	"portfolio_id" integer,
  	"status" "enum_job_applications_status" DEFAULT 'received',
  	"rating" numeric,
  	"interview_date" timestamp(3) with time zone,
  	"notes" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE IF NOT EXISTS "budget_requests" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"email" varchar NOT NULL,
  	"phone" varchar NOT NULL,
  	"message" varchar,
  	"status" "enum_budget_requests_status" DEFAULT 'pending',
  	"priority" "enum_budget_requests_priority" DEFAULT 'normal',
  	"notes" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "newsletter" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"email" varchar NOT NULL,
  	"status" "enum_newsletter_status" DEFAULT 'active',
  	"subscribed_at" timestamp(3) with time zone,
  	"unsubscribed_at" timestamp(3) with time zone,
  	"source" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "legal_pages_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "jobs_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "job_applications_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "budget_requests_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "newsletter_id" integer;
  DO $$ BEGIN
   ALTER TABLE "legal_pages_sections_subsections_list_items" ADD CONSTRAINT "legal_pages_sections_subsections_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."legal_pages_sections_subsections"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "legal_pages_sections_subsections" ADD CONSTRAINT "legal_pages_sections_subsections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."legal_pages_sections"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "legal_pages_sections_list_items" ADD CONSTRAINT "legal_pages_sections_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."legal_pages_sections"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "legal_pages_sections" ADD CONSTRAINT "legal_pages_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."legal_pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "jobs_responsibilities" ADD CONSTRAINT "jobs_responsibilities_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."jobs"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "jobs_requirements" ADD CONSTRAINT "jobs_requirements_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."jobs"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "jobs_preferred_qualifications" ADD CONSTRAINT "jobs_preferred_qualifications_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."jobs"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "jobs_benefits" ADD CONSTRAINT "jobs_benefits_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."jobs"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "job_applications" ADD CONSTRAINT "job_applications_job_id_id_jobs_id_fk" FOREIGN KEY ("job_id_id") REFERENCES "public"."jobs"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "job_applications" ADD CONSTRAINT "job_applications_cv_id_media_id_fk" FOREIGN KEY ("cv_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "job_applications" ADD CONSTRAINT "job_applications_portfolio_id_media_id_fk" FOREIGN KEY ("portfolio_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "legal_pages_sections_subsections_list_items_order_idx" ON "legal_pages_sections_subsections_list_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "legal_pages_sections_subsections_list_items_parent_id_idx" ON "legal_pages_sections_subsections_list_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "legal_pages_sections_subsections_order_idx" ON "legal_pages_sections_subsections" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "legal_pages_sections_subsections_parent_id_idx" ON "legal_pages_sections_subsections" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "legal_pages_sections_list_items_order_idx" ON "legal_pages_sections_list_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "legal_pages_sections_list_items_parent_id_idx" ON "legal_pages_sections_list_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "legal_pages_sections_order_idx" ON "legal_pages_sections" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "legal_pages_sections_parent_id_idx" ON "legal_pages_sections" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "legal_pages_slug_idx" ON "legal_pages" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "legal_pages_updated_at_idx" ON "legal_pages" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "legal_pages_created_at_idx" ON "legal_pages" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "jobs_responsibilities_order_idx" ON "jobs_responsibilities" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "jobs_responsibilities_parent_id_idx" ON "jobs_responsibilities" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "jobs_requirements_order_idx" ON "jobs_requirements" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "jobs_requirements_parent_id_idx" ON "jobs_requirements" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "jobs_preferred_qualifications_order_idx" ON "jobs_preferred_qualifications" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "jobs_preferred_qualifications_parent_id_idx" ON "jobs_preferred_qualifications" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "jobs_benefits_order_idx" ON "jobs_benefits" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "jobs_benefits_parent_id_idx" ON "jobs_benefits" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "jobs_slug_idx" ON "jobs" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "jobs_updated_at_idx" ON "jobs" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "jobs_created_at_idx" ON "jobs" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "job_applications_job_id_idx" ON "job_applications" USING btree ("job_id_id");
  CREATE INDEX IF NOT EXISTS "job_applications_cv_idx" ON "job_applications" USING btree ("cv_id");
  CREATE INDEX IF NOT EXISTS "job_applications_portfolio_idx" ON "job_applications" USING btree ("portfolio_id");
  CREATE INDEX IF NOT EXISTS "job_applications_updated_at_idx" ON "job_applications" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "job_applications_created_at_idx" ON "job_applications" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "job_applications_filename_idx" ON "job_applications" USING btree ("filename");
  CREATE INDEX IF NOT EXISTS "budget_requests_updated_at_idx" ON "budget_requests" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "budget_requests_created_at_idx" ON "budget_requests" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "newsletter_email_idx" ON "newsletter" USING btree ("email");
  CREATE INDEX IF NOT EXISTS "newsletter_updated_at_idx" ON "newsletter" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "newsletter_created_at_idx" ON "newsletter" USING btree ("created_at");
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_legal_pages_fk" FOREIGN KEY ("legal_pages_id") REFERENCES "public"."legal_pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_jobs_fk" FOREIGN KEY ("jobs_id") REFERENCES "public"."jobs"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_job_applications_fk" FOREIGN KEY ("job_applications_id") REFERENCES "public"."job_applications"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_budget_requests_fk" FOREIGN KEY ("budget_requests_id") REFERENCES "public"."budget_requests"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_newsletter_fk" FOREIGN KEY ("newsletter_id") REFERENCES "public"."newsletter"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_legal_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("legal_pages_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_jobs_id_idx" ON "payload_locked_documents_rels" USING btree ("jobs_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_job_applications_id_idx" ON "payload_locked_documents_rels" USING btree ("job_applications_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_budget_requests_id_idx" ON "payload_locked_documents_rels" USING btree ("budget_requests_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_newsletter_id_idx" ON "payload_locked_documents_rels" USING btree ("newsletter_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "legal_pages_sections_subsections_list_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "legal_pages_sections_subsections" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "legal_pages_sections_list_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "legal_pages_sections" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "legal_pages" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "jobs_responsibilities" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "jobs_requirements" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "jobs_preferred_qualifications" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "jobs_benefits" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "jobs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "job_applications" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "budget_requests" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsletter" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "legal_pages_sections_subsections_list_items" CASCADE;
  DROP TABLE "legal_pages_sections_subsections" CASCADE;
  DROP TABLE "legal_pages_sections_list_items" CASCADE;
  DROP TABLE "legal_pages_sections" CASCADE;
  DROP TABLE "legal_pages" CASCADE;
  DROP TABLE "jobs_responsibilities" CASCADE;
  DROP TABLE "jobs_requirements" CASCADE;
  DROP TABLE "jobs_preferred_qualifications" CASCADE;
  DROP TABLE "jobs_benefits" CASCADE;
  DROP TABLE "jobs" CASCADE;
  DROP TABLE "job_applications" CASCADE;
  DROP TABLE "budget_requests" CASCADE;
  DROP TABLE "newsletter" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_legal_pages_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_jobs_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_job_applications_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_budget_requests_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_newsletter_fk";
  
  DROP INDEX IF EXISTS "payload_locked_documents_rels_legal_pages_id_idx";
  DROP INDEX IF EXISTS "payload_locked_documents_rels_jobs_id_idx";
  DROP INDEX IF EXISTS "payload_locked_documents_rels_job_applications_id_idx";
  DROP INDEX IF EXISTS "payload_locked_documents_rels_budget_requests_id_idx";
  DROP INDEX IF EXISTS "payload_locked_documents_rels_newsletter_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "legal_pages_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "jobs_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "job_applications_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "budget_requests_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "newsletter_id";
  DROP TYPE "public"."enum_legal_pages_page_type";
  DROP TYPE "public"."enum_jobs_department";
  DROP TYPE "public"."enum_jobs_employment_type";
  DROP TYPE "public"."enum_jobs_experience_level";
  DROP TYPE "public"."enum_jobs_salary_range_currency";
  DROP TYPE "public"."enum_job_applications_status";
  DROP TYPE "public"."enum_budget_requests_status";
  DROP TYPE "public"."enum_budget_requests_priority";
  DROP TYPE "public"."enum_newsletter_status";`)
}
