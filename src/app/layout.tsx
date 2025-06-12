import type React from "react";

// Since we have a `[locale]` layout that handles HTML structure,
// this layout just passes children through
export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return children;
}
