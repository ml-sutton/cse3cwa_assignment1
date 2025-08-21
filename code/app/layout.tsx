import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "../components/global/header/header";
import { Footer } from "../components/global/footer";
import { ThemeProvider } from "../utils/theme/context/themeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "La Tabs",
  description: "CSE3CWA Assignment 1 submission by Madison Lilith Sutton 21985164. Built with Next.JS, React.JS, Tailwind and Typescript on github",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Header />
          <div className="">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
