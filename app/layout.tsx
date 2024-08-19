import "@/app/globals.css";

import { GeistSans } from "geist/font/sans";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="uk-UA">
            <body className={GeistSans.className}>
                {children}
            </body>
        </html>
    );
}