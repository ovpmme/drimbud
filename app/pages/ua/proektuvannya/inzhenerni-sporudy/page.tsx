{/** Metadata */ }
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Проєктування інженерних споруд",
    description: "Створення інноваційних проєктів інженерних споруд для вирішення найскладніших технічних задач.",
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
        title: "Проєктування інженерних споруд",
        description: "Створення інноваційних проєктів інженерних споруд для вирішення найскладніших технічних задач.",
        url: "https://drimbud.com.ua/pages/ua/proektuvannya/inzhenerni-sporudy",
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

export default function InzhenerniSporudy() {
	return (
		<Content data={data}/>
	);
}