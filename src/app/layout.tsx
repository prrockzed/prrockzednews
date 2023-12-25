import type { Metadata } from "next";
import "./globals.css";
import Header from "./header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContextProvider } from "../../context/AuthContext";

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
        <AuthContextProvider>
          <div className="max-w-7xl mx-auto">{children}</div>
        </AuthContextProvider>
      </body>
    </html>
  );
}
