import { headers as getHeaders } from "next/headers.js";
import { getPayload } from "payload";
import React from "react";

import AboutUs from "./components/about-us";
import Blog from "./components/blog";
import GetQuote from "./components/get-quote";
import Hero from "./components/hero";
import Introduction from "./components/introduction";
import Projects from "./components/projects";
import Testimonials from "./components/testimonials";

import config from "@/payload.config";

export default async function HomePage() {
  const headers = await getHeaders();
  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });
  const { user: _user } = await payload.auth({ headers });

  return (
    <>
      <Hero />
      <Introduction />
      <Projects />
      <AboutUs />
      <Testimonials />
      <Blog />
      <GetQuote />
    </>
  );
}
