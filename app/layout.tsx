import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bun + Next.js Starter",
  description: "Powered by Bun",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="/favicon.ico" rel="icon" />
      </head>
      <body>{children}</body>
    </html>
  );
}
