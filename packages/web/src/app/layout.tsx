import { type Metadata } from "next";
import { Plus_Jakarta_Sans, Bebas_Neue } from "next/font/google";
// import { GeistMono } from "geist/font/mono";
// import localFont from "next/font/local";
import clsx from "clsx";
import Fathom from "@/components/fathom";
import "@/styles/tailwind.css";

const title = "Adam wuz here";
const description =
  "This is the personal site of a software developer named Adam. Get it? Adam dot dev??";
export const metadata: Metadata = {
  title: {
    template: "%s - adam.dev",
    default: title,
  },
  description,
  openGraph: {
    type: "website",
    url: "https://adam.dev",
    title,
    description,
    siteName: "adam.dev",
    images: [
      {
        url: "https://adam.dev/media/og-banner.png",
      },
    ],
  },
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

// const holbeard = localFont({
//   src: "../../public/fonts/holbeard-credit.woff2",
//   display: "swap",
//   variable: "--font-holbeard",
// });
//
// const dsDigital = localFont({
//   src: "../../public/fonts/DSDIGI.woff",
//   display: "swap",
//   variable: "--font-digital",
// });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(
        "h-full w-full overflow-y-hidden scroll-smooth bg-mauve-1 text-mauve-12 antialiased",
        bebas.variable,
        jakarta.variable,
        // holbeard.variable,
        // GeistMono.variable,
        // dsDigital.variable,
      )}
    >
      <Fathom />
      <body className="h-full w-full overflow-y-hidden">{children}</body>
    </html>
  );
}
