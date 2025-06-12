import { getJobBySlug } from "@actions/jobs";
import JobDetail from "@components/jobs/job-detail";
import NavigationSection from "@navigation/navigation-section";
import FooterSection from "@shared/footer-section";
import { SectionContainer, SectionHeader } from "@shared/section-container";
import { notFound } from "next/navigation";

interface JobPageProps {
  params: Promise<{
    slug: string;
    locale: string;
  }>;
}

export default async function JobPage({ params }: JobPageProps) {
  const { slug, locale } = await params;
  const job = await getJobBySlug(slug);

  if (!job) {
    notFound();
  }

  return (
    <>
      <NavigationSection />
      <SectionContainer width="container" variant="loose">
        <SectionHeader title={job.title} />
        <JobDetail job={job} />
      </SectionContainer>
      <FooterSection locale={locale} />
    </>
  );
}
