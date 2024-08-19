{/** Metadata */ }
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Проєктування гідроспоруд",
    description: "Розробка надійних проєктів гідроспоруд для ефективного управління водними ресурсами.",
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
        title: "Проєктування гідроспоруд",
        description: "Розробка надійних проєктів гідроспоруд для ефективного управління водними ресурсами.",
        url: "https://drimbud.com.ua/pages/ua/proektuvannya/hidrosporudy",
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

export default function Hidrosporudy() {
	return (
		<Content data={data}/>
	);
}