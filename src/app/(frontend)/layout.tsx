import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";
import type React from "react";
import "../global.css";
import { ThemeProvider } from "@shared/theme-provider";

const titilliumWeb = Titillium_Web({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
  variable: "--font-titillium-web",
});

export const metadata: Metadata = {
  title: {
    default: "Bruno Câmara Arquitetos",
    template: "%s | Bruno Câmara Arquitetos",
  },
  description:
    "Portuguese construction company specializing in residential, cultural, corporate and public projects",
  keywords: [
    "architecture",
    "construction",
    "residential projects",
    "cultural projects",
    "corporate projects",
    "public projects",
    "Portuguese architecture",
    "Bruno Câmara",
    "arquitetos",
    "design",
  ],
  authors: [{ name: "Bruno Câmara Arquitetos" }],
  creator: "Bruno Câmara Arquitetos",
  publisher: "Bruno Câmara Arquitetos",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://brunocamara.com"), // TODO: Update with actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bruno Câmara Arquitetos",
    description:
      "Portuguese construction company specializing in residential, cultural, corporate and public projects",
    type: "website",
    locale: "en_US",
    url: "https://brunocamara.com", // TODO: Update with actual domain
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
  twitter: {
    card: "summary_large_image",
    title: "Bruno Câmara Arquitetos",
    description:
      "Portuguese construction company specializing in residential, cultural, corporate and public projects",
    images: ["/logo.webp"],
    creator: "@brunocamara", // TODO: Update with actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/favicon.svg",
        color: "#e2e2e2",
      },
    ],
  },
  manifest: "/site.webmanifest",
  category: "architecture",
};

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#e2e2e2" />
        <meta name="color-scheme" content="light" />
      </head>
      <body className={`${titilliumWeb.className} font-titillium`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
