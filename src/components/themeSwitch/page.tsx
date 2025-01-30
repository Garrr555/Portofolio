// components/ThemeWrapper.tsx
"use client";

import { useEffect, useState } from "react";
import { ThemeProvider } from "../../app/provider"; // Sesuaikan path jika diperlukan

export function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false);

  // Menandakan bahwa aplikasi telah dimuat di sisi klien
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Render null selama SSR

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
