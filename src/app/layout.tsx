import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Licensed brand faces, mirrored from the iOS app + roaster portal:
// Instrument Serif for display, Satoshi for body/UI.
const instrumentSerif = localFont({
  src: [
    { path: "../fonts/InstrumentSerif-Regular.ttf", weight: "400", style: "normal" },
    { path: "../fonts/InstrumentSerif-Italic.ttf", weight: "400", style: "italic" },
  ],
  variable: "--font-instrument-serif",
  display: "swap",
});

const satoshi = localFont({
  src: [
    { path: "../fonts/Satoshi-Regular.ttf", weight: "400", style: "normal" },
    { path: "../fonts/Satoshi-Medium.ttf", weight: "500", style: "normal" },
    { path: "../fonts/Satoshi-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Roastline — Ride the coffee line",
  description:
    "Order ahead from your favorite local roasters. Skip the line, pay from your wallet, and earn as you sip. The Roastline connects coffee lovers with independent coffee shops.",
  openGraph: {
    title: "The Roastline — Ride the coffee line",
    description:
      "Order ahead from your favorite local roasters. Skip the line, pay from your wallet, and earn as you sip.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${instrumentSerif.variable} ${satoshi.variable}`}>
        {children}
      </body>
    </html>
  );
}
