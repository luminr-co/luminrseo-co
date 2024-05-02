import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainTemplate from "@/core/presentation/components/MainTemplate/MainTemplate";
import { Montserrat, Kanit } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mons" });
const kanit = Kanit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-kanit",
});

export const metadata = {
  metadataBase: "https://luminr.co",
  title: {
    template: "%s | Luminr.co",
    default: "Luminr.co",
  },
  description:
    "Your trusted partner for all things digital. Build Your Dynamic Web and Mobile Applications and Enhance Online Visibility with SEO.",
  keywords: [
    "luminr",
    "nepal",
    "mobile development",
    "web development",
    "seo",
    "branding",
    "business intelligence",
  ],
  openGraph: {
    title: "Luminr.co",
    description:
      "Your trusted partner for all things digital. Build Your Dynamic Web and Mobile Applications and Enhance Online Visibility with SEO.",
    url: "https://luminr.co",
    siteName: "Luminr.co",
    images: [
      {
        url: "https://luminr.co/banner.webp",
        width: 400,
        height: 250,
        alt: "Luminr Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luminr.co",
    description:
      "Your trusted partner for all things digital. Build Your Dynamic Web and Mobile Applications and Enhance Online Visibility with SEO.",
    images: ["https://luminr.co/banner.webp"],
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${montserrat.variable} ${kanit.variable}`}
    >
      <body>
        <MainTemplate>{children}</MainTemplate>
      </body>
    </html>
  );
}
