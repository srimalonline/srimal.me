import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/nav";
import Footer from "@/components/footer";
import BackgroundEffects from "@/components/background-effects";
import { FloatingActionButton } from "@/components/interactive-elements";
import { metaData } from "@/lib/config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(metaData.baseUrl),
  title: {
    default: metaData.title,
    template: `%s | ${metaData.title}`,
  },
  description: metaData.description,
  openGraph: {
    images: metaData.ogImage,
    title: metaData.title,
    description: metaData.description,
    url: metaData.baseUrl,
    siteName: metaData.name,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: metaData.name,
    card: "summary_large_image",
  },
  icons: {
    icon: "/srimal-fernando.png",
    shortcut: "/srimal-fernando.png",
    apple: "/srimal-fernando.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <head>
        <link
          rel="alternate"
          type="application/rss+xml"
          href="/rss.xml"
          title="RSS Feed"
        />
        <link
          rel="alternate"
          type="application/atom+xml"
          href="/atom.xml"
          title="Atom Feed"
        />
        <link
          rel="alternate"
          type="application/feed+json"
          href="/feed.json"
          title="JSON Feed"
        />
      </head>
      <body className="antialiased dark">
        <BackgroundEffects />
        <div className="relative z-10 min-h-screen">
          <Navbar />
          <main className="flex-auto min-w-0 pt-24 pb-12 flex flex-col px-6 sm:px-4 md:px-8 max-w-7xl mx-auto w-full">
            {children}
          </main>
          <Footer />
        </div>
        <FloatingActionButton />
      </body>
    </html>
  );
}