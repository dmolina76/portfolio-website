import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.diegomolinaa.com"),
  title: {
    default: "Diego Molina Salinas | Software Engineer",
    template: "%s | Diego Molina Salinas",
  },
  description:
    "Software Engineer focused on Android app development, backend systems, and machine learning.",
  openGraph: {
    title: "Diego Molina Salinas | Software Engineer",
    description:
      "Software Engineer focused on Android app development, backend systems, and machine learning.",
    url: "https://www.diegomolinaa.com",
    siteName: "Diego Molina Salinas",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Diego Molina Salinas Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diego Molina Salinas | Software Engineer",
    description:
      "Software Engineer focused on Android app development, backend systems, and machine learning.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
