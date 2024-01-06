import "./globals.css";
import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";

const poppins = Poppins({
  weight: ["500", "600", "700"],
  subsets: ["latin-ext"],
  variable: "--font-poppins",
});
const inter = Inter({
  weight: ["400", "500", "600"],
  subsets: ["latin-ext"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Steerer",
  description: "Steerer official website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} font-sans bg-white`}
    >
      <body>{children}</body>
    </html>
  );
}
