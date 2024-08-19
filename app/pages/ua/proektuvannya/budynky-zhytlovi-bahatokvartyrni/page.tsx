{/** Metadata */ }
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Проєктування житлових багатоквартирних будинків",
    description: "Якісне проєктування багатоквартирних житлових будинків для зручного та сучасного проживання.",
    metadataBase: new URL("https://drimbud.com.ua/"),
    icons: {
        icon: [
            {
                type: "image/svg+xml",
                url: "/brand/favicon.svg"
            }
        ]
    },
    openGraph: {
        title: "Проєктування житлових багатоквартирних будинків",
        description: "Якісне проєктування багатоквартирних житлових будинків для зручного та сучасного проживання.",
        url: "https://drimbud.com.ua/pages/ua/proektuvannya/budynky-zhytlovi-bahatokvartyrni",
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

import data from "./data.json"

import Content from "@/app/components/content";

export default function BudynkyZhytloviBahatokvartyrni() {
	return (
		<Content data={data}/>
	);
}