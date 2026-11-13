import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeScript from "@/components/ThemeScript";

const title = "Pedro Ferreira | Full Stack Developer";
const description =
  "Portfólio de Pedro Lucas Ferreira, Full Stack Developer com foco em engenharia de software, arquitetura de sistemas, backend (Java, Spring Boot, Node.js, Go), integrações e Cloud & DevOps.";

export const metadata: Metadata = {
  metadataBase: new URL("https://pedroferreira.vercel.app"),
  title,
  description,
  icons: { icon: "/img/logos/favicon.png" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Pedro Ferreira",
    title,
    description,
  },
  twitter: { card: "summary_large_image", title, description },
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
        <Footer />
      </body>
    </html>
  );
}
