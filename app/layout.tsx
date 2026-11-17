import "./globals.css";
import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { ThemeProvider } from "@/providers/themeProvider";
import NavBar from "./components/NavBar";
import { Toaster } from "@/components/ui/toaster";
import Footer from "./components/Footer";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
});
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Brandon Dykun",
  description:
    "Brandon Dykun, full-stack software engineer building web and mobile apps with React, React Native and Django REST Framework.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${plexSans.variable} ${plexMono.variable} font-sans min-h-screen flex flex-col bg-bg text-fg`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavBar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
