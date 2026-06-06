import "./globals.css";
import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import ZohoWidget from "../components/ZohoWidget";

const poppins = Poppins({
  weight: ["500", "600", "700"],
  subsets: ["latin-ext"],
  variable: "--font-poppins",
});
const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin-ext"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Steerer — Run your team. Score the match. Live.",
  description:
    "Steerer is the app that runs your team — roster, real-time match scoring and team chat for grassroots, amateur and semi-pro clubs.",
  keywords: [
    "sports team management",
    "live match scoring",
    "soccer",
    "football",
    "basketball",
    "tennis",
    "padel",
    "team app",
  ],
  robots: "index,follow",
  openGraph: {
    title: "Steerer — Run your team. Score the match. Live.",
    description:
      "Roster, real-time match scoring and team chat in one app — for grassroots, amateur and semi-pro clubs. Download Steerer for iOS and Android.",
  },
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
      <body>
        {children}
        <ZohoWidget />
      </body>
      <GoogleAnalytics gaId="G-4LCYZZKMTH" />
    </html>
  );
}
