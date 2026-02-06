import type { Metadata } from "next";
import { Inter, Inconsolata } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { FontSizeProvider } from "@/context/FontSizeContext";
import { HighContrastProvider } from "@/context/HighContrastContext";
import { SimplifiedModeProvider } from "@/context/SimplifiedModeContext";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const inconsolata = Inconsolata({
  variable: "--font-incon",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nagrik",
  description: "Bridging the digital divide for millions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${inconsolata.variable} antialiased`}
        suppressHydrationWarning
      >
        <LanguageProvider>
          <FontSizeProvider>
            <HighContrastProvider>
              <SimplifiedModeProvider>
                <ThemeProvider
                  attribute="class"
                  defaultTheme="light"
                  enableSystem
                  disableTransitionOnChange
                >
                  {children}
                </ThemeProvider>
              </SimplifiedModeProvider>
            </HighContrastProvider>
          </FontSizeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
