import { headers as getHeaders } from "next/headers.js";
import { getPayload } from "payload";
import React from "react";

import BudgetRequestSection from "@/app/(frontend)/components/buget-request-section";
import HeroSection from "@/app/(frontend)/components/hero-section";
import WhoAreWeSection from "@/app/(frontend)/components/who-are-we-section";
import BlogNewsSection from "@components/blog-news-section";
import ProjectsSection from "@components/projects-section";
import StudioSection from "@components/studio-section";
import TestimonialsSection from "@components/testimonial-section";

import config from "@/payload.config";

export default async function HomePage() {
  const headers = await getHeaders();
  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });
  const { user: _user } = await payload.auth({ headers });

  return (
    <>
      <HeroSection />
      <WhoAreWeSection />
      <ProjectsSection />
      <TestimonialsSection />
      <BudgetRequestSection />
      <StudioSection />
      <BlogNewsSection />
    </>
  );
}
