import { MantineProvider } from '@mantine/core';
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

// import { theme } from '@/theme';
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Evaluasi Green Total Factor Productivity dan Keuangan Daerah: Pendekatan Big Data untuk Keberlanjutan Sektor Keuangan",
  description: "Pengembangan Sektor Keuangan Berwawasan Lingkungan, Sosial, dan Tata Kelola Berkelanjutan: Tinjauan Evaluasi Green Total Factor Productivity dan Keuangan Daerah Pendekatan Big Data",
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
