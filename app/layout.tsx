import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Wallet from './(providers)/wallet'; // Importe o provider que criámos
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MnToken",
  description: "The future of Manganese",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Wallet> {/* Envolva o children com o Wallet provider */}
          {children}
          <Analytics />
        </Wallet>
      </body>
    </html>
  );
}
