import "./globals.css";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "ДРІМБУД ПРОДЖЕКТ",
    description: "В разработке",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="uk">
            <body className={GeistSans.className}>
                {children}
            </body>
        </html>
    );
}
