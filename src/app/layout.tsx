import type { Metadata } from "next";
import type { ReactNode } from "react";

import "@fontsource-variable/heebo";
import "@/styles/globals.scss";

export const metadata: Metadata = {
  title: "פ.ע ניהול ואחזקות",
  description: "ניהול מבנים. בסטנדרט אחר.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
