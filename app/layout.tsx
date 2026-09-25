import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LJG Financial | Premium Finance Access Point",
  description: "LaTrina Gerstberger — a dedicated point of access to Premium Finance strategies, in partnership with a specialized producer network.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-noise">{children}</body>
    </html>
  );
}
