import { Titillium_Web } from "next/font/google";
import type React from "react";
import "./global.css";
import { ThemeProvider } from "@shared/theme-provider";

const titilliumWeb = Titillium_Web({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
  variable: "--font-titillium-web",
});

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
