"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "@i18n/navigation";
import type { Job } from "@payload-types";
import { useFormSubmission } from "@shared-hooks/use-form-submission";
import {
  FormFileField,
  FormTextAreaField,
  FormTextField,
} from "@shared-layout/react-hook-form-fields";
import { Badge } from "@shared-ui/badge";
import { Button } from "@shared-ui/button";
import { Form } from "@shared-ui/form";
import {
  ArrowLeft,
  Briefcase,
  Calendar,
  CheckCircle,
  Clock,
  DollarSign,
  MapPin,
  Users,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import * as z from "zod";

interface JobDetailProps {
  job: Job;
}

const jobApplicationSchema = z.object({
  name: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  message: z.string().min(1, "Cover letter is required"),
  cv: z
    .instanceof(File, { message: "CV file is required" })
    .refine((file) => file.size > 0, "CV file cannot be empty")
    .refine(
      (file) => file.type === "application/pdf" || file.type.startsWith("image/"),
      "CV must be a PDF or image file",
    ),
  portfolio: z
    .instanceof(File, { message: "Portfolio must be a file" })
    .optional()
    .refine(
      (file) => file === undefined || file.size > 0,
      "Portfolio file cannot be empty if provided",
    )
    .refine(
      (file) =>
        file === undefined || file.type === "application/pdf" || file.type.startsWith("image/"),
      "Portfolio must be a PDF or image file",
    ),
});

type JobApplicationFormData = z.infer<typeof jobApplicationSchema>;

export default function JobDetail({ job }: JobDetailProps) {
  const t = useTranslations();

  const form = useForm<JobApplicationFormData>({
    resolver: zodResolver(jobApplicationSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const { submitForm, isSubmitting } = useFormSubmission({
    endpoint: "/api/job-application",
    successMessage: t("forms.jobApplicationSuccess"),
    onSuccess: () => {
      form.reset();
    },
  });

  const onSubmit = async (data: JobApplicationFormData) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("message", data.message);
    formData.append("position", job.title);
    formData.append("jobId", job.id.toString());
    formData.append("cv", data.cv);
    if (data.portfolio) {
      formData.append("portfolio", data.portfolio);
    }

    await submitForm(formData);
  };

  const formatSalary = (salary: Job["salaryRange"]) => {
    if (!salary?.showSalary || !salary.minSalary || !salary.maxSalary) return null;
    const currencySymbol = {
      EUR: "€",
      USD: "$",
      GBP: "£",
    }[salary.currency || "EUR"];
    return `${currencySymbol}${salary.minSalary.toLocaleString()} - ${currencySymbol}${salary.maxSalary.toLocaleString()}`;
  };

  const getDeadlineInfo = (deadline?: string) => {
    if (!deadline) return null;
    const deadlineDate = new Date(deadline);
    const today = new Date();
    const diffTime = deadlineDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays < 0) return t("jobs.deadlinePassed");
    if (diffDays === 0) return t("jobs.deadlinePassed");
    if (diffDays === 1) return t("jobs.dayLeft");
    return t("jobs.daysLeft", { count: diffDays });
  };

  const departmentLabel = {
    architecture: t("jobs.departments.architecture"),
    design: t("jobs.departments.design"),
    engineering: t("jobs.departments.engineering"),
    "project-management": t("jobs.departments.projectManagement"),
    "business-development": t("jobs.departments.businessDevelopment"),
    administration: t("jobs.departments.administration"),
    other: t("jobs.departments.other"),
  }[job.department];

  const employmentTypeLabel = {
    "full-time": t("jobs.employmentTypes.fullTime"),
    "part-time": t("jobs.employmentTypes.partTime"),
    contract: t("jobs.employmentTypes.contract"),
    internship: t("jobs.employmentTypes.internship"),
    freelance: t("jobs.employmentTypes.freelance"),
  }[job.employmentType];

  const experienceLevelLabel = {
    entry: t("jobs.experienceLevels.entry"),
    mid: t("jobs.experienceLevels.mid"),
    senior: t("jobs.experienceLevels.senior"),
    lead: t("jobs.experienceLevels.lead"),
    executive: t("jobs.experienceLevels.executive"),
  }[job.experienceLevel];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Back Navigation */}
      <div className="flex items-center gap-4">
        <Button asChild variant="outline" size="sm">
          <Link href="/jobs" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            {t("jobs.backToJobs")}
          </Link>
        </Button>
      </div>
      {/* Job Header */}
      <div className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            {job.featured && <Badge variant="default">Featured</Badge>}
            {job.urgent && <Badge variant="destructive">Urgent</Badge>}
          </div>
          <div className="space-y-2">
            <p className="text-lg leading-relaxed text-muted-foreground">{job.summary}</p>
          </div>
        </div>
        {/* Job Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6 bg-muted/20 rounded-sm">
          <div className="flex items-center gap-3">
            <Briefcase className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="text-sm text-muted-foreground">{t("jobs.department")}</p>
              <p className="font-medium">{departmentLabel}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="text-sm text-muted-foreground">{t("jobs.location")}</p>
              <p className="font-medium">{job.location}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="text-sm text-muted-foreground">{t("jobs.employmentType")}</p>
              <p className="font-medium">{employmentTypeLabel}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Users className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="text-sm text-muted-foreground">{t("jobs.experienceLevel")}</p>
              <p className="font-medium">{experienceLevelLabel}</p>
            </div>
          </div>
          {formatSalary(job.salaryRange) && (
            <div className="flex items-center gap-3 md:col-span-2">
              <DollarSign className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">{t("jobs.salaryRange")}</p>
                <p className="font-medium">
                  {formatSalary(job.salaryRange)}
                  {job.salaryRange?.salaryNote && (
                    <span className="text-sm text-muted-foreground ml-1">
                      ({job.salaryRange.salaryNote})
                    </span>
                  )}
                </p>
              </div>
            </div>
          )}
          {job.applicationDeadline && (
            <div className="flex items-center gap-3 md:col-span-2">
              <Calendar className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">{t("jobs.applicationDeadline")}</p>
                <p
                  className={`font-medium ${getDeadlineInfo(job.applicationDeadline)?.includes("passed") ? "text-destructive" : ""}`}
                >
                  {new Date(job.applicationDeadline).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}{" "}
                  ({getDeadlineInfo(job.applicationDeadline)})
                  {new Date(job.applicationDeadline).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}{" "}
                  ({getDeadlineInfo(job.applicationDeadline)})
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Job Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Description */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">{t("jobs.jobDescription")}</h2>
            <p className="text-muted-foreground leading-relaxed">{job.description}</p>
          </section>
          {/* Responsibilities */}
          {job.responsibilities && job.responsibilities.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                {t("jobs.responsibilities")}
              </h2>
              <ul className="space-y-3">
                {job.responsibilities.map((item) => (
                  <li key={item.responsibility} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item.responsibility}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
          {/* Requirements */}
          {job.requirements && job.requirements.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">{t("jobs.requirements")}</h2>
              <ul className="space-y-3">
                {job.requirements.map((item) => (
                  <li key={item.requirement} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item.requirement}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
          {/* Preferred Qualifications */}
          {job.preferredQualifications && job.preferredQualifications.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                {t("jobs.preferredQualifications")}
              </h2>
              <ul className="space-y-3">
                {job.preferredQualifications.map((item) => (
                  <li key={item.id ?? item.qualification} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item.qualification}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
          {/* Benefits */}
          {job.benefits && job.benefits.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                {t("jobs.benefitsAndPerks")}
              </h2>
              <ul className="space-y-3">
                {job.benefits.map((item) => (
                  <li key={item.benefit} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item.benefit}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
          {/* Application Instructions */}
          {job.applicationInstructions && (
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                {t("jobs.applicationInstructions")}
              </h2>
              <p className="text-muted-foreground leading-relaxed">{job.applicationInstructions}</p>
            </section>
          )}
        </div>
        {/* Application Form */}
        <div className="lg:col-span-1">
          <div className="sticky top-8 space-y-6">
            <div className="p-6 bg-muted/20 rounded-sm space-y-4">
              <h3 className="text-xl font-semibold text-foreground">
                {t("jobs.applyForPosition")}
              </h3>
              <p className="text-sm text-muted-foreground">{t("jobs.readyToJoin")} </p>
            </div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 md:space-y-8">
                <FormTextField
                  control={form.control}
                  name="name"
                  label={t("jobs.fullName")}
                  placeholder={t("jobs.enterFullName")}
                  required
                />
                <FormTextField
                  control={form.control}
                  name="email"
                  label={t("jobs.emailAddress")}
                  type="email"
                  placeholder={t("jobs.enterEmail")}
                  required
                />
                <FormTextField
                  control={form.control}
                  name="phone"
                  label={t("jobs.phoneNumber")}
                  type="tel"
                  placeholder={t("jobs.enterPhoneNumber")}
                  required
                />
                <FormTextAreaField
                  control={form.control}
                  name="message"
                  label={t("jobs.coverLetter")}
                  placeholder={t("jobs.coverLetterPlaceholder")}
                  rows={4}
                  required
                />
                <FormFileField
                  control={form.control}
                  name="cv"
                  label={t("jobs.resumeCV")}
                  accept=".pdf,.doc,.docx"
                  required
                />
                <FormFileField
                  control={form.control}
                  name="portfolio"
                  label={t("jobs.portfolioOptional")}
                  accept=".pdf,.zip"
                />
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? t("common.submitting") : t("jobs.submitApplication")}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
