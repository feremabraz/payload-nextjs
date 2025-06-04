import { headers as getHeaders } from "next/headers.js";
import { getPayload } from "payload";
import React from "react";

import BlogNewsSection from "@components/blog-news-section";
import BudgetRequestSection from "@components/buget-request-section";
import FooterSection from "@components/footer-section";
import HeroSection from "@components/hero-section";
import NewsletterSection from "@components/newsletter-section";
import ProjectsSection from "@components/projects-section";
import StudioSection from "@components/studio-section";
import TestimonialsSection from "@components/testimonial-section";
import WhoAreWeSection from "@components/who-are-we-section";

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
      <NewsletterSection />
      <FooterSection />
    </>
  );
}
