import type { Metadata } from "next";
import "./globals.css";
import Header from "./Header/Header";

export const metadata: Metadata = {
  title: "prrockzed News",
  description: "News app built with Next.js by prrockzed",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="max-w-7xl mx-auto">{children}</div>
      </body>
    </html>
  );
}
