import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

import { MantineProvider } from '@mantine/core';

// import { theme } from '@/theme';
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aksesibilitas dan Konektivitas Smelter Nikel",
  description: "Aksesibilitas dan Konektivitas Smelter Nikel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
      <MantineProvider>
            {children}
        </MantineProvider>
      </body>
    </html>
  );
}
