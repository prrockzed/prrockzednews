"use client";

import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContextProvider } from "../../context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute/protectedRoute";
import { usePathname } from "next/navigation";

// export const metadata: Metadata = {
//   title: "prrockzed News",
//   description: "News app built with Next.js by prrockzed",
// };

const noAuthRequired = ["/", "/login", "/signup", "/about", "/contact"];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body>
        <AuthContextProvider>
          <Header />
          {noAuthRequired.includes(pathname) ? (
            <div className="max-w-7xl mx-auto">{children}</div>
          ) : (
            <ProtectedRoute>
              <div className="max-w-7xl mx-auto">{children}</div>
            </ProtectedRoute>
          )}
        </AuthContextProvider>
      </body>
    </html>
  );
}
