import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "ACM Student Chapter | Jadavpur University",
  description:
    "The official website of Jadavpr University ACM student chapter.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta
        name="google-site-verification"
        content="ruu0g1aJe_zRktA3zVHE-wpYlVDuFgTomhn59RfUXcM"
      />
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
        <Script
          src="https://umami34.vercel.app/script.js"
          data-website-id="d26148bf-1f50-4bb7-b5c1-c1b8e8cbb433"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
