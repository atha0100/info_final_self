import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Strata Management Dashboard",
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
        <div className="relative min-h-screen bg-gray-50">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
              alt="Modern building"
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
