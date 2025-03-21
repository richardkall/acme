import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Acme",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
