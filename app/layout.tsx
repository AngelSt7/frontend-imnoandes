import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import "./colors.css"
import { Providers } from "@/src/providers";
import { buildRootMetadata } from "@/src/config/metadata/metadata";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"], 
  variable: "--font-poppins" 
});

export const metadata: Metadata = buildRootMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${poppins.variable} font-inter`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}