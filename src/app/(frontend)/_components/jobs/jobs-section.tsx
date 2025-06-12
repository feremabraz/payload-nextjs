import { getFeaturedJobs, getJobs } from "@actions/jobs";
import { Link } from "@i18n/navigation";
import { Button } from "@shared-ui/button";
import { EmptyState } from "@shared/empty-state";
import { Briefcase } from "lucide-react";
import { getTranslations } from "next-intl/server";
import JobCard from "./job-card";

interface JobsSectionProps {
  locale: string;
}

export default async function JobsSection({ locale }: JobsSectionProps) {
  const t = await getTranslations({ locale });
  const jobs = await getJobs();
  const featuredJobs = await getFeaturedJobs();

  if (jobs.length === 0) {
    return (
      <div className="space-y-8">
        <EmptyState
          icon={<Briefcase className="h-12 w-12" />}
          title="jobs.noJobs"
          description="jobs.noJobsDescription"
          action={
            <Button asChild variant="outline">
              <Link href="/budget">{t("common.contactUs")}</Link>
            </Button>
          }
        />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Featured Jobs */}
      {featuredJobs.length > 0 && (
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-foreground">
              {t("jobs.featuredPositions")}
            </h2>
            <p className="text-muted-foreground">{t("jobs.priorityOpeningsDescription")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      )}
      {/* All Jobs */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-foreground">
            {featuredJobs.length > 0 ? t("jobs.allOpenPositions") : t("jobs.title")}
          </h2>
          <p className="text-muted-foreground">{t("jobs.exploreOpportunities")}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
}
