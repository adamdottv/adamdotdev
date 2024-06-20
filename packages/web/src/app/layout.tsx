import { type Metadata } from "next";
import { Plus_Jakarta_Sans, Bebas_Neue } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import localFont from "next/font/local";
import clsx from "clsx";

import "@/styles/tailwind.css";

export const metadata: Metadata = {
  title: {
    template: "%s - adam.dev",
    default: "adam.dev",
  },
  description: "Adam wuz here.",
};

const bebas = Bebas_Neue({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bebas",
  weight: "400",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
});

const holbeard = localFont({
  src: "../../public/fonts/holbeard-credit.woff2",
  display: "swap",
  variable: "--font-holbeard",
});

const dsDigital = localFont({
  src: "../../public/fonts/DSDIGI.woff",
  display: "swap",
  variable: "--font-digital",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(
        "h-full w-full scroll-smooth bg-mauve-1 antialiased",
        bebas.variable,
        jakarta.variable,
        holbeard.variable,
        GeistMono.variable,
        dsDigital.variable,
      )}
    >
      <body>{children}</body>
    </html>
  );
}
