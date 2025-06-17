import { setRequestLocale } from "next-intl/server";
import { headers as getHeaders } from "next/headers";
import { getPayload } from "payload";

import type { Locale } from "@/types/locale";
import NavigationSection from "@navigation/navigation-section";
import { getProjects } from "@shared-lib/payload-api";
import FooterSection from "@shared/footer-section";
import ProjectsClientWrapper from "@wrappers/projects-client-wrapper";

import config from "@/payload.config";

export default async function ProjectsPage(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;
  const { locale } = params;

  // Type guard to ensure locale is valid
  const validLocale: Locale = locale === "en" || locale === "pt" ? (locale as Locale) : "en";

  // Enable static rendering
  setRequestLocale(validLocale);

  const headers = await getHeaders();
  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });
  const { user: _user } = await payload.auth({ headers });

  const projects = await getProjects(undefined, undefined, validLocale);

  return (
    <>
      <NavigationSection />
      <ProjectsClientWrapper initialProjects={projects} />
      <FooterSection locale={validLocale} />
    </>
  );
}
