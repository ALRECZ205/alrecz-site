import type { Metadata } from "next";
import { Anton, JetBrains_Mono, Space_Mono, VT323 } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/shared/cursor/CustomCursor";
import CRTOverlay from "@/components/shared/CRTOverlay";
import Header from "@/components/shared/Header";
import { CartProvider } from "@/components/shop/CartContext";
import CartModal from "@/components/shop/CartModal";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

const vt323 = VT323({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-vt323",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ALRECZ | Artist • Designer • Creative Director",

  description:
    "The official site of 'ALRECZ' featuring digital art, murals, branding, exhibitions, and creative direction.",

  keywords: [
    "ALRECZ",
    "Pelatiah Williams",
    "digital artist",
    "graphic designer",
    "creative director",
    "mural artist",
    "branding",
    "illustration",
    "Birmingham artist"
  ],

  authors: [
    {
      name: "Pelatiah Williams",
    },
  ],

  creator: "ALRECZ",

  metadataBase: new URL("https://www.alrecz.com"),

  // ✅ Add this
  alternates: {
    canonical: "https://www.alrecz.com",
  },

  // ✅ Add this
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ✅ Add this
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
  title: "ALRECZ | Artist • Designer • Creative Director",
  description:
    "Explore the official portfolio of Pelatiah 'ALRECZ' Williams featuring digital art, murals, branding, exhibitions, and creative direction.",
  url: "https://www.alrecz.com",
  siteName: "ALRECZ",
  images: [
    {
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "ALRECZ Portfolio Preview",
    },
  ],
  locale: "en_US",
  type: "website",
},

  twitter: {
    card: "summary_large_image",
    title: "ALABAMA RECORDS",
    description: "Official Site",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${jetbrainsMono.variable} ${spaceMono.variable} ${vt323.variable}`}
    >
      <body>
        <CartProvider>
          <CRTOverlay />
          <CustomCursor />
          <Header />
          {children}
          <CartModal />
        </CartProvider>
      </body>
    </html>
  );
}
