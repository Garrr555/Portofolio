"use client"; // Menandakan bahwa ini adalah komponen klien

import { useEffect } from "react";

export default function ThemeSwitcher() {
  useEffect(() => {
    const theme = localStorage.getItem("theme") || "dark";
    document.documentElement.classList.add(theme);
  }, []);

  return null; // Tidak perlu UI untuk komponen ini
}
