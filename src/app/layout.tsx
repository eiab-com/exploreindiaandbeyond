import type { Metadata } from "next";
import { Instrument_Sans, Oswald } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import GridContainer from "@/components/ui/grid-container";
import Navbar from "@/components/ui/navbar/navbar";
import Footer from "@/components/ui/footer/footer";
import { seo } from "@/data/seo";

const oswald = Oswald({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
});

const instrument_sans = Instrument_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = seo;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${oswald.variable} ${instrument_sans.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <GridContainer className=" justify-center items-start place-content-start gap-y-2">
            <Navbar />
            {children}
            <Footer />
          </GridContainer>
        </ThemeProvider>
      </body>
    </html>
  );
}
