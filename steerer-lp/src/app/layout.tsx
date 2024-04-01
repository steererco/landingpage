import "./globals.css";
import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import Head from "next/head";

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
  openGraph: {
    title:
      "Download Steerer app for soccer team management, precise game analysis and sponsorships",
    description:
      "Unlock your utmost potential in soccer with our professional football management app. Join a community of like-minded football enthusiasts and become a part of the sports revolution.",
  },
  title: "Steerer — soccer team management, analysis and sponsorships app  ",
  description:
    "Аdvance your skills and knowledge and manage your football team or league. Join our community through the Steerer football management app for Android and iOS now!",
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
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          name="keywords"
          content="soccer, app, management, analysis, sponsorships"
        />
        <meta name="robots" content="index,follow" />
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-4LCYZZKMTH"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-4LCYZZKMTH');
      `,
          }}
        />
      </Head>
      <body>{children}</body>
    </html>
  );
}
