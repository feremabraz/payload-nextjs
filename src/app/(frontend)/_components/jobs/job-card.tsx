import type { Job } from "@payload-types";
import { Badge } from "@shared-ui/badge";
import { Button } from "@shared-ui/button";
import { Briefcase, Calendar, Clock, DollarSign, MapPin, Users } from "lucide-react";
import Link from "next/link";

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
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
    if (diffDays < 0) return "Deadline passed";
    if (diffDays === 0) return "Application deadline today";
    if (diffDays === 1) return "1 day left";
    return `${diffDays} days left`;
  };

  const departmentLabel = {
    architecture: "Architecture",
    design: "Design",
    engineering: "Engineering",
    "project-management": "Project Management",
    "business-development": "Business Development",
    administration: "Administration",
    other: "Other",
  }[job.department];

  const employmentTypeLabel = {
    "full-time": "Full-time",
    "part-time": "Part-time",
    contract: "Contract",
    internship: "Internship",
    freelance: "Freelance",
  }[job.employmentType];

  const experienceLevelLabel = {
    entry: "Entry Level",
    mid: "Mid Level",
    senior: "Senior Level",
    lead: "Lead/Principal",
    executive: "Executive",
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
                  Featured
                </Badge>
              )}
              {job.urgent && (
                <Badge variant="destructive" className="text-xs">
                  Urgent
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
            <Link href={`/jobs/${job.slug}`}>View Details & Apply</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
