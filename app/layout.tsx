import { MantineProvider } from '@mantine/core';
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

// import { theme } from '@/theme';
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sumateranomics Aselole Jos",
  description: "Sumateranomics Aselole Jos",
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
