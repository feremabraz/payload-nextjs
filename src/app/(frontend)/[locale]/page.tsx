import { setRequestLocale } from "next-intl/server";
import { headers as getHeaders } from "next/headers.js";
import { getPayload } from "payload";
import React from "react";

import BlogNewsSection from "@blog/blog-news-section";
import BudgetRequestSection from "@budget/budget-request-section";
import HeroSection from "@landing/hero-section";
import NewsletterSection from "@landing/newsletter-section";
import WhoAreWeSection from "@landing/who-are-we-section";
import ProjectsSection from "@projects/projects-section";
import FooterSection from "@shared/footer-section";
import TestimonialsSection from "@shared/testimonial-section";
import StudioSection from "@studio/studio-section";
// import LocaleDebug from "../_components/debug/locale-debug";

import config from "@/payload.config";

export default async function HomePage(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;
  const { locale } = params;

  // Enable static rendering
  setRequestLocale(locale);

  const headers = await getHeaders();
  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });
  const { user: _user } = await payload.auth({ headers });

  return (
    <>
      {/* <LocaleDebug pageLocale={locale} /> */}
      <HeroSection />
      <WhoAreWeSection locale={locale} />
      <ProjectsSection locale={locale} />
      <TestimonialsSection locale={locale} />
      <BudgetRequestSection locale={locale} />
      <StudioSection locale={locale} />
      <BlogNewsSection locale={locale} />
      <NewsletterSection locale={locale} />
      <FooterSection locale={locale} />
    </>
  );
}
