import { MantineProvider } from '@mantine/core';
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

// import { theme } from '@/theme';
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Strategi Optimalisasi Potensi Kelurahan/Desa di Jawa Tengah Sebagai Penumpu Pangan Nasional dengan Pemetaan Granular Penginderaan Jauh dan Model Kecerdasan Artifisial",
  description: "",
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
