import { Link } from "@i18n/navigation";
import type { Job } from "@payload-types";
import { Badge } from "@shared-ui/badge";
import { Button } from "@shared-ui/button";
import { Briefcase, Calendar, Clock, DollarSign, MapPin, Users } from "lucide-react";
import { useTranslations } from "next-intl";

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  const t = useTranslations();
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
    <div className="group relative bg-background border border-border rounded-sm p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/20">
      <div className="flex flex-col space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              {job.featured && (
                <Badge variant="default" className="text-xs">
                  {t("jobs.featured")}
                </Badge>
              )}
              {job.urgent && (
                <Badge variant="destructive" className="text-xs">
                  {t("jobs.urgent")}
                </Badge>
              )}
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
              {job.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">{job.summary}</p>
          </div>
        </div>
        {/* Job Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Briefcase className="h-4 w-4 flex-shrink-0" />
            <span>{departmentLabel}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4 flex-shrink-0" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="h-4 w-4 flex-shrink-0" />
            <span>{employmentTypeLabel}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="h-4 w-4 flex-shrink-0" />
            <span>{experienceLevelLabel}</span>
          </div>
          {formatSalary(job.salaryRange) && (
            <div className="flex items-center gap-2 text-muted-foreground sm:col-span-2">
              <DollarSign className="h-4 w-4 flex-shrink-0" />
              <span>
                {formatSalary(job.salaryRange)}
                {job.salaryRange?.salaryNote && (
                  <span className="text-xs ml-1">({job.salaryRange.salaryNote})</span>
                )}
              </span>
            </div>
          )}
          {job.applicationDeadline && (
            <div className="flex items-center gap-2 text-muted-foreground sm:col-span-2">
              <Calendar className="h-4 w-4 flex-shrink-0" />
              <span
                className={`${getDeadlineInfo(job.applicationDeadline)?.includes("passed") ? "text-destructive" : ""}`}
              >
                {getDeadlineInfo(job.applicationDeadline)}
              </span>
            </div>
          )}
        </div>
        {/* Action */}
        <div className="pt-4 border-t border-border">
          <Button asChild className="w-full">
            <Link href={`/jobs/${job.slug}`}>{t("jobs.applyNow")}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
