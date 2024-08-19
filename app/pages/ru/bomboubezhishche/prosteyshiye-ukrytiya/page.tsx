{/** Metadata */ }
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Проектирование и строительство простейших укрытий",
    description: "Разработка проектов простейших укрытий для защиты в чрезвычайных условиях.",
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
        title: "Проектирование и строительство простейших укрытий",
        description: "Разработка проектов простейших укрытий для защиты в чрезвычайных условиях.",
        url: "https://drimbud.com.ua/pages/ru/bomboubezhishche/prosteyshiye-ukrytiya",
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

export default function ProsteyshiyeUkrytiya() {
	return (
		<Content data={data}/>
	);
}