import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import buildingImage from "../images/building.jpg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Palmview Estate Management Dashboard",
  description: "Your one-stop solution for property management",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative min-h-screen">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={buildingImage}
              alt="Building management"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
          
          {/* Content with background overlay */}
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
