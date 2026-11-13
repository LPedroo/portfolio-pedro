import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ThemeScript from "@/components/ThemeScript";

export const metadata: Metadata = {
  title: "Pedro Ferreira | Full Stack Developer",
  description:
    "Portfólio de Pedro Lucas Ferreira, Full Stack Developer com foco em engenharia de software, arquitetura de sistemas, backend (Java, Spring Boot, Node.js, Go), integrações e Cloud & DevOps.",
  icons: { icon: "/img/logos/favicon.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <head>
        <ThemeScript />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <Navbar />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
