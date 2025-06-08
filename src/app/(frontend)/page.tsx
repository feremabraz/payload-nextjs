import { headers as getHeaders } from "next/headers.js";
import { getPayload } from "payload";
import React from "react";

import BlogNewsSection from "@sections/blog-news-section";
import BudgetRequestSection from "@sections/budget-request-section";
import FooterSection from "@sections/footer-section";
import HeroSection from "@sections/hero-section";
import NewsletterSection from "@sections/newsletter-section";
import ProjectsSection from "@sections/projects-section";
import StudioSection from "@sections/studio-section";
import TestimonialsSection from "@sections/testimonial-section";
import WhoAreWeSection from "@sections/who-are-we-section";

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
