import { Link } from "@i18n/navigation";
import type { Job } from "@payload-types";
import { SimpleFormContainer } from "@shared-layout/form-container";
import { FileField, TextAreaField, TextField } from "@shared-layout/form-fields";
import { Badge } from "@shared-ui/badge";
import { Button } from "@shared-ui/button";
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

interface JobDetailProps {
  job: Job;
}

export default function JobDetail({ job }: JobDetailProps) {
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
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Back Navigation */}
      <div className="flex items-center gap-4">
        <Button asChild variant="outline" size="sm">
          <Link href="/jobs" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Jobs
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
              <p className="text-sm text-muted-foreground">Department</p>
              <p className="font-medium">{departmentLabel}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="text-sm text-muted-foreground">Location</p>
              <p className="font-medium">{job.location}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="text-sm text-muted-foreground">Employment Type</p>
              <p className="font-medium">{employmentTypeLabel}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Users className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="text-sm text-muted-foreground">Experience Level</p>
              <p className="font-medium">{experienceLevelLabel}</p>
            </div>
          </div>
          {formatSalary(job.salaryRange) && (
            <div className="flex items-center gap-3 md:col-span-2">
              <DollarSign className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Salary Range</p>
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
                <p className="text-sm text-muted-foreground">Application Deadline</p>
                <p
                  className={`font-medium ${getDeadlineInfo(job.applicationDeadline)?.includes("passed") ? "text-destructive" : ""}`}
                >
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
            <h2 className="text-2xl font-semibold text-foreground">Job Description</h2>
            <p className="text-muted-foreground leading-relaxed">{job.description}</p>
          </section>
          {/* Responsibilities */}
          {job.responsibilities && job.responsibilities.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Key Responsibilities</h2>
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
              <h2 className="text-2xl font-semibold text-foreground">Requirements</h2>
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
              <h2 className="text-2xl font-semibold text-foreground">Preferred Qualifications</h2>
              <ul className="space-y-3">
                {job.preferredQualifications.map((item) => (
                  <li key={item.qualification} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item.qualification}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
          {/* Benefits */}
          {job.benefits && job.benefits.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Benefits & Perks</h2>
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
              <h2 className="text-2xl font-semibold text-foreground">Application Instructions</h2>
              <p className="text-muted-foreground leading-relaxed">{job.applicationInstructions}</p>
            </section>
          )}
        </div>
        {/* Application Form */}
        <div className="lg:col-span-1">
          <div className="sticky top-8 space-y-6">
            <div className="p-6 bg-muted/20 rounded-sm space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Apply for this Position</h3>
              <p className="text-sm text-muted-foreground">
                Ready to join our team? Submit your application below.
              </p>
            </div>
            <SimpleFormContainer>
              <TextField
                label="Full Name"
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                required
              />
              <TextField
                label="Email Address"
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                required
              />
              <TextField
                label="Phone Number"
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                required
              />
              <TextAreaField
                label="Cover Letter"
                id="message"
                name="message"
                placeholder="Tell us why you're interested in this position..."
                rows={4}
                required
              />
              <FileField label="Resume/CV" id="cv" name="cv" accept=".pdf,.doc,.docx" required />
              <FileField
                label="Portfolio (Optional)"
                id="portfolio"
                name="portfolio"
                accept=".pdf,.zip"
              />
              <input type="hidden" name="position" value={job.title} />
              <input type="hidden" name="jobId" value={job.id} />
              <Button type="submit" className="w-full">
                Submit Application
              </Button>
            </SimpleFormContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
