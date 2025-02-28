'use client';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/themeProvider";
import { ReactNode } from "react";
import Navbar from "@/components/navBar";
import { ModeToggle } from "@/components/modeToggle";
import { LanguageProvider } from "./context/LanguajeContext";
import LanguageToggleButton from "@/components/LanguageToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

interface RootLayoutProps {
  children: ReactNode;
}


export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <LanguageProvider>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={`${geistSans.variable} ${geistMono.variable} font-sans flex flex-col min-h-screen`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <div className="flex flex-col flex-grow mx-4 sm:mx-8">
              {children}
            </div>
            <div className="fixed bottom-4 right-4 flex flex-col gap-2">
              <ModeToggle />
              <LanguageToggleButton />
            </div>
          </ThemeProvider>
        </body>
      </html>
    </LanguageProvider>
  )
}
