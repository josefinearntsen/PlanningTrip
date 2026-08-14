import type { Metadata } from "next";
import { Fraunces, Inter, Caveat } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aarhus 2026 · Girls Trip",
  description:
    "Vi kommer til Maia! Følg med på countdown, fly, boplass-avstemning og kart for venninneturen til Aarhus 24.–27. september 2026.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no">
      <body
        className={`${fraunces.variable} ${inter.variable} ${caveat.variable} bg-cream font-body text-ink antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
