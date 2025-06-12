import type React from "react";

// Main frontend layout - metadata and HTML structure now handled by [locale]/layout.tsx
// This layout just passes children through since LocaleLayout handles the complete HTML structure
export default async function FrontendLayout({ children }: { children: React.ReactNode }) {
  return children;
}
