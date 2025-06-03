import { headers as getHeaders } from "next/headers.js";
import { getPayload } from "payload";
import React from "react";

import Hero from "@components/hero";
import ProjectsSection from "@components/projects-section";
import TestimonialsSection from "@components/testimonial-section";
import WhoAreWe from "@components/who-are-we";
import BudgetRequest from "./components/buget-request";

import { projects } from "@lib/project-data";

import config from "@/payload.config";

export default async function HomePage() {
  const headers = await getHeaders();
  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });
  const { user: _user } = await payload.auth({ headers });

  return (
    <>
      <Hero />
      <WhoAreWe />
      <ProjectsSection projects={projects} />
      <TestimonialsSection />
      <BudgetRequest />
    </>
  );
}
