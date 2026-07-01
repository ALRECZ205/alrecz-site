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
  title: "ALRECZ — Archive",
  description:
    "ALRECZ: living digital archive of art, music, and creative work out of Birmingham, Alabama.",
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
