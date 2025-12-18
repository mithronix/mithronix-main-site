import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using Inter as a premium system font equivalent
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Mithronix | Luxury Design Automation",
    description: "Professional tools for screen printing, separation, and garment ERP.",
};

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
