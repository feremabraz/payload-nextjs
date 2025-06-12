import { getFeaturedJobs, getJobs } from "@actions/jobs";
import { Link } from "@i18n/navigation";
import { Button } from "@shared-ui/button";
import { EmptyState } from "@shared/empty-state";
import { Briefcase } from "lucide-react";
import JobCard from "./job-card";

export default async function JobsSection() {
  const jobs = await getJobs();
  const featuredJobs = await getFeaturedJobs();

  if (jobs.length === 0) {
    return (
      <div className="space-y-8">
        <EmptyState
          icon={<Briefcase className="h-12 w-12" />}
          title="No Open Positions"
          description="We don't have any open positions at the moment, but we're always looking for talented individuals to join our team."
          action={
            <Button asChild variant="outline">
              <Link href="/budget">Get In Touch</Link>
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
            <h2 className="text-2xl font-semibold text-foreground">Featured Positions</h2>
            <p className="text-muted-foreground">
              Priority openings where we're actively seeking qualified candidates.
            </p>
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
            {featuredJobs.length > 0 ? "All Open Positions" : "Open Positions"}
          </h2>
          <p className="text-muted-foreground">
            Explore all current opportunities to join our innovative architecture team.
          </p>
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
