import type { Metadata } from "next";
import { Inter, Bodoni_Moda } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-geist-sans" 
});

const bodoni = Bodoni_Moda({ 
  subsets: ["latin"], 
  variable: "--font-bodoni",
  display: 'swap'
});

export const metadata: Metadata = {
  title: "Silvia Cusati | Professional Makeup Artist & Beauty Influencer",
  description: "Editorial beauty, high-impact content, and luxury artistry. Capturing the essence of glow in every stroke.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${bodoni.variable} font-sans tracking-tightest`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
