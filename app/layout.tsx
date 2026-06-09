import type { Metadata } from "next";
import { Fredoka, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

// Display: Fredoka — a clean, geometric rounded display. Keeps the fizzy/bubbly
// personality the brand wants, but reads far more refined than a fat blobby
// face. Used big, for the wordmark and headlines.
const display = Fredoka({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

// Workhorse: Hanken Grotesk — a warm, modern grotesque. Clean and legible under
// the bubbly display without reading generic.
const body = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://imperialfizz.com"),
  title: {
    default: "Imperial Fizz — A Dallas Hospitality House",
    template: "%s · Imperial Fizz",
  },
  description:
    "Imperial Fizz is a Dallas hospitality group that builds restaurants backwards — find a great neighborhood, learn what it's missing, then build the place it deserves. Five concepts, one standard of hospitality.",
  openGraph: {
    title: "Imperial Fizz — A Dallas Hospitality House",
    description:
      "We build restaurants backwards: find the neighborhood first, then build the place it deserves. Five Dallas concepts, one standard.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
