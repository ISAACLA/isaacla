import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex",
});

export const metadata: Metadata = {
  title: "Isaac La — Senior Software Engineer",
  description:
    "Isaac La is a senior software engineer in Irvine, California. Currently at Yahoo. Experience from 2017 to now.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${mono.variable} scroll-smooth motion-reduce:scroll-auto`}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen bg-bg font-mono text-ink selection:bg-phosphor selection:text-[#041208] [background-image:radial-gradient(900px_420px_at_50%_-10%,rgb(61_255_122/0.08),transparent_60%)]"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
