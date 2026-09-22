import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Opnamora", template: "%s | Opnamora" },
  description: "Kelola operasional usaha dengan Opnamora.",
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body>
        <a href="#main" className="sr-only focus:not-sr-only">
          Lewati navigasi
        </a>
        {children}
      </body>
    </html>
  );
}
