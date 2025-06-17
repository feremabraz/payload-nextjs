import { setRequestLocale } from "next-intl/server";
import { headers as getHeaders } from "next/headers.js";
import { getPayload } from "payload";
import React from "react";

import type { Locale } from "@/types/locale";
import BlogNewsSection from "@blog/blog-news-section";
import BudgetRequestSection from "@budget/budget-request-section";
import NewsletterSection from "@components/landing/newsletter-section";
import HeroSection from "@landing/hero-section";
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

  // Type guard to ensure locale is valid
  const validLocale: Locale = locale === "en" || locale === "pt" ? (locale as Locale) : "en";

  setRequestLocale(validLocale);

  const headers = await getHeaders();
  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });
  const { user: _user } = await payload.auth({ headers });

  return (
    <>
      {/* <LocaleDebug pageLocale={validLocale} /> */}
      <HeroSection />
      <WhoAreWeSection locale={validLocale} />
      <ProjectsSection locale={validLocale} />
      <TestimonialsSection locale={validLocale} />
      <BudgetRequestSection />
      <StudioSection locale={validLocale} />
      <BlogNewsSection locale={validLocale} />
      <NewsletterSection locale={validLocale} />
      <FooterSection locale={validLocale} />
    </>
  );
}
