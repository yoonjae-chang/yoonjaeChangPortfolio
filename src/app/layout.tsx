import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Lato, Montserrat } from "next/font/google";
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

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const lato = Lato({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-lato' });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['500'], variable: '--font-montserrat' });


export const metadata: Metadata = {
  title: "Yoon Jae Chang",
  description: "My portfolio website to showcase my projects and experience.",
  icons: {  icon: '/favicon.svg', },
  keywords: ["software developer", "react", "nextjs", "startup", "portfolio", "web development", "Yoon Jae Chang", "Columbia University", "AI", "ML", "Machine Learning"],
  authors: [{ name: "Yoon Jae Chang" }],
  creator: "Yoon Jae Chang",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yoonjae-chang.dev",
    title: "Yoon Jae Chang",
    description: "My portfolio website to showcase my projects and experience.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${inter.variable} ${lato.variable} ${montserrat.variable}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
