{/** Metadata */ }
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Проєктування сільськогосподарських споруд",
    description: "Професійне проєктування сільськогосподарських споруд для оптимізації аграрного виробництва.",
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
        title: "Проєктування сільськогосподарських споруд",
        description: "Професійне проєктування сільськогосподарських споруд для оптимізації аграрного виробництва.",
        url: "https://drimbud.com.ua/pages/ua/proektuvannya/silskohospodarski-sporudy",
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

export default function SilskohospodarskiSporudy() {
	return (
		<Content data={data}/>
	);
}