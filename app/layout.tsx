import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AgenticForce Control",
  description: "AI content subscription control dashboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="mn">
      <body>{children}</body>
    </html>
  );
}
