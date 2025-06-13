"use client";

import React, { useEffect, useState } from "react";

export default function CustomLogo() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for dark theme preference
    const checkTheme = () => {
      const isDarkMode =
        document.documentElement.classList.contains("dark") ||
        document.documentElement.getAttribute("data-theme") === "dark" ||
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDark(isDarkMode);
    };

    // Initial check
    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    });

    // Listen for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", checkTheme);

    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener("change", checkTheme);
    };
  }, []);

  return (
    <img
      src={isDark ? "/logo-dark.svg" : "/logo.svg"}
      alt="CVZ Portugal"
      style={{
        height: "200px",
        width: "auto",
        maxWidth: "200px",
      }}
    />
  );
}
