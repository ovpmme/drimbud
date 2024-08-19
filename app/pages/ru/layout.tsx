import "@/app/globals.css";

import { GeistSans } from "geist/font/sans";

import { Analytics } from '@vercel/analytics/react';

import header from "./header.json"
import Header from "@/app/components/header";

import footer from "./footer.json"
import Footer from "@/app/components/footer";

import floating from "./floating.json"
import Floating from "@/app/components/floating";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru-UA">
            <body className={GeistSans.className}>
                <Header data={header} />
                {children}
                <Analytics />
                <Footer data={footer} />
                <Floating data={floating} />
            </body>
        </html>
    );
}