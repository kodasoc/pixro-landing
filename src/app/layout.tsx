import type { Metadata } from "next";
import { Geist, Geist_Mono, Urbanist } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pixro App",
  description: "One Image, Infinite ads, instantly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main className="pt-16 min-h-screen" style={{ backgroundColor: "var(--bg-main)" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
