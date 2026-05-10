import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";

import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "3D Tour",
  description: "360° apartment tour",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body className="bg-neutral-950 text-neutral-100">
        <TRPCReactProvider>
          <header className="flex items-center justify-between border-b border-neutral-800 px-4 py-3">
            <Link href="/" className="text-lg font-semibold">
              3D Tour
            </Link>
            <nav className="flex gap-4 text-sm">
              <Link href="/" className="hover:underline">View</Link>
              <Link href="/admin" className="hover:underline">Admin</Link>
            </nav>
          </header>
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
