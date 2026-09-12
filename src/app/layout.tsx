import type { Metadata } from "next";
import { Inter, Inter_Tight, Geist_Mono } from "next/font/google";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { PersonJsonLd } from "@/components/ui/PersonJsonLd";
import { profile } from "@/data/profile";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const interTight = Inter_Tight({ variable: "--font-inter-tight", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s — ${profile.name}`,
  },
  description: profile.positioning,
  keywords: [
    "Yousef Nijim",
    "Software Engineer",
    "Full-Stack Developer",
    "Next.js",
    "NestJS",
    "React Native",
    "Istanbul",
  ],
  authors: [{ name: profile.name, url: profile.contact.github }],
  creator: profile.name,
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.positioning,
    url: siteUrl,
    siteName: profile.name,
    locale: "en_US",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${interTight.variable} ${geistMono.variable} h-full`}
    >
      <head>
        {/* Applies the stored theme before paint so the page never flashes the wrong one. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("theme");if(t)document.documentElement.dataset.theme=t}catch(e){}`,
          }}
        />
      </head>
      <body id="top" className="min-h-full flex flex-col">
        <PersonJsonLd />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
