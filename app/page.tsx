import { redirect } from "next/navigation"

{/** Metadata */ }
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "ТОВ «ДРІМБУДПРОДЖЕКТ» — Мрій. Проектуй. Будуй.",
    description: "Замовляй проектування та будівництво. Телефонуй за номером: +38 (067) 262-3778.",
    metadataBase: new URL("https://drimbud.com.ua"),
    icons: {
        icon: [
            {
                type: "image/svg+xml",
                url: "/brand/favicon.svg"
            }
        ]
    },
    openGraph: {
        title: "ТОВ «ДРІМБУДПРОДЖЕКТ» — Мрій. Проектуй. Будуй.",
        description: "Замовляй проектування та будівництво. Телефонуй за номером: +38 (067) 262-3778.",
        url: "https://drimbud.com.ua",
        siteName: "ТОВ «ДРІМБУДПРОДЖЕКТ» — Мрій. Проектуй. Будуй.",
        images: [
            {
                url: "/opengraph/card.jpg",
                width: 640,
                height: 480,
            },
        ],
        locale: "uk-UA",
        type: "website",
    },
};

export default function App() {
	redirect(
		"/pages/ua"
	);
}