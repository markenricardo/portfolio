import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Marken Ricardo — Portfolio",
  description:
    "Computer Engineering graduate specializing in Big Data Analytics. Frontend development, data analytics, and software engineering.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans bg-paper text-ink`}>
        {children}
      </body>
    </html>
  );
}
