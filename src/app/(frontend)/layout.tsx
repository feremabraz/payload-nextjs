import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";
import type React from "react";
import "../global.css";

const titilliumWeb = Titillium_Web({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
  variable: "--font-titillium-web",
});

export const metadata: Metadata = {
  title: "Bruno Câmara Arquitetos",
  description:
    "Portuguese construction company specializing in residential, cultural, corporate and public projects",
};

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <html lang="en">
      <body className={`${titilliumWeb.className} font-titillium`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
