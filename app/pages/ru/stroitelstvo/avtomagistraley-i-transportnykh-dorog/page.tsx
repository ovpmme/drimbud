{/** Metadata */ }
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Строительство автомагистралей и транспортных дорог",
    description: "Качественное строительство автомагистралей и дорог для улучшения транспортной инфраструктуры.",
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
        title: "Строительство автомагистралей и транспортных дорог",
        description: "Качественное строительство автомагистралей и дорог для улучшения транспортной инфраструктуры.",
        url: "https://drimbud.com.ua/pages/ru/stroitelstvo/avtomagistraley-i-transportnykh-dorog",
        siteName: "ООО «ДРІМБУДПРОДЖЕКТ» — Мечтай. Проектируй. Строй.",
        images: [
            {
                url: "/opengraph/card.jpg",
                width: 640,
                height: 480,
            },
        ],
        locale: "ru-UA",
        type: "website",
    },
};

import data from "./data.json"

import Content from "@/app/components/content";

export default function AvtomagistraleyITransportnykhDorog() {
	return (
		<Content data={data}/>
	);
}