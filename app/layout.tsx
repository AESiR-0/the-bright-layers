import type { Metadata } from "next";
import { Poppins, Outfit, Inter } from 'next/font/google';
import "./globals.css";
import Navbar from "@/components/sections/Navbar";
import Banner from "@/components/sections/Banner";
import Footer from "@/components/sections/Footer";

// Display and heading font
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-poppins',
});

// Secondary heading font
const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

// Body text font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "The Bright Layers - Digital Marketing Agency",
  description: "Transform your brand's digital presence with The Bright Layers. Expert social media management, content creation, and digital marketing services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${outfit.variable} ${inter.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <Banner />
        <Navbar />
        <div className="overflow-x-hidden">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}