import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; 
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Yoon Jae Chang - Software Developer Portfolio",
  description: "My portolio website to showcase my projects and experience.",
  icons: {  icon: '/favicon.svg', },
  keywords: ["software developer", "react", "nextjs", "typescript", "portfolio", "web development"],
  authors: [{ name: "Yoon Jae Chang" }],
  creator: "Yoon Jae Chang",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yoonjae-chang.dev",
    title: "Yoon Jae Chang - Software Developer Portfolio",
    description: "Software developer specializing in React, Next.js, and full-stack development. View my projects and experience.",
    siteName: "Yoon Jae Chang Portfolio",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
