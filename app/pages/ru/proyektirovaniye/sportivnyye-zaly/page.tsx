{/** Metadata */ }
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Проектирование спортивных залов",
    description: "Проектируем современные спортивные залы для всех видов спорта.",
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
        title: "Проектирование спортивных залов",
        description: "Проектируем современные спортивные залы для всех видов спорта.",
        url: "https://drimbud.com.ua/pages/ru/proyektirovaniye/sportivnyye-zaly",
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

export default function SportivnyyeZaly() {
	return (
		<Content data={data}/>
	);
}