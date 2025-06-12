import { routing } from "@i18n/routing";
import { ThemeProvider } from "@shared/theme-provider";
import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import { Titillium_Web } from "next/font/google";
import { notFound } from "next/navigation";
import type React from "react";
import "../../global.css";

const titilliumWeb = Titillium_Web({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
  variable: "--font-titillium-web",
});

// Generate static params for all locales
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface Props {
  params: Promise<{ locale: string }>;
  children: React.ReactNode;
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Load messages for the locale
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#e2e2e2" />
        <meta name="color-scheme" content="light" />
      </head>
      <body className={`${titilliumWeb.className} font-titillium`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <NextIntlClientProvider messages={messages} locale={locale}>
            <main>{children}</main>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

// Generate metadata based on locale
export async function generateMetadata({
  params,
}: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  const titles = {
    en: "Bruno Câmara Arquitetos",
    pt: "Bruno Câmara Arquitetos",
  };

  const descriptions = {
    en: "Portuguese construction company specializing in residential, cultural, corporate and public projects",
    pt: "Empresa portuguesa de construção especializada em projetos residenciais, culturais, corporativos e públicos",
  };

  return {
    title: {
      default: titles[locale as keyof typeof titles] || titles.en,
      template: `%s | ${titles[locale as keyof typeof titles] || titles.en}`,
    },
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
    keywords: [
      locale === "pt" ? "arquitetura" : "architecture",
      locale === "pt" ? "construção" : "construction",
      locale === "pt" ? "projetos residenciais" : "residential projects",
      locale === "pt" ? "projetos culturais" : "cultural projects",
      locale === "pt" ? "projetos corporativos" : "corporate projects",
      locale === "pt" ? "projetos públicos" : "public projects",
      locale === "pt" ? "arquitetura portuguesa" : "Portuguese architecture",
      "Bruno Câmara",
      "arquitetos",
      locale === "pt" ? "design" : "design",
    ],
    authors: [{ name: "Bruno Câmara Arquitetos" }],
    creator: "Bruno Câmara Arquitetos",
    publisher: "Bruno Câmara Arquitetos",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL("https://brunocamara.com"),
    alternates: {
      canonical: "/",
      languages: {
        en: "/en",
        pt: "/pt",
      },
    },
    openGraph: {
      title: titles[locale as keyof typeof titles] || titles.en,
      description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
      type: "website",
      locale: locale === "pt" ? "pt_PT" : "en_US",
      url: "https://brunocamara.com",
      siteName: "Bruno Câmara Arquitetos",
      images: [
        {
          url: "/logo.webp",
          width: 1200,
          height: 630,
          alt: "Bruno Câmara Arquitetos Logo",
        },
      ],
    },
  };
}
